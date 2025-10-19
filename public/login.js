document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Valores asignados (puedes cambiarlos)
    const usuarioCorrecto = getelement('yazminbarcelo');
    const contraseñaCorrecta = getelement('Yazmin0418');
  
    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validar el usuario y la contraseña
    if (username === usuarioCorrecto && password === contraseñaCorrecta) {
      // Redirigir a otra página si son correctos
      window.location.href = "bienvenido.html"; // Cambia "bienvenido.html" por la página que desees
    } else {
      // Mostrar un mensaje de error si son incorrectos
      alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
  });

  function getelement(element) {
    return fetch(element)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data.valor)
        .catch(error => {
            console.error('Hubo un problema con la solicitud:', error);
        });
}

