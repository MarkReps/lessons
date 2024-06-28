const burgerBtn = document.querySelector('.burger-menu');
burgerBtn.addEventListener("click", () =>{
    if(document.body.classList.contains("search-open")){
        document.body.classList.toggle("search-open");
    }
    document.body.classList.toggle("burger-open");
})

const searchBtn = document.querySelector('.body-header__search-btn');
searchBtn.addEventListener("click",() =>{
    if(document.body.classList.contains("burger-open")){
        document.body.classList.toggle("burger-open");
    }
    document.body.classList.toggle("search-open");
})

const product = {
    tabs :document.querySelectorAll(".product__menu .menu-product__tabs > button"),
    content:document.querySelectorAll(" .product__items")
}
product.tabs.forEach((tab,index)=>{
    tab.addEventListener("click", ()=>{
        // remove class active from all tabs btn
        product.tabs.forEach(elm =>elm.classList.remove("active"));
        // add class active to current select tab
        tab.classList.add("active");
        // remove class active from all tabs content
        product.content.forEach(content => content.classList.remove('active'));
        // add class active to current select tab content
        product.content[index].classList.add('active');
    })
})
const best = {
  tabs :document.querySelectorAll(".best__menu .menu-product__tabs > button"),
  content:document.querySelectorAll("slider__item")
}
best.tabs.forEach((tab,index)=>{
  tab.addEventListener("click", ()=>{
      // remove class active from all tabs btn
      best.tabs.forEach(elm =>elm.classList.remove("active"));
      // add class active to current select tab
      tab.classList.add("active");
  })
})


const accordions = document.querySelectorAll(".accordion__title");

accordions.forEach(accordion =>{
  accordion.addEventListener("click",(e) =>{
    e.currentTarget.classList.toggle("active");
    const content = e.currentTarget.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
})

const scrollToTop = document.querySelector('.bottom-footer__scroll');

scrollToTop.addEventListener("click",(e) =>{
  e.preventDefault()
  window.scroll({top: 0, behavior: "smooth"})
})


new Swiper('.best__slider',{
    navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },
  slideClass: 'slider__item',
  slidesPerView:1,
  spaceBetween:'12',
  watchOverflow: false,
  breakpoints: {
    536: {
      slidesPerView: 2,
      spaceBetween: '16',
    },
    802: {
      slidesPerView: 3,
      spaceBetween: '20',
    },
    1074: {
      slidesPerView: 4,
      spaceBetween: '24',
    },
  },
});