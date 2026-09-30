# CONECTA — Inclusão Digital

Projeto desenvolvido para uma ONG de inclusão digital e oportunidades por meio da tecnologia.

## Tecnologias

* HTML5
* CSS3
* JavaScript
* SPA com roteamento por hash
* Local Storage
* Git e GitHub

## Pré-requisitos

Para executar o projeto localmente, é necessário ter:

* Um navegador moderno, como Google Chrome, Microsoft Edge ou Mozilla Firefox.
* Git, caso o projeto seja obtido por meio de clonagem do repositório.

O projeto não utiliza dependências externas instaladas por npm e não requer Node.js para sua execução.

## Instalação e execução local

1. Clone o repositório:

```bash
git clone https://github.com/AnelisMuniz/Projeto-Aurora.git
```

2. Acesse a pasta do projeto:

```bash
cd Projeto-Aurora
```

3. Abra o arquivo `html/index.html` em um navegador ou utilize um servidor local para executar a aplicação.

O projeto também está disponível por meio do GitHub Pages.

## Dependências

A aplicação utiliza HTML, CSS e JavaScript sem necessidade de instalação de pacotes externos. As funcionalidades de roteamento SPA e armazenamento de dados são implementadas diretamente no código JavaScript, utilizando o Local Storage do navegador.

## Build

O projeto é uma aplicação web estática e não possui processo de build ou compilação. Os arquivos HTML, CSS e JavaScript são executados diretamente pelo navegador.

## Testes e validação

As funcionalidades foram verificadas manualmente durante o desenvolvimento, incluindo navegação entre rotas, formulário, máscaras de entrada, mensagens de validação, armazenamento no Local Storage e atualização da interface.

Também foram realizadas validações da estrutura HTML utilizando o validador W3C.

## Estrutura de desenvolvimento

O projeto utiliza uma organização baseada em GitFlow:

* `main`: versão principal e estável.
* `develop`: integração do desenvolvimento.
* `feature/`: desenvolvimento de funcionalidades específicas.
* `hotfix/`: reservado para correções urgentes na versão estável.

## Versionamento

O projeto utiliza Versionamento Semântico (SemVer), no formato:

`MAJOR.MINOR.PATCH`

* **MAJOR**: alterações incompatíveis.
* **MINOR**: novas funcionalidades compatíveis.
* **PATCH**: correções compatíveis.

A primeira release está identificada pela tag `v1.0.0`.

## Histórico

A release `v1.0.0` representa a primeira versão estável do projeto, incluindo a estrutura do site, o roteamento SPA e o tratamento de rotas inexistentes.

## Conventional Commits

O projeto adota o padrão Conventional Commits para padronizar as mensagens de commit. São utilizados tipos de acordo com a finalidade da alteração, como `feat`, `fix`, `docs`, `refactor` e `chore`.

Um exemplo utilizado no projeto é:

`81e0a47 — docs: documenta estrutura e versionamento do projeto`

Esse commit registra uma alteração de documentação, utilizando o tipo `docs`.
