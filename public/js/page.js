$('.revp').hide();


$('.rev').on('click', () => {
    $('.revp').toggle('show')
})

if ($(window).scrollTop() - $('.second').offset().top === 100) {
    alert('here!')
}


$(window).on('scroll', () => {
    var pagePosition = $(window).scrollTop()
        // alert($(window).scrollTop())
        // alert(pagePosition)
    while ((pagePosition >= 393)) {
        // alert(pagePosition)
        $('article').addClass('animated zoomIn')
            // $('article').removeClass('animated zoomIn')
    }

})

// alert($('.second').offset().top)
// alert($(window).scrollTop())