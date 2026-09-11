const repository = 'kyledbeene/vticehockey';
const articleDirectory = 'news';
const filename = new URLSearchParams(window.location.search).get('article');
const fallbackArticles = {
  'Hokies close regular season with a statement win': {category: 'GAME RECAP', date: 'FEB 18, 2025', body: 'Virginia Tech finishes the regular season on home ice with a 5-2 win and plenty of momentum heading into the postseason.'},
  'Rivalry night is back under the lights': {category: 'PREVIEW', date: 'FEB 11, 2025', body: 'The Hokies return to the ice for a high-energy weekend against Liberty. Bring the noise and wear maroon.'},
  'Inside the room: Built one shift at a time': {category: 'FEATURE', date: 'FEB 04, 2025', body: 'A closer look at the habits, friendships, and relentless work that make this group special beyond game day.'}
};
function decodeContent(value) { return decodeURIComponent(escape(atob(value.replace(/\n/g, '')))); }
function parseArticle(markdown, fallbackTitle = 'Virginia Tech Hockey') {
  const match = markdown.match(/^---\s*([\s\S]*?)\s*---/);
  const fields = {};
  if (match) match[1].split('\n').forEach(line => { const separator = line.indexOf(':'); if (separator > -1) fields[line.slice(0, separator).trim()] = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, ''); });
  const title = fields.title || (markdown.match(/^#\s+([^\n]+)/m) || [null, fallbackTitle])[1];
  const body = markdown.replace(/^---[\s\S]*?---/, '').replace(/^#\s+[^\n]+\s*/, '').replace(/^!\[[^\]]*\]\([^)]*\)\s*/m, '').trim();
  return {title, category: fields.category || 'NEWS', date: fields.date || '', image: fields.image || '', body};
}
function render(article) {
  document.title = `${article.title} | Virginia Tech Hockey`;
  document.querySelector('#article-meta').textContent = `${article.category} · ${article.date}`;
  document.querySelector('#article-title').textContent = article.title;
  document.querySelector('#article-body').innerHTML = article.body.split(/\n\s*\n/).filter(Boolean).map(block => block.startsWith('## ') ? `<h3>${block.slice(3)}</h3>` : `<p>${block.replace(/^[-*] /gm, '• ')}</p>`).join('');
  if (article.image) { const image = document.querySelector('#article-image'); image.src = article.image; image.alt = article.title; image.hidden = false; }
}
async function loadArticle() {
  try {
    if (!filename) throw new Error('Missing article filename');
    const response = await fetch(`https://api.github.com/repos/${repository}/contents/${articleDirectory}/${encodeURIComponent(filename)}`);
    if (!response.ok) throw new Error('Article not found');
    const detail = await response.json();
    render(parseArticle(decodeContent(detail.content)));
  } catch (error) {
    const fallback = fallbackArticles[filename];
    if (fallback) render({title: filename, ...fallback});
    else document.querySelector('#article-body').innerHTML = '<p class="article-loading">This article could not be loaded.</p>';
  }
}
loadArticle();
