# Movie Search Application

Welcome to the Movie Search Application! This project utilizes React and Next.js to create a simple movie search application where users can browse movies and view details about them.

## Features

- **Search**: Users can search for movies using the search bar.
- **Movie Details**: Users can view details about each movie, including the title, overview, release date, and rating.
- **Dark Mode**: Toggle between light and dark mode for better readability.
- **Navigation**: Easy navigation with a menu bar to go to the home page and about page.

## Components

### 1. Card Component
- Located in `Card.js`
- Displays a card for each movie with its image, overview, title, release date, and vote count.

### 2. DarkModeSwitch Component
- Located in `DarkModeSwitch.js`
- Provides a toggle switch for switching between light and dark mode.
![alt text](<Screenshot 2024-03-20 at 1.13.27 PM.png>)
![alt text](<Screenshot 2024-03-20 at 1.13.57 PM.png>)
### 3. Header Component
- Located in `Header.js`
- Displays the header with navigation links and a dark mode switch.

### 4. NavbarItem Component
- Located in `NavbarItem.js`
- Displays navigation items for filtering movies by genre.

### 5. MoviePage Component
- Located in `MoviePage.js`
- Displays details about a specific movie.

### 6. SearchPage Component
- Located in `SearchPage.js`
- Displays search results based on the user's input.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

