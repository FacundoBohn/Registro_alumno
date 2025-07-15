/*tengo que hacer un registro de alumno, validar si los nombres son strings, si pone un numero
que arroje error y vuelva a pedir los datos
registrarAlumno()
    ↓
Pedir nombre → validarNombre(nombre) → si no es válido → volver a pedir
    ↓
Pedir apellido → validarApellido()
    ↓
Pedir DNI → validarDNI()
    ↓
Pedir email → validarEmail()
    ↓
Pedir teléfono → validarTelefono()
    ↓
Todos válidos → mostrar mensaje: "Alumno registrado exitosamente: Juan Pérez, DNI 12345678, Email: juan@mail.com"
*/
// --- Funciones de validación ---
import { Alumno } from './clases.js';

let guardarAlumnos = [];

// --- Validaciones ---
function validarNombre(nombre) {
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return soloLetras.test(nombre);
}

function validarDNI(dni) {
  const soloNumeros = /^[0-9]+$/;
  return soloNumeros.test(dni) && dni.length >= 7 && dni.length <= 9;
}

function validarTelefono(telefono) {
  const soloNumeros = /^[0-9]+$/;
  return soloNumeros.test(telefono) && (telefono.length === 10 || telefono.length === 11);
}

function validarEmail(email) {
  const verificarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return verificarEmail.test(email);
}

// --- Mostrar alumnos en pantalla ---
function mostrarAlumnos() {
  const lista = document.querySelector('#lista-alumnos');
  lista.innerHTML = ""; // limpia la lista antes de mostrar de nuevo

  for (let i = 0; i < guardarAlumnos.length; i++) {
    const alumno = guardarAlumnos[i];
    const item = document.createElement("li");
    item.textContent = `${alumno.nombre} ${alumno.apellido} - DNI: ${alumno.dni} - Email: ${alumno.email} - Teléfono: ${alumno.telefono}`;
    lista.appendChild(item);
  }
}

// --- Evento del formulario ---
document.getElementById("form-alumno").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const dni = document.getElementById("dni").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!validarNombre(nombre) || !validarNombre(apellido)) {
    alert("Nombre y apellido inválidos. Solo se permiten letras y espacios.");
    return;
  }

  if (!validarDNI(dni)) {
    alert("DNI inválido. Debe contener solo números y tener entre 7 y 9 dígitos.");
    return;
  }

  if (!validarTelefono(telefono)) {
    alert("Teléfono inválido. Debe contener solo números y tener 10 o 11 dígitos.");
    return;
  }

  if (!validarEmail(email)) {
    alert("Email inválido.");
    return;
  }

  const nuevo = new Alumno(nombre, apellido, email, telefono, dni);
  guardarAlumnos.push(nuevo);

  mostrarAlumnos();
  document.getElementById("form-alumno").reset();

  alert(`Alumno registrado exitosamente: ${nombre} ${apellido}, DNI ${dni}, Email: ${email}`);
});
