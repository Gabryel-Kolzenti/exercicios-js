// Seleciona o botão de verificação
const buttonVerificar = document.querySelector('.button');
const h3 = document.querySelector('h3')
h3.innerHTML = 'Adicione os dados e verifique sua idade'

// Seleciona a div onde a imagem será exibida
const imagem = document.querySelector('.resultadinho');

// Adiciona um ouvinte de evento para o clique no botão de verificação
buttonVerificar.addEventListener('click', function() {
    // Função para verificar o gênero selecionado
    function verificaGenero() {
        // Seleciona os inputs de rádio de gênero
        const inputHomem = document.querySelector('#homem');
        const inputMulher = document.querySelector('#mulher');

        // Verifica se o gênero masculino está selecionado
        if (inputHomem.checked) {
            // Retorna "homem" se o gênero masculino estiver selecionado
            return "homem";
        }
        // Verifica se o gênero feminino está selecionado
        else if (inputMulher.checked) {
            // Retorna "mulher" se o gênero feminino estiver selecionado
            return "mulher";
}
    }
        const inputAnoNascimento = document.querySelector('#ano');
        const anoNascimento = Number(inputAnoNascimento.value);
        const data = new Date().getFullYear(); // Invoca a função getFullYear()
        const idade = data - anoNascimento;
    // Função para verificar a idade
    function verificaIdade() {
        if (inputAnoNascimento.length != 4) {return false}
        if (idade < 0) {return false}
        if (idade > 140) {return false}
        if (idade < 3) {return 'Bebe';} 
        if (idade < 17) {return 'Criança';} 
        if (idade < 24) {return 'Jovem';} 
        if (idade < 41) {return 'Adulto';} 
        if (idade < 62) {return 'Velho';} 
        else {return 'Idoso';} 
    }

    // Função para montar as classes com base no gênero e na idade
    function monta(genero, idade) {
        if (!idade) {return alert ('Preencha os dados corretamente')}
        else {
        const classe = genero + idade; // Concatena o gênero e a idade
        imagem.className = `resultadinho img ${classe}`; // Define as classes da imagem
    }};

    // Chama as funções para verificar o gênero e a idade, e passa os resultados para a função monta
    monta(verificaGenero(), verificaIdade(idade));
    if (anoNascimento.toString.length != 4) {return h3.innerHTML = `Adicione ano de nascimento válido`}
    if (idade < 0) {return h3.innerHTML = `Adicione um valor positivo`}
    if (idade > 140) {return h3.innerHTML = `Você é o humano mais velho do planeta kk`}
    else {h3.innerHTML = `Você tem ${idade} anos`}
});

