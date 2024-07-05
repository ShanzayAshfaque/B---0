


// search bar script 

const searchBar = document.querySelector(".search-bar");
const searchIcon = document.querySelector("header .page-links .seach_icon");
const navbar = document.querySelector('header .navbar');
// const navMenu = document.querySelector('header .navbar .nav-menu');
// const img_show = document.querySelector(".store-sec .desc-box a.store-btn");



searchIcon.onclick = ()=>{
    searchBar.classList.toggle("show_search_bar");
    navbar.classList.toggle("nav-white");
}

// const footerIcon = document.querySelectorAll(".footer ul li i");



const dropdwons = document.querySelectorAll('.footer-dropdown');

dropdwons.forEach((dropdown) =>{
    
    const span = dropdown.querySelector(".footer-dropdown span");
    const menu = dropdown.querySelector('.footer-menu');

    span.addEventListener("click", ()=>{
        menu.classList.toggle('open-menu');
    });
});



