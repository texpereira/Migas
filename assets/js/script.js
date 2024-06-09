window.onscroll = function() {
    var header = document.querySelector('header');
    if (window.pageYOffset > 50) { /* Ajusta esto a la altura de tu encabezado */
        header.classList.add('hide-header');
    } else {
        header.classList.remove('hide-header');
    }
};

function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Inicializar Swiper
var mySwiper = new Swiper('.swiper-container', {
    // Opciones de Swiper
    direction: 'horizontal',
    loop: true,

    // Si agregaste paginación
    pagination: {
        el: '.swiper-pagination',
    },

    // Si agregaste navegación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});