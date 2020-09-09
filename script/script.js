// Скрипт для бургер меню
$('.icon-menu').click(function(event){
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
})

// скрипт для бэкраунд картинки(удобно и практично)
function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
    }
        }
    // Сразу же вызываем функцию
    ibg();


   