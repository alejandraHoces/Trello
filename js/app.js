window.addEventListener('load', function(event){
  var newInput =document.getElementsByClassName('inputtext')[0];
   function newform() {
     var createForm = document.createElement('form');
     var createinput = document.createElement('INPUT')
     createinput.setAttribute('type', 'text');
     createinput.setAttribute('value', 'Añadir una lista...');

     var createbutton = document.createElement("BUTTON");
     var text = document.createTextNode("guardar");
      createbutton.appendChild(text);
      createForm.innerHTML = createinput + '<br>' + createbutton;
   }
})
newInput.addEventListener('click',newform);
