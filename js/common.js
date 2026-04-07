// ===== ヘッダー高さをCSS変数へ（fixedヘッダー分だけ上余白を確保） =====
(function () {
    const setHeaderHeight = () => {
        const header = document.querySelector("header");
        if (!header) return;
        document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
    };

    // できるだけ早く反映（ガクッ防止）
    document.addEventListener("DOMContentLoaded", setHeaderHeight);

    // レイアウト確定後にも反映（フォント/画像で高さ変わる保険）
    requestAnimationFrame(setHeaderHeight);
    setTimeout(setHeaderHeight, 0);
    window.addEventListener("load", setHeaderHeight);

    window.addEventListener("resize", setHeaderHeight);
    window.addEventListener("orientationchange", setHeaderHeight);

    // Webフォントで高さが変わるケースの保険
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(setHeaderHeight);
    }
})();

$(window).on("load", function () {
    $("body").removeClass("is-loading");
    $(".page-loader").fadeOut(1000);
});


// ハンバガーメニュー
$(".openbtn").click(function () {
    $(this).toggleClass("active");
    $("#g-nav").toggleClass("panelactive");
});

$("#g-nav a").click(function () {
    $(".openbtn").removeClass("active");
    $("#g-nav").removeClass("panelactive");
});
