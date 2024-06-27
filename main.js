/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navClose = document.getElementById('nav-close'),
      navToggle = document.getElementById('nav-toggle')

        // Menu-show
      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }  
    //Menu-hidden
      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
      }

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
  const header = document.getElementById('header')
  
  if(window.scrollY >= 50){
    header.classList.add('shadow-header')
  }
  else{
    header.classList.remove('shadow-header')
  }
}
window.addEventListener('scroll', shadowHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  if(window.scrollY >= 350){
    scrollUp.classList.add('show-scroll')
  }
  else{
    scrollUp.classList.remove('show-scroll')
  }
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']'); // removed CSS comment syntax

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  // hoạt ảnh sẽ bắt đầu từ trên xuống
  origin: 'top',
  // khoảng cách ở trên tới điểm bắt đầu là 60px
  distance: '60px',
  // thời gian xảy ra hiệu ứng
  duration: 1500,
  // độ trễ của hiệu ứng
  delay: 200,
})

sr.reveal(`.home__data,  .home__burger, .recipe__subtitle, .section__title `)
sr.reveal(`.home__dish`, {origin: 'bottom'})
sr.reveal(`.home__ingredient`, {delay: 1200})
sr.reveal(`.recipe__img, .delivery__data, .contact__images`, {origin: 'left'})
sr.reveal(`.recipe__data, .delivery__image, .contact__data`, {origin: 'right'})
sr.reveal(`.footer`)
sr.reveal(`.footer__copy`, {origin: 'bottom'})
// xuất hiện lần lượt từng phần tử
sr.reveal(`.article__card`, {interval: 100})
