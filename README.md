# Updating This Portfolio Site

You don't need to know how to code to add or reorder content on this site.
Videos, game notes, and articles each live in their own simple file:

| Section | File |
|---|---|
| Videos | `videos.js` |
| Game Notes | `game-notes.js` |
| Articles | `articles.js` |

Open the file for the section you want to change in any text editor (VS Code,
Notepad, TextEdit — anything works), edit the list, save, and publish. The
rest of this README covers each one.

## Videos (`videos.js`)

### Adding a new video

1. Go to your video on YouTube, click **Share**, then **Copy** the link.
   - A link like `https://youtu.be/dQw4w9WgXcQ` — the part after `youtu.be/`
     (`dQw4w9WgXcQ`) is the **Video ID**.
   - A link like `https://www.youtube.com/watch?v=dQw4w9WgXcQ` — the Video ID
     is the part after `v=`.
2. Copy one of the existing blocks in the `VIDEOS` list (the parts wrapped in
   `{ }`) and paste a copy of it anywhere between the `[` and `]` brackets.
3. Fill in your own details:

   ```js
   {
     id: "dQw4w9WgXcQ",              // the YouTube Video ID
     category: "highlights",         // "highlights" or "interviews"
     tag: "Highlight Reel",          // small label above the title
     title: "My New Video Title",    // the bold title on the tile
     desc: "A short description of the video."
   },
   ```

4. Make sure there's a comma `,` after every block except the very last one.
5. Save the file.

### Categories (tabs)

Every video must have a `category` of either:
- `"highlights"` — shows under the **Highlights** tab
- `"interviews"` — shows under the **Interviews** tab

All videos show under **All Videos** no matter which category they use.

## Game Notes (`game-notes.js`)

### Adding a new game notes tile

1. Put your PDF file in the same folder as `index.html`.
2. Make a thumbnail image of the top of the PDF (a screenshot works fine),
   save it as a `.png`, and put it in the `game-notes-thumbnails` folder.
3. Copy one of the existing blocks in the `GAME_NOTES` list and paste a copy
   of it anywhere between the `[` and `]` brackets. Fill in your own details:

   ```js
   {
     thumbnail: "game-notes-thumbnails/9-1 Game Notes.pdf.png",
     alt: "Top portion of September 1 game notes",
     title: "Game 50 — September 1, 2026",
     desc: "Morehead City Marlins vs. Fayetteville SwampDogs.",
     pdf: "9-1 Game Notes.pdf",
     linkText: "View game notes"
   },
   ```

4. **If the file name has spaces**, replace every space with `%20` in the
   `thumbnail` and `pdf` values, e.g. `"9-1%20Game%20Notes.pdf"`.
5. Make sure there's a comma `,` after every block except the very last one.
6. Save the file.

## Articles (`articles.js`)

### Adding a new article

1. Put your article PDF in the same folder as `index.html`.
2. Find an image to use for the tile — either a link to an image already
   online, or a file you add to this folder.
3. Copy one of the existing blocks in the `ARTICLES` list and paste a copy of
   it anywhere between the `[` and `]` brackets. Fill in your own details:

   ```js
   {
     image: "https://example.com/my-image.jpg",
     alt: "Short description of the image",
     title: "My Article Title",
     desc: "A short description of the article.",
     pdf: "my-article.pdf",
     linkText: "Read the article"
   },
   ```

4. **If the PDF file name has spaces**, replace every space with `%20`, e.g.
   `"my%20article.pdf"`.
5. Make sure there's a comma `,` after every block except the very last one.
6. Save the file.

## Reordering tiles

Within each file, tiles appear on the site in the **same order** they're
listed, top to bottom. To reorder them, cut a whole `{ ... }` block
(including its trailing comma) and paste it higher or lower in that file's
list. Videos, game notes, and articles are ordered independently of each
other, but that doesn't matter since they're separated onto different tabs
anyway.

## Removing a tile

Delete its whole `{ ... }` block, including the comma after it (or before it,
if it's the last item in the list).

## Publishing your changes

If this site is hosted on GitHub Pages:
1. Save your edited file (`videos.js`, `game-notes.js`, or `articles.js`),
   plus any new PDFs, thumbnails, or images you added.
2. Upload the changed/new files to your GitHub repository (drag-and-drop on
   github.com works, or use GitHub Desktop) — it will ask you to "commit"
   the change. Add a short message like "Add new game notes" and commit/push.
3. Give it a minute or two, then refresh your site — the update will be live.

## Something looks broken?

The most common cause is a missing comma, a stray quote mark, or a file name
that doesn't match exactly (including capitalization and spaces). Compare
your new block against the ones already in the file — every block in a given
file should have the same shape.

If you're not sure, make a backup copy of the file before editing so you can
always undo by replacing the file.

## Other content (photos, bio, contact links, etc.)

Everything else (hero section, About, Contact) still lives directly in
`index.html`. Ask for help if you'd like that made easier to edit too.

