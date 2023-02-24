
const form1 = document.querySelector('#form1');


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

function colocarDados(){
   var registro = localStorage.getItem("storage");
   var parse = JSON.parse(registro);
   var obj = JSON.parse(parse);

   console.log(obj.name);
   console.log(obj.email);

   let legend = document.querySelector("#legend-nome");
   legend.innerHTML = `Olá ${obj.name}`
}

