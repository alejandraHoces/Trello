// Estableciendo variables

var pageContainer = document.getElementById("container");
var boards = document.getElementById("boards");
var addList = document.getElementById("add-list");
var mainBoard = document.getElementById("main-board");
var titleList = document.getElementById("title-list");
var buttonSave = document.getElementById("save");
var buttonClose = document.getElementById("close");
var toDoList = document.getElementById("todo-list");
var buttonAdd = document.getElementById("add");

// Para que cuando se haga click en la ventana, #main-board vuelva a esconderse

window.addEventListener("mouseup", function(event) {
    if (event.target !== mainBoard && event.target !== titleList && event.target !== buttonSave) {
        mainBoard.classList.add("invisible");
        mainBoard.classList.remove("visible");
        addList.classList.add("visible");
        addList.classList.remove("invisible");
    }
});

// Función que remplazará #add-list por #main-board
addList.addEventListener("click", function() {
    addList.classList.add("invisible");
    mainBoard.classList.remove("invisible");
    mainBoard.classList.add("visible");
    addList.classList.remove("visible");

    // Función para guardar una nueva lista
    buttonSave.addEventListener("click", function() {
        event.preventDefault();
        var titleBoard = document.getElementById("title-list").value;
        // Limpiar el input
        document.getElementById("title-list").value = "";        

        if (titleBoard !== "") {
            // A continuación se crea el nuevo elemento y su título
            var aNewBoard = document.createElement("form");
            var containerTitle = document.createElement("h2");
            var textTitle = document.createTextNode(titleBoard);
            containerTitle.appendChild(textTitle);
            aNewBoard.appendChild(containerTitle);
            aNewBoard.classList.add("new-board");
            boards.insertBefore(aNewBoard, mainBoard);

            // Determinar una ID que corresponda a la ubicación del elemento padre
            var myId = document.getElementsByTagName("form").length - 1;
            aNewBoard.setAttribute("id", myId);

            // Aquí se creará el input
            var newInput = document.createElement("input");
            newInput.setAttribute("placeholder", "Añadir una tarjeta...");
            aNewBoard.appendChild(newInput);

            // Y acá, las funciones del input
            newInput.addEventListener("click", function() {
                event.preventDefault();

                // Que desaparezca el input. Se usa this para referirse a este elemento
                this.style.display = "none";

                var textArea = document.createElement("textarea");
                aNewBoard.appendChild(textArea);
                textArea.focus();

                // Aquí se creará el botón de añadir
                var textAddButton = document.createTextNode("Añadir");
                var newButton = document.createElement("button");
                newButton.appendChild(textAddButton);
                newButton.classList.add("button");
                aNewBoard.appendChild(newButton);

                // Y aquí su función
                newButton.addEventListener("click", function() {
                    event.preventDefault();
                    // Si el contenido del área de texto está vacío, no se creará un nuevo item
                    if (textArea.value !== "") {
                        var containerItem = document.createElement("p");
                        var contentItem = document.createTextNode(textArea.value);

                        containerItem.classList.add("item");
                        containerItem.appendChild(contentItem);
                        aNewBoard.insertBefore(containerItem, newInput);

                        // Limpiando el área de texto
                        textArea.value = "";
                        textArea.focus();
                    }
                });

                // Aquí se creará el botón de cerrar
                var newCloseButton = document.createElement("button");
                var spanClose = document.createElement("span");
                newCloseButton.appendChild(spanClose);
                spanClose.classList.add("icon-close");
                newCloseButton.classList.add("closing-button");
                aNewBoard.appendChild(newCloseButton);

                // Y aquí su función
                newCloseButton.addEventListener("click", function() {
                    event.preventDefault();
                    aNewBoard.removeChild(textArea);
                    aNewBoard.removeChild(newButton);
                    aNewBoard.removeChild(this);
                    newInput.style.display = "inline-block";
                });
            });

        }
    });

    // Función para cerrar #main-board y que aparezca nuevamente #add-list
    buttonClose.addEventListener("click", function() {
        mainBoard.classList.remove("visible");
        mainBoard.classList.add("invisible");
        addList.classList.remove("invisible");
        addList.classList.add("visible");
    });
});

// Función para que la estrella se vuelva amarilla al clickearla

function yellowStar() {

    var star = document.getElementById("star");
    star.classList.toggle("yellow")
};

