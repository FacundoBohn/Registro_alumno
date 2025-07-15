# Registro de Alumnos

Este proyecto es una pequeña aplicación web para registrar alumnos validando sus datos. Permite ingresar nombre, apellido, DNI, teléfono y correo electrónico, validando cada campo para asegurar que el formato sea correcto.

---

## Funcionalidades

- Validación de nombre y apellido para que contengan solo letras y espacios.
- Validación del DNI para que contenga solo números y tenga entre 7 y 9 dígitos.
- Validación del teléfono para que contenga solo números y tenga 10 o 11 dígitos.
- Validación básica del formato de correo electrónico.
- Muestra una lista actualizada de los alumnos registrados.
- Mensajes de alerta cuando algún dato es inválido.
- Confirmación visual al registrar un alumno exitosamente.

---

## Tecnologías utilizadas

- JavaScript ES6 con módulos (import/export)
- HTML y DOM para interacción con el formulario y la lista
- Validaciones con expresiones regulares (regex)

---

## Cómo usar

1. Abrir el archivo `index.html` en un navegador moderno que soporte módulos ES6.
2. Completar el formulario con los datos del alumno.
3. Al hacer clic en "Registrar", el sistema validará los datos.
4. Si todo es correcto, el alumno se agregará a la lista visible debajo del formulario.
5. En caso de error, se mostrará un mensaje indicando qué campo corregir.

---

## Estructura del proyecto

- `index.html`: archivo HTML con el formulario y lista.
- `main.js`: script principal que maneja validaciones, eventos y muestra de datos.
- `clases.js`: archivo que contiene la clase `Alumno`.
- `README.md`: documentación del proyecto.

---

## Mejoras futuras

- Almacenar los datos en almacenamiento local (localStorage) para persistencia.
- Agregar funcionalidad para editar y eliminar alumnos.
- Mejorar interfaz con estilos CSS y mensajes más amigables.
- Validar otros campos como dirección o fecha de nacimiento.

---

## Autor

Facundo Bohn - (https://github.com/FacundoBohn)

---

¡Gracias por revisar este proyecto! Cualquier sugerencia o aporte es bienvenido.
