let slideInMenu = document.querySelector('.slide-in-menu');
let slideInMenuIsClosed = true;

let toggleMenu = () => {
    if(slideInMenuIsClosed){
        slideInMenu.style.left = 0;
        slideInMenuIsClosed = !slideInMenuIsClosed;
    }else{
        slideInMenu.style.left = "100%";
        slideInMenuIsClosed = !slideInMenuIsClosed;
    }
}