
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
let modal = document.getElementById("simple-modal");
//? Get open modal button 
let modalBtn = document.getElementById("submit-btn")
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