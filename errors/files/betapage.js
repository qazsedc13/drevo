$(document).ready(function() { 

	$(".beta").css({opacity:0});
	$(".beta").delay(500).animate({opacity:1}, 'slow');
	$(".error").hide();
	$(".slot").hide();
	$(".thanks").hide();
	$('.button').click(function() {  
 		
		$(".error").hide();
		var hasError = false;
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		 
		var emailaddressVal = $(".femail").val();
		var nameVal = $(".fname").val();
		    
		if(nameVal == '') {
			$(".error").replaceWith('<div class="error">Name cannot be empty.</div>');
			$(".error").hide().fadeIn();
			hasError = true;
		}
		    
		else if(emailaddressVal == '') {
			$(".error").replaceWith('<div class="error">Email cannot be empty.</div>');
			$(".error").hide().fadeIn();
			hasError = true;
		}
		 
		else if(!emailReg.test(emailaddressVal)) {
			$(".error").replaceWith('<div class="error">Email is not valid.</div>');
			$(".error").hide().fadeIn();
			hasError = true;
		}
		
		
		//form animation
		function successAnim() {
			$('.button').fadeOut('slow', function (){
				$(".slot").fadeIn(200);
				$(".form").animate({top:"-10"}, 250);
				$(".form").animate({top:"+300"}, 1700, function(){
					$(".slot").fadeOut('fast', function(){
						$(".thanks").show();
						$(".thanks").css('opacity', 0);
						$(".thanks").animate({opacity: 1}, {queue: false, duration: 'slow'});
						$(".thanks").animate({ top: "-20px" }, 'slow');
					});
				});
			});
		}
		
		//process the form
		function process(){
			var dataString = 'fname=' + nameVal + '&femail=' + emailaddressVal;
			//alert (dataString);
			$.ajax({  
				type: "POST",  
				url: "process.php",  
				data: dataString,  
				success: function() {  
			  		successAnim();
			  	}
			});
		}
		
		if(hasError == false){
			process();
		}
		
		return false;
			 
	});
});