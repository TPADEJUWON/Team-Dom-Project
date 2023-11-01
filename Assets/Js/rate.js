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


//change to form
const stars = document.querySelectorAll('.stars input[type="radio"]');
const stard = document.querySelector('.stars');

const form = document.querySelector('.no');
const rate_text = document.querySelector('#rate-text');
const submit = document.querySelector('.sub');
const texto = document.querySelector('#feed')
let rated;


        stars.forEach(star => {
            star.addEventListener('change', function() {

                rate_text.innerHTML="Would you like to give us more details about your experience?"

                form.classList.add('yes');
                //stard.classList.add('no');
            
                rated = this.value;
                
            });
        });

        submit.onclick = () =>{
            texto.textContent =""
            Swal.fire(
                'Thank you!',
                `You just rated your experience as ${rated} stars.`,
                'success'
              )

        }