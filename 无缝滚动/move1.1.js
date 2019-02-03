// 定义一个变量，表示定时器标识
var flag;
/*
  功能：动画
  参数：
    element  要运动的元素
    targetValue 目标值   数字
    speed 速度    数字
*/
function move(element, targetValue, speed) {
  // 先清除旧的定时器
  clearInterval(flag);
  // 产生一个定时器
  flag = setInterval(function () {
    // 获取box的原有的left值
    var v = element.offsetLeft;
    // 判断是否到达目标
    if (v == targetValue) {
      // 清除定时器，保证下一次不会执行
      clearInterval(flag);
      // 结束函数本次执行
      return;
    }
    // 目标值-原有值的绝对值，是否小于速度。 说明是最后一步，并且要越界。
    if (Math.abs(targetValue - v) < speed) {
      element.style.left = targetValue + 'px';
    } else {
      // 判断运动方向
      if (targetValue > v) {
        element.style.left = v + speed + 'px';
      } else {
        element.style.left = v - speed + 'px';
      }
    }


  }, 10);
}