const webpack = require('webpack');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 默认为 "/", "./" 所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径【排除多页应用、router history模式】
  publicPath: process.env.NODE_ENV === 'production' ? '//s.thsi.cn/cd/kaihu-moni-project-container/mncg_school/' : './',
  outputDir: 'mncg_school', // 打包的时候生成的一个文件名
  productionSourceMap: false, // 加速生产环境构建，减小打包后包体积(能减小三分之二)
  configureWebpack: () => {
    if (process.env.NODE_ENV === 'production') {
      const mergeObj = {
        devServer: {
          disableHostCheck: true
        },
        output: {
          filename: 'js/[name].min.[contenthash:8].js',
          chunkFilename: 'js/[name].min.[contenthash:8].js'
        }
      };
      return mergeObj;
    }
  },
  /*webpack 更细粒度的配置*/
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "vue进阶";
      return args;
    });
    // 解决 Moment 多国语,可以减小30kb左右的打包体积
    config.plugin('ContextReplacementPlugin').use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/]);
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('login', resolve('src/views/login'))
      .set('home', resolve('src/views/home'));
    if (process.env.NODE_ENV === 'production') {
      config.plugin('extract-css').tap(() => [
        {
          filename: 'css/[name].min.[contenthash:8].css',
          chunkFilename: 'css/[name].min.[contenthash:8].css',
          test: /\.(js|css|less)$/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          minRatio: 0.8,
          deleteOriginalAssets: true // 删除源文件
        }
      ]);
    }
  },
  /* Ant Design 定制主题 */
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#2f8cfc', // 全局主色
            'link-color': '#2f8cfc', // 链接色
            'border-radius-base': '2px' // 组件、浮层圆角
          },
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    open: true, // 启动项目后自动开启浏览器
    host: 'localhost', // 对应的主机名,默认localhost
    port: 8080, // 端口号
    proxy: {
      '/api': {
        // api 自定义标识,用来识别带api的请求
        target: 'http://khtest.10jqka.com.cn', // 实际需要访问的接口域名
        // secure: false,            // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': '' // api 用来替换 target
        }
      }
    }
  }
};
