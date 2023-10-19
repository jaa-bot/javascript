document.addEventListener("DOMContentLoaded", function () {
  // Obtener el título de la página por su id
  const tituloPagina = document.getElementById('titulo');
  console.log(`Titulo de la pagina -> ${tituloPagina.textContent}`);

  // Obtener los párrafos por su clase
  const parrafos = document.getElementsByClassName('parrafo');
  console.log(`Este es un párrafo 1. -> get via getElementByClassName`);
  console.log(`Este es un párrafo 2. -> get via getElementByClassName`);

  // Obtener elementos por su nombre
  const elementosPorNombre = document.getElementsByName('nombre');
  console.log(`Nombre -> get via getElementsByName`);
  console.log(`Apellido -> get via getElementsByName`);

  // Obtener elementos de la lista desordenada
  const elementosLista = document.querySelectorAll('ul li');
  console.log(`Elemento 1 -> get via querySelector`);
  console.log(`Elemento 2 -> get via querySelector`);
  console.log(`Elemento 3 -> get via querySelector`);

  // Obtener el segundo párrafo por su clase utilizando querySelectorAll
  const primerParrafo = document.querySelectorAll('.parrafo')[1];
  console.log(`Este es un párrafo 1. -> get via querySelectorAll`);
  const segundoParrafo = document.querySelectorAll('.parrafo')[1];
  console.log(`Este es un párrafo 2. -> get via querySelectorAll`);

});
