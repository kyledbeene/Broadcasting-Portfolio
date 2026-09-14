/*
  ARTICLES.JS
  ===========
  This file controls every "Feature Article" tile in the "Selected Work"
  section. You do NOT need to touch index.html to add, remove, or reorder
  articles — just edit the list below.

  HOW TO ADD A NEW ARTICLE
  -------------------------
  1. Put your article PDF in this same folder as index.html.
  2. Find an image to use for the tile — this can be a link to an image
     already online (like the examples below), or a file you add to this
     folder.
  3. Copy one of the { ... } blocks below, paste it anywhere between the
     square brackets [ ], and fill in your own details (see FIELD GUIDE).
  4. Save the file — that's it.

  IMPORTANT: if your PDF file name has spaces in it, replace every space
  with "%20" wherever the file name is used as a link.

  HOW TO CHANGE THE ORDER
  ------------------------
  Tiles appear in the SAME ORDER they're listed here, top to bottom. Cut and
  paste whole { ... } blocks to move them earlier or later in the list.

  HOW TO REMOVE AN ARTICLE
  --------------------------
  Delete its whole { ... } block (including the comma after it, if any).

  FIELD GUIDE
  -----------
  image    - Web address (or file name) of the tile's image.
  alt      - Short description of the image, for accessibility.
  title    - The bold title of the tile.
  desc     - The short description under the title.
  pdf      - Path to the article PDF file, e.g. "my-article.pdf"
             (remember to swap spaces for %20).
  linkText - The text of the link at the end of the description, usually
             "Read the article".
*/

const ARTICLES = [
  {
    image: "https://craft-sonsofsat.transforms.svdcdn.com/production/F73IWYVbcAAeHtL.jpeg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1704728924&s=ff26cc8a034c1772cc7bdd14e0fc4d99",
    alt: "Hokies take the field in Tallahassee",
    title: "Good Morning Football: VT vs. Wake Forest",
    desc: "A Virginia Tech football preview covering the Wake Forest matchup, game outlook, weather, and key things to know.",
    pdf: "good-morning-football-vt-vs-wake-forest.pdf",
    linkText: "Read the article"
  },
  {
    image: "https://craft-sonsofsat.transforms.svdcdn.com/production/IMG_1196.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1704729063&s=bf1e5bf825796caa4b682f51236859cf",
    alt: "Hokies celebrate Cameron Fagan's three-run homer",
    title: "No. 22 Virginia Tech Brushes Past Louisville in ACC Championship Quarterfinals",
    desc: "Virginia Tech softball advances to the ACC Championship semifinals after a quarterfinal win over Louisville.",
    pdf: "no-22-virginia-tech-brushes-past-louisville-in-acc-championship-quarterfinals.pdf",
    linkText: "Read the article"
  },
  {
    image: "https://craft-sonsofsat.transforms.svdcdn.com/production/IMG_1133.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1704729062&s=9099331b7c0c22de19e77af25b462f48",
    alt: "Cameron Fagan comes home after walkoff homerun",
    title: "No. 24 Virginia Tech KO's No. 6 Clemson in Doubleheader",
    desc: "Virginia Tech softball sweeps a doubleheader against Clemson in a dramatic home series.",
    pdf: "no-24-virginia-tech-kos-no-6-clemson-in-doubleheader.pdf",
    linkText: "Read the article"
  },
  {
    image: "https://craft-sonsofsat.transforms.svdcdn.com/production/F4kIDvBXwAANsss.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1704728922&s=23fef53d013fbdc41f7698e783af24eb",
    alt: "Image via @tj_2103 on X",
    title: "2024 SF Tyler Johnson Commits to Hokies",
    desc: "A recruiting feature on Virginia Tech basketball's first commitment of the 2024 class.",
    pdf: "2024-sf-tyler-johnson-commits-to-hokies.pdf",
    linkText: "Read the article"
  }
];
