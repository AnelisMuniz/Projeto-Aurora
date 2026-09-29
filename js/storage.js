/* =========================
   CHAVES DO LOCALSTORAGE
========================= */

const STORAGE_KEY_CADASTROS = "conecta_cadastros";
const STORAGE_KEY_RASCUNHO = "conecta_rascunho_cadastro";

/* =========================
   CADASTROS ENVIADOS
========================= */

function salvarCadastro(dados) {

    const cadastros = obterCadastros();
    cadastros.push(dados);

    localStorage.setItem(STORAGE_KEY_CADASTROS, JSON.stringify(cadastros));
}

function obterCadastros() {

    const dados = localStorage.getItem(STORAGE_KEY_CADASTROS);

    return dados ? JSON.parse(dados) : [];
}

/* =========================
   RASCUNHO DO FORMULÁRIO
========================= */

function salvarRascunho(dados) {

    localStorage.setItem(STORAGE_KEY_RASCUNHO, JSON.stringify(dados));
}

function obterRascunho() {

    const dados = localStorage.getItem(STORAGE_KEY_RASCUNHO);

    return dados ? JSON.parse(dados) : null;
}

function limparRascunho() {

    localStorage.removeItem(STORAGE_KEY_RASCUNHO);
}