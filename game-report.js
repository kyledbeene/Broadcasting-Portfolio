const repository = 'kyledbeene/vticehockey';
const reportDirectory = 'game-reports';
const gameId = new URLSearchParams(window.location.search).get('game') || '';
const gameParts = gameId.split('-');
const gameDate = new Date(Number(gameParts[0]), Number(gameParts[1]) - 1, Number(gameParts[2]));
const opponentKey = gameParts.slice(3).join('-');
const opponentNames = {
  'nc-state': 'NC State D1', unc: 'UNC D1', lindenwood: 'Lindenwood', siena: 'Siena', 'weber-state': 'Weber State', liberty: 'Liberty', 'liberty-d1': 'Liberty D1', 'wake-forest': 'Wake Forest', uncw: 'UNCW', hpu: 'HPU', 'fall-classic': 'ACCHL Fall Classic', 'south-carolina': 'South Carolina', wvu: 'WVU', ohio: 'Ohio', 'miami-oh': 'Miami (OH)', maryland: 'Maryland', 'acchl-playoffs': 'ACCHL Playoffs', 'acha-regionals': 'ACHA SE Regionals'
};
const opponentLogoMap = {
  'nc-state': 'school-logos/ncstate.png',
  unc: 'school-logos/unc.png',
  lindenwood: 'school-logos/lindenwood.png',
  siena: 'school-logos/siena.png',
  'weber-state': 'school-logos/weberst.png',
  liberty: 'school-logos/libertyaway.png',
  'liberty-d1': 'school-logos/libertyaway.png',
  'wake-forest': 'school-logos/wakeforest.png',
  uncw: 'school-logos/uncw.png',
  hpu: 'school-logos/highpoint.png',
  'fall-classic': 'school-logos/acchl.png',
  'south-carolina': 'school-logos/acha.png',
  wvu: 'school-logos/westvirginia.png',
  ohio: 'school-logos/ohio.png',
  'miami-oh': 'school-logos/miami.png',
  maryland: 'school-logos/maryland.png',
  'acchl-playoffs': 'school-logos/acchl.png',
  'acha-regionals': 'school-logos/acha.png'
};
const awayGames = new Set(['2026-09-11-nc-state', '2026-09-12-unc', '2026-09-18-lindenwood', '2026-09-19-siena', '2026-09-20-weber-state', '2026-09-25-liberty', '2026-10-09-wake-forest', '2026-10-10-wake-forest', '2026-10-23-hpu', '2026-10-24-hpu', '2026-10-30-liberty-d1', '2026-11-13-liberty']);
const neutralGames = new Set(['2026-11-06-fall-classic', '2026-11-07-fall-classic', '2026-11-08-fall-classic', '2026-11-20-south-carolina', '2027-02-12-acchl-playoffs', '2027-02-13-acchl-playoffs', '2027-02-14-acchl-playoffs', '2027-02-19-acha-regionals', '2027-02-20-acha-regionals']);
const gameLocation = neutralGames.has(gameId) ? 'Neutral' : awayGames.has(gameId) ? 'Away' : 'Home';
const readableDate = gameDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();
const opponent = opponentNames[opponentKey] || 'Opponent';

function decodeContent(value) { return decodeURIComponent(escape(atob(value.replace(/\n/g, '')))); }
function parseReport(markdown) {
  const match = markdown.match(/^---\s*([\s\S]*?)\s*---/);
  const fields = {};
  if (match) match[1].split('\n').forEach(line => { const separator = line.indexOf(':'); if (separator > -1) fields[line.slice(0, separator).trim()] = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, ''); });
  return { title: fields.title || `${opponent} game report`, summary: fields.summary || 'The complete game recap and scoring summary.', date: fields.date || readableDate, body: markdown.replace(/^---[\s\S]*?---/, '').replace(/^#\s+[^\n]+\s*/, '').trim() };
}
function renderMarkdown(markdown) {
  return markdown.split(/\n\s*\n/).filter(Boolean).map(block => {
    if (block.startsWith('## ')) return `<h3>${block.slice(3).trim()}</h3>`;
    if (block.split('\n').every(line => /^[-*] /.test(line))) return `<ul>${block.split('\n').map(line => `<li>${line.slice(2).trim()}</li>`).join('')}</ul>`;
    return `<p>${block.replace(/\n/g, '<br>')}</p>`;
  }).join('');
}
function renderReport(report) {
  const opponentLogo = opponentKey === 'liberty' || opponentKey === 'liberty-d1'
    ? gameLocation === 'Home' ? 'school-logos/libertyhome.png' : 'school-logos/libertyaway.png'
    : opponentLogoMap[opponentKey] || 'school-logos/libertyaway.png';
  const opponentLogoEl = document.querySelector('#report-opponent-logo');
  const opponentBadge = opponent.replace(/[^A-Za-z ]/g, '').split(/\s+/).map(word => word[0]).join('').slice(0, 4).toUpperCase() || 'OPP';
  document.title = `${opponent} | Virginia Tech Hockey Game Report`;
  document.querySelector('#report-title').innerHTML = `${opponent.toUpperCase()} <em>REPORT.</em>`;
  document.querySelector('#report-meta').textContent = `${report.date} · ${gameLocation}`;
  document.querySelector('#report-heading').textContent = report.title;
  document.querySelector('#report-copy').textContent = report.summary;
  document.querySelector('#report-body').innerHTML = renderMarkdown(report.body);
  document.querySelector('#report-date').textContent = readableDate;
  document.querySelector('#report-location').textContent = gameLocation;
  document.querySelector('#report-opponent').textContent = opponent;
  if (opponentLogoEl) {
    opponentLogoEl.src = opponentLogo;
    opponentLogoEl.alt = `${opponent} logo`;
    opponentLogoEl.onerror = function() {
      this.style.display = 'none';
      const fallbackMark = document.querySelector('#report-opponent-mark');
      if (fallbackMark) {
        fallbackMark.textContent = opponentBadge;
        fallbackMark.style.display = 'flex';
      }
    };
  }
  const fallbackMark = document.querySelector('#report-opponent-mark');
  if (fallbackMark) {
    fallbackMark.textContent = opponentBadge;
    fallbackMark.style.display = 'none';
  }
}
async function loadScore() {
  try {
    // Update this filename when a new season's games CSV is added.
    const response = await fetch('games-2026-27.csv', { cache: 'no-store' });
    if (!response.ok) return;
    const row = responseTextToRows(await response.text()).find(item => item[0] === gameId);
    if (!row) return;
    const scores = [row[4], row[5]];
    document.querySelector('#report-vt-score').textContent = scores[0] || 'TBD';
    document.querySelector('#report-opponent-score').textContent = scores[1] || 'TBD';
    document.querySelector('#report-center-score').textContent = scores.every(score => score !== 'TBD') ? `${scores[0]} — ${scores[1]}` : 'TBD';
  } catch (error) { console.info('The report score is not available yet.'); }
}
function responseTextToRows(csv) { return csv.trim().split(/\r?\n/).slice(1).map(line => { const fields=[]; let field=''; let quoted=false; for (const character of line) { if (character === '"') quoted=!quoted; else if (character === ',' && !quoted) { fields.push(field.trim()); field=''; } else field+=character; } fields.push(field.trim()); return fields; }).filter(row => row[0]); }
async function loadReport() {
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}/contents/${reportDirectory}/${encodeURIComponent(gameId)}.md`);
    if (!response.ok) throw new Error('Report not found');
    const detail = await response.json();
    renderReport(parseReport(decodeContent(detail.content)));
  } catch (error) {
    renderReport({ title: `${opponent} game report`, summary: 'The complete recap, final score, and game-day notes will be added here.', date: readableDate, body: '' });
  }
}
renderReport({ title: `${opponent} game report`, summary: 'The complete recap, final score, and game-day notes will be added here.', date: readableDate, body: '' });
loadScore();
loadReport();
