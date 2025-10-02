# Recipe Finder: Your Culinary Companion 🍲

## Overview
A dynamic and responsive React application built with Vite and Tailwind CSS, designed to help users effortlessly discover, filter, and manage their favorite recipes. This project demonstrates robust state management with Zustand, efficient data fetching with `axios` and debouncing for a smooth user experience, and a modular component architecture.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Guidelines](#guidelines)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Author Info](#author-info)

## Installation

Follow these steps to set up the project locally:

### ⬇️ Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/recipe-finder.git
cd recipe-finder
```

### 🔑 Environment Setup
Create a `.env` file in the root directory and add your Spoonacular API key:
```bash
VITE_API_KEY=your_spoonacular_api_key_here
```
Get your API key from [Spoonacular API](https://spoonacular.com/food-api).

### 📦 Install Dependencies
Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```

### 🚀 Start the Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173` (or another port as specified by Vite).

## Usage

Explore the application to find your next favorite meal!

1.  **Search for Recipes:** Use the search bar on the homepage to find recipes by keyword. The search is debounced for a fluid typing experience.
2.  **Filter Recipes:** Apply filters based on cuisine (e.g., Italian, Mexican), diet (e.g., Vegetarian, Vegan), and sort order (e.g., Popularity, Healthiness) to narrow down your search results.
3.  **View Recipe Details:** Click on any recipe card to open a modal displaying detailed ingredients and cooking instructions.
4.  **Add to Favorites:** Use the "+ Favorite" button on recipe cards to save recipes you love.
5.  **Manage Favorites:** Navigate to the "View Favorites" page to see all your saved recipes. From here, you can view details or remove them from your list.

## Features

-   🔍 **Dynamic Recipe Search:** Find recipes quickly with an intelligent, debounced search functionality.
-   🍜 **Comprehensive Filtering:** Refine your recipe search by cuisine, dietary preferences, and various sorting options.
-   📚 **Detailed Recipe View:** Access full ingredient lists and step-by-step cooking instructions in an interactive modal.
-   ❤️ **Personalized Favorites List:** Save and organize your most-loved recipes for easy access.
-   ⚡ **Modern Development Stack:** Built with Vite for incredibly fast build times and a superior developer experience.
-   🎨 **Sleek & Responsive UI:** Crafted with Tailwind CSS for a modern, mobile-first design that looks great on any device.
-   🔄 **Efficient State Management:** Utilizes Zustand for a streamlined and intuitive global state management solution.
- 🔄 **persistence using local storage:** 
    **pagination:** 
    
## Project Structure

```
recipe-finder/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── FilterPanel.tsx
│   │   ├── RecipeCard.tsx
│   │   ├── RecipeList.tsx
│   │   ├── RecipeModal.tsx
│   │   ├── SearchBar.tsx
│   │   └── SortDropdown.tsx
│   ├── hooks/
│   │   └── useDebounce.ts
│   ├── lib/
│   │   └── api.ts
│   ├── pages/
│   │   ├── Favorites.tsx
│   │   ├── Home.tsx
│   │   └── RecipeDetails.tsx
│   ├── store/
│   │   └── recipeStore.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Guidelines

### Development Guidelines
- **Component Naming:** Use PascalCase for component names (e.g., `RecipeCard.tsx`).
- **File Structure:** Organize components in the `src/components/` directory, pages in `src/pages/`, and utilities in `src/lib/`.
- **State Management:** Use Zustand for global state. Keep component-specific state with React hooks.
- **API Calls:** All API interactions should go through `src/lib/api.ts`.
- **Styling:** Use Tailwind CSS classes for styling. Avoid inline styles.
- **TypeScript:** Use TypeScript for type safety. Define types in `src/types/index.ts`.

### Usage Guidelines
- **Search:** Type in the search bar to find recipes. Search is debounced to improve performance.
- **Filtering:** Use the FilterPanel to narrow down recipes by cuisine, diet, and sort options.
- **Favorites:** Click the favorite button on recipe cards to save recipes. View them on the Favorites page.
- **Details:** Click "View Recipe" on a card to see full details in a modal.

### Future Enhancements
- Add user authentication to save favorites across sessions.
- Implement recipe rating and review system.
- Add nutritional information display.
- Integrate with more recipe APIs for broader options.
- Add offline support with service workers.

## Technologies Used

| Technology         | Category           | Description                                  |
| :----------------- | :----------------- | :------------------------------------------- |
| **React**          | Frontend Library   | Building interactive user interfaces.        |
| **TypeScript**     | Language           | Enhanced type safety and developer experience.|
| **Vite**           | Build Tool         | Next-generation frontend tooling.            |
| **Tailwind CSS**   | CSS Framework      | Utility-first CSS for rapid UI development.  |
| **Zustand**        | State Management   | Fast, scalable, and simple state management. |
| **React Router DOM**| Routing            | Declarative routing for React applications.  |
| **Axios**          | HTTP Client        | Promise-based HTTP client for API requests.  |
| **ESLint**         | Linting            | Maintain code quality and consistency.       |

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please follow these steps:

1.  🍴 Fork the repository.
2.  🌿 Create a new branch (`git checkout -b feature/your-feature-name`).
3.  ✨ Make your changes and ensure they adhere to the project's coding style.
4.  📝 Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  🚀 Push to your branch (`git push origin feature/your-feature-name`).
6.  📬 Open a Pull Request, describing your changes and their benefits.

## Author Info

Connect with me and see more of my work!
---

[![Built With Vite](https://img.shields.io/badge/Built%20With-Vite-blueviolet)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-orange?logo=zustand&logoColor=white&style=flat-square)](https://zustand-bear.github.io/blog/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=flat-square)](https://eslint.org/)
[![Axios](https://img.shields.io/badge/Axios-000000?logo=axios&logoColor=white&style=flat-square)](https://axios-http.com/)

![Readme was generated by Dokugen]