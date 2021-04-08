var regSeleccionado = null;

function enviar() {
		var datos = leerDatos();

	
		if (regSeleccionado==null) {
			insertar(datos);
		}
		else {
			actualizar(datos);
	    }
			
		limpiar();
}

function leerDatos() {
	var datos = { };
	datos["codigo"] = document.getElementById("codigo").value;
	datos["nombre"] = document.getElementById("nombre").value;
	
	/*
	datos["costo"] = document.getElementById("costo").value;
	datos["iva"] = document.getElementById("iva").value;
	*/
	return datos;
	}

function insertar(datos) {
	var tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
	
	var NuevoReg = tabla.insertRow(tabla.length);
	
	campo1 = NuevoReg.insertCell(0);
	campo1.innerHTML = datos.codigo;
	
	campo2 = NuevoReg.insertCell(1);
	campo2.innerHTML = datos.nombre;

    campo3 = NuevoReg.insertCell(2);
	campo3.innerHTML = "<a onClick='onClick_Editar(this);'>Editar</a> <a  onClick='onClick_Borrar(this);'>Borrar</a>";
}

function actualizar( datos ) {
	regSeleccionado.cells[0].innerHTML = datos.codigo;
	regSeleccionado.cells[1].innerHTML = datos.nombre;
}

function onClick_Editar( reg ) {
	regSeleccionado = reg.parentElement.parentElement;
	document.getElementById("codigo").value = regSeleccionado.cells[0].innerHTML;
	document.getElementById("nombre").value = regSeleccionado.cells[1].innerHTML;
}

function onClick_Borrar( reg ) {
	regSeleccionado = reg.parentElement.parentElement;
	document.getElementById("tabla").deleteRow( regSeleccionado.rowIndex);
	limpiar();
}



function limpiar( ) {
	document.getElementById("codigo").value = "";
	document.getElementById("nombre").value = "";
	
	regSeleccionado = null;
	
	document.getElementById("codigo").focus();
}

function existeCodigo( ) {
	var tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
	var codigoABuscar = document.getElementById("codigo").value = "";
	var existe = false;
	
	// Debe definir la estructura para buscar el codigo en el arrego tabla.
	
	return existe;
	
	
}


