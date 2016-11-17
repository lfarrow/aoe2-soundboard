var player = $('.player');

$('.soundboard__item').on('click', function(){
    var audioSrc = 'taunts/' + $(this).text() + '.mp3';
  
    $("#mp3_src").attr("src", audioSrc);

    player[0].pause();
    player[0].load();

    player[0].oncanplaythrough = player[0].play();
});