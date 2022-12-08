/* Lê o XML */
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudo");

/* Exibe o conteúdo */

function titulo1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue);
	}
}

function texto1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("texto1")[0].childNodes[0].nodeValue);
	}
}

function titulo2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo2")[0].childNodes[0].nodeValue);
	}
}

function etapa1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("etapa1")[0].childNodes[0].nodeValue);
	}
}
function etapa2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("etapa2")[0].childNodes[0].nodeValue);
	}
}

function etapa3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("etapa3")[0].childNodes[0].nodeValue);
	}
}

function titulo3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo3")[0].childNodes[0].nodeValue);
	}
}
function texto3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("texto3")[0].childNodes[0].nodeValue);
	}
}

function titulo4() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo4")[0].childNodes[0].nodeValue);
	}
}
function texto4() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("texto4")[0].childNodes[0].nodeValue);
	}
}

function titulo5() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo5")[0].childNodes[0].nodeValue);
	}
}

function titulo6() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("titulo6")[0].childNodes[0].nodeValue);
	}
}

function integrante1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("integrante_1")[0].childNodes[0].nodeValue);
	}
}

function integrante2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write(x[i].getElementsByTagName("integrante_2")[0].childNodes[0].nodeValue);
	}
}



// blog <li class='list-group-item'>And a fifth one</li>



let p = xmlDoc.getElementsByTagName("post");



function funcaoBlog(){
	  
	n = p.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<div class='accordion-item' ' ><h2 class='accordion-header' id='heading"+i+"'><button style='color:red;' class='accordion-button collapsed'  type='button' data-bs-toggle='collapse' data-bs-target='#collapse"+i+"' aria-expanded='true' aria-controls='collapse"+i+"' style='color:black;font-size:20px;background-color:#f5f0d4;border-top-left-radius : 2%;border-top-right-radius : 2%;border-bottom-right-radius : 2%;border-bottom-left-radius : 2%;'>"+ p[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</button></h2><div style='background-color:#212529;color:white;font-size:20px;text-align:justify;' id='collapse"+i+"'  class='accordion-collapse collapse' aria-labelledby='heading"+i+"' data-bs-parent='#accordionExample'><div class='accordion-body' >"+ p[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue +"</div></div></div>");}
}




function funcblog(){
	n = p.length-1;
	for (var i = n; i >= 0; i--){
		document.write("<li class='list-group-item'><h4>"+ p[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</h4> <button data-bs-toggle='collapse' data-bs-target='#demo'>Ver Mais</button><div id='demo' class='collapse' style='color: white;'>"+p[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue+" </div> </li><br>");
	}
}


	
function funblog(){
	n = p.length-1;
	for (var i = n; i >= 0; i--){
		document.write('<div class="accordion-item" style="background-color:#181818;"><h2 class="accordion-header" id="panelsStayOpen-heading'+i+'"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse'+i+'" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style="background-color:#9a6bd3;color:black;font-size:25px;">'+ p[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue+'</button></h2><div style="color:#9a6bd3;font-size:20px;" id="panelsStayOpen-collapse'+i+'" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne"><div class="accordion-body">'+p[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue+'</div></div></div><br>');

	}
}

	

