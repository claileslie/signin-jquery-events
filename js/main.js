$(function() {
  $('.signin').click(function(){
    $('.modal').fadeIn("slow");
  });
  $('.close').click(function(){
    $('.modal').fadeOut("slow");
  });
  $('.submit').click(function(){
    $('input').addClass('error');
  });
  $('input').click(function(){
    $(this).removeClass('error');
  });
});
