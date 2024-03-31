//barra de busqueda
const searchInput = document.querySelector('.Busqueda input');
const Busqueda = document.querySelector('.Busqueda');

searchInput.addEventListener('input', function() {
    if (this.value.trim() !== '') {
      Busqueda.classList.add('expanded');
    } else {
      Busqueda.classList.remove('expanded');
    }
});
// sing up
let boton = document.getElementById("registrar");
let formulario = document.getElementById("forma");

boton.addEventListener("click", mostrarFormulario);

function mostrarFormulario() {
    formulario.style.display = "block";
}

// login
let boton_II = document.getElementById("acceder");
let formulario_I = document.getElementById("formulario_II");

boton_II.addEventListener("click", mostrarFormulario_II);

function mostrarFormulario_II() {
    formulario_I.style.display = "block";
}

// Obtener elementos del DOM
const accederBtn = document.getElementById('acceder');
const registrarBtn = document.getElementById('registrar');
const forma_I = document.getElementById('forma');
const forma_II = document.getElementById('formulario_II');

// Controlador de eventos para el botón "login"
accederBtn.addEventListener('click', () => {
  // Ocultar formulario de registro
  forma_I.style.display = 'none';
});

// Controlador de eventos para el botón "sing up"
registrarBtn.addEventListener('click', () => {
  // Ocultar formulario de inicio de sesión
  forma_II.style.display = 'none';
});

// Controlador de eventos para hacer clic en cualquier lugar de la página
document.addEventListener('click', (event) => {
  // Si el objetivo del evento no es el formulario de registro ni el formulario de inicio de sesión ni sus respectivos botones, ocultar los formularios
  if (event.target !== formulario && event.target !== formulario_I && event.target !== boton && event.target !== boton_II) {
    forma_I.style.display = 'none';
    forma_II.style.display = 'none';
  }
});

// Controlador de eventos para detener la propagación del evento click en los campos del formulario
formulario.addEventListener('click', (event) => {
  event.stopPropagation();
});

formulario_I.addEventListener('click', (event) => {
  event.stopPropagation();
});
// Obtener referencia a los campos de correo electrónico
const correoInput = document.getElementById('coreo');
const correoInput_II = document.getElementById('coreo_I');

// Agregar evento de entrada al primer campo de correo electrónico
correoInput.addEventListener('input', function() {
    const correo = correoInput.value;
    const esValido = correo.includes('@');
    const mensajeError = document.getElementById('errorCorreo');
    
    if (!esValido) {
        mensajeError.textContent = 'El correo electrónico es inválido';
    } else {
        mensajeError.textContent = ''; // Limpiar el mensaje de error si el correo es válido
    }
});

// Agregar evento de entrada al segundo campo de correo electrónico
correoInput_II.addEventListener('input', function() {
    const correo = correoInput_II.value;
    const esValido = correo.includes('@');
    const mensajeError = document.getElementById('errorCorreo_II');
    
    if (!esValido) {
        mensajeError.textContent = 'El correo electrónico es inválido';
    } else {
        mensajeError.textContent = ''; // Limpiar el mensaje de error si el correo es válido
    }
});
