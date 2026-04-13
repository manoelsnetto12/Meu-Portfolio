const projetos = [
  {
    nome: "Sistema PDV para Oficina",
    descricao: "Sistema completo para gestão de serviços e clientes",
    link: "https://github.com/manoelsnetto12/pdv-oficina/blob/main/oficina.html"
  },
  {
    nome: "App Financeiro",
    descricao: "Controle de gastos pessoais com relatórios",
    link: "https://github.com/manoelsnetto12/financeiro/blob/main/financeiro.html"
  },
  {
    nome: "Segurança Eletrônica",
    descricao: "CFTV, controle de acesso e automação",
    link: "https://github.com/manoelsnetto12/seguran-a/blob/main/seguranca.html"
  },
  {
    nome: "Projetos Elétricos",
    descricao: "Cálculos de engenharia elétrica e dimensionamentos",
    link: "https://github.com/manoelsnetto12/pdv-eletrico/blob/main/eletrico.html"
  }
];

const container = document.getElementById("lista-projetos");

// Criar cards dos projetos
projetos.forEach(projeto => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank" class="btn">Ver código</a>
  `;

  container.appendChild(card);
});

// Menu ativo (highlight no clique)
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("ativo"));
    link.classList.add("ativo");
  });
});