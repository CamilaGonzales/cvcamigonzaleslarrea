let menuVisible = false; // Variable para controlar la visibilidad del menú

// Función que oculta o muestra el menú al alternar el valor de menuVisible
function mostrarOcultarMenu(){
    if(menuVisible){ // Si el menú está visible
        document.getElementById("nav").classList = ""; // Quita la clase "responsive" para ocultar el menú
        menuVisible = false; // Actualiza el estado a "no visible"
    }else{ // Si el menú no está visible
        document.getElementById("nav").classList = "responsive"; // Agrega la clase "responsive" para mostrar el menú
        menuVisible = true; // Actualiza el estado a "visible"
    }
}

// Función que oculta el menú una vez que se selecciona una opción
function seleccionar(){
    document.getElementById("nav").classList = ""; // Oculta el menú al quitar la clase "responsive"
    menuVisible = false; // Actualiza el estado a "no visible"
}

// Función que aplica animaciones de progreso a las habilidades cuando están en el viewport
function efectoHabilidades(){
    var skills = document.getElementById("skills"); // Obtiene el elemento contenedor de las habilidades
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top; // Calcula la distancia del elemento al viewport
    if(distancia_skills >= 300){ // Si el elemento está dentro del rango visible
        let habilidades = document.getElementsByClassName("progreso"); // Obtiene todos los elementos con clase "progreso"
        habilidades[0].classList.add("htmlcss"); // Aplica la animación a la primera habilidad
        habilidades[1].classList.add("python"); // Aplica la animación a la segunda habilidad
        habilidades[2].classList.add("lenc"); // Aplica la animación a la tercera habilidad
    }
}

// Detecta el evento de desplazamiento en la ventana para aplicar las animaciones de habilidades
window.onscroll = function(){
    efectoHabilidades(); // Llama a la función efectoHabilidades en cada scroll
}