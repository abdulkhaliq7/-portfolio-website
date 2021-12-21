
let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (let i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if(mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'   
    }

    localStorage.setItem('theme', mode)
}


//? Get modal element
let modal = document.getElementsByClassName("modal")[0];
//? Get open modal button 
let modalBtn = document.getElementsByClassName("submit-btn")[0]
//? Get close button
let closeBtn = document.getElementsByClassName("close-btn")[0]

//? Listen for open click
modalBtn.addEventListener('click', openModel)
//? Listen for close click
closeBtn.addEventListener('click', closeModel)
//? Listen for outside click
window.addEventListener('click', outsideClick)


//? Function to open modal
function openModel(){
    modal.style.display = 'block'
}

//? Function to close modal
function closeModel(){
    modal.style.display = 'none'
}

//? Function to close modal if ouside click
function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none'
    }
}


//? Model 2

//? Get modal element
let modal2 = document.getElementsByClassName("modal")[1];
// console.log(modal2)
//? Get open modal button 
let modalBtn2 = document.getElementsByClassName("submit-btn")[1]
//? Get close button
let closeBtn2 = document.getElementsByClassName("close-btn")[1]

//? Listen for open click
modalBtn2.addEventListener('click', openModel2)
//? Listen for close click
closeBtn2.addEventListener('click', closeModel2)
//? Listen for outside click
window.addEventListener('click', outsideClick2)


//? Function to open modal
function openModel2(){
    modal2.style.display = 'block'
}

//? Function to close modal
function closeModel2(){
    modal2.style.display = 'none'
}

//? Function to close modal if ouside click
function outsideClick2(e){
    if(e.target == modal2){
    modal2.style.display = 'none'
    }
}


//? Model 3

//? Get modal element
let modal3 = document.getElementsByClassName("modal")[2];
//? Get open modal button 
let modalBtn3 = document.getElementsByClassName("submit-btn")[2]
//? Get close button
let closeBtn3 = document.getElementsByClassName("close-btn")[2]

//? Listen for open click
modalBtn3.addEventListener('click', openModel3)
//? Listen for close click
closeBtn3.addEventListener('click', closeModel3)
//? Listen for outside click
window.addEventListener('click', outsideClick3)


//? Function to open modal
function openModel3(){
    modal3.style.display = 'block'
}

//? Function to close modal
function closeModel3(){
    modal3.style.display = 'none'
}

//? Function to close modal if ouside click
function outsideClick3(e){
    if(e.target == modal3){
    modal3.style.display = 'none'
    }
}


//? Model 4

//? Get modal element
let modal4 = document.getElementsByClassName("modal")[3];
//? Get open modal button 
let modalBtn4 = document.getElementsByClassName("submit-btn")[3]
//? Get close button
let closeBtn4 = document.getElementsByClassName("close-btn")[3]

//? Listen for open click
modalBtn4.addEventListener('click', openModel4)
//? Listen for close click
closeBtn4.addEventListener('click', closeModel4)
//? Listen for outside click
window.addEventListener('click', outsideClick4)


//? Function to open modal
function openModel4(){
    modal4.style.display = 'block'
}

//? Function to close modal
function closeModel4(){
    modal4.style.display = 'none'
}

//? Function to close modal if ouside click
function outsideClick4(e){
    if(e.target == modal4){
    modal4.style.display = 'none'
    }
}

//? Model 5

//? Get modal element
let modal5 = document.getElementsByClassName("modal")[4];
//? Get open modal button 
let modalBtn5 = document.getElementsByClassName("submit-btn")[4]
//? Get close button
let closeBtn5 = document.getElementsByClassName("close-btn")[4]

//? Listen for open click
modalBtn5.addEventListener('click', openModel5)
//? Listen for close click
closeBtn5.addEventListener('click', closeModel5)
//? Listen for outside click
window.addEventListener('click', outsideClick5)


//? Function to open modal
function openModel5(){
    modal5.style.display = 'block'
}

//? Function to close modal
function closeModel5(){
    modal5.style.display = 'none'
}

//? Function to close modal if ouside click
function outsideClick5(e){
    if(e.target == modal5){
    modal5.style.display = 'none'
    }
}

//? Model 6

//? Get modal element
let modal6 = document.getElementsByClassName("modal")[5];
//? Get open modal button 
let modalBtn6 = document.getElementsByClassName("submit-btn")[5]
//? Get close button
let closeBtn6 = document.getElementsByClassName("close-btn")[5]

//? Listen for open click
modalBtn6.addEventListener('click', openModel6)
//? Listen for close click
closeBtn6.addEventListener('click', closeModel6)
//? Listen for outside click
window.addEventListener('click', outsideClick6)


//? Function to open modal
function openModel6(){
    modal6.style.display = 'block'
}

//? Function to close modal
function closeModel6(){
    modal6.style.display = 'none'
}

//? Function to close modal if ouside click
function outsideClick6(e){
    if(e.target == modal6){
    modal6.style.display = 'none'
    }
}

//? Model 7

//? Get modal element
let modal7 = document.getElementsByClassName("modal")[6];
//? Get open modal button 
let modalBtn7 = document.getElementsByClassName("submit-btn")[6]
//? Get close button
let closeBtn7 = document.getElementsByClassName("close-btn")[6]

//? Listen for open click
modalBtn7.addEventListener('click', openModel7)
//? Listen for close click
closeBtn7.addEventListener('click', closeModel7)
//? Listen for outside click
window.addEventListener('click', outsideClick7)


//? Function to open modal
function openModel7(){
    modal7.style.display = 'block'
}

//? Function to close modal
function closeModel7(){
    modal7.style.display = 'none'
}

//? Function to close modal if ouside click
function outsideClick7(e){
    if(e.target == modal7){
    modal7.style.display = 'none'
    }
}


//? Model 8

//? Get modal element
let modal8 = document.getElementsByClassName("modal")[7];
//? Get open modal button 
let modalBtn8 = document.getElementsByClassName("submit-btn")[7]
//? Get close button
let closeBtn8 = document.getElementsByClassName("close-btn")[7]

//? Listen for open click
modalBtn8.addEventListener('click', openModel8)
//? Listen for close click
closeBtn8.addEventListener('click', closeModel8)
//? Listen for outside click
window.addEventListener('click', outsideClick8)


//? Function to open modal
function openModel8(){
    modal8.style.display = 'block'
}

//? Function to close modal
function closeModel8(){
    modal8.style.display = 'none'
}

//? Function to close modal if ouside click
function outsideClick8(e){
    if(e.target == modal8){
    modal8.style.display = 'none'
    }
}






const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

// gsap.from('.greeting-wrapper', { duration: 2, x: -2000, opacity: 0, ease: Power3 })
// gsap.from('.do1', { duration: 0.5, y: 570, opacity: 0, ease: Power3 })
// gsap.from('.do2', { duration: 0.5, y: 570, opacity: 0, ease: Power3, delay:0.5 })
// gsap.from('.left-column', { duration: 0.5, y: 570, opacity: 0, ease: Power3, delay:0.5 })
