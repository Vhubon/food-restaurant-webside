let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}





// var swiper = new Swiper(".home-slider", {
//     autoHeight: true,
//     spaceBetween: 20,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },

//   });


  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    autoHeight: true,
    conteredSlides: true,
    autoplay:{
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    autoHeight: true,
    conteredSlides: true,
    autoplay:{
        delay: 4000,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
  });


