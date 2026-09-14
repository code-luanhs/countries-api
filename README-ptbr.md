# Countries Explorer

[English](README.md)

Uma aplicação responsiva para explorar informações de países. O projeto foi desenvolvido a partir do desafio [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca), do Frontend Mentor.

## Funcionalidades

- Lista países em cards com bandeira, população, região e capital.
- Busca países pelo nome.
- Filtra a lista por região.
- Exibe uma página de detalhes para cada país.
- Permite navegar entre países que fazem fronteira.
- Oferece tema claro e escuro, incluindo a preferência do sistema.
- Mantém a escolha manual de tema no navegador.
- Inclui animações sutis na listagem e no seletor de regiões.

> Os dados são fornecidos localmente por `src/assets/data/data.json`; a aplicação não faz requisições a uma API em tempo de execução.

## Tecnologias

- [React](https://react.dev/) e [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) para rotas
- [Tailwind CSS](https://tailwindcss.com/) para estilos
- [Motion](https://motion.dev/) para animações

## Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm

### Instalação

```bash
git clone git@github.com:code-luanhs/countries-api.git
cd countries-api
npm install
npm run dev
```

Depois, abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera uma versão de produção e verifica os tipos TypeScript. |
| `npm run preview` | Visualiza localmente o build de produção. |
| `npm run lint` | Executa a análise estática com ESLint. |

## Estrutura do projeto

```text
src/
├── assets/data/       # Base local de países
├── components/        # Componentes reutilizáveis da interface
├── contexts/          # Contexto de tema claro/escuro
├── pages/             # Páginas inicial, detalhes e 404
├── App.tsx            # Definição das rotas
└── main.tsx           # Ponto de entrada da aplicação
```

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Listagem de países, busca e filtro por região. |
| `/country/:id` | Detalhes de um país, usando o código alfa-3 como identificador. |

## Autor

Desenvolvido por [Luan Henrique](https://github.com/code-luanhs).
