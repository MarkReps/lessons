const burgerBtn = document.querySelector('.menu-burger');
burgerBtn.addEventListener("click", () =>{
    if(document.body.classList.contains("search-open")){
        document.body.classList.toggle("search-open");
    }
    document.body.classList.toggle("burger-open");
})

const searchBtn = document.querySelector('.top-header__search-btn');
searchBtn.addEventListener("click",() =>{
    if(document.body.classList.contains("burger-open")){
        document.body.classList.toggle("burger-open");
    }
    document.body.classList.toggle("search-open");
})




const productTabBtns = document.querySelectorAll(".product__tabs .tabs__btn");
productTabBtns.forEach((element) => {
    element.addEventListener("click",(e) =>{
        productTabBtns.forEach(element =>{
            if(element.classList.contains("tabs__btn--active")){
                element.classList.remove('tabs__btn--active')
            }
        })
        e.target.classList.add('tabs__btn--active')
    })
})
const bestTabsBtn = document.querySelectorAll(".best__tabs .tabs__btn");
bestTabsBtn.forEach((element) => {
    element.addEventListener("click",(e) =>{
        bestTabsBtn.forEach(element =>{
            if(element.classList.contains("tabs__btn--active")){
                element.classList.remove('tabs__btn--active')
            }
        })
        e.target.classList.add('tabs__btn--active')
    })
})

