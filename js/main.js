//  Dropdown sliding effect

$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
  });
  
  $('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
  });

//   
//  Sliding to page
$(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();    
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;   
      $('html, body').animate({scrollTop: dn}, 1000);
    });
  });
// 
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
// 
// Phone Mask

$(document).ready(function(){
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('0(000) 000-00-00');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00', {reverse: true});
    $('.money').mask('000.000.000.000.000,00', {reverse: true});
    $('.money2').mask("#.##0,00", {reverse: true});
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
      translation: {
        'Z': {
          pattern: /[0-9]/, optional: true
        }
      }
    });
});
// 
// Datetime value
// $(document).ready(function(){
//     var dateControl = document.querySelector('input[type="datetime-local"]');
//     dateControl.value = '2019-02-06T08:30';
// });


jQuery('#datetimepicker').datetimepicker({
    value:'01.02.2019 12:00',
    format:'d.m.Y H:i',
    startDate:'+2019/05/01 12:00',
    minDate:'0',
    step:15,
    lang: 'ru'
});