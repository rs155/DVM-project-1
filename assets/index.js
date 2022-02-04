const navToggle = document.querySelector("#nav-toggle")
const navList = document.querySelector(".nav-right")

navToggle.addEventListener( "click" , toggleMenu)

function toggleMenu() {
    navList.classList.toggle("show")
    console.log('ok')
}