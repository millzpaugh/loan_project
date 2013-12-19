window.onload = function(){
  intro(); 
} 

function intro() {
  $('p.fact').hide(); 
  $('nav').hide(); 

  setTimeout(function(){
          $('p#1').addClass('animated fadeInDown').show();
  }, 1000);

  setTimeout(function(){
          $('p#2').addClass('animated fadeInDown').show();
  }, 3000);

  setTimeout(function(){
          $('p#3').addClass('animated fadeInDown').show();
  }, 5000);

  setTimeout(function(){
        $('p#4').addClass('animated fadeInDown').show();
  }, 7000);

}