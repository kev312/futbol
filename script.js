<script>
// Al hacer clic en "Buscar", esta función filtra las camisetas según el texto del input
function buscarCamisetas() {
  // Obtener el término de búsqueda (en minúsculas para comparar)
  var filtro = document.getElementById('searchBox').value.toLowerCase();
  // Seleccionar todas las divs de camiseta
  var camisetas = document.querySelectorAll('.camiseta');
  camisetas.forEach(function(c) {
    // Obtener el texto descriptivo de la camiseta
    var nombre = c.querySelector('p').innerText.toLowerCase();
    // Si coincide con el filtro, mostrar; si no, ocultar
    if (nombre.includes(filtro)) {
      c.style.display = 'inline-block';
    } else {
      c.style.display = 'none';
    }
  });
}
</script>
