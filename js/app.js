;(function() {
  var addForm = document.getElementById('addForm');
	 var button = document.getElementById('button');
	 var input = document.getElementById('input');
	 var firstForm = document.getElementById('firstForm');
	 var container = document.getElementById('container');
	 var accountant = 1;

	 window.addEventListener('load', loadpage);

	 function loadpage() {
		 addForm.addEventListener('click', function() {
			 hideElement(firstForm, addForm);
			 input.focus();
			 input.value = '';
		 });

		 button.addEventListener('click', function(e) {
			 e.preventDefault();
			 var listContainer = document.createElement('div');
			 listContainer.classList.add('d-inlineblock');

			 var remover = firstForm.parentNode;
			 container.appendChild(listContainer);
			 listContainer.appendChild(firstForm);
			 listContainer.appendChild(addForm);
			 remover.remove();

			 var containerCards = document.createElement('div');
			 containerCards.classList.add('trello-body');
			 container.insertBefore(containerCards, container.lastElementChild);
			 containerCards.addEventListener('dragleave', dejarTrello);
			 containerCards.addEventListener('dragover', arrastrarSobreTrello);
			 containerCards.addEventListener('drop', soltarTrello);
			 containerCards.addEventListener('dragend', terminaArrastrarTrello);

			 hideElement(firstForm, addForm);

			 newElements('div', 'newlist', input.value, containerCards);
			 newElements('div', 'add', 'Añadir una tarjeta', containerCards);

			 var add = document.getElementsByClassName('add');
			 add[add.length - 1].addEventListener('click', function() {
				 this.classList.add('d-none');
				 newForm('form', 'fomulario', containerCards, this);
			 });
		 });
	 }

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

		 form.lastElementChild.addEventListener('click', function(e) {
			 e.preventDefault();
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


	 function empiezaArrastrar(e) {
		 e.dataTransfer.setData('text', this.id);
		 this.classList.add('opacidad');
	 }

	 function arrastrarSobreTrello(e) {
		 e.preventDefault();
		 this.classList.add('bg');
	 }

	 function dejarTrello(e) {
		 e.preventDefault();
		 this.classList.remove('bg');
	 }


	 function soltar(e) {
	   e.preventDefault();
	 }

	 function soltarTrello(e) {
	   e.preventDefault();
	   var arrastrado = e.dataTransfer.getData('text');
	   var elemento = document.getElementById(arrastrado);
	   this.insertBefore(elemento, this.children[1]);
	 }
	 function terminaArrastrarTrello(e) {
		 this.classList.remove('bg');
	 }

	 function terminaArrastrar(e) {
		 this.classList.remove('opacidad');
		 this.classList.add('animated', 'bounceIn');
	 }
}());
