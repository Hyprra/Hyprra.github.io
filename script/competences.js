var blocs = document.querySelectorAll('.bloc-comp');

for (var i = 0; i < blocs.length; i++) {
    blocs[i].addEventListener('click', function () {
        var languette = this.querySelector('.languette');

        languette.classList.toggle('open');
        this.classList.toggle('all-out');
        setTimeout(() => {
            this.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
}