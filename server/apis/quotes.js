const API_URL = 'https://api.api-ninjas.com/v1/quotes?category=';

async function fetchQuote() {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'X-Api-Key': '/rcpocGG607YR8jLBynVHQ==ZBGTKtGPlMAA8KO9',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  const quoteData = data[0];
  return quoteData;
}

module.exports = fetchQuote;