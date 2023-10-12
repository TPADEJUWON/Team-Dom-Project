const hambugger = document.querySelector('.hamburger')
const left_bar = document.querySelector('.left')
const main_page = document.querySelector('.right')
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

//search unit
const units = document.querySelectorAll('.units')
const search = document.querySelector('#searchUnit')

const displayUnits = (values) =>{
    units.forEach(element =>{
        element.style.display = "none"
        const Unitname = element.children[1].innerHTML.toUpperCase();
        

        if (Unitname.includes(values)){
            element.style.display = "block"
        }
    })
}

search.addEventListener('input', (e) =>{
    displayUnits(e.target.value.toUpperCase())
})