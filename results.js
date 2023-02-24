const perfil = document.getElementById('perfil');
const descricaoPerfil = document.getElementById('descricao-perfil');

const registro = localStorage.getItem("storage");
var parse = JSON.parse(registro);
var obj = JSON.parse(parse);

perfil.innerHTML = `<ul>
                        <li>Nome: ${obj.name}</li>
                        <br>
                        <li>email: ${obj.email}</li>
                        <br>
                        <li>telefone: ${obj.telefone}</li>
                        <br>
                        <li>profissao: ${obj.profissao}</li>
                    </ul>`

descricaoPerfil.innerHTML = `<ul>
<li>seu perfil: ${obj.descricao}</li>
<br>
<li>avaliacao da empresa: ${obj.avaliacao}</li>
<br>
<li>sua rotina: ${obj.rotina}</li>
<br>
<li>Mudaria de profissao: ${obj.mudarProfissao}</li>
</ul>`


