
const btn = document.querySelector('.header__link');
btn.addEventListener('click',(event)=>{
    event.preventDefault();
    document.body.classList.toggle("active");
})

const sub_menu = document.querySelectorAll('.menu__link');

sub_menu.forEach(link => {
    link.addEventListener('click',(event) =>{
        event.preventDefault()
        // .classList.toggle("active");
    event.target.classList.toggle('.active')
    })
});