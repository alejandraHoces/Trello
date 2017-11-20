/*//  Añadiendo funcion que contiene la seleccion de mis elementos
(function() {
  var addForm = document.getElementById('addForm');
	 var button = document.getElementById('button');
	 var input = document.getElementById('input');
	 var firstForm = document.getElementById('firstForm');
	 var container = document.getElementById('container');
	 var accountant = 1;
  // Añadiendo funcion que ejecuta despues de cargada la pagina
	 window.addEventListener('load', loadpage);
  // funcion creada para que al hacer click se enfoque el elemento
	 function loadpage() {
		 addForm.addEventListener('click', function() {
			 hideElement(firstForm, addForm);
			 input.focus();
			 input.value = '';
		 });
    // Añadiendo lista nueva y añadiendo estilos
		 button.addEventListener('click', function(event) {
			 event.preventDefault();
			 var listContainer = document.createElement('div');
			 listContainer.classList.add('d-inlineblock');

			 var remover = firstForm.parentNode;
			 container.appendChild(listContainer);
			 listContainer.appendChild(firstForm);
			 listContainer.appendChild(addForm);
			 remover.remove();
 */     // Añadiendo el evento Drag & Drop de las tarjetas para que pueda ser movida entre las listas creadas.
			 var containerCards = document.createElement('div');
			 containerCards.classList.add('trello-body');
			 container.insertBefore(containerCards, container.lastElementChild);
			 containerCards.addEventListener('dragleave', dejarTrello);
			 containerCards.addEventListener('dragover', arrastrarSobreTrello);
			 containerCards.addEventListener('drop', soltarTrello);
			 containerCards.addEventListener('dragend', terminaArrastrarTrello);

			 hideElement(firstForm, addForm);
      // Añadiendo nuevas clase,estilos y eventos a targetas
			 newElements('div', 'newlist', input.value, containerCards);
			 newElements('div', 'add', 'Añadir una tarjeta', containerCards);

			 var add = document.getElementsByClassName('add');
			 add[add.length - 1].addEventListener('click', function() {
				 this.classList.add('d-none');
				 newForm('form', 'fomulario', containerCards, this);
			 });
	/*	 });
	 }
  // Añadiendo estilos
	 function hideElement(a, b) {
		 a.classList.toggle('d-none');
		 b.classList.toggle('d-none');
	 }

	 function newElements(element, clase, texto, container) {
		 var div = document.createElement(element);
		 div.classList.add(clase);
		 div.innerHTML = texto;
		 container.appendChild(div);
	 }

	 function newForm(form, clase, container, agregarTarjeta) {
		 var form = document.createElement(form);
		 form.classList.add(clase);
		 newElements('textarea', 'textarea', '', form);
		 newElements('button', 'boton', 'Añadir', form);
		 container.appendChild(form);

		 form.lastElementChild.addEventListener('click', function(event) {
			 event.preventDefault();
			 agregarTarjeta.classList.remove('d-none');
			 form.classList.add('d-none');

			 var text = form.firstElementChild.value;

			 var div = document.createElement('div');
			 div.classList.add('text-cards');
			 div.draggable = true;
			 div.setAttribute('id', 'id' + accountant);
			 div.innerHTML = text;
			 accountant ++;
			 div.addEventListener('dragstart', empiezaArrastrar);
			 div.addEventListener('drop', soltar);
			 div.addEventListener('dragend', terminaArrastrar);
			 container.insertBefore(div, agregarTarjeta);
		 });
	 }

  // Agregando un estilo personalizado a la tarjeta cuando esté siendo arrastrada por el usuario.
	 function empiezaArrastrar(event) {
		 event.dataTransfer.setData('text', this.id);
		 this.classList.add('opacidad');
	 }
  // Agregando un estilo a la lista cuando la tarjeta esté pasando por encima (dragover).
	 function arrastrarSobreTrello(event) {
		 event.preventDefault();
		 this.classList.add('bg');
	 }

	 function dejarTrello(event) {
		 event.preventDefault();
		 this.classList.remove('bg');
	 }


	 function soltar(event) {
	   event.preventDefault();
	 }

	 function soltarTrello(event) {
	   event.preventDefault();
	   var arrastrado = event.dataTransfer.getData('text');
	   var elemento = document.getElementById(arrastrado);
	   this.insertBefore(elemento, this.children[1]);
	 }
  // Efecto del cuerpo de las Listas cuando se mueve la tarjeta sobre ellos
	 function terminaArrastrarTrello(event) {
		 this.classList.remove('bg');
	 }

	 function terminaArrastrar(event) {
		 this.classList.remove('opacidad');
	 }
}());
