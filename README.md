React app that lets you input ingredients and then get an AI generated recipe.
The AI suggestions come from the Hugging Face API
You will need to navigate to https://huggingface.co/settings/tokens and generate an API token.
Create an account if you do not already have one (it is free)
Then click Create new token at the link provided above.
Be sure to check Make calls to Inference Providers, then choose Save Token at the bottom of the page.

<img width="1063" height="720" alt="image" src="https://github.com/user-attachments/assets/24b6df5d-90b1-4a3b-b733-57a3163ab78f" />

Then, go to the .env file in this repo and past your API key into the variable ""

# To Run Locally
npm install

npm run dev
