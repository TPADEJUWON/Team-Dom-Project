//collapse the sidebar
const hambugger = document.querySelector('.hamburger')
const left_bar = document.querySelector('.left')
const main_page = document.querySelector('.main-bar')
const text = document.querySelector('.text')
const text2 = document.querySelector('.text2')
const text3 = document.querySelector('.text3')
const foot = document.querySelector('.foot')
const icon = document.querySelector('.icons')
const ico = document.querySelector('.ford')


//collapse the sidebar
hambugger.onclick = () =>{
    left_bar.classList.toggle('collapse')
    main_page.classList.toggle('collapse-main')
    text.classList.toggle('paranone')
    text2.classList.toggle('paranone')
    text3.classList.toggle('paranone')
    foot.classList.toggle('paranone')
    icon.classList.toggle('ico')
    ico.classList.toggle('ico')

}