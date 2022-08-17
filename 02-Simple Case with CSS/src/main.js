// 1. npm install jquery
// 2. create public/index.html - 10 li tags
// 3. main.js
import $ from 'jquery'
// 4. using jquery change css
$('#myUL>li:odd').css('color', 'red')
$('myUL>li:even').css('color', 'green')

// 5. import css
import './css/index.css'
