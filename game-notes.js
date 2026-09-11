const repository = 'kyledbeene/vticehockey';
const directory = 'game-notes';
const grid = document.querySelector('.notes-grid');
function titleFromFilename(filename) { return filename.replace(/\.pdf$/i, '').replace(/^\d{4}-\d{2}-\d{2}-?/, '').replace(/[-_]/g, ' ').replace(/\b\w/g, letter => letter.toUpperCase()); }
function dateFromFilename(filename) { const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})/); return match ? new Date(`${match[1]}-${match[2]}-${match[3]}T12:00:00`).toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'}).toUpperCase() : 'GAME NOTES'; }
function renderNotes(notes) { grid.innerHTML = notes.map(note => `<a class="note-card" href="note-viewer.html?note=${encodeURIComponent(note.name)}"><small>${dateFromFilename(note.name)}</small><small>PDF</small><h2>${titleFromFilename(note.name)}</h2><span class="text-link">Open game notes <span>↗</span></span></a>`).join(''); }
async function loadNotes() {
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}/contents/${directory}`);
    if (!response.ok) throw new Error('Game notes folder unavailable');
    const files = await response.json();
    const notes = files.filter(file => file.type === 'file' && file.name.toLowerCase().endsWith('.pdf')).sort((first, second) => second.name.localeCompare(first.name));
    if (notes.length) renderNotes(notes);
  } catch (error) { console.info('Game notes are not available yet; showing the upload prompt.'); }
}
loadNotes();
