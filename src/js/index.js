//Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
//Passo 1 - pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele
const botao = document.querySelector(".btn-plataforma");

//Passo 2 - pegar o elemento do conteúdo que precisa ser mostrado
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

//Passo 3 - pegar o clique do usuário no js
botao.addEventListener("click", () => {
    //Passo 4 - verificar se o botão já foi ativado pelo usuário, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente
    elementoPlataformas.classList.toggle("ativo");
})


