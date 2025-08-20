# Personal Portfolio Website - Kauã Neres de Souza

## 📜 Description

This portfolio is a single-page application built with React, TypeScript, and Vite, styled with Tailwind CSS. It features a clean, dark-themed UI with custom animations and interactive elements to create an engaging user experience. The primary goal was to create a pixel-perfect, fully responsive website that effectively showcases my technical abilities and professional experience.

## ✨ Key Features

- **📱 Fully Responsive Design:** Meticulously crafted to provide an optimal viewing experience across all devices, from small mobile screens to large desktop monitors.
- **🎨 Dynamic & Interactive UI:**
  - **Interactive Particle Background:** An engaging "constellation" effect on the Hero section that reacts to mouse movement, built with `tsParticles`.
  - **3D Flipping Skill Cards:** An eye-catching 3D animation on the skill cards that reveals more information on hover.
  - **Modern Card Effects:** Custom-styled project and experience cards with a unique shadow/offset effect on hover.
- **🚀 Modern Tech Stack:** Built with the latest industry-standard technologies for a high-performance and scalable application.
- ** Interactive Navbar:** The header smartly hides on scroll-down and reappears on scroll-up for a seamless navigation experience.
- **📝 Conventional Commits:** The project's version history follows the Conventional Commits specification for clear and maintainable commits.

## 🛠️ Tech Stack

- **Frontend:** [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations & Effects:** [tsParticles](https://particles.js.org/), CSS Animations
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Linting/Formatting:** ESLint, Prettier (recommended setup)

## 🚀 Getting Started

To run this project locally, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/KNereSouza/kneres.com.br.git](https://github.com/KNereSouza/kneres.com.br.git)
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd kneres.com.br
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).

## 📄 Environment Variables

This project does not require any environment variables to run in its current state. If you integrate a service for the contact form (like EmailJS or a backend API), you should create a `.env` file in the root directory and store your keys there.

Example `.env` file:

```.env
VITE_SERVICE_ID=YOUR_SERVICE_ID
VITE_TEMPLATE_ID=YOUR_TEMPLATE_ID
VITE_PUBLIC_KEY=YOUR_PUBLIC_KEY
```
