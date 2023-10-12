const tit = document.querySelector('#bro')
const desc = document.querySelector('#disc')
const resol = document.querySelector('#rel')
const submit = document.querySelector('.butt')

const checkRes = () =>{
    if(tit.value.length == '0' || desc.value.length == '0' || resol.value.length == '0'){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Fill the required field!',
            
          })


        
    }

    else{
        if(resol.value.length < 120){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Enter a detailed resolution',
                
              })
        }

        else{
            Swal.fire(
                'Good job!',
                'Your resolution has been documented',
                'success'
              )

              tit.value = '' 
              desc.value = '' 
              resol.value = ''
        }
    }

}

submit.onclick = () =>{
    
    checkRes();

}

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

