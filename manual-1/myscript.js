$(document).ready(function(){

$(function(){
  $('.container2').fadeIn('slow');
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.onscroll').each( function(i){
            
            var divtop = $(this).position().top + $(this).outerHeight();
            var bottom = $(window).scrollTop() + $(window).height();
            
            if( bottom > divtop ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});


});