let icone = document.querySelectorAll('.icon');
let corpo = document.querySelector('body');

icone[1].addEventListener('click', ()=> {
    icone[1].classList.toggle('mode');
    icone[0].classList.toggle('mode');
    corpo.classList.toggle('mode');
})

icone[0].addEventListener('click', ()=> {
    icone[1].classList.toggle('mode');
    icone[0].classList.toggle('mode');
    corpo.classList.toggle('mode');
})