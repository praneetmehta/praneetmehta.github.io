$(window).scroll(function () {
    var scroll = $(this).scrollTop();

    var pic = $('#profile-pic')
    if (scroll < 490) {
        pic.css({
            'opacity': 1 - scroll / 490
        });
    }
    var tech = $('.tech');
    if (scroll > 350) {
        tech.each(function (i) {
            console.log(i);
            tech.css({
                'opacity': (scroll - 350) / 450,
                'transform': 'rotate(' + ((scroll - 350) / 450) * 360 + 'deg)'
            });
        })
    }
});