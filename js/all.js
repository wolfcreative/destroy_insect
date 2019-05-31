$(function() {

    UIkit.util.on('.case .slider', 'itemshow', function (e) {
        let index = UIkit.util.index(e.target);
        
        $('.case .info>div').removeClass('uk-active');
        $('.case .info').children().eq(index).addClass('uk-active');
    });
});