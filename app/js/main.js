$(document).ready(function () {
  $('.nav__link a').click(function(){
    $(this).parents('.nav-list').find('.nav__link').removeClass('active');
    $(this).parent().addClass('active');
    return false
  });


window.scroll({
  top: 0, 
  left: 0, 
  behavior: 'smooth'
});

});