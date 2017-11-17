function constructor(lista,boton,texto) {
	this.lista = lista
	this.boton = boton
	this.texto = texto
}

	var lista = document.getElementById("inputtext");


  lista.addEventListener("click",function(){
  		var cuadroTexto = document.createElement("textarea");
  		cuadroTexto.setAttribute("class", "el-texto");
  		var boton = document.createElement("button");
  		boton.setAttribute("class","el-boton")
  		var addBoton = document.createTextNode("Agregar");
  		var cont = document.getElementsByClassName("contenedor")[0];
  		cont.appendChild(cuadroTexto);
  		cont.appendChild(boton);
  		boton.appendChild(addBoton);

      });
