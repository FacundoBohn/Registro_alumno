// Importa la clase Alumno desde el archivo clases.js
import { Alumno } from './clases.js';

// Array donde se guardarán los objetos Alumno registrados
let guardarAlumnos = [];

// --- Función que valida que el nombre/apellido contenga solo letras y espacios ---
function validarNombre(nombre) {
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return soloLetras.test(nombre);
}

// --- Función que valida que el DNI tenga solo números y entre 7 y 9 dígitos ---
function validarDNI(dni) {
  // Acepta solo números y puntos
  const formatoValido = /^[0-9.]+$/;
  if (!formatoValido.test(dni)) return false;

  // Elimina los puntos para contar solo los números
  const numerosSinPuntos = dni.replace(/\./g, '');

  // Debe tener al menos 8 dígitos numéricos
  return numerosSinPuntos.length >= 8;
}


// --- Función que valida que el teléfono tenga solo números y tenga 10 o 11 dígitos ---
function validarTelefono(telefono) {
  const soloNumeros = /^[0-9]+$/;
  return soloNumeros.test(telefono) && (telefono.length === 10 || telefono.length === 11);
}

// --- Función que valida el formato básico de un email ---
function validarEmail(email) {
  const verificarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return verificarEmail.test(email);
}

// --- Función que muestra en pantalla la lista actualizada de alumnos ---
function mostrarAlumnos() {
  // Selecciona el elemento ul donde se listan los alumnos
  const lista = document.querySelector('#lista-alumnos');
  lista.innerHTML = ""; // Limpia la lista para evitar duplicados

  // Recorre el array guardarAlumnos y crea un <li> por cada alumno
  for (let i = 0; i < guardarAlumnos.length; i++) {
    const alumno = guardarAlumnos[i];
    const item = document.createElement("li");
    item.textContent = `${alumno.nombre} ${alumno.apellido} - DNI: ${alumno.dni} - Email: ${alumno.email} - Teléfono: ${alumno.telefono}`;
    lista.appendChild(item);
  }
}

// --- Evento que se activa al enviar el formulario de registro ---
document.getElementById("form-alumno").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario recargue la página

  // Obtiene y limpia los valores ingresados en los campos del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const dni = document.getElementById("dni").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const email = document.getElementById("email").value.trim();

  // Valida el nombre y apellido, muestra alerta si no son válidos
  if (!validarNombre(nombre) || !validarNombre(apellido)) {
    alert("Nombre y apellido inválidos. Solo se permiten letras y espacios.");
    return; // Termina la ejecución para que el usuario corrija
  }

  // Valida el DNI, alerta si no es válido
  if (!validarDNI(dni)) {
    alert("DNI inválido. Debe contener solo números (puede incluir puntos) y tener al menos 8 dígitos.");

    return;
  }

  // Valida el teléfono, alerta si no es válido
  if (!validarTelefono(telefono)) {
    alert("Teléfono inválido. Debe contener solo números y tener 10 o 11 dígitos.");
    return;
  }

  // Valida el email, alerta si no es válido
  if (!validarEmail(email)) {
    alert("Email inválido.");
    return;
  }

  // Verifica si ya existe un alumno con mismo DNI, teléfono, email o nombre completo
const yaExiste = guardarAlumnos.some(alumno =>
  alumno.dni === dni ||
  alumno.telefono === telefono ||
  alumno.email.toLowerCase() === email.toLowerCase() ||
  (alumno.nombre.toLowerCase() === nombre.toLowerCase() && alumno.apellido.toLowerCase() === apellido.toLowerCase())
);

if (yaExiste) {
  alert("Ya hay un alumno registrado con alguno de estos datos: DNI, teléfono, email o nombre completo.");
  return;
}
  // Si todas las validaciones pasan, crea un nuevo objeto Alumno
  const nuevo = new Alumno(nombre, apellido, email, telefono, dni);
  // Lo agrega al array guardarAlumnos
  guardarAlumnos.push(nuevo);

  // Actualiza la lista visible de alumnos en pantalla
  mostrarAlumnos();

  // Limpia el formulario para un nuevo registro
  document.getElementById("form-alumno").reset();

  // Muestra un mensaje de confirmación al usuario
  alert(`Alumno registrado exitosamente: ${nombre} ${apellido}, DNI ${dni}, Email: ${email}`);
});

if (location.hostname === "localhost") {
  window.guardarAlumnos = guardarAlumnos;
}