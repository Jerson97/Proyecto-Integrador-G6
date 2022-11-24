// JavaScript Document


// JavaScript Document

var menu = document.getElementById('menu');

var altura = menu.offsetTop;

window.addEventListener('scroll',function(){
	
	'use strict';
	
	if (window.pageYOffset > altura) {
		
		menu.classList.add('fixed');
	}
	
	else {menu.classList.remove('fixed');}
	
});




/*--------------------------------HORA Y FECHA----------------------------------------*/



function hor ()
{
	var fecha=new Date();
	var hora=fecha.getHours();
	setTimeout(hor,1000);
    document.getElementsByClassName("verh")[0].innerHTML=hora+":";

}


function min ()
{
	var fecha=new Date();
	var minutos=fecha.getMinutes();
	setTimeout(min,1000);
	document.getElementsByClassName("verh")[1].innerHTML=minutos+":";

}


function sec(){
	var fecha=new Date();
	var segundos=fecha.getSeconds();
	setTimeout(sec,1000);
	document.getElementsByClassName("verh")[2].innerHTML=segundos;

}


function di (){
	
	var fecha=new Date();
	var dia=fecha.getDay()+2;
	setTimeout(di,1000);
    document.getElementsByClassName("verf")[0].innerHTML=dia+"/";
}

function me (){
	
	var fecha=new Date();
	var mes=fecha.getMonth()+1;
	setTimeout(me,1000);
	document.getElementsByClassName("verf")[1].innerHTML=mes+"/";
}

function añ (){
	
	var fecha=new Date();
	var año=fecha.getFullYear();
	setTimeout(añ,1000);
	document.getElementsByClassName("verf")[2].innerHTML=año;
}




function todo()
{
hor();
min();
sec();
di();
me();
añ();	
}

todo();













/*-----------------------------------------EFECTOS FOOTER--------------------------------------------*/


$(function(){
	
				'use strict';

/*-------------------------------------------------------------------------*/
	
	$(".icon-facebook").mouseover(function(){
		
		$(this).css ({
			
			background:"violet",
			color:"black",
			transform:"rotate(360deg)",
			transition:"all 1s"
			
		});
		
		
	});

	
	
	$(".icon-facebook").mouseout(function(){
		
		$(this).css ({
			
			background:"rgba(143,66,121,1.00)",
			color:"white",
			transform:"rotate(-360deg)",
			transition:"all 1s"

		});
		
		
	});
	
	
	/*-------------------------------------------------------------------------*/
	
	$(".icon-twitter").mouseover(function(){
		
		$(this).css ({
			
			background:"violet",
			color:"black",
			transform:"rotate(360deg)",
			transition:"all 1s"
			
		});
		
		
	});

	
	
	$(".icon-twitter").mouseout(function(){
		
		$(this).css ({
			
			background:"rgba(143,66,121,1.00)",
			color:"white",
			transform:"rotate(-360deg)",
			transition:"all 1s"

		});
		
		
	});
	
	
	
		
	/*-------------------------------------------------------------------------*/
	
	$(".icon-linkedin").mouseover(function(){
		
		$(this).css ({
			
			background:"violet",
			color:"black",
			transform:"rotate(360deg)",
			transition:"all 1s"
			
		});
		
		
	});

	
	
	$(".icon-linkedin").mouseout(function(){
		
		$(this).css ({
			
			background:"rgba(143,66,121,1.00)",			
			color:"white",
			transform:"rotate(-360deg)",
			transition:"all 1s"

		});
		
		
	});
	
	
		
	/*-------------------------------------------------------------------------*/
	
	$(".icon-gmail").mouseover(function(){
		
		$(this).css ({
			
			background:"violet",
			color:"black",
			transform:"rotate(360deg)",
			transition:"all 1s"
			
		});
		
		
	});

	
	
	$(".icon-gmail").mouseout(function(){
		
		$(this).css ({
			
			background:"rgba(143,66,121,1.00)",
			color:"white",
			transform:"rotate(-360deg)",
			transition:"all 1s"

		});
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
});