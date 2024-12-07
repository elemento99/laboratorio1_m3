console.log("js funcionando");

document.addEventListener("DOMContentLoaded", () => {

    fetch("dist/assets/doctors.json")  // Ajusta la ruta según la ubicación de tu archivo JSON
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo JSON");
            }
            return response.json();
        })
        .then(data => {
            // Verificar que los datos contienen la propiedad 'doctors'
            if (!data.doctors) {
                throw new Error("La propiedad 'doctors' no está definida en el JSON");
            }

            const { doctors } = data;  // Destructuring para acceder al array de doctores

            // Llenar el dropdown con los nombres de los doctores
            const doctorSelector = document.getElementById("doctorSelector");
            doctors.forEach(doctor => {
                const option = document.createElement("option");
                option.value = doctor.name;
                option.textContent = doctor.name;
                doctorSelector.appendChild(option);
            });

            // Función para mostrar los detalles de un doctor en el DOM
            const displayDoctorDetails = (doctor) => {
                const { name, specialty, experience, profile, availableHours, contact } = doctor;

                // Mostrar en el contenedor del DOM
                document.getElementById("doctorName").textContent = `Nombre: ${name}`;
                document.getElementById("doctorSpecialty").textContent = `Especialidad: ${specialty}`;
                document.getElementById("doctorExperience").textContent = `Años de experiencia: ${experience}`;
                document.getElementById("doctorProfile").textContent = `Perfil: ${profile}`;
                document.getElementById("doctorAvailableHours").textContent = `Horarios disponibles: ${availableHours}`;
                document.getElementById("doctorContact").textContent = `Contacto: ${contact}`;
            };

            // Listener para el cambio en el selector de doctor
            doctorSelector.addEventListener("change", (event) => {
                const selectedDoctorName = event.target.value;

                if (selectedDoctorName) {
                    const doctor = doctors.find(doc => doc.name === selectedDoctorName);
                    if (doctor) {
                        displayDoctorDetails(doctor);  // Mostrar detalles del doctor seleccionado
                    } else {
                        console.log("Doctor no encontrado");
                    }
                } else {
                    // Limpiar el contenedor si no se selecciona ningún doctor
                    document.getElementById("doctorDetails").innerHTML = "<h2>Detalles del Doctor</h2>";
                }
            });

            // Función para renderizar las cards de los doctores
            const renderDoctors = (filter = {}) => {
                const teamSection = document.querySelector(".team__members");
                teamSection.innerHTML = "";  // Limpiar la sección de doctores

                doctors.forEach(doctor => {
                    if (
                        (filter.specialties && !filter.specialties.includes(doctor.specialty)) ||
                        (filter.experience && doctor.experience <= filter.experience)
                    ) return;

                    const doctorCard = `
                        <article class="team__member" data-specialty="${doctor.specialty}" data-experience="${doctor.experience}">
                            <div class="card">
                                <img class="card-img-top team__photo" src="https://picsum.photos/seed/${doctor.name}/100" alt="Foto de ${doctor.name}">
                                <div class="card-body">
                                    <h3 class="team__name card-title">${doctor.name}</h3>
                                    <p class="team__specialty card-text">Especialidad: ${doctor.specialty}</p>
                                    <p class="team__profile card-text">Perfil: ${doctor.profile}</p>
                                    <p class="team__experience card-text">Años de experiencia: ${doctor.experience}</p>
                                    <button class="btn btn-info view-details">Ver detalles</button>
                                </div>
                            </div>
                        </article>
                    `;
                    teamSection.innerHTML += doctorCard;
                });

                // Añadir listeners a los botones de "Ver detalles"
                document.querySelectorAll(".view-details").forEach(button => {
                    button.addEventListener("click", (event) => {
                        const doctorName = event.target.closest(".team__member").querySelector(".team__name").textContent;
                        const doctor = doctors.find(doc => doc.name === doctorName);
                        if (doctor) {
                            displayDoctorDetails(doctor);  // Mostrar detalles en el contenedor
                        }
                    });
                });
            };

            // Función de filtrado
            const applyFilters = () => {
                const selectedSpecialties = Array.from(document.querySelectorAll(".filter-specialty:checked")).map(el => el.value);
                const filterYears = document.querySelector(".filter-years:checked") ? 5 : null;

                renderDoctors({ specialties: selectedSpecialties, experience: filterYears });
            };

            // Listeners para los filtros
            document.querySelectorAll(".filters input").forEach(input => {
                input.addEventListener("change", applyFilters);
            });

            // Inicializar renderizado de doctores
            renderDoctors();
        })
        .catch(error => {
            console.error("Error al cargar los datos de los doctores:", error);
        });
});
