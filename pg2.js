
var simRadio = document.getElementById('radio-sim');
var naoRadio = document.getElementById('radio-nao');

simRadio.addEventListener('click', verificaRadio);
naoRadio.addEventListener('click', verificaRadio);


function colocarDados(){
    //Pegando dados dos cookies
    var registro = localStorage.getItem("storage");
    var parse = JSON.parse(registro);
    var obj = JSON.parse(parse);
    
    let legend = document.querySelector("#legend-nome");
    legend.innerHTML = `Olá ${obj.name}`
 }
 
 function verificaRadio(){

    // funcao apenas para dar funcionalidade ao radio
     let mudaProf = document.getElementById('descMudaProf');
     if(simRadio.checked){
        console.log('Teste');
        mudaProf.removeAttribute('disabled');
     } else if(naoRadio.checked){
        mudaProf.setAttribute('disabled','');
     }
 
     console.log(mudaProf);
 }

//Pegando segundo submit e acrescentando no cookie

const botaoSubmit = document.getElementById('botao-submit');
botaoSubmit.addEventListener('click', pegandoDados);

 function pegandoDados(){
    let result;

    if(simRadio.checked){
        result = document.getElementById("descMudaProf").value;
    } else{
        result = 'Não'
    }

    var registro = localStorage.getItem("storage");
    var parse = JSON.parse(registro);
    var obj = JSON.parse(parse);

    var dados = JSON.stringify({
    name : obj.name,
    email : obj.email,
    telefone : obj.telefone,
    profissao : obj.profissao,
    descricao : obj.descricao,
    avaliacao : document.querySelector("#avaliacao").value,
    rotina : document.querySelector("#rotina").value,
    mudarProfissao : result

});

    localStorage.setItem("storage", JSON.stringify(dados));
    window.alert('dados adicionados');

    console.log(localStorage)
    return true;
}