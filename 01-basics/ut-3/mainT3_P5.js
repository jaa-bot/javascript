// Obtén los botones por su ID
const btnClick = document.getElementById('btn-click');
const btnMouseEnter = document.getElementById('btn-mouse-enter');
const btnMouseUp = document.getElementById('btn-mouse-up');
const btnMouseLeave = document.getElementById('btn-mouse-leave');
const btnColorRojo = document.getElementById('btn-color-rojo');
const btnFondoRojo = document.getElementById('btn-fondo-rojo');
const btnFondoBlanco = document.getElementById('btn-fondo-blanco');
const btnTodosNegro = document.getElementById('btn-todos-negro');

// Agrega eventos a los botones
btnClick.addEventListener('click', () => {
  alert('Click event');
});

btnMouseEnter.addEventListener('mouseenter', () => {
  alert('Mouse enter event');
});

btnMouseUp.addEventListener('mouseup', () => {
  alert('Mouse up event');
});

btnMouseLeave.addEventListener('mouseleave', () => {
  alert('Mouse leave event');
});

btnColorRojo.addEventListener('click', () => {
  btnColorRojo.style.backgroundColor = 'red';
});

btnFondoRojo.addEventListener('click', () => {
  document.body.style.backgroundColor = 'red';
});

btnFondoBlanco.addEventListener('click', () => {
  document.body.style.backgroundColor = 'white';
});

btnTodosNegro.addEventListener('click', () => {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
  });
});
