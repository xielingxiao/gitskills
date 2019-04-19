/**
 * api接口的统一出口
 */
// 文章模块接口
import article from './article'
// 其他模块的接口……
import home from './home'
import login from './login'

// 导出接口
export default {
  article,
  home,
  login
  // ……
}
