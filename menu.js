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

// Affichage de la partie cachée dans la section "À propos"
//-------------------------------------------
var objButton = document.querySelector(".Objbutton");
var objfermer = document.querySelector(".Objfermer");

//Lorsque le bouton est cliqué, change le style d'affichage de l'élément "#obj" en "block" pour l'afficher
objButton.addEventListener("click", () => {
    $("#obj").css("display", "block")
})

// Lorsque le bouton de fermeture est cliqué, change le style d'affichage de l'élément "#obj" en "none" pour le masquer
objfermer.addEventListener("click", () => {
    $("#obj").css("display", "none");
})

// Affichage progressif des éléments au fur et à mesure du défilement
//-----------------------------------------------
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .1
}

// Fonction de rappel pour l'intersection observer
const handleIntersect = function (entries,observer) {
    entries.forEach(function(entry){
        if (entry.intersectionRatio > .1){
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options)

//// Observe chaque élément ayant la classe "reveal" et déclenche la fonction de rappel lorsqu'ils entrent dans le viewport
document.querySelectorAll('.reveal').forEach(function (rev){
    observer.observe(rev) 
})





