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
	datos["costo"] = document.getElementById("costo").value;
	datos["iva"] = document.getElementById("iva").value;
	datos["estado"] = document.getElementById("estado").value;
    datos["fecha"] = document.getElementById("fecha").value;
    datos["comentarios"] = document.getElementById("comentarios").value;
	return datos;
	}

function insertar(datos) {
	var tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
	console.log(tabla);
	var NuevoReg = tabla.insertRow(tabla.length);
	
	campo1 = NuevoReg.insertCell(0);
	campo1.innerHTML = datos.codigo;
	
	campo2 = NuevoReg.insertCell(1);	
	campo2.innerHTML = datos.nombre;

	campo3 = NuevoReg.insertCell(2);
	campo3.innerHTML = datos.costo;

    campo4 = NuevoReg.insertCell(3);
	campo4.innerHTML = datos.iva;

    campo5 = NuevoReg.insertCell(4);
	campo5.innerHTML = datos.estado;

    campo6 = NuevoReg.insertCell(5);
	campo6.innerHTML = datos.fecha;

    campo7 = NuevoReg.insertCell(6);
	campo7.innerHTML = datos.comentarios;

    campo8 = NuevoReg.insertCell(7);
	campo8.innerHTML = "<a onClick='onClick_Editar(this);'>Editar</a> <a  onClick='onClick_Borrar(this);'>Borrar</a>";	
}

function actualizar( datos ) {
	regSeleccionado.cells[0].innerHTML = datos.codigo;
	regSeleccionado.cells[1].innerHTML = datos.nombre;
	regSeleccionado.cells[2].innerHTML = datos.costo;
	regSeleccionado.cells[3].innerHTML = datos.iva;
	regSeleccionado.cells[4].innerHTML = datos.estado;
	regSeleccionado.cells[5].innerHTML = datos.fecha;
	regSeleccionado.cells[6].innerHTML = datos.comentarios;
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



/* function limpiar( ) {
	document.getElementById("codigo").value = "";
	document.getElementById("nombre").value = "";
	
	regSeleccionado = null;
	
	document.getElementById("codigo").focus();
} */

function existeCodigo( ) {
	var tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
	var codigoABuscar = document.getElementById("codigo").value = "";
	var existe = false;
	for(var i=0;i<tabla.rows.length;i++){
		if(tabla.rows[i].cells[0].innerHTML==codigoABuscar){
			alert("el codigo"+ codigoABuscar+"ya esta digitado");
			limpiar();
		}
	}
		
	}
	
	
	



