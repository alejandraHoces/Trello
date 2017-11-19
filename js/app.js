;(function(){

	var addForm = document.getElementById("addForm");
	var button = document.getElementById("button");
	var input = document.getElementById("input");
	var firstForm = document.getElementById("firstForm");
	var container = document.getElementById("container");
	var contador = 1;

	window.addEventListener("load", cargar);

	function cargar(){
		addForm.addEventListener("click", function(){
			hideElement(firstForm,addForm);
			input.focus();
			input.value="";
		});

		button.addEventListener("click", function(e){
			e.preventDefault();
			var contenedorLista = document.createElement("div");
			contenedorLista.classList.add("d-inlineblock");

			var remover = firstForm.parentNode;
			container.appendChild(contenedorLista);
			contenedorLista.appendChild(firstForm);
			contenedorLista.appendChild(addForm);
			remover.remove();

			var contenedorTarjetas = document.createElement("div");
			contenedorTarjetas.classList.add("trello-body");
			container.insertBefore(contenedorTarjetas,container.lastElementChild);
	        contenedorTarjetas.addEventListener("dragleave", dejarTrello);
	        contenedorTarjetas.addEventListener("dragover", arrastrarSobreTrello);
			contenedorTarjetas.addEventListener("drop", soltarTrello);
			contenedorTarjetas.addEventListener("dragend", terminaArrastrarTrello);

			hideElement(firstForm,addForm);

			crearElementos("div", "newlist", input.value, contenedorTarjetas);
			crearElementos("div", "add", "Añadir una tarjeta", contenedorTarjetas);

			var add = document.getElementsByClassName("add");
			add[add.length-1].addEventListener("click", function(){
				this.classList.add("d-none");
				newForm("form", "fomulario", contenedorTarjetas,this);
			});

		});
	}

	function hideElement(a,b){
			a.classList.toggle("d-none");
			b.classList.toggle("d-none");
	}

	function crearElementos(element, clase, texto, container){
		var div = document.createElement(element);
		div.classList.add(clase);
		div.innerHTML= texto;
		container.appendChild(div);
	}

	function newForm(form, clase, container, agregarTarjeta){
		var form = document.createElement(form);
		form.classList.add(clase);
		crearElementos("textarea","textarea","", form);
		crearElementos("button", "boton", "Añadir", form);
		container.appendChild(form);

		form.lastElementChild.addEventListener("click", function(e){
			e.preventDefault();
			agregarTarjeta.classList.remove("d-none");
			form.classList.add("d-none");

			var text = form.firstElementChild.value;

			var div = document.createElement("div");
			div.classList.add("text-cards");
			div.draggable = true;
	        div.setAttribute("id", "id" + contador);
			div.innerHTML = text;
			contador ++;
			div.addEventListener("dragstart", empiezaArrastrar);
			div.addEventListener("drop", soltar);
			div.addEventListener("dragend", terminaArrastrar);
			container.insertBefore(div, agregarTarjeta);

		});
	}


	function empiezaArrastrar(e) {
		e.dataTransfer.setData("text", this.id);
		this.classList.add("opacidad");

	}

	function arrastrarSobreTrello(e) {
		e.preventDefault();
		this.classList.add("bg");
	}

	function dejarTrello(e) {
		e.preventDefault();
		this.classList.remove("bg");
	}


	function soltar(e) {
	   e.preventDefault();

	}

	function soltarTrello(e) {
	   e.preventDefault();
	   var arrastrado = e.dataTransfer.getData("text");
	   var elemento = document.getElementById(arrastrado);
	   this.insertBefore(elemento, this.children[1]);
	}

	function terminaArrastrarTrello(e){
		this.classList.remove("bg");
	}

	function terminaArrastrar(e) {
		this.classList.remove("opacidad");
		this.classList.add("animated", "bounceIn");
	}

}());
