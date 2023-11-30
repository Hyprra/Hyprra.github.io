// Affichage de la partie cachée dans la section "À propos"
//-------------------------------------------
var objButton = document.querySelector(".Objbutton");
var objfermer = document.querySelector(".Objfermer");

//Lorsque le bouton est cliqué, change le style d'affichage de l'élément "#obj" en "block" pour l'afficher
objButton.addEventListener("click", () => {
    $("#obj").css("display", "block")
    $("#obj").css("animation", "fadeIn 1s")
    $("presentation").css("animation", "fadeOut 1s")
    $("#presentation").css("display", "none")
})

// Lorsque le bouton de fermeture est cliqué, change le style d'affichage de l'élément "#obj" en "none" pour le masquer
objfermer.addEventListener("click", () => {
    $("#obj").css("display", "none");
    $("#presentation").css("display", "block");
    $("#presentation").css("animation", "fadeIn 1s")
    $("#obj").css("animation", "fadeOut 1s")
})
