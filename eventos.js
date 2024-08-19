// Esperar a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    // Seleccionar el div por su ID
    const miDiv = document.getElementById('miDiv');
    
    // Agregar un manejador de eventos para el click
    miDiv.addEventListener('click', () => {
        alert('¡Hola! Soy el div');
    });
});
