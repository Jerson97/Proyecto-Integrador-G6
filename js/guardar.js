function guardar() {
    db.collection("usuarios").add({
        nombre: document.getElementById('nombre').value,
        apellidos: document.getElementById('apellido').value,
        direccion: document.getElementById('inputAddress').value,
        correo: document.getElementById('exampleInputEmail1').value,
        telefono: document.getElementById('formGroupExampleInput').value,
        mensaje: document.getElementById('forInputmmensaje').value

    })
    .then((docRef) => {
        alert("registro exitoso")
    })
    .catch((error) => {
        alert("Error en el registro")
    });
}