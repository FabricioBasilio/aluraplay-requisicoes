async function listarVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); // url da API que o json-server fez
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}


export const conectaApi = {
    listarVideos
}