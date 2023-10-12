const login = document.querySelector('#post')
const log = document.querySelector('.Login')
const side_right = document.querySelector('.go')
const cancel = document.querySelector('#cancel')
const doc = document.querySelector('#doc')
const content = document.querySelector('.content')
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.Nav-link')
const sign = document.querySelector('#bot')

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


//hambugger
hamburger.onclick = () =>{
nav.classList.toggle('hided')
}

//cancel login form
cancel.onclick= () =>{
    cancelForm();
}

doc.onclick= () =>{
    popUp();

}




// Define an array of image URLs
const imageUrls = [
    '/Assets/Images/guy.png',
    '/Assets/Images/temi.png',
    '/Assets/Images/guy2.png',
    
  ];
  
  let Index = 0;
  
  function changeImage() {
    content.src = imageUrls[Index];

    Index = (Index + 1) % imageUrls.length;
}

changeImage();
const imageChangeInterval = setInterval(changeImage, 5000);


//Sign in notice
sign.onclick = () =>{

    Swal.fire(
        'Good job!',
        'Your resolution has been documented',
        'success'
      )

      
}