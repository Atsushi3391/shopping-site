$(document).ready(function(){
  $("#sp_header_menu_btn").click(function(){
    $(".toggle").slideToggle();
  });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(window).load(function(){
  $(".product_images_thumbnail img").click(function(){
    var img_src = $(this).attr("src");
    $(".produnt_image_main img").attr("src", img_src);
  });
});