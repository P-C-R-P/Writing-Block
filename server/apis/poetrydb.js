const API_URL = 'https://poetrydb.org/title';

async function fetchPoems() {
  const response1 = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data1 = await response1.json();
  const titlesArray = data1.titles;
  return titlesArray;
}

function randomTitle(array) {
  const title = array[Math.floor(Math.random() * array.length)];
  return title;
}

async function fetchPoem(title) {
  const response2 = await fetch(`${API_URL}/${title}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data2 = await response2.json();
  const poem = data2[0];
  return poem;
}

async function randomPoem() {
  const titlesArray = await fetchPoems();
  let title = await randomTitle(titlesArray);
  let poem = await fetchPoem(title);
  while (parseInt(poem.linecount) > 25) {
    title = await randomTitle(titlesArray);
    poem = await fetchPoem(title);
  }
  console.log(poem);
  return poem;
}

module.exports = randomPoem;