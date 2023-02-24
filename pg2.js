
var simRadio = document.getElementById('radio-sim');
var naoRadio = document.getElementById('radio-nao');

simRadio.addEventListener('click', verificaRadio);
naoRadio.addEventListener('click', verificaRadio);


function colocarDados(){
    var registro = localStorage.getItem("storage");
    var parse = JSON.parse(registro);
    var obj = JSON.parse(parse);
 
    console.log(obj.name);
    console.log(obj.email);
 
    let legend = document.querySelector("#legend-nome");
    legend.innerHTML = `Olá ${obj.name}`
 }
 
 function verificaRadio(){
     console.log(simRadio.value);
     console.log(naoRadio.value);
 
     let mudaProf = document.getElementById('descMudaProf');
     if(simRadio.checked){
        console.log('Teste');
        mudaProf.removeAttribute('disabled');
     } else if(naoRadio.checked){
        mudaProf.setAttribute('disabled','');
     }
 
     console.log(mudaProf);
 }