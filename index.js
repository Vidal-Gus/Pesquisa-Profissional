
const botaoSubmit = document.getElementById('botao-submit');
botaoSubmit.addEventListener('click', pegandoDados);


function pegandoDados(){
    var dados = JSON.stringify({
    name : document.querySelector("#name").value,
    email : document.querySelector("#email").value,
    telefone : document.querySelector("#telefone").value,
    profissao : document.querySelector("#profissao").value
});

    localStorage.setItem("storage", JSON.stringify(dados));
    window.alert('dados adicionados');
    return true;
}