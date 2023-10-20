const screen = document.getElementById('screen');
const buttons = document.getElementById('buttons');

buttons.addEventListener('click', (e) => {
    e.preventDefault();
    const key = e.target.getAttribute('data-key');
    if (key === 'clear') {
        screen.textContent = '';
    } else if (key === 'equal') {
        try {
            screen.textContent = eval(screen.textContent);
        } catch (error) {
            alert('Error en la expresión matemática');
            screen.textContent = '';
        }
    } else {
        screen.textContent += key;
    }
});
