# Chetan Verma - Portfolio

A modern, responsive portfolio website for Chetan Verma, a Java Fullstack Developer, built with React and Vite. Features a stunning neon purple and black theme with smooth animations and responsive design.

## 🌟 Features

- **Modern Design**: Neon purple and black color scheme with smooth animations
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **Smooth Navigation**: Single-page application with smooth scrolling between sections
- **Interactive UI**: Engaging hover effects and transitions

## 📋 Sections

- **Hero/Introduction**: Professional introduction with name, title, and overview
- **Skills & Technologies**: Comprehensive showcase of technical skills organized by category
  - Backend (Java, Spring Boot, REST APIs, Microservices, Hibernate/JPA)
  - Frontend (JavaScript, React, HTML/CSS, Vite, Responsive Design)
  - Database (MySQL, PostgreSQL, MongoDB, SQL)
  - Tools & Other (Git/GitHub, Docker, Maven, Jenkins, Postman)
- **Projects**: Featured projects with descriptions, technologies used, and links
- **Contact**: Multiple ways to connect (Email, GitHub, LinkedIn)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chetan-verma97/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 🚀 Deployment

### GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add the base path in `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/'
})
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

Your portfolio will be live at `https://chetan-verma97.github.io/Portfolio/`

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **AWS S3**: Upload the `dist` folder to an S3 bucket configured for static website hosting

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/index.css` to customize the color scheme:

```css
:root {
  --primary-purple: #a855f7;
  --neon-purple: #c084fc;
  --dark-purple: #7e22ce;
  --light-purple: #e9d5ff;
  --black: #0a0a0a;
  --dark-gray: #1a1a1a;
  --medium-gray: #2a2a2a;
  --light-gray: #9ca3af;
  --white: #ffffff;
}
```

### Personal Information

Update your information in:
- `src/components/Hero.jsx` - Name, title, and introduction
- `src/components/Skills.jsx` - Your skills and proficiency levels
- `src/components/Projects.jsx` - Your projects with links
- `src/components/Contact.jsx` - Your contact information

## 📝 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and development server
- **CSS3** - Styling with custom properties and animations
- **ESLint** - Code quality and consistency

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Chetan Verma**
- GitHub: [@chetan-verma97](https://github.com/chetan-verma97)
- LinkedIn: [chetan-verma](https://linkedin.com/in/chetan-verma)
- Email: chetan.verma@example.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/chetan-verma97/Portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!
