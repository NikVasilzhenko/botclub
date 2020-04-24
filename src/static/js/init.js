// pics slider init

if(document.body.clientWidth > 767){
  var picsSlider = new Swiper('#js-pics-slider', {
    slidesPerView: 1,
    spaceBetween: 4,
    navigation: {
      nextEl: '#js-pics-next',
      prevEl: '#js-pics-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    }
  });
}
