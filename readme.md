Descripción

Este proyecto incluye dos archivos HTML:

    datos.html: Realiza operaciones con archivos JSON que contienen información sobre los doctores y los servicios médicos disponibles en un hospital. Incluye operaciones como clonación de objetos JSON, fusión de objetos JSON y recorrido de estos objetos.

    admin.html: Proporciona un panel de administración para gestionar la información de los doctores y servicios médicos, utilizando estructuras de datos como arreglos, pilas y colas.

Archivo datos.html
Descripción

La página datos.html realiza varias operaciones con archivos JSON, los cuales contienen información sobre los doctores y los servicios médicos disponibles en el hospital. Las operaciones incluyen:

    Clonación de Objetos JSON
    Fusión de Objetos JSON
    Recorrido de Objetos JSON

Funcionalidades
1. Clonación de un Objeto JSON

    Se crea una copia profunda de un objeto JSON (lista de doctores) usando JSON.parse(JSON.stringify()).
    Se modifica un campo en el objeto clonado (por ejemplo, cambiando el nombre de un doctor).
    El objeto clonado y modificado se muestra tanto en el navegador como en la consola.

2. Fusión de Objetos JSON

    Se fusiona la lista de doctores con la lista de servicios médicos, asignando a cada doctor los servicios correspondientes a su especialidad.
    El resultado de la fusión se muestra en formato JSON.

3. Recorrido de Objetos JSON

    Se recorre el objeto JSON de los doctores utilizando forEach y se muestra la lista de doctores con sus detalles en el navegador.

Uso de JSON.stringify()

    Tanto el objeto clonado como el objeto fusionado se convierten en cadenas JSON usando JSON.stringify() para mostrarlas de manera legible.

Archivos Utilizados

    doctors.json: Información sobre los doctores (nombre, especialidad, horarios, etc.).
    medical-services.json: Información sobre los servicios médicos (nombre, descripción, precio, etc.).

Instalación

    Asegúrate de tener los archivos JSON en el directorio dist/assets:
        doctors.json
        medical-services.json
    Abre el archivo datos.html en tu navegador y verifica que los datos se muestren correctamente en el navegador y en la consola.

Archivo admin.html
Descripción

El archivo admin.html es un panel de administración para gestionar la información de los doctores y servicios médicos. Utiliza estructuras de datos como arreglos, pilas y colas para facilitar la administración de los datos.
Funcionalidades
1. Arreglo (Array) de Doctores

Se usa un arreglo doctorArray para almacenar y gestionar la lista de doctores. Las operaciones disponibles son:

    Agregar un nuevo doctor: Usando el botón para agregar un doctor al final del arreglo.
    Eliminar el último doctor: Usando el botón para eliminar el último doctor del arreglo.
    Buscar un doctor por nombre: Permite buscar un doctor por nombre en el arreglo.

Código para el Arreglo:

// Inicialización del arreglo de doctores
let doctorArray = [...doctors]; // Copia del arreglo original de doctores

// Mostrar los doctores en el DOM
document.getElementById('doctor-array').textContent = JSON.stringify(doctorArray, null, 2);

// Agregar un nuevo doctor al arreglo
document.getElementById('add-doctor').addEventListener('click', () => {
    doctorArray.push({
        name: "Dr. Nuevo Doctor",
        specialty: "General",
        experience: 5,
        profile: "Nuevo doctor",
        availableHours: "9am - 5pm",
        contact: "nuevo@hospital.com"
    });
    document.getElementById('doctor-array').textContent = JSON.stringify(doctorArray, null, 2);
});

// Eliminar el último doctor del arreglo
document.getElementById('remove-doctor').addEventListener('click', () => {
    doctorArray.pop();  // Elimina el último doctor
    document.getElementById('doctor-array').textContent = JSON.stringify(doctorArray, null, 2);
});

// Buscar un doctor por nombre
document.getElementById('search-doctor').addEventListener('click', () => {
    const doctorName = prompt("Ingrese el nombre del doctor:");
    const foundDoctor = doctorArray.find(doctor => doctor.name.toLowerCase() === doctorName.toLowerCase());
    if (foundDoctor) {
        alert(`Doctor encontrado: ${JSON.stringify(foundDoctor, null, 2)}`);
    } else {
        alert("Doctor no encontrado.");
    }
});

2. Pilas (Stack) para Gestión de Citas

Utilizamos una pila citaStack para gestionar las citas, agregando y eliminando citas de acuerdo al orden de llegada.
Código para la Pila:

// Inicialización de la pila de citas
let citaStack = [];

// Agregar una nueva cita a la pila
document.getElementById('add-cita').addEventListener('click', () => {
    const paciente = prompt("Ingrese el nombre del paciente:");
    citaStack.push(paciente);  // Agrega la cita al final de la pila
    document.getElementById('cita-stack').textContent = JSON.stringify(citaStack, null, 2);
});

// Eliminar la última cita de la pila
document.getElementById('remove-cita').addEventListener('click', () => {
    const removedCita = citaStack.pop();  // Elimina la última cita
    alert(`Cita eliminada: ${removedCita}`);
    document.getElementById('cita-stack').textContent = JSON.stringify(citaStack, null, 2);
});

3. Colas (Queue) para Gestión de Pacientes

Se utiliza una cola pacienteQueue para gestionar a los pacientes en el orden en que llegan.
Código para la Cola:

// Inicialización de la cola de pacientes
let pacienteQueue = [];

// Agregar un nuevo paciente a la cola
document.getElementById('add-paciente').addEventListener('click', () => {
    const paciente = prompt("Ingrese el nombre del paciente:");
    pacienteQueue.push(paciente);  // Agrega el paciente al final de la cola
    document.getElementById('paciente-queue').textContent = JSON.stringify(pacienteQueue, null, 2);
});

// Eliminar el primer paciente de la cola
document.getElementById('remove-paciente').addEventListener('click', () => {
    const removedPaciente = pacienteQueue.shift();  // Elimina el primer paciente de la cola
    alert(`Paciente eliminado: ${removedPaciente}`);
    document.getElementById('paciente-queue').textContent = JSON.stringify(pacienteQueue, null, 2);
});

Instalación

    Asegúrate de tener los archivos JSON en el directorio dist/assets:
        doctors.json
        medical-services.json

    Abre el archivo admin.html en tu navegador.

    Verifica que los datos se muestren correctamente en el navegador y que las interacciones (agregar, eliminar, buscar) funcionen como se espera.

Algoritmos Implementados
1. Búsqueda Lineal

Implementa una búsqueda lineal para encontrar un doctor en el arreglo. La complejidad es O(n).
2. Ordenamiento por Selección

El ordenamiento por selección organiza el arreglo de doctores seleccionando el valor mínimo en cada iteración y colocándolo en la posición correcta. La complejidad es O(n²).
Resumen de Complejidad

    Búsqueda Lineal: O(n)
    Ordenamiento por Selección: O(n²)

Para arreglos más grandes, se recomienda el uso de búsqueda binaria y algoritmos de ordenamiento más eficientes como quicksort o mergesort.