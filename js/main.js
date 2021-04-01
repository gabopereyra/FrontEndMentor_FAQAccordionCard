let elements = document.querySelectorAll(".question"); //Check all elements with the class"question"

const funcion = function (e) {
    if (e.target.id === "") {
        let parrafo = e.target.parentElement.parentElement.children[1];
        parrafo.classList.toggle("non_visible");
        let imagen = e.target;
        imagen.classList.toggle("arrow_visible");
        let titulo = e.target.parentElement;
        titulo.classList.toggle("titulo");
    } else {
        let parrafo = e.target.parentElement.children[1];
        parrafo.classList.toggle("non_visible");
        let imagen = e.target.children[0];
        imagen.classList.toggle("arrow_visible");
        let titulo = e.target;
        titulo.classList.toggle("titulo")
    }
} //End function, needed an if, to check if the user gave click on the arrow (img) or the question. Base on that applied the classes

elements.forEach(element => {
    element.addEventListener("click", funcion);
}) //Check if any element of the list with the class "question" is clicked 

