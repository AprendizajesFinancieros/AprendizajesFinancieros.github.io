function validarEdad() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const grado = document.getElementById('grado').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;


    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const diferenciaMeses = hoy.getMonth() - fechaNac.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }

    if (edad >= 18) {
      alert('¡Bienvenido/a, ' + nombre + '! Puedes acceder a la página.');
      window.location.href = 'informacion.html';
    } else {
      alert('Lo siento, ' + nombre + '. Debes ser mayor de 18 años para acceder a la página.');
    }
  }

  const formulario = document.getElementById('formularioRegistro');
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    validarEdad();
  });