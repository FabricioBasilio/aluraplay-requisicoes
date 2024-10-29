import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]")

function construirCard(titulo, descricao, url, imagem) {
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
    const listaApi = await conectaApi.listarVideos();
    listaApi.forEach(elemento => lista.appendChild(construirCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
    //1:39
}

listarVideos()