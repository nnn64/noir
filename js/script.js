$(".atmosphere-slide__list").slick({
  autoplay: true, // 自動再生
  autoplaySpeed: 5000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
  infinite: true, // 無限スライド
  // arrows: true, // 矢印
  dots: true, // インジケーター
});

$(function (){
  var btnMenu = $(".js-btn-menu");
  var Nav = $(".nav");

  $('a[href^="#"]').on("click", function() {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  btnMenu.on("click", function (){
    btnMenu.toggleClass("is-active");
    Nav.toggleClass("is-show");
  });

  Nav.on("click" , function (){
    btnMenu.removeClass("is-active");
    Nav.removeClass("is-show");
  });

  var $pageTop = $(".page-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });

});

