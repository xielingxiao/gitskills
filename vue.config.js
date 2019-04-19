module.exports = {
  // 部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production' ? '/my-app' : '/',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'cashier',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径
  indexPath: 'index.html',
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  filenameHashing: true,
  /*
    在 multi-page 模式下构建应用。每个“page”应该有一个对应的 JavaScript 入口文件
    一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)
    或一个指定其 entry 的字符串
  */
  // pages: {
  //   // index: {
  //   //   // page 的入口
  //   //   entry: 'src/views/index/index.js',
  //   //   // 模板来源
  //   //   template: 'public/index.html',
  //   //   // 在 dist/index.html 的输出
  //   //   filename: 'index.html',
  //   //   // 当使用 title 选项时，
  //   //   // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //   //   title: 'Index Page',
  //   //   // 在这个页面中包含的块，默认情况下会包含
  //   //   // 提取出来的通用 chunk 和 vendor chunk。
  //   //   chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   // }
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   // subpage: 'src/subpage/main.js'
  // },
  // 在生产构建时禁用 eslint-loader
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 是否使用包含运行时编译器的Vue核心的构建 设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: true,
  /*
    设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
    需要注意的是该选项仅影响由 html-webpack-plugin 在构建时注入的标签 - 直接写在模版 (public/index.html) 中的标签不受影响
  */
  // crossorigin: '',
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
  integrity: false,
  /*
    如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
    如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    在这里引入自定义 简单/基础配置，比如引入一个新插件
  */
  configureWebpack: {
  },
  /*
    是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。
    允许对内部的 webpack 配置进行更细粒度的修改
    链式配置
  */
  chainWebpack: () => {
    // 因为是多页面，所以取消 chunks，每个页面只对应一个单独的 JS / CSS
    // config.optimization
    //   .splitChunks({
    //     cacheGroups: {}
    //   })
    // 'src/lib' 目录下为外部库文件，不参与 eslint 检测
  },
  /*
    配置高于chainWebpack中关于 css loader 的配置
    css.modules
    默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
    设置为 true 后你就可以去掉文件名中的 .module
    并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。

    css.extract
    是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
    同样当构建 Web Components 组件时它总是会被禁用 (样式是 inline 的并注入到了 shadowRoot 中)。
    当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS。
    提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容。然而，你仍然可以将这个值显性地设置为 true 在所有情况下都强制提取

    css.sourceMap
    是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能

    css.loaderOptions
    向 CSS 相关的 loader 传递选项
    支持的 loader 有：
    css-loader
    postcss-loader
    sass-loader
    less-loader
    stylus-loader
  */
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,
    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: process.env.NODE_ENV === 'production',
    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    }
  },
  /*
    devServer Object
    所有 webpack-dev-server 的选项都支持。注意：
    有些值像 host、port 和 https 可能会被命令行参数覆写。
    有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 publicPath 同步以保障正常的工作。

    devServer.proxy
    如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。
    这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
    devServer.proxy 可以是一个指向开发环境 API 服务器的字符串

  */
  devServer: {
    // 这会告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000。
    // proxy: 'http://localhost:4000',
    open: true,
    host: 'localhost',
    port: '8081',
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://t.xls.kuaidiantong.cn',
        ws: false, // 是否开启websockets
        changeOrigin: true, // 本地虚拟一个服务器接受请求并代发请求 解决跨域
        pathRewrite: { '^/api': '' } // 重写路径 不想始终传递api
      }
    },
    before: () => {

    }
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
  parallel: require('os').cpus().length > 1,
  // 向 PWA 插件传递选项。
  pwa: {

  },
  // 这是一个不进行任何 schema 验证的对象，因此它可以用来传递任何第三方插件选项。例如 第三方插件配置
  pluginOptions: {
    foo: {
      // 插件可以作为 `options.pluginOptions.foo` 访问这些选项
    }
  }

}
