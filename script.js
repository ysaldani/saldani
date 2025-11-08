const apiKey = 'YOUR_NEWSAPI_KEY'; // Replace with your actual NewsAPI key
const url = `https://newsapi.org/v2/everything?q=cryptocurrency&language=en&sortBy=publishedAt&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('news-container');
    container.innerHTML = '';
    data.articles.forEach(article => {
      const div = document.createElement('div');
      div.className = 'article';
      div.innerHTML = `
        <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
        <p>${article.description || ''}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById('news-container').innerText = 'Error loading news.';
    console.error(error);
  });
