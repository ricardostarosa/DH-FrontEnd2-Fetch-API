// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona

const dados = {};

const card = document.querySelector(".card");
const img = document.createElement("img");
const h2 = document.createElement("h3");
const p = document.createElement("p");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  fetch("https://randomuser.me/api/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //manipulamos a resposta

      dados.nome = data.results[0].name.first + " " + data.results[0].name.last;
      dados.email = data.results[0].email;
      dados.img = data.results[0].picture.large;

      renderizarDadosUsuario(dados);
    });
});

function renderizarDadosUsuario(data) {
  /* -------------------------------- Tarefa 1 -------------------------------- */
  // Aqui devem desenvolver uma função que seja exibida na tela:
  // a foto, o nome completo do usuário e o e-mail.
  // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

  const dados = data;

  h2.textContent = dados.nome;
  img.setAttribute("src", dados.img);
  p.textContent = dados.email;

  card.appendChild(img);
  card.appendChild(h2);
  card.appendChild(p);
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
