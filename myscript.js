$(document).ready(function(){
   $(".IMG2").hide();
   $(".IMG3").hide();
   $(".IMG1").click(function() {
	   $(".IMG1").hide();
           $(".IMG2").fadeToggle();
   });
   $(".IMG2").click(function(){
	   $(".IMG2").hide();
           $(".IMG3").fadeToggle();
   });
   $(".IMG3").click(function(){
	   $(".IMG3").hide();
           $(".IMG1").fadeToggle();
   });
});
