var mem0 = "0";


function numero(tecla){

	if(mem0 == "0"){
		mem0 = tecla;
	} else {
		mem0 = mem0 + tecla;
	}
	
	document.getElementById("entrada").innerHTML = mem0;

}