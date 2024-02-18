const select = document.querySelector(`#escolha`);
const resultados = document.querySelector(`.info`);

let array = [];
let valorValue = 1;

function adiciona(params) {
    const inputInicial = document.querySelector(`#valorInicial`).value.trim(); //trim() remove espacos em brancos, que podem acabar sendo inseridos pelo usuario
    const inicialNumber = parseFloat(inputInicial);

    if (inputInicial === '' || inputInicial === '0') { return alert('Preencha a entrada adequadamente');} 
    if (inputInicial > 100 || inputInicial < 0) { return alert('Valor inválido');}
    if (array.indexOf(inicialNumber) !== -1) {return}; // // -1 --> Quando um valor nao e encontrado no array ele retorna o valor "-1" --> != nesse caso ele ta pegando o valor invertido, se ele nao(nao for encontrado) --> for encontreado return "true"
        array.push(inicialNumber);
        const option = document.createElement('option');
        option.textContent = `Valor ${inicialNumber} foi adicionado`;
        option.setAttribute('value', valorValue.toString());
        select.appendChild(option);   
        valorValue++;        
        const verificaClass =  document.querySelector('#ativo') == document.querySelector('.info');
        if (verificaClass) {resultados.innerHTML = ` `; resultados.setAttribute(`id`, ``)} else {};
    };

function finaliza(params) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += parseFloat(array[i]);} //parseFloat() para converter os valores do array em números
    const media = soma / array.length;

    if (document.querySelector('#ativo') == document.querySelector('.info')) {return}
    resultados.setAttribute(`id`, `ativo`)
    resultados.innerHTML += `<h3>Ao todo temos ${array.length.toString()} números cadastrados </h3> <br>`;
    resultados.innerHTML += `<h3>O maior valor informado foi ${Math.max(...array).toString()} </h3> <br>`; //... -> transforma os itens do array em elementos individuais ex: [5,6,7,8,9] --> (5,6,7,8,9) deixa de ser um array e vira varios elemtnos individuais
    resultados.innerHTML += `<h3>O menor valor informado foi ${Math.min(...array).toString()} </h3> <br>`;
    resultados.innerHTML += `<h3>Somando todos os valores temos  ${soma.toString()} </h3> <br>`;
    resultados.innerHTML += `<h3>A média dos valores digitados é  ${media.toString()} </h3> <br>`; 
};

function limpa() {
    resultados.innerHTML = ``;
    array = [];
    resultados.setAttribute(`id`, ``)
    select.innerHTML = ``;
    document.querySelector(`#valorInicial`).value = ''; // Limpa o valor do campo de entrada
}