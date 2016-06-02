/*
* getWindowScrollTop 获取页面垂直滚动距离
*/
export function getWindowScrollTop() {
  // older versions of Internet Explorer (< 9) do not support
  let supportPageOffset = window.pageXOffset !== undefined;
  // document.body.scrollTop vs document.documentElement.scrollTop
  // https://miketaylr.com/posts/2014/11/document-body-scrolltop.html
  return supportPageOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode ||document.body).scrollTop;
};

/*
* animation 动画函数
* @param {element} 添加动画的元素
* @param {String} 样式属性，如 height
* @param {String} 单位
* @param {Number} 起始值
* @param {Number} 结束值
* @param {Number} 动画时长
*/
export function animation(elem, style, unit, from, to, time) {
  if (!elem) return;
  if (!Date.now) {
    Date.now = function() {
      reuturn new Date().getTime();
    }
  }
  const start = Date.now();
  const timer = setInterval(() => {
    const step = Math.min(1, (Date.now() - start) / time);
    elem.style[style] = (from + step * (to - from)) + unit;
    if (step == 1) clearInterval(timer);
  }, 25);
  elem.style[style] = from + unit;
}
