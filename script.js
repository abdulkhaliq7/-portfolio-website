
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

// gsap.from('.greeting-wrapper', { duration: 2, x: -2000, opacity: 0, ease: Power3 })
gsap.from('.do1', { duration: 0.5, y: 570, opacity: 0, ease: Power3 })
gsap.from('.do2', { duration: 0.5, y: 570, opacity: 0, ease: Power3, delay:0.5 })
gsap.from('.left-column', { duration: 0.5, y: 570, opacity: 0, ease: Power3, delay:0.5 })
