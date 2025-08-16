
const menuOpen = document.querySelector("#menu-open-btn");
const menuClose = document.querySelector("#menu-close-btn");

// open menu when open button is clicked
menuOpen.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu'); // toggle is used to add or remove the class, if class is present it will remove it, if not present it will add it
})
menuClose.addEventListener('click', ()=>{
    menuOpen.click();
})