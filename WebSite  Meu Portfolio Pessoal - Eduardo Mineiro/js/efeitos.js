//GOOGLE ANALYTICS
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-81251136-1', 'auto');
  ga('send', 'pageview');
//FORMULARIO AJAX
$('#formulario').submit(function(e){
    e.preventDefault();
    
    if($('#enviar').val() == 'Enviando...'){
      return(false);
    }
    
    $('#enviar').val('Enviando...');
    
    $.ajax({
      url: 'form.php',
      type: 'post',
      dataType: 'html',
      data: {
        'metodo': $('#metodo').val(),
        'nome': $('#nome').val(),
        'email': $('#email').val(),
        'assunto': $('#assunto').val(),
        'mensagem': $('#mensagem').val(),
      }
    }).done(function(data){
      
      alert(data);
      
      $('#enviar').val('Enviar!');
      $('#metodo').val('formulario');
      $('#nome').val('');
      $('#email').val('');
      $('#assunto').val('');
      $('#mensagem').val('');
      
    });
    
  });
//DESMARCAR O INPUT
 $(".click").click(function (){
               
    $("#btn-menu").click();

});
//MARCAR BOTÃO
 $(".hamburguer").click(function (){
               
    $("#btn-menu").click();

});
  //SCROLLSUAVE
 var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});
 //RETORNAR INPUT AO NORMAL
 $(".click").click(function (){
               
    $("#change-hamburguer").click();

});
//WOW.JS
$(document).ready(function(){
new WOW().init();
});
//TYPED.JS
$(function(){

    $("#typed").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }
//PLUGIN FACEBOOK
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
