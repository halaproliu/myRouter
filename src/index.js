class Router {
  constructor() {
    this.routes = {}
    this.currentUrl = ''
    this.history = []
    this.currentIndex = 0
    this.isBack = false
    this.back = this.back.bind(this)
    this.refresh = this.refresh.bind(this)
    window.addEventListener('load', this.refresh, false)
    window.addEventListener('hashchange', this.refresh, false)
  }

  route(path, callback) {
    this.routes[path] = callback || function() {}
  }

  refresh() {
    if (this.isBack) {
      // 回退时
      this.currentUrl = this.history[this.currentIndex] // 获取当前的path（通过历史记录）
      this.history.pop() // 移除历史记录
    } else {
      // 跳转时
      this.currentIndex++
      this.currentUrl = location.hash.slice(1) || '/' // 获取当前的path（通过url上的hash值）
      this.history.push(this.currentUrl) // 新增历史记录
    }
    this.route(this.currentUrl)() // 执行对应方法
    this.isBack = false // 重置回退状态
  }

  back() {
    this.isBack = true // 置标志位为true，表明是回退
    this.currentIndex-- // 回退历史位置
    this.currentIndex =
      this.currentIndex < 0 ? (this.currentIndex = 0) : this.currentIndex // 获取回退后的历史位置
    this.currentUrl = this.history[this.currentIndex] // 获取回退后的url
    location.hash = `#${this.currentUrl}` // 修改url的hash值
    this.routes[this.currentUrl]() // 执行url对应的函数进行页面初始化操作
  }
}

export default Router
