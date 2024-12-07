// manejo de vartiables, operadores y prompts

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        try {

            const userName = document.getElementById("name").value.trim();
            if (!userName || typeof userName !== "string") {
                throw new Error("El nombre ingresado no es válido.");
            }
            const userEmail = document.getElementById("email").value.trim();
            if (!userEmail.includes("@")) {
                throw new Error("El correo electrónico debe contener un '@'.");
            }
            const userPhone = document.getElementById("phone").value.trim();
            if (isNaN(userPhone) || userPhone.length < 7) {
                throw new Error("El teléfono debe ser un número válido de al menos 7 dígitos.");
            }

            console.log("Información del usuario:");
            console.log(`Nombre: ${userName}`);
            console.log(`Email: ${userEmail}`);
            console.log(`Teléfono: ${userPhone}`);


            alert(`Información del usuario:\nNombre: ${userName}\nEmail: ${userEmail}\nTeléfono: ${userPhone}`);
        } catch (error) {
            console.error("Error al procesar los datos:", error.message);
            alert(`Error: ${error.message}`);
        }

        // Ejemplo de debugging
        try {
            debugger; // Pausa la ejecución para inspeccionar variables
            let exampleVariable; // No inicializada
            console.log(exampleVariable.length); // Esto lanzará un error
        } catch (error) {
            console.error("Error de debugging:", error.message);
        }
    });
});