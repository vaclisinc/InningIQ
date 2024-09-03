# [InningIQ](https://inningiq.web.app) - AI-Powered Baseball Analysis Assistant 

[InningIQ](https://inningiq.web.app) [(old jyBaseball plan)](https://github.com/vaclisinc/jyBaseball) is an AI-driven platform designed to lower the barriers to baseball data analysis. By integrating powerful language models, InningIQ provides a conversational interface that allows users to effortlessly interact with data, visualize insights, and generate custom web scraping code. Whether you're a baseball YouTuber, analyst, or amateur team coach, InningIQ simplifies the entire process, saving you time and effort.

## Features

- **Interactive Data Visualization**
  Upload or describe your CSV/raw data through a conversational interface, and InningIQ will generate tailored visualizations to provide clear insights.

- **Conversational Web Scraping Tool**
  InningIQ's web scraping tool guides you through generating custom code to collect the baseball data you need. Just input your requirements, and the tool handles the rest.

- **Digitization of Paper Records (jyBaseball)**
  Convert your paper-based baseball records into digital formats, then visualize and analyze the data to streamline your team's performance tracking and history management.

## Getting Started

Follow these steps to get started with InningIQ:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/InningIQ.git
   ```

2. **Install dependencies**
   ```bash
   cd InningIQ
   pip install -r requirements.txt
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your API keys:
   ```
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the web interface**
   Open your browser and navigate to `http://localhost:5000`

## Usage

1. **Data Visualization**: Upload your CSV file or describe your data in the chat interface. InningIQ will guide you through creating visualizations.

2. **Web Scraping**: Tell InningIQ what data you need and from where. It will generate and execute the scraping code for you.

3. **Paper Record Digitization**: Use the jyBaseball module to convert paper records. Follow the prompts to input your data and generate digital formats.

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to submit pull requests, report issues, or request features.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- OpenAI for their powerful language models
- The open-source community for various libraries used in this project

For more information, visit our [documentation](https://inningIQ.readthedocs.io/).