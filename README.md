# REST Countries API

[Português (Brasil)](README.pt-BR.md)

A responsive application for exploring country information. This project was built from Frontend Mentor's [REST Countries API with color theme switcher](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) challenge.

## Features

- Displays countries in cards with their flag, population, region, and capital.
- Searches countries by name.
- Filters the list by region.
- Shows a details page for each country.
- Lets users navigate between bordering countries.
- Supports light and dark themes, including the system preference.
- Persists a manually selected theme in the browser.
- Includes subtle animations for the country list and region selector.

> Data is provided locally from `src/assets/data/data.json`; the application does not make API requests at runtime.

## Tech stack

- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for routing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Motion](https://motion.dev/) for animations

## Run locally

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm

### Installation

```bash
git clone git@github.com:code-luanhs/countries-api.git
cd countries-api
npm install
npm run dev
```

Then open the URL shown by Vite, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Creates a production build and checks TypeScript types. |
| `npm run preview` | Serves the production build locally. |
| `npm run lint` | Runs static analysis with ESLint. |

## Project structure

```text
src/
├── assets/data/       # Local country dataset
├── components/        # Reusable UI components
├── contexts/          # Light/dark theme context
├── pages/             # Home, details, and 404 pages
├── App.tsx            # Route definitions
└── main.tsx           # Application entry point
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Country list, search, and region filter. |
| `/country/:id` | Country details, using its alpha-3 code as the identifier. |

## Author

Built by [Luan Henrique](https://github.com/code-luanhs).
