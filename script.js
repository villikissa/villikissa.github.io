document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.button_social_burger');
    var socialList = document.querySelector('.button_social_list');
    var cross = document.querySelector('.button_social_cross');

    burger.addEventListener('click', function() {
        // When burger is clicked, hide burger and show socialList
        burger.classList.add('hidden');
        burger.classList.remove('flex');
        socialList.classList.remove('hidden');
        socialList.classList.add('flex');
    });

    cross.addEventListener('click', function() {
        // When cross is clicked, hide socialList
        socialList.classList.add('hidden');
        socialList.classList.remove('flex');
        // Optionally, you can make the burger reappear when the cross is clicked
        burger.classList.remove('hidden');
        burger.classList.add('flex');
    });
});

const wordCloud = document.getElementById('wordCloud');
const words = [
    "Data Visualisation", "Python", "Scikit", "Pandas", "Adobe Illustrator",
    "Agile & Scrum", "Nginx", "Apache", "Cloud Computing", "Proxmox Server",
    "Google Sheet", "Firebase", "GEOINT", "OSINT", "SQL Server",
    "HTML", "CSS", "JavaScript", "PHP", "Webpack"
    // Ajoute d'autres compétences ou outils si nécessaire
];
let currentWordIndex = 0;

function placeWord() {
    // Crée un nouveau mot
    const word = words[currentWordIndex];
    const span = document.createElement('span');
    span.textContent = word;
    span.className = 'word';

    // Calcule une position aléatoire
    const x = Math.random() * (wordCloud.offsetWidth - span.offsetWidth);
    const y = Math.random() * (wordCloud.offsetHeight - span.offsetHeight);
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;

    // Ajoute le mot au conteneur et gère l'opacité
    wordCloud.appendChild(span);
    setTimeout(() => { span.style.opacity = 1; }, 100);

    // Augmente le temps avant la disparition du mot
    setTimeout(() => {
        span.style.opacity = 0;

        // Retarde la suppression du mot
        setTimeout(() => {
            wordCloud.removeChild(span);
        }, 2000); // Retire le mot 2 secondes après qu'il commence à disparaître

    }, 6000); // Le mot reste visible pendant 6 secondes

    // Passe au mot suivant
    currentWordIndex = (currentWordIndex + 1) % words.length;
}

// Démarre le processus et le répète toutes les 5 secondes
setInterval(placeWord, 2000);

function scrollTo(hash) {
    location.hash = "#" + hash;
}

