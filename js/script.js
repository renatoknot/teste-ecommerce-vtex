$(document).ready(function () {
  $(".grid-middle").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true,
    centerMode: true,
    centerPadding: "40px",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });
});
