const h3 = document.querySelector('.container h3');
h3.innerHTML = 'Preparando a contagem...';

const resultado = document.querySelector('.resultado');
const button = document.querySelector('.button')

button.addEventListener('click', function() {
    const inicial = document.querySelector('#valorInicial').value;
    const final = document.querySelector('#valorFinal').value;
    const passo = document.querySelector('#somador').value;

    if (inicial === '' || final === '' || passo === '') {
        alert('Preencha todos os campos corretamente!');
        return; // Adicionado para sair da função se os campos não estiverem preenchidos corretamente
    }

    const array = [];
    let passinho = Number(passo); // Convertido uma vez aqui para evitar repetição de conversão

    if (Number(inicial) < Number(final)) {
        for (let i = Number(inicial); i <= Number(final); i += passinho) {
            array.push(i);
            array.push('😊');
        }
    } else if (Number(inicial) > Number(final)) {
        for (let i = Number(inicial); i >= Number(final); i -= passinho) {
            array.push(i);
            array.push('😊');
        }
    } else {
        array.push(Number(inicial)); // Adiciona apenas o valor inicial se forem iguais
    }

    h3.innerHTML = array.join(' ') + '🎉'; //join() --> transforma array em string
});

