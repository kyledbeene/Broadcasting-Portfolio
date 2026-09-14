/*
  GAME-NOTES.JS
  =============
  This file controls every "Game Notes" tile in the "Selected Work" section.
  You do NOT need to touch index.html to add, remove, or reorder game notes
  — just edit the list below.

  HOW TO ADD A NEW GAME NOTES PDF
  --------------------------------
  1. Put your PDF file in this same folder as index.html (e.g. "9-1 Game Notes.pdf").
  2. Make a thumbnail image of the top of the PDF (a screenshot works fine),
     save it as a .png, and put it in the "game-notes-thumbnails" folder.
     Name it something like "9-1 Game Notes.pdf.png" to match the pattern
     used by the existing thumbnails.
  3. Copy one of the { ... } blocks below, paste it anywhere between the
     square brackets [ ], and fill in your own details (see FIELD GUIDE).
  4. Save the file — that's it.

  IMPORTANT: if your PDF or image file name has spaces in it, replace every
  space with "%20" wherever the file name is used as a link (this is already
  done for you in the examples below — just follow the same pattern).

  HOW TO CHANGE THE ORDER
  ------------------------
  Tiles appear in the SAME ORDER they're listed here, top to bottom. Cut and
  paste whole { ... } blocks to move them earlier or later in the list.

  HOW TO REMOVE A GAME NOTES TILE
  ---------------------------------
  Delete its whole { ... } block (including the comma after it, if any).

  FIELD GUIDE
  -----------
  thumbnail - Path to the thumbnail image, e.g. "game-notes-thumbnails/9-1 Game Notes.pdf.png"
              (remember to swap spaces for %20).
  alt       - Short description of the thumbnail image, for accessibility.
  title     - The bold title of the tile.
  desc      - The short description under the title (teams / matchup, etc).
  pdf       - Path to the PDF file itself, e.g. "9-1 Game Notes.pdf"
              (remember to swap spaces for %20).
  linkText  - The text of the link at the end of the description, usually
              "View game notes".
*/

const GAME_NOTES = [
  {
    thumbnail: "game-notes-thumbnails/3.21NOTES.pdf.png",
    alt: "Top portion of March 21 game notes",
    title: "March 21 Game Notes",
    desc: "Roanoke Rail Yard Dawgs at Huntsville Havoc.",
    pdf: "3.21NOTES.pdf",
    linkText: "View game notes"
  },
  {
    thumbnail: "game-notes-thumbnails/3.20NOTES.pdf.png",
    alt: "Top portion of March 20 game notes",
    title: "March 20 Game Notes",
    desc: "Roanoke Rail Yard Dawgs at Huntsville Havoc.",
    pdf: "3.20NOTES.pdf",
    linkText: "View game notes"
  },
  {
    thumbnail: "game-notes-thumbnails/2.28NOTES.pdf.png",
    alt: "Top portion of February 28 game notes",
    title: "February 28 Game Notes",
    desc: "Roanoke Rail Yard Dawgs at Knoxville Ice Bears.",
    pdf: "2.28NOTES.pdf",
    linkText: "View game notes"
  },
  {
    thumbnail: "game-notes-thumbnails/8-5%20Game%20Notes.pdf.png",
    alt: "Top portion of August 5, 2026 game notes",
    title: "East Divisional Championship Game 2 — August 5, 2026",
    desc: "Morehead City Marlins vs. Wilmington Sharks.",
    pdf: "8-5%20Game%20Notes.pdf",
    linkText: "View game notes"
  },
  {
    thumbnail: "game-notes-thumbnails/8-1%20Game%20Notes.pdf.png",
    alt: "Top portion of August 1, 2026 game notes",
    title: "Game 48 — August 1, 2026",
    desc: "Morehead City Marlins vs. Greenville Yard Gnomes.",
    pdf: "8-1%20Game%20Notes.pdf",
    linkText: "View game notes"
  },
  {
    thumbnail: "game-notes-thumbnails/7-27%20Game%20Notes.pdf.png",
    alt: "Top portion of July 27, 2026 game notes",
    title: "Game 44 — July 27, 2026",
    desc: "Morehead City Marlins vs. Holly Springs Salamanders.",
    pdf: "7-27%20Game%20Notes.pdf",
    linkText: "View game notes"
  },
  {
    thumbnail: "game-notes-thumbnails/6-12%20Game%20Notes.pdf.png",
    alt: "Top portion of June 12, 2026 game notes",
    title: "Game 11 — June 12, 2026",
    desc: "Morehead City Motorboaters vs. Wilmington Sharks.",
    pdf: "6-12%20Game%20Notes.pdf",
    linkText: "View game notes"
  },
  {
    thumbnail: "game-notes-thumbnails/5-28%20Game%20Notes.pdf.png",
    alt: "Top portion of May 28, 2026 game notes",
    title: "Game 1 — May 28, 2026",
    desc: "Morehead City Marlins at Zebulon Devil Dogz.",
    pdf: "5-28%20Game%20Notes.pdf",
    linkText: "View game notes"
  }
];
