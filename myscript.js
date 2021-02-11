$(document).ready(function(){
   $("#IMG2A").hide();
   $("#IMG3A").hide();
  
  $("#IMG1A").click(function(){
		$("#IMG1A").hide();
    $("#IMG2A").fadeToggle();
	});
 $("#IMG2A").click(function(){
		$("#IMG2A").hide();
    $("#IMG3A").fadeToggle();
	});
   $("#IMG3A").click(function(){
		$("#IMG3A").hide();
    $("#IMG1A").fadeToggle();
	});
});
