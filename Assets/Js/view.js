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
const post = document.querySelectorAll('.post')
const search = document.querySelector('#searchUnit')

const displayPost = (values) =>{
    post.forEach(element =>{
        element.style.display = "none"
        const Postname = element.children[0].innerHTML.toUpperCase();
        

        if (Postname.includes(values)){
            element.style.display = "block"
        }
    })
}

search.addEventListener('input', (e) =>{
    displayPost(e.target.value.toUpperCase())
})



//Review buttons

const likeUp = document.querySelector('.fa-thumbs-up') 
const likedown = document.querySelector('.fa-thumbs-down') 
const count1 = document.querySelector('#up')
const count2 = document.querySelector('#down')

let liked =false;
let notLike = false;

// for like
const countLike = () =>{
    if(liked){
        liked =false;
        count1.innerHTML = '0'
    }

    else{
        liked =true;
        count1.innerHTML = '1'

    }

}



likeUp.onclick = ()=>{
    countLike();
}


//for not like
const countnotLike = () =>{
    if(notLike){
        notLike =false;
        count2.innerHTML = '0'
    }

    else{
        notLike =true;
        count2.innerHTML = '1'

    }

}



likedown.onclick = ()=>{
    countnotLike();
}
