const select = document.querySelector('select');
const button = document.querySelector('.button');

button.addEventListener('click', function() {
    const inicial = document.querySelector('#valorInicial').value;
    const ini = Number(inicial);

    if (inicial === '' ) {
        return alert('Preencha o campo');
    }
    if (inicial <= 0 ) {
        return alert('Preencha o campo com números válidos');
    }

    // Limpa as opções anteriores do select
    select.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const multiplicado = ini * i;
        const option = document.createElement("option");
        option.textContent = `${ini} x ${i} = ${multiplicado}`;
        option.setAttribute("value", multiplicado);
        select.appendChild(option);
    }
});
