// // ハンバーガーメニューのトグル
// $(document).ready(function() {
//     $('.hamburger-menu').click(function() {
//         $('header nav ul').toggle();
//     });
// });



$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,       //自動再生
        autoplaySpeed: 2000,  //自動再生のスピード
        speed: 800,           //スライドするスピード
        dots: true,           //スライド下のドット
        arrows: true,         //左右の矢印
        infinite: true,       //永久にループさせる
    });
});
