/* =========================
   MENU E SUBMENU
   Conectados uma única vez (ficam no cabeçalho, fora da #app)
========================= */

function bindMenuEvents() {

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            const isOpen = mainNav.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Fechar menu" : "Abrir menu"
            );
        });
    }

    const submenuToggle = document.querySelector(".submenu-toggle");
    const submenuParent = document.querySelector(".has-submenu");

    if (submenuToggle && submenuParent) {

        submenuToggle.addEventListener("click", function () {

            const isOpen = submenuParent.classList.toggle("open");

            submenuToggle.setAttribute("aria-expanded", isOpen);
        });
    }
}


/* =========================
   BIBLIOTECA EXTERNA: IMASK
   Utilizada para aplicar máscaras
   de entrada nos campos do formulário.
========================= */

function inicializarMascaras() {

    if (typeof IMask === "undefined") {
        console.warn("A biblioteca IMask não foi carregada.");
        return;
    }

    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");

    if (cpf) {

        IMask(cpf, {
            mask: "000.000.000-00"
        });
    }

    if (telefone) {

        IMask(telefone, {
            mask: [
                {
                    mask: "(00) 0000-0000"
                },
                {
                    mask: "(00) 00000-0000"
                }
            ]
        });
    }

    if (cep) {

        IMask(cep, {
            mask: "00000-000"
        });
    }
}


/* =========================
   EVENTOS DO CONTEÚDO DA PÁGINA
   Reconectados a cada renderização de rota
========================= */

function bindPageEvents() {

    inicializarMascaras();

    /* =========================
       RASCUNHO E SALVAMENTO
    ========================= */

    const form = document.querySelector("#volunteer-form");
    const toast = document.querySelector("#toast");

    if (form) {

        // Controla se o formulário já foi enviado
        let formularioEnviado = false;

        // Preenche o formulário com o rascunho salvo, se existir
        const rascunho = obterRascunho();

        if (rascunho) {

            Object.keys(rascunho).forEach(function (campo) {

                const input = form.elements[campo];

                if (input) {
                    input.value = rascunho[campo];
                }
            });
        }

        // Salva o rascunho a cada alteração em qualquer campo
        form.addEventListener("input", function () {

            // Não salva novamente depois que o formulário foi enviado
            if (formularioEnviado) {
                return;
            }

            const dadosAtuais = {};

            Array.from(form.elements).forEach(function (campo) {

                if (campo.name) {
                    dadosAtuais[campo.name] = campo.value;
                }
            });

            salvarRascunho(dadosAtuais);
        });


        // Envia o formulário
        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!form.checkValidity()) {

                // Mostra as mensagens de erro de todos os campos de uma vez
                Array.from(form.elements).forEach(function (campo) {

                    if (!campo.name || campo.type === "checkbox") {
                        return;
                    }

                    if (campo.value === "" && !campo.required) {
                        return;
                    }

                    validarCampo(campo);
                });

                form.reportValidity();
                return;
            }

            // Monta o objeto do cadastro
            const novoCadastro = {
                nome: form.elements["nome"].value,
                email: form.elements["email"].value,
                cpf: form.elements["cpf"].value,
                telefone: form.elements["telefone"].value,
                area: form.elements["area"].value,
                dataEnvio: new Date().toISOString()
            };

            // Salva o cadastro e remove o rascunho
            salvarCadastro(novoCadastro);
            limparRascunho();

            // Impede que o formulário vazio seja salvo novamente
            formularioEnviado = true;

            // Limpa o formulário
            form.reset();

            // Limpa os estados visuais de validação após o reset
            Array.from(form.elements).forEach(function (campo) {

                campo.classList.remove("valid", "invalid");
                removerMensagemErro(campo);
            });

            // Mostra o toast de confirmação
            if (toast) {

                toast.textContent = "Cadastro enviado com sucesso!";
                toast.classList.add("show");

                setTimeout(function () {
                    toast.classList.remove("show");
                }, 4000);
            }
        });
    }


    /* =========================
       FEEDBACK VISUAL DOS CAMPOS
    ========================= */

    const fields = document.querySelectorAll(
        "input, select, textarea"
    );

    fields.forEach(function (field) {

        field.addEventListener("blur", function () {
            validarCampo(field);
        });

        field.addEventListener("input", function () {

            if (field.value === "") {

                field.classList.remove("valid", "invalid");
                removerMensagemErro(field);

                return;
            }

            validarCampo(field);
        });
    });


    function validarCampo(field) {

        if (field.checkValidity()) {

            field.classList.remove("invalid");
            field.classList.add("valid");

            removerMensagemErro(field);

        } else {

            field.classList.remove("valid");
            field.classList.add("invalid");

            exibirMensagemErro(field);
        }
    }


    function obterMensagemErro(field) {

        const validity = field.validity;

        if (validity.valueMissing) {
            return "Este campo é obrigatório.";
        }

        if (validity.typeMismatch && field.type === "email") {
            return "Digite um e-mail válido.";
        }

        if (validity.patternMismatch) {

            if (field.id === "cpf") {
                return "CPF deve estar no formato 000.000.000-00.";
            }

            if (field.id === "telefone") {
                return "Telefone deve estar no formato (00) 00000-0000.";
            }

            if (field.id === "cep") {
                return "CEP deve estar no formato 00000-000.";
            }

            return "Formato inválido.";
        }

        if (validity.tooShort) {
            return `Este campo precisa de pelo menos ${field.minLength} caracteres.`;
        }

        return "Valor inválido.";
    }


    function exibirMensagemErro(field) {

        removerMensagemErro(field);

        const mensagem = document.createElement("span");

        mensagem.className = "error-message";
        mensagem.textContent = obterMensagemErro(field);

        field.insertAdjacentElement("afterend", mensagem);
    }


    function removerMensagemErro(field) {

        const proximo = field.nextElementSibling;

        if (
            proximo &&
            proximo.classList.contains("error-message")
        ) {
            proximo.remove();
        }
    }
}