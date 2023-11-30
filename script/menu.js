// Pour rendre le menu responsive
//---------------------------------------
var menu = document.querySelector(".menu");
var menuButton = document.querySelector(".menuButton");
var fermer = document.querySelector(".fermer");

// Lorsque le bouton du menu est cliqué, ajoute la classe "active" au menu pour l'afficher
menuButton.addEventListener("click", () => {
    menu.classList.add("active");
})
// Lorsque le bouton de fermeture est cliqué, supprime la classe "active" du menu pour le masquer
fermer.addEventListener("click", () => {
    menu.classList.remove("active");
})








