$(document).ready(function(){
  var buzzer1 = $('#buzzer1')[0];
  var buzzer2 = $('#buzzer2')[0];
  var buzzer3 = $('#buzzer3')[0];
  var buzzerTime = $('#buzzerTime')[0];
  var buzzerBreak = $('#buzzerBreak')[0];
  var count = parseInt($('#num').html());
  var breakTime = parseInt($('#breakNum').html());
  $('#reset').hide();
  
  $('#start').click(function() {
    var counter = setInterval(timer, 1000);
    count *= 60;
    breakTime *= 60;
    
    
    function timer(){
      $('#start, #minus5clock, #add5clock, #minus5break, #add5break, #breakNum, #title1, #title2').hide();
      $('#timeType').show();
      $('#timeType').html("Session Time: <br>");
      count -=1;
      if(count === 0){
        buzzerTime.play();
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $('#num').hide();
      }
      if(count === 1){
        buzzer1.play();
      }
      if(count === 2){
        buzzer2.play();
      }
      if(count === 3){
        buzzer3.play();
      }
      if(count%60 >= 10){
         $('#num').html(Math.floor(count/60) + ":" + count%60);
      }
      else{
        $('#num').html(Math.floor(count/60) + ":" + "0" + count%60);
      }
 
      function breakTimer(){
      $("#timeType").html("Break Time: <br>");
      $('#breakNum').show();
        $('timeType').show();
      breakTime -=1;
      if(breakTime === 0){
        buzzerBreak.play();
        clearInterval(startBreak);
        $('#reset').show();
        $('#breakNum, #timeType').hide();
      }
        if(breakTime === 1){
        buzzer1.play();
      }
      if(breakTime === 2){
        buzzer2.play();
      }
      if(breakTime === 3){
        buzzer3.play();
      }
         if(breakTime%60 >= 10){
         $('#breakNum').html(Math.floor(breakTime/60) + ":" + breakTime%60);
      }
      else{
        $('#breakNum').html(Math.floor(breakTime/60) + ":" + "0" + breakTime%60);
      }
    }
    }
  });
  
  $('#reset').click(function() {
    count = 5;
    breakTime = 5;
    $('#num').html(count);
    $('#breakNum').html(breakTime);
    $('#start, #minus5clock, #add5clock, #minus5break, #add5break, #breakNum, #num, #title1, #title2').show();
    $('#reset, #timeType').hide();
   });
  
  $('#minus5clock').click(function() {
    if(count > 1){
       count -= 1;
    $('#num').html(count);
    }
  });
   $('#add5clock').click(function() {
       count += 1;
    $('#num').html(count);
  });
  $('#minus5break').click(function() {
    if(breakTime > 1){
       breakTime -= 1;
    $('#breakNum').html(breakTime);
    }
  });
   $('#add5break').click(function() {
       breakTime += 1;
    $('#breakNum').html(breakTime);
  });
});

