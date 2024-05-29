# langchain-demo

## Project Description

This project demonstrates the integration and usage of language models in applications, specifically focusing on the `ollama.js` and `openai.js` scripts. It utilizes the LangChain library to facilitate interactions with OpenAI's language models, providing a framework for interpreting emoji sequences and extracting emotional sentiments.

## Environment Setup

To set up your environment for running the project scripts, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Configure your `OPENAI_API_KEY` in the `.env` file based on the `env.sample` provided in the repository.

### Acquiring an OpenAI API Key

To acquire an OpenAI API key, follow these steps:

1. Visit the [OpenAI API](https://openai.com/api/) website.
2. Sign up or log in to your OpenAI account.
3. Navigate to the API section and follow the instructions to generate a new API key.
4. Copy the generated API key and paste it into your `.env` file as the value for `OPENAI_API_KEY`.

### Downloading and Setting Up Ollama
Ollama requires a separate setup. Follow the instructions on the [Ollama GitHub repository](https://github.com/langchain/ollama) to download and set up Ollama on your system.

## Usage Examples

### Executing `ollama.js`
To run the `ollama.js` script, use the following command:
```bash
node ollama.js
```
This script demonstrates how to use the Ollama language model to interpret emojis.

### Executing `openai.js`
To run the `openai.js` script, use the following command:
```bash
node openai.js
```
This script shows how to use OpenAI's language model to interpret emojis based on the provided template.

