/* 
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

     Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

     Passo 2 - identificar o clique no botão 
     
     Passo 3- adicionar a classe ativo nos projetos escondidos
     
    Objetivo 2 - esconder o botão de mostrar mais 
    
     Passo 1 - pegar o botão e esconder ele
*/

const botaoMostrarProjetos = document.querySelector(".btn-mostrar-projetos");
console.log(botaoMostrarProjetos);

const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)");

botaoMostrarProjetos.addEventListener("click", () => {
  console.log("Botão Clicado!");
  mostrarProjetos();
  mudarTextoBotao (botaoMostrarProjetos);
});
  function esconderBotao() {
  console.log("Escondendo botão...");
  botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
  console.log("Mostrando mais projetos...");
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.add("ativo");
  });
}

// Essa função foi criada para determinar que se há uma classe ela vai buscar, se não houver, ela vai adicionar essa classe no elemento. Se o projeto já estiver com a classe, ela vai tirar. 

function mostrarProjetos () {
  projetosInativos.forEach((projetoInativo)=> {
    projetoInativo.classList.toggle("ativo")
  })
}

// função mudar o texto do botão 

function mudarTextoBotao (botao) {
  if (botao.textContent === "Mostrar mais") {
    botaoMostrarProjetos.textContent = "Mostrar menos"
  }else {
    botaoMostrarProjetos.textContent = "Mostrar mais"
  }
}


