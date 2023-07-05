$(".header__burgir").click(function() {
    if($(".header__burgir").hasClass("active")) {
        $(".header__burgir").removeClass("rotate");
        $(".header__wrap").removeClass("open");
        setTimeout(function() {
            $(".header__burgir").removeClass("active");
        },300);
    } else {
        $(".header__burgir").addClass("active");
        $(".header__wrap").addClass("open");
        setTimeout(function() {
            $(".header__burgir").addClass("rotate");
        },300);
    };
});