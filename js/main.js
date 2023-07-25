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
$(".modal-open").click(function() {
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("open");
    },10);
});
$(".modal__close").click(function() {
    $(".modal").removeClass("open");
    setTimeout(function() {
        $(".modal").removeClass("active");
    },500);
});

$(".company__wrap .link").click(function() {
    $(this).addClass("open");
});
const accordeon = document.querySelectorAll('.company__item');
accordeon.forEach(elements => {
    elements.classList.remove('open');
    elements.addEventListener('click', function() {
        if(!elements.classList.contains('open')) {
            accordeon.forEach (elements => {
                elements.classList.remove('open');
            });
        }
        elements.classList.toggle('open');
    });
});