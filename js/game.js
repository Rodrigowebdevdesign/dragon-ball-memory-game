const grid = document.querySelector('.grid');

const characters = [
    'babidi',
    'BojackBido',
    'cell',
    'dabura',
    'freeza',
    'goku-e-filho',
    'jiren',
    'kuririn',
    'vegeta',
    'zarbon',
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
const revealCard = ({ target }) =>{
   if(target.parentNode.className.includes('reveal-card')){
    return;
   };
   target.parentNode.classList.add('reveal-card');
}

const  createCard  = (character) => {
    const card = createElement('div','card');
    const front = createElement('div','face front')
    const back = createElement('div','face back');

    front.style.backgroundImage = `url(../imgs/${character}.jpg)`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click',revealCard);
    
    return card
}
const loadGame = () =>{
    const duplicateCharacter = [...characters , ...characters];
    const shufledArray = duplicateCharacter.sort(() => Math.random() -0.5);

    duplicateCharacter.forEach((character) =>{
        const card = createCard(character);
        grid.appendChild(card);
    });
}
loadGame()