# Proyecto Formulario Contacto - Clínica Médica

Este proyecto permite capturar información del usuario mediante prompts y mostrarla en la consola y en una alerta del navegador. También incluye validación de datos, manejo de errores y debugging.

## Descripción

La aplicación solicita tres datos al usuario:
1. **Nombre:** Una cadena de texto.
2. **Correo electrónico:** Una cadena que contenga un `@`.
3. **Teléfono:** Un número con al menos 7 dígitos.

Los datos ingresados se validan y se manejan errores mediante `try/catch`. Si ocurre un error (como un formato incorrecto), se informa al usuario mediante una alerta.

## Funcionamiento del Código

### Variables

Se utilizan las siguientes variables:
- **`const userName`**: Almacena el nombre del usuario. Su scope es limitado al bloque `try`.
- **`const userEmail`**: Almacena el correo del usuario. Tiene el mismo alcance que `userName`.
- **`const userPhone`**: Almacena el teléfono. Tiene el mismo scope que las variables anteriores.

### Operadores

Se usan operadores para validar los datos ingresados:
- **`===`**: Verifica que el correo contenga un `@`.
- **`isNaN`**: Comprueba que el teléfono sea un número.

### Manejo de Errores

El manejo de errores se implementa con un bloque `try/catch`:
- Si el nombre es vacío o no es un string, se lanza un error.
- Si el correo no contiene `@`, se lanza un error.
- Si el teléfono no es un número válido, se lanza un error.

### Debugging

Se utiliza `debugger` para pausar la ejecución y examinar las variables en el entorno del navegador.

Ejemplo:

debugger; // Pausa la ejecución
let exampleVariable;
console.log(exampleVariable.length); // Error: No se puede acceder a la propiedad "length" de undefine





### Proyecto Equipo Médico - Clínica Médica

Este proyecto muestra un listado de doctores con información sobre cada uno, permitiendo filtrar los doctores por especialidad y años de experiencia mediante casillas de verificación. El contenido se genera dinámicamente con JavaScript y el DOM se actualiza en tiempo real según los filtros seleccionados.

## Descripción

La aplicación muestra un listado de doctores con su nombre, especialidad, perfil y años de experiencia. Los usuarios pueden filtrar los doctores según:

1. **Especialidad**: Como Cardiología, Neurología, Pediatría y Oncología.
2. **Años de experiencia**: Los usuarios pueden seleccionar doctores con más de 5 años de experiencia.

El filtro permite al usuario seleccionar múltiples especialidades y el criterio de años de experiencia.

## Variables

- **`doctors`**: Arreglo que contiene los datos de los doctores, incluyendo nombre, especialidad, años de experiencia y perfil. Es accesible globalmente.
  
- **`selectedSpecialties`**: Arreglo local dentro de la función `applyFilters()`, que contiene las especialidades seleccionadas por el usuario.

- **`filterYears`**: Valor del filtro de "Años de experiencia", utilizado para filtrar doctores con más de 5 años de experiencia.

- **`doctorCard`**: Variable local dentro de `renderDoctors()`, que contiene el HTML de la tarjeta de cada doctor.

- **`teamSection`**: Contenedor del DOM donde se mostrarán las tarjetas de los doctores. Su scope está limitado a la función `renderDoctors()`.

- **`filterSpecialtyCheckboxes`** y **`filterYearsCheckboxes`**: Variables locales dentro de `applyFilters()` que almacenan las casillas de verificación correspondientes a las especialidades y años de experiencia.

- **`console.log()`**: Usado para depurar el flujo de ejecución del código.

## Funciones

1. **`renderDoctors()`**: Genera dinámicamente las tarjetas de cada doctor en el DOM. Recibe un parámetro `filter` para aplicar los filtros de especialidad y experiencia.
   - Si se seleccionan filtros de especialidad, solo se muestran los doctores que coinciden con esas especialidades.
   - Si se selecciona el filtro de "Más de 5 años de experiencia", solo se muestran los doctores con más de 5 años de experiencia.

2. **`applyFilters()`**: Maneja la lógica para obtener los filtros seleccionados por el usuario. Filtra los doctores basándose en las especialidades seleccionadas y si tienen más de 5 años de experiencia. Luego llama a `renderDoctors()` con los filtros aplicados.

## Uso de `forEach`

En el código se utiliza el método **`forEach()`** para recorrer el arreglo de doctores y generar las tarjetas de cada uno. El método `forEach` ejecuta una función en cada elemento del arreglo, permitiendo iterar de manera sencilla y clara. El código se ve de la siguiente manera:

`
doctors.forEach(doctor => {
    // Lógica para filtrar y generar el contenido del doctor
    const doctorCard = `
        <article class="team__member" data-specialty="${doctor.specialty}" data-experience="${doctor.experience}">
            <div class="card">
                <img class="card-img-top team__photo" src="https://picsum.photos/seed/${doctor.name}/100" alt="Foto de ${doctor.name}">
                <div class="card-body">
                    <h3 class="team__name card-title">${doctor.name}</h3>
                    <p class="team__specialty card-text">Especialidad: ${doctor.specialty}</p>
                    <p class="team__profile card-text">Perfil: ${doctor.profile}</p>
                    <p class="team__experience card-text">Años de experiencia: ${doctor.experience}</p>
                </div>
            </div>
        </article>
    `;
    teamSection.innerHTML += doctorCard;
});
