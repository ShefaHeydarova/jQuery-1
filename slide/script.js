$(function(){

    $('.slider').click(function(){

     let slider = $(this).attr('src');

    $('#img').attr('src', slider);

    })
 
    // $("#img").click(function(){
    // let img =  $(this).attr('width', '500');

    // });

    $("#img").click(function(){
      
      $(this).addClass('active');

      });

})
