function afficherSection(section) {
    // Récupérer la section sélectionnée
    var sectionSelectionnee = document.getElementById('section' + section);
    var itemSectionne = document.getElementById('item' + section);

    // Vérifier si la section est déjà affichée
    if (sectionSelectionnee.style.display === 'flex') {
        // Cacher la section
        sectionSelectionnee.classList.remove('unhide');
        setTimeout(function () {
            sectionSelectionnee.style.display = 'none';
        }, 200);
        itemSectionne.classList.remove('item-active');

        //lstprojets.style.display = 'flex';
        /*navsection.forEach(function (section) {
            section.classList.add('hide');
        });
        */

    } else {
        // Cacher toutes les sections
        var sections = document.querySelectorAll('div[id^="section"]');
        sections.forEach(function (section) {
            if (section.classList.contains('unhide')) {
                section.classList.remove('unhide');
            }
            section.style.display = 'none';
        });

        var items = document.querySelectorAll('li[id^="item"]');
        items.forEach(function (item) {
            if (item.classList.contains('item-active')) {
                item.classList.remove('item-active');
            }
        });

        // Afficher la section sélectionnée
        sectionSelectionnee.style.display = 'flex';
        setTimeout(function () {
            sectionSelectionnee.classList.add('unhide');
        }, 100);
        itemSectionne.classList.add('item-active');

        //lstprojets.style.display = 'none';
        /*
        navsection.forEach(function (section) {
            section.classList.remove('hide');
        });
        */
    }
}

// Récupérer la section à afficher
const parametres = new URLSearchParams(window.location.search);
const nom = parametres.get('projet');

afficherSection(nom);