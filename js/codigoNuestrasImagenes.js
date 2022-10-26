// JavaScript Document
//slider 1
var ima=["imagenes/galeria/baner1.jpg","imagenes/galeria/baner2.jpg","imagenes/galeria/baner3.jpg","imagenes/galeria/baner4.jpg","imagenes/galeria/baner5.jpg"]

var i=0;

function baner(){
	document.getElementById("slider").src=ima[i];
	
	i++;
	if(i>=ima.length )i=0;
}

function banerbaner(){
	document.getElementById("slider").src=ima[i];
	i--;
	if(i<0) i=2;
}

$(function(){
	var ade=$(".delante1");
	var atra=$(".atras1");
	
	delante1.click(function(){
		baner();
	});
	atras1.click(function(){
		banerbaner();
	});
});

 //slider 2

var ima1=["imagenes/galeria/nido1.jpg","imagenes/galeria/nido2.jpg","imagenes/galeria/nido3.jpg","imagenes/galeria/nido4.jpg","imagenes/galeria/nido5.jpg"];
var i=0;

function baner1(){
	document.getElementById("slider1").src=ima1[i];
	i++;
	if(i>=ima1.length)i=0;
	
}

function banerbaner1(){
	document.getElementById("slider1").src=ima1[i];
	i--;
	if(i<0)i=2;
	
}

$(function(){
	var ade1=$(".delante2");
	var atra1=$(".atras2");
	
	delante2.click(function(){
		baner1();
	});
	atras2.click(function(){
		banerbaner1();
	});
});

//slider3

var ima2=["imagenes/galeria/compromisos/compromisos1.jpg","imagenes/galeria/compromisos/compromisos2.jpg","imagenes/galeria/compromisos/compromisos3.jpg","imagenes/galeria/compromisos/compromisos4.jpg"];
var i=0;

function baner2(){
	document.getElementById("slider2").src=ima2[i];
	i++;
	if(i>=ima2.length)i=0;
	
}
function banerbaner2(){
	document.getElementById("slider2").src=ima2[i];
	i--;
	if(i<0)i=2;
	
}


$(function(){
	var ade2=$(".delante3");
	var atra2=$(".atras3");
	
	delante3.click(function(){
		baner2();
	});
	atras3.click(function(){
		banerbaner2();
	});
});



 //slider 4

var ima3=["imagenes/22687667_1766532626980272_430077334784838711_n.jpg","imagenes/32413710_1848000278833506_3427214160805494784_n.jpg","imagenes/galeria/nido3.jpg","imagenes/galeria/nido4.jpg","imagenes/galeria/nido5.jpg"];
var i=0;

function baner3(){
	document.getElementById("slider3").src=ima3[i];
	i++;
	if(i>=ima3.length)i=0;
	
}

function banerbaner3(){
	document.getElementById("slider3").src=ima3[i];
	i--;
	if(i<0)i=2;
	
}

$(function(){
	var ade3=$(".delante4");
	var atra3=$(".atras4");
	
	delante4.click(function(){
		baner3();
	});
	atras4.click(function(){
		banerbaner3();
	});
});