const name = document.querySelector("#name");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const profissao = document.querySelector("#profissao");



function pegandoDados(){
    console.log(email.value);
}

function colocarDados(){
    let legend = document.querySelector('#legend-nome');
    console.log(legend);
    console.log(email.value);
    legend.innerHTML = `Olá ${email}`;
}