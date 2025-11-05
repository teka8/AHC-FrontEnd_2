# Project Overview

This is a React-based frontend for the Africa Health Collaborative (AHC) website. It is built with Vite, uses Redux for state management, and is styled with Tailwind CSS. The application is written in TypeScript.

The project is divided into three main sections:
1.  **Main Site:** Contains general information about the AHC, including news, events, and resources.
2.  **Health Innovation:** A dedicated section with its own layout, showcasing ventures, programs, and services related to health innovation.
3.  **Scholarship:** A section for scholarship applications and tracking.

The application communicates with a Laravel-based backend for data and authentication.

# Building and Running

**1. Setup:**

*   Copy the `.env.example` file to a new file named `.env`.
*   Update the `VITE_API_BASE_URL` in `.env` to point to your backend API. For local development, it is likely `http://localhost:8000/api`.

**2. Install Dependencies:**

```bash
npm install
```

**3. Run Development Server:**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

**4. Build for Production:**

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

**5. Preview Production Build:**

```bash
npm run preview
```

# Development Conventions

*   **State Management:** Redux Toolkit is used for managing global application state.
*   **Routing:** React Router is used for client-side routing.
*   **Styling:** Tailwind CSS is used for styling. Custom styles are defined in `src/styles/globals.css` and `tailwind.config.ts`.
*   **API Communication:** `axios` is used for making HTTP requests to the backend. Redux Toolkit Query is also used for some API interactions.
*   **Linting and Formatting:** The project is set up with TypeScript and likely uses Prettier and ESLint for code quality, although the configuration files are not explicitly present in the provided file list.
