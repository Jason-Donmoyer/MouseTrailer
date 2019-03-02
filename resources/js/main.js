$(document).mousemove(e => {
    $('.mouse').css({
        left: e.pageX,
        top: e.pageY
    });
});