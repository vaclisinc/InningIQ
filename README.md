# [InningIQ](https://inningiq.web.app) - AI-Powered Baseball Analysis Assistant 

[InningIQ](https://inningiq.web.app) is an AI-driven platform designed to lower the barriers to baseball data analysis. By integrating powerful language models, InningIQ provides a conversational interface that allows users to effortlessly interact with data, visualize insights, and generate custom web scraping code. Whether you're a baseball YouTuber, analyst, or amateur team coach, InningIQ simplifies the entire process, saving you time and effort.

[![InningIQ website](https://raw.githubusercontent.com/vaclisinc/InningIQ/2068bd869b9c3d8e3be26cc298af7e29c27cdfb0/preview.gif)](https://inningiq.web.app/)

## Features

- **Interactive Data Visualization**
  Upload or describe your CSV/raw data through a conversational interface, and InningIQ will generate tailored visualizations to provide clear insights.

- **Conversational Web Scraping Tool**
  InningIQ's web scraping tool guides you through generating custom code to collect the baseball data you need. Just input your requirements, and the tool handles the rest.

- **Digitization of Paper Records [(old jyBaseball plan)](https://github.com/vaclisinc/jyBaseball)**
  Convert your paper-based baseball records into digital formats, then visualize and analyze the data to streamline your team's performance tracking and history management.

## Getting Started

Currently, InningIQ is still under development. You can visit our [website](https://inningiq.web.app) to learn about the latest progress and upcoming features.

## How to Use

1. **Data Visualization**: Upload your CSV file or describe your data in the chat interface. InningIQ will guide you through creating visualizations.

2. **Web Scraping**: Tell InningIQ what data you need and from where. It will generate and execute the scraping code for you.

3. **Digitizing Paper Records**: Use the jyBaseball module to convert paper records. Follow the prompts to input your data and generate digital formats.


# Installation for local development

Follow these steps to set up and run InningIQ on your local machine:

1. **Install Node.js and npm** (Node Package Manager) if you haven't already.

2. **Clone the repository:**
```bash
git clone https://github.com/vaclisinc/InningIQ.git
cd InningIQ
```

3. **Install dependencies:**
```bash
npm install
```

4. **Start the development server:**
```bash
npm run dev
```

5. **Open your browser** and navigate to `http://localhost:5173` (or the port specified in the console output).

For building the project for production:

```bash
npm run build
```

This will create a `dist` folder with the built files.

To preview the production build:

```bash
npm run preview
```

Note: The project uses Vite as the build tool, React for the frontend, and includes i18n for internationalization. The `package.json` file shows all the dependencies and scripts available for the project:


```1:42:package.json
{
  "name": "inningiq",
  "private": true,
  "version": "0.0.1",
  "type": "module",
  "homepage": "https://vaclisinc.github.io/InningIQ",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "i18next": "^23.14.0",
    "i18next-browser-languagedetector": "^8.0.0",
    "i18next-http-backend": "^2.6.1",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-i18next": "^15.0.1",
    "react-just-parallax": "^3.1.16",
    "react-router-dom": "^6.26.1",
    "scroll-lock": "^2.1.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.0",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.9.0",
    "eslint-plugin-react": "^7.35.0",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.9",
    "gh-pages": "^6.1.1",
    "globals": "^15.9.0",
    "postcss": "^8.4.41",
    "tailwindcss": "^3.4.10",
    "vite": "^5.4.1"
  }
}
```


If you need to make any changes to the configuration, you can refer to the `vite.config.js` file:


```1:8:vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 添加这一行
  plugins: [react()],
})
```


## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to submit pull requests, report issues, or request features.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- OpenAI for their powerful language models
- The open-source community for various libraries used in this project

For more information, visit our [documentation](https://inningiq.web.app/#roadmap).