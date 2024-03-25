require("dotenv").config();
// Import the OpenAI package
const { Configuration, OpenAIApi } = require("openai");

// Initialize the configuration with your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is stored in an environment variable for security
});

// Create a new OpenAI API client with the configured API key
const openai = new OpenAIApi(configuration);

async function main() {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content: "Who won the world series in 2020?",
        },
      ],
    });

    console.log(completion.data.choices[0].message.content);
  } catch (error) {
    console.error(error);
  }
}

main();
