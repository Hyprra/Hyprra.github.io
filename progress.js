// Sélectionne les éléments nécessaires
const body = document.querySelector('body');
const scrollBar = document.querySelector('.scroll');
var x = 2; // Variable de contrôle

// Ajoute un écouteur d'événement de défilement à la fenêtre
window.addEventListener('scroll', () =>{
    // Calcule le pourcentage de défilement
    let scroll = window.scrollY / (body.clientHeight - window.innerHeight);
    let scrollPercent = Math.round(scroll * 100); 
    // Met à jour la largeur de la barre de défilement
    scrollBar.style.width = scrollPercent + '%';

    // Vérifie si le pourcentage de défilement est supérieur à 20 et x > 1
    if (scrollPercent > 20 && x>1){
        // Options pour la barre de progression circulaire
        let options = {
            startAngle: -1.55,
            size: 150,
            value: 0.80,
            fill: {gradient: ['#957DAD', '#D291BC']}
          }

          // Initialise la barre de progression circulaire
          $(".circle .bar").circleProgress(options).on('circle-animation-progress',
          function(event, progress, stepValue){
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
          });
          
          // Initialise d'autres barres de progression
          $(".HTML .bar").circleProgress({
            value: 0.65
          });
          $(".SQL .bar").circleProgress({
            value: 0.70
          });
          
            x=0 // Met à jour la variable de contrôle pour empêcher l'exécution ultérieure de ce bloc de code
          }

    // Vérifie si le pourcentage de défilement est supérieur à 10
    if (scrollPercent > 10) { 
                      $('#flechehaut').css('right','10px');// Déplace l'élément #flechehaut
                  } 
                  else { 
                      $('#flechehaut').css('right','-100px');// Cache l'élément #flechehaut
                  }
})

