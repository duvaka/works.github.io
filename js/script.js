$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,header,.header,.header .links').toggleClass('active');
        $('body').toggleClass('lock')
    });
});