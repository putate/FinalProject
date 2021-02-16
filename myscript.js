$(document).ready(function(){
   $(".IMG2").hide();
   $(".IMG3").hide();
   $(".IMG1").click(function() {
	   $("#IMG1A").hide();
           $(".IMG2").fadeToggle();
   });
   $(".IMG2").click(function(){
	   $("#IMG2A").hide();
           $(".IMG3").fadeToggle();
   });
   $(".IMG3").click(function(){
	   $("#IMG3A").hide();
           $(".IMG1").fadeToggle();
   });
});
