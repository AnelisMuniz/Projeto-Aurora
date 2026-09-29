function renderHome() {
    return `
        <section class="hero grid-section">
            <div class="hero-content">

                <span class="badge badge-primary">
                    Inclusão digital
                </span>

                <h1>
                    Conectando pessoas a novas oportunidades
                </h1>

                <p>
                    Oportunidades nascem quando alguém acredita.
                    A CONECTA promove inclusão digital e acesso à tecnologia
                    para transformar possibilidades em novos caminhos.
                </p>

                <div class="hero-actions">
                    <a class="button button-primary" href="#/cadastro">
                        Quero ser voluntário
                    </a>

                    <a class="button button-secondary" href="#/projetos">
                        Conhecer projetos
                    </a>
                </div>

            </div>
        </section>

        <section id="sobre" class="about grid-section">

            <div class="section-heading">
                <span class="badge">Sobre nós</span>
                <h2>Quem somos</h2>
            </div>

            <div class="about-content">
                <p>
                    A CONECTA é uma organização voltada para a inclusão digital,
                    oferecendo acesso à tecnologia, educação e oportunidades para
                    pessoas que desejam desenvolver novas habilidades.
                </p>

                <p>
                    Por meio de cursos, oficinas, doações de equipamentos e
                    orientação profissional, buscamos aproximar pessoas da
                    tecnologia e do mercado de trabalho.
                </p>
            </div>

        </section>

        <section class="highlights grid-section">

            <div class="section-heading">
                <span class="badge">Nossa atuação</span>
                <h2>O que fazemos</h2>
            </div>

            <div class="card-grid">

                <article class="info-card">
                    <span class="card-icon" aria-hidden="true">💻</span>
                    <h3>Educação digital</h3>
                    <p>
                        Oferecemos oficinas e atividades gratuitas para desenvolver
                        conhecimentos em tecnologia e ferramentas digitais.
                    </p>
                </article>

                <article class="info-card">
                    <span class="card-icon" aria-hidden="true">🌐</span>
                    <h3>Inclusão tecnológica</h3>
                    <p>
                        Trabalhamos para ampliar o acesso a computadores,
                        equipamentos e recursos tecnológicos.
                    </p>
                </article>

                <article class="info-card">
                    <span class="card-icon" aria-hidden="true">🚀</span>
                    <h3>Oportunidades</h3>
                    <p>
                        Incentivamos o desenvolvimento profissional e ajudamos
                        participantes a dar os primeiros passos no mercado de trabalho.
                    </p>
                </article>

            </div>

        </section>

        <section class="call-to-action grid-section">

            <div>
                <span class="badge badge-light">Faça parte</span>

                <h2>Faça parte dessa conexão</h2>

                <p>
                    Você pode contribuir compartilhando conhecimento,
                    doando equipamentos ou participando como voluntário.
                </p>
            </div>

            <a class="button button-light" href="#/cadastro">
                Seja voluntário
            </a>

        </section>

        <section class="contact grid-section">

            <div class="section-heading">
                <span class="badge">Contato</span>
                <h2>Entre em contato</h2>
            </div>

            <div class="contact-content">
                <p>
                    Quer saber mais sobre a CONECTA ou participar das nossas ações?
                    Entre em contato conosco.
                </p>

                <p>
                    E-mail:
                    <a href="mailto:contato@conecta.org.br">
                        contato@conecta.org.br
                    </a>
                </p>
            </div>

        </section>
    `;
}


/* =====================================================
   DADOS DOS PROJETOS
   ===================================================== */

const projetosData = [
    {
        icone: "💻",
        badgeClass: "badge-primary",
        badgeTexto: "Tecnologia",
        titulo: "Conecta Jovem",
        descricao:
            "Oficinas gratuitas de informática, programação e ferramentas digitais para jovens que desejam desenvolver novas habilidades.",
        objetivo:
            "Aproximar jovens da tecnologia e estimular o desenvolvimento de conhecimentos que possam contribuir para sua formação."
    },

    {
        icone: "🎓",
        badgeClass: "badge-secondary",
        badgeTexto: "Educação",
        titulo: "Primeiro Passo",
        descricao:
            "Programa de orientação e preparação para jovens que estão buscando sua primeira oportunidade profissional.",
        objetivo:
            "Auxiliar os participantes na preparação de currículos, entrevistas e desenvolvimento profissional."
    },

    {
        icone: "♻️",
        badgeClass: "badge-success",
        badgeTexto: "Sustentabilidade",
        titulo: "Recomeço Digital",
        descricao:
            "Campanha de arrecadação e doação de computadores e equipamentos para pessoas que não possuem acesso adequado à tecnologia.",
        objetivo:
            "Dar uma nova utilização a equipamentos e ampliar o acesso aos recursos digitais."
    },

    {
        icone: "🤝",
        badgeClass: "badge-secondary",
        badgeTexto: "Voluntariado",
        titulo: "Rede de Mentores",
        descricao:
            "Conexão entre profissionais voluntários e pessoas que desejam aprender, desenvolver habilidades e conhecer novas áreas.",
        objetivo:
            "Compartilhar conhecimentos e experiências para apoiar o desenvolvimento pessoal e profissional dos participantes."
    }
];


/* =====================================================
   TEMPLATE PARA CRIAR CADA CARD
   ===================================================== */

function criarCardProjeto(projeto) {

    return `
        <article class="project-card">

            <div class="project-card-header">

                <span class="card-icon" aria-hidden="true">
                    ${projeto.icone}
                </span>

                <span class="badge ${projeto.badgeClass}">
                    ${projeto.badgeTexto}
                </span>

            </div>

            <h3>${projeto.titulo}</h3>

            <p>
                ${projeto.descricao}
            </p>

            <h4>Nosso objetivo</h4>

            <p>
                ${projeto.objetivo}
            </p>

        </article>
    `;
}


function renderProjetos() {

    /* =================================================
       MAP GERA OS CARDS A PARTIR DO ARRAY
       ================================================= */

    const cardsProjetos = projetosData
        .map(criarCardProjeto)
        .join("");

    return `
        <section class="page-intro grid-section">

            <span class="badge badge-primary">
                Nossas iniciativas
            </span>

            <h1>Nossos projetos</h1>

            <p>
                Conheça as iniciativas da CONECTA e descubra como a tecnologia
                pode criar novas oportunidades.
            </p>

        </section>

        <section class="projects grid-section">

            <div class="section-heading">
                <h2>Projetos sociais</h2>
                <p>
                    Conheça algumas das principais iniciativas desenvolvidas
                    pela CONECTA.
                </p>
            </div>


            <!-- =================================================
                 OS CARDS SÃO INSERIDOS AQUI
                 ================================================= -->

            <div class="project-grid">
                ${cardsProjetos}
            </div>


        </section>

        <section class="donations grid-section">

            <div class="alert alert-info" role="status">
                <strong>Campanha ativa:</strong>
                a CONECTA recebe equipamentos tecnológicos para as ações
                de inclusão digital.
            </div>

            <h2>Campanhas de doação</h2>

            <p>
                A CONECTA realiza campanhas para arrecadar computadores,
                periféricos e outros equipamentos tecnológicos.
            </p>

            <p>
                Os equipamentos recebidos são destinados a pessoas e projetos
                que precisam de recursos para ter acesso à tecnologia.
            </p>

        </section>

        <section class="volunteer grid-section">

            <div>
                <span class="badge badge-light">Participe</span>

                <h2>Quer fazer parte?</h2>

                <p>
                    Você pode contribuir compartilhando conhecimento, participando
                    das atividades ou ajudando nas campanhas da CONECTA.
                </p>
            </div>

            <a class="button button-light" href="#/cadastro">
                Cadastre-se como voluntário
            </a>

        </section>
    `;
}


function renderCadastro() {
    return `
        <section class="page-intro grid-section">

            <span class="badge badge-primary">
                Faça parte
            </span>

            <h1>Seja um voluntário</h1>

            <p>
                Faça parte da CONECTA e ajude a criar novas oportunidades
                por meio da tecnologia.
            </p>

        </section>

        <section class="form-section grid-section">

            <div class="section-heading">
                <h2>Cadastro de voluntário</h2>

                <p>
                    Preencha os dados abaixo para demonstrar seu interesse
                    em participar das ações da CONECTA.
                </p>
            </div>

            <form id="volunteer-form" action="#" method="post" novalidate>

                <fieldset>
                    <legend>Dados pessoais</legend>

                    <label for="nome">Nome completo:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        minlength="3"
                        maxlength="100"
                        autocomplete="name"
                        required>

                    <label for="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autocomplete="email"
                        required>

                    <label for="cpf">CPF:</label>
                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        inputmode="numeric"
                        minlength="14"
                        maxlength="14"
                       pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                        autocomplete="off"
                        required>

                    <label for="telefone">Telefone:</label>
                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        inputmode="tel"
                        minlength="14"
                        maxlength="15"
                        pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}"
                        autocomplete="tel"
                        required>

                    <label for="nascimento">Data de nascimento:</label>
                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        autocomplete="bday"
                        required>

                </fieldset>

                <fieldset>

                    <legend>Endereço</legend>

                    <label for="cep">CEP:</label>
                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        inputmode="numeric"
                        minlength="9"
                        maxlength="9"
                        pattern="[0-9]{5}-[0-9]{3}"
                        autocomplete="postal-code"
                        required>

                    <label for="endereco">Endereço:</label>
                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required>

                    <label for="numero">Número:</label>
                    <input
                        type="text"
                        id="numero"
                        name="numero"
                        maxlength="10"
                        required>

                    <label for="cidade">Cidade:</label>
                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        autocomplete="address-level2"
                        required>

                    <label for="estado">Estado:</label>

                    <select
                        id="estado"
                        name="estado"
                        autocomplete="address-level1"
                        required>

                        <option value="">Selecione seu estado</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>

                    </select>

                </fieldset>

                <fieldset>

                    <legend>Interesse em voluntariado</legend>

                    <label for="area">Área de interesse:</label>

                    <select id="area" name="area" required>

                        <option value="">Selecione uma área</option>
                        <option value="tecnologia">Tecnologia</option>
                        <option value="educacao">Educação</option>
                        <option value="comunicacao">Comunicação</option>
                        <option value="eventos">Eventos</option>
                        <option value="administrativo">Administrativo</option>

                    </select>

                    <label for="mensagem">
                        Conte um pouco sobre você:
                    </label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="6"
                        maxlength="500"></textarea>

                    <label class="checkbox-label">
                        <input
                            type="checkbox"
                            id="termos"
                            name="termos"
                            required>

                        <span>
                            Aceito participar das atividades da CONECTA
                            como voluntário.
                        </span>
                    </label>

                </fieldset>

                <button
                    class="button button-primary submit-button"
                    type="submit">
                    Enviar cadastro
                </button>

           </form>

        </section>

        <div
            id="toast"
            class="toast"
            role="status"
            aria-live="polite">
            Cadastro enviado com sucesso!
        </div>
    `;
}

/* =====================================================
   LISTAGEM DE VOLUNTÁRIOS (dados vindos do localStorage)
   ===================================================== */

const areasLabel = {
    tecnologia: "Tecnologia",
    educacao: "Educação",
    comunicacao: "Comunicação",
    eventos: "Eventos",
    administrativo: "Administrativo"
};

// Escapa o texto digitado pelo usuário antes de injetar via innerHTML
function escaparHTML(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
}

function criarCardVoluntario(cadastro) {

    const data = new Date(cadastro.dataEnvio).toLocaleDateString("pt-BR");

    return `
        <article class="info-card">
            <span class="card-icon" aria-hidden="true">🧑🏻‍💻</span>
            <h3>${escaparHTML(cadastro.nome)}</h3>
            <p><strong>E-mail:</strong> ${escaparHTML(cadastro.email)}</p>
            <p><strong>Telefone:</strong> ${escaparHTML(cadastro.telefone)}</p>
            <p><strong>Área:</strong> ${areasLabel[cadastro.area] || escaparHTML(cadastro.area)}</p>
            <p><strong>Enviado em:</strong> ${data}</p>
        </article>
    `;
}

function renderVoluntarios() {

    const cadastros = obterCadastros();

    const conteudo = cadastros.length
        ? `<div class="card-grid">${cadastros.map(criarCardVoluntario).join("")}</div>`
        : `<div class="alert alert-info" role="status">
               Nenhum cadastro enviado ainda.
               <a href="#/cadastro">Seja o primeiro voluntário</a>.
           </div>`;

    return `
        <section class="page-intro grid-section">
            <span class="badge badge-primary">Cadastros salvos</span>
            <h1>Voluntários cadastrados</h1>
            <p>Lista dos cadastros salvos neste navegador via localStorage.</p>
        </section>

        <section class="projects grid-section">
            ${conteudo}
        </section>
    `;
}