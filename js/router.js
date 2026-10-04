// Mapa de rotas: cada caminho aponta para a função de template correspondente
const routes = {
    "/": renderHome,
    "/projetos": renderProjetos,
    "/cadastro": renderCadastro,
    "/voluntarios": renderVoluntarios
};

document.addEventListener("DOMContentLoaded", function () {

    const app = document.getElementById("app");

    /**
     * Lê a rota atual pela hash da URL, seleciona o template
     * correspondente em `routes` e substitui o conteúdo de #app.
     * Reconecta os eventos da página (bindPageEvents) após a renderização,
     * já que innerHTML destroi os listeners anteriores.
     */
    function renderRoute() {

        const path = window.location.hash.slice(1) || "/";
        const render = routes[path];

        if (!render) {

            // Rota desconhecida: mostra uma página de erro com link de volta
            app.innerHTML = `
                <section class="page-intro grid-section">
                    <h1>Página não encontrada</h1>
                    <p>O conteúdo que você procura não existe ou foi movido.</p>
                    <a class="button button-primary" href="#/">Voltar ao início</a>
                </section>
            `;
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

    /**
     * Percorre os links do menu e marca com a classe .active
     * aquele cujo href corresponde à rota atualmente exibida.
     */
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

    // Menu, submenu e seletor de tema ficam no cabeçalho:
// são conectados uma única vez
bindMenuEvents();
bindThemeEvents();

// Primeira renderização, assim que a página carrega
renderRoute();
});