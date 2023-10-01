
//BURGER 
const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
if (headerBurger) {
    headerBurger.addEventListener("click",function(e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        headerMenu.classList.toggle('_active');
    });
}

//MENU SCROLL

const menuItems = document.querySelectorAll('.menu__link');
function scrollToElement(event) {
    event.preventDefault();
    const target = event.target.getAttribute('data-gotto');
    const element = document.querySelector(target);
    const topOffset = element.offsetTop;

    if(headerBurger.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        headerBurger.classList.remove('_active');
        headerMenu.classList.remove('_active');
    }
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  }
  menuItems.forEach(item => {
    item.addEventListener('click', scrollToElement);
  });


