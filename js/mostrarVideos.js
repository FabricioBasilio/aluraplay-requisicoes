import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]")

export default function construirCard(titulo, descricao, url, imagem) {
    const card = document.createElement("li");
    card.className = "videos__item";
    card.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`
    return card;
}

async function listarVideos() {
    try {
    const listaApi = await conectaApi.listarVideos();
    listaApi.forEach(elemento => lista.appendChild(construirCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    } catch {
        lista.innerHTML = "<h2 class='mensagem__titulo'>Não carregou!</h2>"
    }
}

listarVideos()