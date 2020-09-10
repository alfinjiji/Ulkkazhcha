/* auto verticall scroll for latest news */
$(function(){
    var tickerLength = $('.v-scroll ul li').length;
    var tickerHeight = $('.v-scroll ul li').outerHeight();
    $('.v-scroll ul li:last-child').prependTo('.v-scroll ul');
    $('.v-scroll ul').css('marginTop',-tickerHeight);
    function moveTop(){
      $('.v-scroll ul').animate({
        top : -tickerHeight
      },600, function(){
       $('.v-scroll ul li:first-child').appendTo('.v-scroll ul');
        $('.v-scroll ul').css('top','');
      });
     }
    setInterval( function(){
      moveTop();
    }, 3000);
    });