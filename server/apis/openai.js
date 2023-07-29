const API_KEY = '';
const API_URL = 'https://api.openai.com/v1/completions';

async function fetchSentence() {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt:
        'Create an original first sentence for a story.',
      max_tokens: 30,
    }),
  });
  const data = await response.json();
  const output = data.choices;
  const textOutput = output[0].text.replace(/\n/g, '').replace(/\.$/, '') + '...';
  console.log(textOutput);
}

async function fetchIdea() {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: 'Create a one-sentence original plot idea for a story.',
      max_tokens: 30,
    }),
  });
  const data = await response.json();
  const output = data.choices;
  const textOutput = output[0].text.replace(/\n/g, '').replace(/\.$/, '') + '...';
  console.log(textOutput);
}

fetchSentence();
fetchIdea();
