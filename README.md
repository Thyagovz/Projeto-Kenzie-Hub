# Projeto Vite + React + SCSS — Gerenciador de Tecnologias

Este projeto foi desenvolvido com foco em desempenho, escalabilidade e experiência do usuário. Utiliza Vite como bundler, React para interface, SCSS para estilização modular e diversas bibliotecas para facilitar a autenticação, gerenciamento de estado e interatividade.

## Tecnologias Utilizadas

- Vite
- React
- SCSS
- Axios
- React Toastify
- React Router
- Context API
- Webkit Autofill Styling

## Principais Funcionalidades

### Inicialização
- Configuração de ambiente com Vite e React
- Criação do `package.json` com scripts e dependências
- Estrutura principal com `App.jsx` e `main.jsx`
- Estilos globais configurados via SCSS com reset e tipografia

### Autenticação
- Formulários de login e cadastro com validação
- Integração de axios para comunicação com API
- Implementação de `UserContext` para gerenciamento de autenticação
- Tratamento de login e cadastro com toast notifications
- Campo de senha com alternância de visibilidade (`InputPassword`)

### Estrutura de Páginas e Rotas
- Implementação de rotas privadas e públicas com `PrivateRoutes` e `PublicRoutes`
- Reestruturação do componente `App` com controle de autenticação
- Componente de carregamento com ícone visual
- Estilização consistente com containers, layout e `PageBox`

### Componentes Reutilizáveis
- Input e Select: campos genéricos para formulários
- TechCard: exibe tecnologia cadastrada
- TechList: lista dinâmica de tecnologias
- CreateTechModal e EditTechModal: modais para cadastro e edição
- Form: componente genérico para entrada de dados
- Header: navegação do usuário com logo e elementos visuais

### Gerenciamento de Estado
- Criação de `TechContext` para lidar com estado de tecnologias
- Refatoração do `UserContext` para gerenciamento avançado de autenticação

### Refatorações e Ajustes
- Remoção de componentes obsoletos (`LoginForm`, `RegisterForm`)
- Atualização de estilos globais
- Estilização de campos com autofill do WebKit
- Melhoria da estrutura JSX da `ErrorPage`
- Ajustes no uso de contexto no `TechCard`
- Estilo aprimorado para campos select e autofill
- Ajuste de timeout da API para melhor performance

## Como Rodar

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev