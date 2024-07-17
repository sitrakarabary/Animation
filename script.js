document.addEventListener('DOMContentLoaded', (event) => {
    const text = document.querySelector('.text'); // Sélectionne l'élément de texte initial
    const buttons = document.querySelectorAll('.show-button'); // Sélectionne tous les boutons
    const secondText = document.querySelector('.second-text');
    const thirdText= document.querySelector('.third-text');
    const character = document.querySelector('.character');


    // Sélectionne l'image kiss
    const kissImage = document.querySelector('.kiss');

    // Sélectionne le caractère

    // Masque l'image kiss au chargement initial et les autres éléments
    kissImage.style.display = 'none';
    secondText.style.display = 'none';
    thirdText.style.display = 'none';
    character.style.display = 'none';

    // Masque tous les boutons sauf le premier au chargement initial
    buttons.forEach((button, index) => {
        if (index !== 0) {
            button.style.display = 'none';
        }
    });

    // Compteur de clics sur les boutons
    let clickCount = 0;

    // Affiche le texte initial et le premier bouton
    text.style.display = 'block';
    buttons[0].style.display = 'inline-block'; // Affiche le premier bouton directement

    // Écouteur de clic sur chaque bouton pour gérer l'affichage des suivants
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            text.style.display = 'none'; // Masque le texte initial après le premier clic sur n'importe quel bouton
            button.style.display = 'none'; // Masque le bouton actuel après le clic
            clickCount++; //  le compteur de clics

            // Affiche le deuxième texte après le quatrième clic
            if (clickCount === 4) {
                secondText.style.display = 'block';
                kissImage.style.display = 'block';
                // Masque le deuxième texte et l'image après 5 secondes
                setTimeout(() => {
                    secondText.style.display = 'none';
                    kissImage.style.display = 'none';
                    showNextButton(); // Affiche le bouton suivant après 2 secondes de masquage
                }, 2000);
            } else {
                showNextButton(); // Affiche le bouton suivant immédiatement pour les autres clics
            }

            // Affiche le texte "Coucou" après le dernier bouton
            if (clickCount === buttons.length) {
                thirdText.style.display = 'block';
                character.style.display = 'block';

            }
        });
    });

    // Fonction pour afficher le bouton suivant
    function showNextButton() {
        if (clickCount < buttons.length) {
            buttons[clickCount].style.display = 'inline-block';
        }
    }
});
