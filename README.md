<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# 🗂️ Project Tracker Lite

A streamlined project tracking and status reporting tool built for busy technical teams. Designed and developed by **Lindsey Michalowski**, a hybrid Technical Project Manager and full-stack developer with 15+ years of experience in custom software consulting, delivery, and support.

---

## Overview

**Project Tracker Lite** is a lightweight app that enables small teams or solo consultants to:
- Track projects, milestones, and tasks
- Assign priority and status
- Export or generate client-facing status reports (AI integration optional)
- Maintain clarity on billable vs internal work

Built with **Blazor Server, C#/.NET, SQL Server**, and structured for future cloud deployment via **AWS**.

---

## Tech Stack

- **Frontend/UI**: Blazor Server (.NET 8)
- **Backend**: ASP.NET Core, C#
- **Database**: SQL Server / Entity Framework Core
- **Cloud-Ready**: AWS or Azure deployable
- **Optional**: OpenAI API for AI-powered status summaries

---

## Key Features

- Create and manage projects, tasks, and notes
- Role-based access (optional for future multi-user version)
- Export status reports (static version ready; AI-powered version in progress)
- Clean UI with Bootstrap styling
- Built with PMs, developers, and tech leads in mind

---

## About the Creator

Hi, I’m **Lindsey Michalowski** — a Technical PM with a background in C#, SQL, and custom software engineering. I specialize in bridging the gap between engineering and delivery by building tools that remove friction, create clarity, and drive outcomes.

I’m currently expanding my cloud and AI expertise with AWS and OpenAI integration, while continuing to support teams in launching and maintaining impactful software.

➡️ Let’s connect on [LinkedIn](https://www.linkedin.com/in/lindseymichalowski/) or check out more at [GitHub](https://github.com/lindseymichalowski)!

---

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-github/project-tracker-lite.git

2. Set up the database using /Database/schema.sql
3. Run the app:
   ```bash
   dotnet run

4. Navigate to https://localhost:5001

---

## Roadmap
 - Add AI-powered summary using OpenAI API
 - Add multi-user support with role-based permissions
 - Deploy to AWS (Lightsail or App Runner)
 - Improve UI responsiveness (mobile support)

---

## Screenshots
Coming soon – App setup is in progress.

---

## 📜 License
MIT License


>>>>>>> 07eaa8c1ec434e24f00dab0e570c9ac53edf971c
