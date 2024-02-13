const span = document.querySelector('span');
const background = document.querySelector('body');
const imagem = document.querySelector('.img')
const horas = new Date().getHours();

span.innerHTML = horas;
background.classList.add(verifyHours(horas) + 'Background');
imagem.classList.add(verifyHours(horas))

function verifyHours(x) {
    if (x >= 6 && x <= 11) {return 'manha'};
    if (x >= 12 && x <= 16) {return 'tarde'};
    if (x >= 17 && x <= 19) {return 'porDoSol'}
    else {return 'noite'};
}