document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}

/* parallax */

window.onscroll = function () {

    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("icono-corazon");
    var elemento2 = document.getElementById("icono2");

    elemento1.style.bottom = posicion * 0.15 + "px";

    elemento2.style.top = posicion * 0.15 + "px";
    




}