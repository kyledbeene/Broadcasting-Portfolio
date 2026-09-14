/*
  VIDEOS.JS
  =========
  This file controls every video tile on the "Selected Work" section of the
  portfolio site. You do NOT need to touch index.html to add, remove, or
  reorder videos — just edit the list below.

  HOW TO ADD A NEW VIDEO
  -----------------------
  1. Upload/find your video on YouTube and open it.
  2. Click "Share" under the video, then "Copy" the link. It looks like:
       https://youtu.be/dQw4w9WgXcQ
     The part after "youtu.be/" (here, dQw4w9WgXcQ) is the Video ID.
     (If your link instead looks like https://www.youtube.com/watch?v=dQw4w9WgXcQ
     the Video ID is the part after "v=".)
  3. Copy one of the { ... } blocks below, paste it into the list (anywhere
     between the square brackets [ ]), and fill in your own details.
  4. Save the file and re-upload it (or push to GitHub) — that's it.

  HOW TO CHANGE THE ORDER
  ------------------------
  The tiles appear on the site in the SAME ORDER they are listed here, top
  to bottom. To reorder them, just cut and paste whole { ... } blocks to
  move them earlier or later in the list.

  HOW TO REMOVE A VIDEO
  ----------------------
  Delete its whole { ... } block (including the comma after it, if any).

  FIELD GUIDE
  -----------
  id       - The YouTube video ID (see step 2 above). Required.
  category - Which tab the video shows up under. Must be exactly one of:
               "highlights"  -> Highlights tab
               "interviews"  -> Interviews tab
             (Videos also always show up under the "All Videos" tab.)
  tag      - Small label above the title (e.g. "Highlight Reel — Baseball").
  title    - The bold title of the tile.
  desc     - The short description under the title.

  Don't worry about breaking anything — as long as every block has commas
  between it and the next block, and everything is wrapped in quotes, it
  will just work. If you're ever unsure, make a copy of this file before
  editing so you can undo mistakes.
*/

const VIDEOS = [
  {
    id: "zTkGHf8Vun4",
    category: "highlights",
    tag: "baseball highlights",
    title: "6/26/26 MHC Marlins Highlights",
    desc: "Highlights from the June 26, 2026 MHC Marlins game."
  },
  {
    id: "QtQvL3OFeZE",
    category: "baseball highlights",
    tag: "MHC Marlins Highlights",
    title: "7/3/26 MHC Marlins Highlights",
    desc: "Highlights from the July 3, 2026 MHC Marlins game."
  },
  {
    id: "fXXy5LLoGc0",
    category: "highlights",
    tag: "hockey highlights",
    title: "3/20/26 Roanoke RYD Highlights",
    desc: "Highlights from the March 20, 2026 Roanoke Rail Yard Dawgs game."
  },
  {
    id: "ssFvslmL74w",
    category: "interviews",
    tag: "Feature Interview",
    title: "Ethan Aguigui Feature",
    desc: "A feature-style interview built around the human side of the story — inspired by the storytelling approach of broadcasters like Tom Rinaldi."
  },
  {
    id: "-IIT8ANAwW4",
    category: "highlights",
    tag: "baseball highlights",
    title: "7/5/26 MHC Marlins Highlights",
    desc: "Highlights from the July 5, 2026 MHC Marlins game."
  },
  {
    id: "dNCXAQED-hM",
    category: "baseball highlights",
    tag: "MHC Marlins Highlights",
    title: "7/26/26 MHC Marlins Highlights",
    desc: "Highlights from the July 26, 2026 MHC Marlins game."
  },
  {
    id: "ADGwa7thsK8",
    category: "highlights",
    tag: "MHC Marlins Highlights",
    title: "7/17/26 MHC Marlins Highlights",
    desc: "Highlights from the July 17, 2026 MHC Marlins game."
  },
  {
    id: "SNijJmRRVE4",
    category: "baseball highlights",
    tag: "MHC Marlins Highlights",
    title: "7/20/26 MHC Marlins Highlights",
    desc: "Highlights from the July 20, 2026 MHC Marlins game."
  },
  {
    id: "AHRENrVqfiM",
    category: "baseball highlights",
    tag: "MHC Marlins Highlights",
    title: "7/16/26 MHC Marlins Highlights",
    desc: "Highlights from the July 16, 2026 MHC Marlins game."
  },
  {
    id: "dtUeszQp7MM",
    category: "baseball highlights",
    tag: "MHC Marlins Highlights",
    title: "7/24/26 MHC Marlins Highlights",
    desc: "Highlights from the July 24, 2026 MHC Marlins game."
  }
];
