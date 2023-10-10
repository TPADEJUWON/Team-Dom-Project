const login = document.querySelector('#post')
const log = document.querySelector('.Login')
const side_right = document.querySelector('.go')
const cancel = document.querySelector('#cancel')
const doc = document.querySelector('#doc')
const content = document.querySelector('.content')

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

//cancel login form
cancel.onclick= () =>{
    cancelForm();
}

doc.onclick= () =>{
    popUp();

}




// Define an array of image URLs
const imageUrls = [
    '/Assets/Images/Debbie.png',
    '/Assets/Images/tech.png',
    // Add more image URLs as needed
  ];
  
  let currentImageIndex = 0;
  
  function changeImage() {
    // Change the background image of the container
    content.src = imageUrls[currentImageIndex];

  // Increment the image index, or loop back to the first image
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

// Call the changeImage function initially
changeImage();

// Set up a timer to change the image every 5 seconds (5000 milliseconds)
const imageChangeInterval = setInterval(changeImage, 5000);