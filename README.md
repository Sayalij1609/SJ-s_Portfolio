<div align="center">

# ✨ Sayali Jadhav — Portfolio Website

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Design-1572B6?logo=css3&logoColor=white&style=for-the-badge)](https://www.w3.org/Style/CSS/)
[![License](https://img.shields.io/badge/License-MIT-9E4AB0?style=for-the-badge)](LICENSE)

<p align="center">
  <b>A modern, responsive, high-performance developer portfolio showcasing AI/ML engineering, GenAI systems, and full-stack projects.</b>
</p>

[Live Demo](https://sayalijadhav.vercel.app/) • [Report Bug](https://github.com/Sayalij1609/Sayali_Portfolio/issues) • [Request Feature](https://github.com/Sayalij1609/Sayali_Portfolio/issues)

</div>

---

## 🌟 Overview

This portfolio is built with **React** and **Vite**, engineered for fast performance, sleek dark aesthetics, and rich user interactions. It features a curated **Pure Black + Orchid/Plum** theme, an interactive particle background, smooth typing animations, interactive project showcases, and a dynamic vertical experience timeline.

---

## 🚀 Key Features

- **⚡ Instant First-Load Experience**: High-performance Hero section with zero delay and smooth typing effect cycling through multiple engineering specializations.
- **✨ Interactive Particle Background**: Lightweight HTML5 Canvas particle system with mouse repulsion, dynamic connections, and theme-matched nodes.
- **🔲 High-Tech Grid Aesthetic**: Subtle, glowing background grid providing depth without distracting from the content.
- **♾️ Infinite Horizontal Tech Marquee**: Multi-row, dual-direction scrolling technology chips showcasing 35+ tools and frameworks with original brand colors.
- **💼 Categorized Project Showcase**: Clean project cards with live category filtering (`AI / ML`, `GenAI`, `Computer Vision`, `Web Dev`, `Java`), tech badges, live demo links, and GitHub repositories.
- **📍 Interactive Experience & Education Timelines**: Step-by-step vertical milestone tracker with alternating cards, icon nodes, and scroll indicators.
- **🏆 Achievements & Competitions**: Bento-style grid highlighting hackathon milestones, technical event head roles, and certifications.
- **📱 Fully Responsive**: Pixel-perfect layout tailored for desktops, tablets, and mobile devices.

---

## 🛠️ Tech Stack & Tools

### Frontend & Core
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid, Glassmorphism, Micro-animations)
- **Icons**: FontAwesome 6
- **Typography**: Google Fonts (*DM Serif Display*, *DM Sans*, *JetBrains Mono*)

### AI / ML & Backend Skills Highlighted
- **Languages**: Python, Java, JavaScript, C
- **AI / ML**: PyTorch, Scikit-learn, OpenCV, YOLO, Reinforcement Learning (DQN), XAI (Explainable AI), NLP
- **GenAI & Agentic AI**: LangChain, LangGraph, RAG, Ollama (Llama 3.2), Multi-Agent Architectures
- **Backend / Web**: FastAPI, Flask, React, Node.js, Spring Core, REST APIs, MySQL, PostgreSQL, MongoDB

---

## 📂 Project Showcase

| Project | Category | Description | Tech Stack |
| :--- | :--- | :--- | :--- |
| **FlowNest Productivity Hub** | Full Stack | Full-stack productivity hub for managing tasks, habits, smart notes, analytics, and email reminders. | React, Vite, Flask, SQLAlchemy, PostgreSQL |
| **Multi-Agent Research System** | Agentic AI | Autonomous multi-agent AI research platform coordinating web search, content scraping, and report synthesis. | React, FastAPI, LangChain, LangGraph, Python |
| **UrbanFlow AI** | AI / CV | Traffic management system using YOLO detection and Double DQN Reinforcement Learning for dynamic signal optimization. | YOLO, RL / DQN, Python, OpenCV |
| **MedAgentix AI** | GenAI / Healthcare | Multi-agent healthcare assistant leveraging LLMs, RAG, and Explainable AI for symptom analysis and disease prediction. | LLMs, RAG, XAI, LangChain |
| **XAI Social Engineering Simulator** | AI / Security | AI simulation platform for phishing, smishing, and vishing awareness with ~97% classifier accuracy. | XAI, Flask, Ollama, Scikit-learn |
| **Hand Gesture Controller** | Computer Vision | Real-time contactless gesture recognition enabling desktop navigation and app switching via webcam. | Python, OpenCV, MediaPipe |
| **AI News Explanation Agent** | GenAI | Full-stack agentic news summarization and contextual explanation platform. | FastAPI, Ollama (Llama 3.2), Flask |
| **EcoTrace** | Web Dev | Platform for tracking and managing plastic waste collection with MVC architecture. | Spring Core, JSP, MySQL, Java |
| **OfferMandi** | Adv Java | Offer management web application with CRUD modules and dynamic interfaces. | JSP, Servlets, JDBC, Java |
| **TrainZ** | Frontend | Event website for a technical survival competition featuring timeline and round schedules. | React, Vite, JavaScript, CSS |
| **VisionCap** | Multimodal AI | Image captioning model integrating Computer Vision and NLP to produce descriptive text for visual inputs. | Computer Vision, NLP, Python |

---

## 💻 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sayalij1609/Sayali_Portfolio.git
   cd Sayali_Portfolio_React
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
Sayali_Portfolio_React/
├── public/
│   ├── images/              # Project screenshots, avatars & assets
│   ├── favicon.svg          # Site favicon
│   └── Sayali_Jadhav_CV.pdf # Resume download asset
├── src/
│   ├── components/
│   │   ├── About.jsx        # About Me & personal traits
│   │   ├── Achievements.jsx # Hackathon awards & milestones
│   │   ├── Contact.jsx      # Contact form & social connections
│   │   ├── Education.jsx    # Academic background timeline
│   │   ├── Events.jsx       # Hackathons & leadership roles
│   │   ├── Experience.jsx   # Professional experience timeline
│   │   ├── Footer.jsx       # Footer & visitor counter badge
│   │   ├── Hero.jsx         # Hero section with animated typing
│   │   ├── Loader.jsx       # Initial website loading screen
│   │   ├── Navbar.jsx       # Sticky glassmorphism navigation
│   │   ├── ParticleCanvas.jsx # Interactive canvas particles
│   │   ├── Projects.jsx     # Filterable project showcase
│   │   ├── ScrollTop.jsx    # Back-to-top floating button
│   │   └── TechStack.jsx    # Infinite horizontal marquee chips
│   ├── styles/
│   │   └── index.css        # Central design system & animations
│   ├── App.jsx              # Main App layout & scroll observers
│   └── main.jsx             # React DOM entry point
├── index.html               # Main HTML template
├── package.json             # Project dependencies & scripts
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## 📬 Contact & Connect

- **Name**: Sayali Jadhav
- **Email**: [sayalijadhav162005@gmail.com](mailto:sayalijadhav162005@gmail.com)
- **LinkedIn**: [linkedin.com/in/sayali-jadhav-b4263827b](https://linkedin.com/in/sayali-jadhav-b4263827b)
- **GitHub**: [github.com/Sayalij1609](https://github.com/Sayalij1609)

---

<div align="center">
  <sub>Designed &amp; Developed with 💜 by <b>Sayali Jadhav</b> • © 2026 All Rights Reserved</sub>
</div>
