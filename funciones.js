var mem0 = "0";
var mem1;
var valor = 0;
var opKey;
var nuevo=0;


function numero(tecla){

	if(nuevo == 0){
		mem0 = tecla;
		nuevo = 1;
		
	} else {
		mem0 = mem0 + tecla;
	}
	
	document.getElementById("entrada").innerHTML = mem0;

}

function operacion(tecla){

	if (mem1 == undefined) {
		mem1 = mem0 + " " + tecla + " ";
		document.getElementById('historial').innerHTML = mem1;
		opKey = tecla;

		valor = parseFloat(mem0);

	} else {
		mem1 = mem1 + mem0 + " " + tecla + " ";
		document.getElementById('historial').innerHTML = mem1;

		if (opKey == "+"){
			valor = valor + parseFloat(mem0);
		} else {
			if (opKey == "-") {
				valor = valor - parseFloat(mem0);
			} else{
				if (opKey == "*") {
					valor = valor * parseFloat(mem0);
				} else{
					valor = valor / parseFloat(mem0);
				};
			};
		};

		opKey = tecla;

	};

	nuevo = 0;
	document.getElementById("entrada").innerHTML = valor;

}