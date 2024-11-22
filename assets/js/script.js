// // ハンバーガーメニューのトグル
// $(document).ready(function() {
//     $('.hamburger-menu').click(function() {
//         $('header nav ul').toggle();
//     });
// });

/* ========================= */
/*  スライダー再生
/* ========================= */

$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,       //自動再生
        autoplaySpeed: 2000,  //自動再生のスピード
        speed: 800,           //スライドするスピード
        dots: true,           //スライド下のドット
        arrows: true,         //左右の矢印
        infinite: true,       //永久にループ
    });
});

/* ========================= */
/*  カウントダウン
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {
    const targetDate = new Date("2025-01-17T00:00:00"); // 終わりを迎える日

    function updateCountdown() {
        const now = new Date(); // 現在時刻 終わりのはじまり…
        const difference = targetDate - now; // ミリ秒単位の差

        if (difference <= 0) {
            document.getElementById("countdown-days").textContent = "0"; // 終了時
            clearInterval(intervalId);
            return;
        }

        const days = Math.ceil(difference / (1000 * 60 * 60 * 24)); // 日数を計算
        document.getElementById("countdown-days").textContent = days.toString().padStart(3, '0'); // 3桁で表示 足りないとき0
    }

    updateCountdown(); // 初回更新
    const intervalId = setInterval(updateCountdown, 1000); // 毎秒更新
});

/* ========================= */
/*  フローティングBTN
/* ========================= */


document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');

    // スクロール時のイベント
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block'; // 表示
        } else {
            backToTopButton.style.display = 'none'; // 非表示
        }
    });

    // クリック時のイベント
    backToTopButton.addEventListener('click', (event) => {
        event.preventDefault(); // デフォルトの動作を無効化
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーズスクロール
        });
    });
});


/* ========================= */
/*  FAQ アコーディオン
/* ========================= */

$(function() {
    $('.question').click(function() {
    $(this).next().slideToggle(400);
    });
    });

