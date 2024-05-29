# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Tesla Frontend Project

## Overview

This project is a frontend application for Tesla, providing an interactive and user-friendly interface for users to explore and interact with Tesla's vehicles and related information. The application is built using modern web technologies to ensure a smooth and responsive user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- View detailed information about Tesla vehicles
- Interactive and responsive design
- Integration with backend APIs for dynamic data
- **Icons**: Beautiful icons using `react-icons`
- **Carousels**: Smooth and responsive carousels using `slick-carousel`

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **React Router**: Routing library for React
- **Axios**: Promise-based HTTP client for making API requests
- **Styled Components**: CSS-in-JS for component-level styling
-  **React Icons**: Library for including popular icons in your React project
- **Slick Carousel**: Carousel/slider component for React

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn

### Setup

1. **Clone the repository**
    ```bash
    git clone https://github.com/Arathypr/Tesla_TNP
    cd Tesla_TNP
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```
    or if you are using yarn:
    ```bash
    yarn install
    ```

3. **Start the development server**
    ```bash
    npm run dev
    ```

4. **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure


- **public/**: Contains static assets and the HTML template.
- **src/**: Contains the main source code for the application.
  - **assets/**: Images, icons, and other static assets.
  - **components/**: Reusable React components.
  - **pages/**: Page components representing different routes.
  - **App.js**: Main application component.
  - **index.js**: Entry point of the application.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.<br>
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the existing code style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
