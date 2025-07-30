# Test App - SvelteKit Projekt

Eine moderne SvelteKit-Anwendung mit GitHub Actions CI/CD Pipeline für automatisches Testing und Deployment.

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## CI/CD Pipeline

Dieses Projekt nutzt GitHub Actions für:

- ✅ **Continuous Integration**: Automatische Tests bei jedem Push/PR
- ✅ **Continuous Deployment**: Automatisches Deployment zu GitHub Pages
- ✅ **Multi-Node Testing**: Tests auf Node.js 18.x und 20.x
- ✅ **Code Quality**: Linting und Formatierung

### Workflows

- **CI Workflow** (`.github/workflows/ci.yml`): Läuft bei Push/PR auf main branch
- **Deploy Workflow** (`.github/workflows/deploy.yml`): Deployed automatisch zu GitHub Pages

## Tech Stack

- **Frontend**: SvelteKit + TailwindCSS
- **Testing**: Playwright (E2E) + Vitest (Unit)
- **Build Tool**: Vite
- **Deployment**: GitHub Pages mit statischem Adapter
- **CI/CD**: GitHub Actions
