import { conectaApi } from "./conectaApi.js";
import construirCard from "./mostrarVideos.js";


const botaoPesquisar = document.querySelector("[data-botao-pesquisa]")

botaoPesquisar.addEventListener("click", evento => procurarVideo(evento));

async function procurarVideo(evento) {
    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscarVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    busca.forEach(element => lista.appendChild(construirCard(element.titulo, element.descricao, element.url, element.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</>`;
    }
    
}