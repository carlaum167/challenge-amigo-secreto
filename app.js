//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

document.getElementById('button-add').addEventListener('click', adicionarAmigo);
document.getElementById('button-sortear').addEventListener('click', sortearAmigo);

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  atualizarAmigos();
  input.value = "";
  input.focus();
}

function atualizarAmigos() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = "";

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (amigos.length === 0) {
    alert("Nenhum nome na lista para sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indiceSorteado];

  alert(`🎉 O nome sorteado foi: ${nomeSorteado}`);
}
