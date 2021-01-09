$(function () {
  $('.js-btn').click(function () {
    $('.menu , .btn-line').toggleClass('open'); 
  })
  $('.menu-list').click(function(){
    $('.menu , .btn-line').toggleClass('open'); 
  });
  $('.work-img').hover(
    function(){
    $(this).find('.work-text').fadeIn(700);
  },
    function(){
      $(this).find('.work-text').fadeOut();
    });
    $(window).scroll(function () {
      $(".effect-fade").each(function () {
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight){
          $(this).addClass("effect-scroll");
        }
      });
    });
    jQuery(window).scroll();


});