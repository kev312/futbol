
  <script>
    /*
      Función: buscarCamisetas()
      Descripción: Filtra las camisetas según el texto introducido en el cuadro de búsqueda.
      Recorre todas las camisetas y oculta aquellas que no coincidan con el texto buscado.
    */
    function buscarCamisetas() {
      let filtro = document.getElementById('searchBox').value.toLowerCase();
      let camisetas = document.querySelectorAll('.camiseta');

      camisetas.forEach(function(c) {
        let nombre = c.querySelector('p').innerText.toLowerCase();
        // Mostrar solo las camisetas que coincidan con el texto buscado
        if (nombre.includes(filtro)) {
          c.style.display = 'inline-block';
        } else {
          c.style.display = 'none';
        }
      });
    }

    /*
      Extra: Animación de parpadeo suave al pasar el ratón por encima de las imágenes
    */
    document.querySelectorAll('.camiseta img').forEach(function(img) {
      img.addEventListener('mouseover', function() {
        img.style.filter = 'drop-shadow(0 0 15px #00ff99)';
      });
      img.addEventListener('mouseout', function() {
        img.style.filter = 'none';
      });
    });
  </script>
