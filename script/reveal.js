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