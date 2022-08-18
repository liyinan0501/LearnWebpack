// 1. npm install jquery
// 2. create public/index.html - 10 li tags
// 3. main.js
import $ from 'jquery'
// 4. using jquery change css
$('#myUL>li:odd').css('color', 'red')
$('myUL>li:even').css('color', 'green')

// 5. import css
import './css/index.css'

// 6. import less
import './less/index.less'

// 7. import an image
import imgObj from './assets/1.gif'
let theImg = document.createElement('img')
theImg.src = imgObj
document.body.appendChild(theImg)

// 8. import css of icon
import './assets/fonts/iconfont.css'
let theI = document.createElement('i')
theI.className = 'iconfont icon-qq'
document.body.appendChild(theI)
