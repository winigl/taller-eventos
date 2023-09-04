var divconteiner = document.getElementById('myDiv')
var boton = document.getElementById('myButtom');

divconteiner.style.padding = ('5px')
divconteiner.style.backgroundColor = ('green')

divconteiner.addEventListener("click" , function() {
    alert('Hola soy el div!');
});

boton.addEventListener("click", function(event) {
    alert('Hola!');
    event.stopPropagation();
  });