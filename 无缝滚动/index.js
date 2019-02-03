var left = document.querySelector('#btnLeft')
var right = document.querySelector('#btnRight')
var ul = document.querySelector('ul')
var control = document.querySelector('.control')
var links = control.children
var banner = document.querySelector('#banner')
var index = 0
// 点击右侧
right.onclick = function () {
    if (index === 0) {
        ul.style.left = '0px'
    }
    links[index].className = ''
    index++;
    var v = index * -790
    move(ul, v, 60)
    if (index > 6) {
        index = 0
    }
    links[index].className = 'active'
}
// 点击左侧
left.onclick = function () {
    links[index].className = ''
    index--
    if (index < 0) {
        index = 6
        ul.style.left = '-5530px'
    }
    var v = index * -790
    move(ul, v, 60)
    links[index].className = 'active'
}
// 点击小圆点
for(var i = 0;i<links.length;i++){
    links[i].setAttribute('num',i)
}
control.onclick = function(e){
    var t = e.target
    if(t.nodeName == 'A'){
        links[index].className = ''
        index = t.getAttribute('num')
        var v = index * -790
        move(ul,v,60)
        links[index].className = 'active'
    }
}

// 自动轮播
var flag2 = setInterval(function(){
    right.onclick()
},3000)

// 停止轮播
banner.onmouseenter = function(){
    clearInterval(flag2)
}

// 启动轮播
banner.onmouseleave = function(){
    flag2 = setInterval(function(){
        right.onclick()
    },3000)
}