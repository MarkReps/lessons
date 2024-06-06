
const menuBtn = document.querySelector('.menu-icon');

menuBtn.addEventListener("click", () =>{
    document.body.classList.toggle("menu-open");
})

const langBtn = document.querySelector('.lang-top-header')
langBtn.addEventListener("click", () =>{
    langBtn.classList.toggle("active");
})

const contactBtn = document.querySelector('.contacts-body-header')
contactBtn.addEventListener("click", () =>{
    contactBtn.classList.toggle("active");
})