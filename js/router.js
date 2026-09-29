// Mapa de rotas: cada caminho aponta para a função de template correspondente
const routes = {
    "/": renderHome,
    "/projetos": renderProjetos,
    "/cadastro": renderCadastro,
    "/voluntarios": renderVoluntarios
};

document.addEventListener("DOMContentLoaded", function () {

    const app = document.getElementById("app");

    // Função central: lê a rota atual, limpa o container e injeta o novo HTML
    function renderRoute() {

        const path = window.location.hash.slice(1) || "/";
        const render = routes[path];

        if (!render) {
            app.innerHTML = "<p>Página não encontrada.</p>";
            return;
        }

        // Limpa o conteúdo atual do container
        app.innerHTML = "";

        // Injeta o novo fragmento HTML retornado pelo template
        app.innerHTML = render();

        // Ativa os eventos da página recém-renderizada
        bindPageEvents();

        // Leva o usuário ao topo da "página" recém-renderizada
        window.scrollTo(0, 0);

        // Atualiza qual link do menu está marcado como ativo
        updateActiveLink(path);
    }

    // Marca visualmente o link correspondente à rota atual
    function updateActiveLink(path) {

        const links = document.querySelectorAll(".main-nav a");

        links.forEach(function (link) {

            const linkPath = link.getAttribute("href").replace("#", "") || "/";

            if (linkPath === path) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Escuta mudanças de hash: clique em link, ou botão voltar/avançar do navegador
    window.addEventListener("hashchange", renderRoute);

    // Menu e submenu ficam no cabeçalho: são conectados uma única vez
    bindMenuEvents();

    // Primeira renderização, assim que a página carrega
    renderRoute();

});