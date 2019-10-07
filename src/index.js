// import { defalutOption, filterUrl } from './config/index.js'
import { on } from './utils/tools.js'
import { handleErr } from './handlers.js'

class API {
  constructor(option) {
    this.init(option)
  }

  init() {
    this.addListenJs()
    console.log(456)
  }

  addListenJs() {
    // js错误或静态资源加载错误
    on('error', handleErr)
    // promise错误
    on('unhandledrejection', handleErr)
    // window.addEventListener('rejectionhandled', rejectionhandled, true);
  }
}

export default API
