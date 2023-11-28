document.addEventListener('DOMContentLoaded', getRandomQuote);

async function getRandomQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    const quoteElement = document.getElementById('quote');
    quoteElement.innerHTML = `<p>${data.content}</p><footer>&mdash; ${data.author}</footer>`;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}
