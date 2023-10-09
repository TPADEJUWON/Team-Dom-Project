const login = document.querySelector('#post')
const log = document.querySelector('.Login')
const side_right = document.querySelector('.go')
const cancel = document.querySelector('#cancel')

// Add funtion to pop-up login form
const popUp = () =>{
    side_right.style.display ='none'
    log.classList.remove('hide')
}


login.onclick=()=>{
    popUp();
}

const cancelForm= () =>{
    side_right.style.display ='block'
    log.classList.add('hide') 
}

cancel.onclick= () =>{
    cancelForm();
}