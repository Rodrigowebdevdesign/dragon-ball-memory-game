let fistCard = ''
let secondCard = ''
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

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
    'napa',
    'broly',
    'Mestre',
    'mrsatan'
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}
const checkEndGame = () =>{
    const disableCards = document.querySelectorAll('.disable-card');
    if(disableCards.length == 28){
        // fazer um window location para a pagina de vencedor!!
         clearInterval(this.loop );
         alert('parabens voce venceu!!');
    }
}
const checkCards = () =>{
    const firstCharacter = fistCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');
    if(firstCharacter == secondCharacter){
        fistCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');
        fistCard = '';
        secondCard = '';

        checkEndGame()
    } else{
        setTimeout(() =>{
            fistCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');
            fistCard = '';
            secondCard = '';
        }, 500)
      
    }
}
const revealCard = ({ target }) =>{
   if(target.parentNode.className.includes('reveal-card')){
    return;
   };
   if(fistCard == ''){
        target.parentNode.classList.add('reveal-card');
        fistCard = target.parentNode;
   } else if(secondCard == ''){
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
   }
   
}

const  createCard  = (character) => {
    const card = createElement('div','card');
    const front = createElement('div','face front')
    const back = createElement('div','face back');

    front.style.backgroundImage = `url(../imgs/${character}.jpg)`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click',revealCard);
    card.setAttribute('data-character',character);
    
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

const startTimer = () =>{
        this.loop = setInterval(() =>{
        const currentTime = +timer.innerHTML;
        timer.innerHTML = currentTime + 1;
    },1000);
}
window.onload = () =>{

    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
}

