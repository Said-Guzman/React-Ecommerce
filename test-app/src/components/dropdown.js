const dropdown = document.querySelector(".dropdown") // looks for the dropdown class
const navMenu = document.querySelector(".nav-menu") // looks for the nav-menu

dropdown.addEventListener("click",() =>{
    dropdown.classList.toggle("active")
    navMenu.classList.toggle("active");
}) // onclick it'll toggle the active portion of the menu, activating the dropdown and navmmenu