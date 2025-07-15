# 📋 Registro de Alumnos

Este proyecto es una pequeña aplicación web para registrar alumnos validando sus datos. Permite ingresar nombre, apellido, DNI, teléfono y correo electrónico, verificando cada campo para asegurar que el formato sea correcto y que no se repitan registros.

---

## ✨ Funcionalidades

- ✅ Validación de nombre y apellido (solo letras y espacios).
- ✅ Validación del DNI (permite puntos y requiere al menos 8 dígitos numéricos).
- ✅ Validación del teléfono (solo números, debe tener 10 u 11 dígitos).
- ✅ Validación básica del formato de correo electrónico.
- ✅ Prevención de duplicados: no se permite registrar dos veces el mismo DNI, teléfono, email o combinación de nombre y apellido.
- ✅ Visualización dinámica de los alumnos registrados.
- ✅ Mensajes de alerta cuando algún dato es inválido.
- ✅ Confirmación visual al registrar un alumno exitosamente.

---

## 🛠️ Tecnologías utilizadas

- JavaScript ES6 (con módulos `import/export`)
- HTML y manipulación del DOM
- Expresiones regulares (RegEx) para validaciones

---

## 🚀 Cómo usar

1. Cloná este repositorio o descargá los archivos.
2. Abrí el archivo `index.html` en un navegador moderno (que soporte módulos ES6).
3. Completá el formulario con los datos del alumno.
4. Hacé clic en **Registrar**.
5. Si los datos son válidos, el alumno se mostrará en la lista.
6. Si hay errores o duplicados, se mostrará un mensaje con el motivo.

---

## 📁 Estructura del proyecto

```
📦 proyecto-registro-alumnos
├── index.html       # Interfaz web con formulario y lista
├── main.js          # Lógica principal y validaciones
├── clases.js        # Clase Alumno exportada como módulo
└── README.md        # Este archivo
```

---

## 💡 Mejoras futuras

- 💾 Guardar datos en `localStorage` para persistencia.
- ✏️ Agregar funciones para editar y eliminar alumnos.
- 🎨 Mejorar la interfaz con CSS y estilos personalizados.
- 📆 Incluir más campos como dirección o fecha de nacimiento.

---

## 👨‍💻 Autor

**Facundo Bohn**  
🔗 [https://github.com/FacundoBohn](https://github.com/FacundoBohn)

---

> ¡Gracias por revisar este proyecto! Cualquier sugerencia o aporte es bienvenido 🙌
