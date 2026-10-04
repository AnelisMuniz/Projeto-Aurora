var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e){let t=r();t.push(e),localStorage.setItem(v,JSON.stringify(t))}function r(){let e=localStorage.getItem(v);return e?JSON.parse(e):[]}function i(e){localStorage.setItem(y,JSON.stringify(e))}function a(){let e=localStorage.getItem(y);return e?JSON.parse(e):null}function o(){localStorage.removeItem(y)}function s(){let e=document.querySelector(`.theme-toggle`);e&&(localStorage.getItem(`conecta-theme`)===`dark`&&(document.documentElement.setAttribute(`data-theme`,`dark`),e.setAttribute(`aria-pressed`,`true`),e.setAttribute(`aria-label`,`Ativar modo claro`),e.textContent=`☀️ Modo claro`),e.addEventListener(`click`,function(){document.documentElement.getAttribute(`data-theme`)===`dark`?(document.documentElement.removeAttribute(`data-theme`),localStorage.setItem(`conecta-theme`,`light`),e.setAttribute(`aria-pressed`,`false`),e.setAttribute(`aria-label`,`Ativar modo escuro`),e.textContent=`🌙 Modo escuro`):(document.documentElement.setAttribute(`data-theme`,`dark`),localStorage.setItem(`conecta-theme`,`dark`),e.setAttribute(`aria-pressed`,`true`),e.setAttribute(`aria-label`,`Ativar modo claro`),e.textContent=`☀️ Modo claro`)}))}function c(){let e=document.querySelector(`.menu-toggle`),t=document.querySelector(`.main-nav`);if(e&&t){t.setAttribute(`id`,`main-nav`),e.setAttribute(`aria-controls`,`main-nav`),e.setAttribute(`aria-expanded`,`false`),e.addEventListener(`click`,function(){let n=t.classList.toggle(`open`);e.setAttribute(`aria-expanded`,n),e.setAttribute(`aria-label`,n?`Fechar menu`:`Abrir menu`)}),document.addEventListener(`keydown`,function(n){n.key===`Escape`&&t.classList.contains(`open`)&&(t.classList.remove(`open`),e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-label`,`Abrir menu`),e.focus())});let n=document.querySelector(`.submenu-toggle`),r=document.querySelector(`.has-submenu`);if(n&&r){let e=r.querySelector(`.submenu`);e&&(e.setAttribute(`id`,`submenu-conheca`),n.setAttribute(`aria-controls`,`submenu-conheca`),n.setAttribute(`aria-expanded`,`false`)),n.addEventListener(`click`,function(){let e=r.classList.toggle(`open`);n.setAttribute(`aria-expanded`,e)}),n.addEventListener(`keydown`,function(e){e.key===`Escape`&&r.classList.contains(`open`)&&(r.classList.remove(`open`),n.setAttribute(`aria-expanded`,`false`),n.focus())})}}}function l(){if(typeof IMask>`u`){console.warn(`A biblioteca IMask não foi carregada.`);return}let e=document.querySelector(`#cpf`),t=document.querySelector(`#telefone`),n=document.querySelector(`#cep`);e&&IMask(e,{mask:`000.000.000-00`}),t&&IMask(t,{mask:[{mask:`(00) 0000-0000`},{mask:`(00) 00000-0000`}]}),n&&IMask(n,{mask:`00000-000`})}function u(){l();let e=document.querySelector(`#volunteer-form`),t=document.querySelector(`#toast`);if(e){let s=!1,c=a();c&&Object.keys(c).forEach(function(t){let n=e.elements[t];n&&(n.value=c[t])}),e.addEventListener(`input`,function(){if(s)return;let t={};Array.from(e.elements).forEach(function(e){e.name&&(t[e.name]=e.value)}),i(t)}),e.addEventListener(`submit`,function(i){if(i.preventDefault(),!e.checkValidity()){Array.from(e.elements).forEach(function(e){e.name&&e.type!==`checkbox`&&(e.value!==``||e.required)&&r(e)}),e.reportValidity();return}n({nome:e.elements.nome.value,email:e.elements.email.value,cpf:e.elements.cpf.value,telefone:e.elements.telefone.value,area:e.elements.area.value,dataEnvio:new Date().toISOString()}),o(),s=!0,e.reset(),Array.from(e.elements).forEach(function(e){e.classList.remove(`valid`,`invalid`),u(e)}),t&&(t.textContent=`Cadastro enviado com sucesso!`,t.classList.add(`show`),setTimeout(function(){t.classList.remove(`show`)},4e3))})}document.querySelectorAll(`input, select, textarea`).forEach(function(e){e.addEventListener(`blur`,function(){r(e)}),e.addEventListener(`input`,function(){if(e.value===``){e.classList.remove(`valid`,`invalid`),u(e);return}r(e)})});function r(e){e.checkValidity()?(e.classList.remove(`invalid`),e.classList.add(`valid`),e.removeAttribute(`aria-invalid`),u(e)):(e.classList.remove(`valid`),e.classList.add(`invalid`),e.setAttribute(`aria-invalid`,`true`),c(e))}function s(e){let t=e.validity;return t.valueMissing?`Este campo é obrigatório.`:t.typeMismatch&&e.type===`email`?`Digite um e-mail válido.`:t.patternMismatch?e.id===`cpf`?`CPF deve estar no formato 000.000.000-00.`:e.id===`telefone`?`Telefone deve estar no formato (00) 00000-0000.`:e.id===`cep`?`CEP deve estar no formato 00000-000.`:`Formato inválido.`:t.tooShort?`Este campo precisa de pelo menos ${e.minLength} caracteres.`:`Valor inválido.`}function c(e){u(e);let t=document.createElement(`span`);t.className=`error-message`,t.setAttribute(`role`,`alert`),t.id=`${e.id}-error`,t.textContent=s(e),e.setAttribute(`aria-describedby`,t.id),e.insertAdjacentElement(`afterend`,t)}function u(e){let t=e.nextElementSibling;t&&t.classList.contains(`error-message`)&&t.remove(),e.removeAttribute(`aria-describedby`)}}function d(){return`
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
    `}function f(e){return`
        <article class="project-card">

            <div class="project-card-header">

                <span class="card-icon" aria-hidden="true">
                    ${e.icone}
                </span>

                <span class="badge ${e.badgeClass}">
                    ${e.badgeTexto}
                </span>

            </div>

            <h3>${e.titulo}</h3>

            <p>
                ${e.descricao}
            </p>

            <h4>Nosso objetivo</h4>

            <p>
                ${e.objetivo}
            </p>

        </article>
    `}function p(){return`
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
                ${b.map(f).join(``)}
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
    `}function m(){return`
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
    `}function h(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function g(e){let t=new Date(e.dataEnvio).toLocaleDateString(`pt-BR`);return`
        <article class="info-card">
            <span class="card-icon" aria-hidden="true">🧑🏻‍💻</span>
            <h3>${h(e.nome)}</h3>
            <p><strong>E-mail:</strong> ${h(e.email)}</p>
            <p><strong>Telefone:</strong> ${h(e.telefone)}</p>
            <p><strong>Área:</strong> ${x[e.area]||h(e.area)}</p>
            <p><strong>Enviado em:</strong> ${t}</p>
        </article>
    `}function _(){let e=r();return`
        <section class="page-intro grid-section">
            <span class="badge badge-primary">Cadastros salvos</span>
            <h1>Voluntários cadastrados</h1>
            <p>Lista dos cadastros salvos neste navegador via localStorage.</p>
        </section>

        <section class="projects grid-section">
            ${e.length?`<div class="card-grid">${e.map(g).join(``)}</div>`:`<div class="alert alert-info" role="status">
               Nenhum cadastro enviado ainda.
               <a href="#/cadastro">Seja o primeiro voluntário</a>.
           </div>`}
        </section>
    `}var v,y,b,x,S,C=e((()=>{v=`conecta_cadastros`,y=`conecta_rascunho_cadastro`,b=[{icone:`💻`,badgeClass:`badge-primary`,badgeTexto:`Tecnologia`,titulo:`Conecta Jovem`,descricao:`Oficinas gratuitas de informática, programação e ferramentas digitais para jovens que desejam desenvolver novas habilidades.`,objetivo:`Aproximar jovens da tecnologia e estimular o desenvolvimento de conhecimentos que possam contribuir para sua formação.`},{icone:`🎓`,badgeClass:`badge-secondary`,badgeTexto:`Educação`,titulo:`Primeiro Passo`,descricao:`Programa de orientação e preparação para jovens que estão buscando sua primeira oportunidade profissional.`,objetivo:`Auxiliar os participantes na preparação de currículos, entrevistas e desenvolvimento profissional.`},{icone:`♻️`,badgeClass:`badge-success`,badgeTexto:`Sustentabilidade`,titulo:`Recomeço Digital`,descricao:`Campanha de arrecadação e doação de computadores e equipamentos para pessoas que não possuem acesso adequado à tecnologia.`,objetivo:`Dar uma nova utilização a equipamentos e ampliar o acesso aos recursos digitais.`},{icone:`🤝`,badgeClass:`badge-secondary`,badgeTexto:`Voluntariado`,titulo:`Rede de Mentores`,descricao:`Conexão entre profissionais voluntários e pessoas que desejam aprender, desenvolver habilidades e conhecer novas áreas.`,objetivo:`Compartilhar conhecimentos e experiências para apoiar o desenvolvimento pessoal e profissional dos participantes.`}],x={tecnologia:`Tecnologia`,educacao:`Educação`,comunicacao:`Comunicação`,eventos:`Eventos`,administrativo:`Administrativo`},S={"/":d,"/projetos":p,"/cadastro":m,"/voluntarios":_},document.addEventListener(`DOMContentLoaded`,function(){let e=document.getElementById(`app`);function t(){let t=window.location.hash.slice(1)||`/`,r=S[t];if(!r){e.innerHTML=`
                <section class="page-intro grid-section">
                    <h1>Página não encontrada</h1>
                    <p>O conteúdo que você procura não existe ou foi movido.</p>
                    <a class="button button-primary" href="#/">Voltar ao início</a>
                </section>
            `;return}e.innerHTML=``,e.innerHTML=r(),u(),window.scrollTo(0,0),n(t)}function n(e){document.querySelectorAll(`.main-nav a`).forEach(function(t){(t.getAttribute(`href`).replace(`#`,``)||`/`)===e?t.classList.add(`active`):t.classList.remove(`active`)})}window.addEventListener(`hashchange`,t),c(),s(),t()})}));t((()=>{C()}))();