function enviarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    // Datos del formulario
    var formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('email', email);

    // Realizar la solicitud HTTP POST a Google Sheets
    fetch('URL_DE_TU_SCRIPT_DE_GOOGLE_SHEETS', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            alert("Gracias por enviar el formulario. Te contactaremos pronto.");
        } else {
            alert("Hubo un error al enviar el formulario. Por favor, intenta nuevamente.");
        }
    })
    .catch(function(error) {
        console.error("Error:", error);
    });
}
