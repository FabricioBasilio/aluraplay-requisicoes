async function listarVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); // url da API que o json-server fez
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function construirVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
            // especificar o tipo de arquivo
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    // Sem segundo parâmetro o padrão é GET
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function buscarVideo(busca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${busca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listarVideos,
    construirVideo,
    buscarVideo
}