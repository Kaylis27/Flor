// Función para ocultar el título (tu poema) después de un tiempo determinado
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  
  if (titulo) {
    // Aplica la animación de desvanecimiento
    titulo.style.animation = "fadeOut 3s ease-in-out forwards"; 
    
    // Espera 3 segundos (lo que dura la animación) antes de quitarlo completamente
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000); 
  }
}


setTimeout(ocultarTitulo, 216000);
