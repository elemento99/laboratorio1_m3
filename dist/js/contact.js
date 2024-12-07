document.addEventListener("DOMContentLoaded", () => {
    const doctorSelect = document.getElementById("doctor");
    const appointmentForm = document.getElementById("appointmentForm");  
    const appointmentsList = document.getElementById("appointments-list");

    function loadDoctors() {
        fetch("dist/assets/doctors.json")  
            .then(response => response.json())
            .then(data => {
                const doctors = data.doctors;
                doctorSelect.innerHTML = '<option value="">Seleccione un doctor</option>'; 

                
                doctors.forEach(doctor => {
                    const option = document.createElement("option");
                    option.value = doctor.name;
                    option.textContent = doctor.name;
                    doctorSelect.appendChild(option);
                });
            })
            .catch(error => {
                console.error('Error al cargar los doctores:', error);
            });
    }

    
    function displayAppointment(appointment) {
        const appointmentElement = document.createElement("div");
        appointmentElement.classList.add("appointment");
        appointmentElement.innerHTML = `
            <h4>Cita Agendada</h4>
            <p><strong>Doctor:</strong> ${appointment.doctor}</p>
            <p><strong>Fecha y Hora:</strong> ${appointment.date}</p>
            <p><strong>Especialidad:</strong> ${appointment.specialty}</p>
        `;
        appointmentsList.appendChild(appointmentElement);
    }

   
    appointmentForm.addEventListener("submit", function(event) {
        event.preventDefault();

      
        const doctorName = doctorSelect.value;
        const date = document.getElementById("appointment-date").value; 

        
        if (!doctorName || !date) {
            alert("Por favor, seleccione un doctor y una fecha.");
            return;
        }

        
        fetch("dist/assets/doctors.json")  
            .then(response => response.json())
            .then(data => {
                const doctor = data.doctors.find(d => d.name === doctorName);
                if (doctor) {
                    // Crear el objeto de la cita
                    const appointment = {
                        doctor: doctor.name,
                        date: date,
                        specialty: doctor.specialty,
                    };

                    
                    displayAppointment(appointment);

               
                    appointmentForm.reset();
                } else {
                    console.error('Doctor no encontrado');
                }
            })
            .catch(error => {
                console.error('Error al obtener los detalles del doctor:', error);
            });
    });


    loadDoctors();
});
