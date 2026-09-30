/*
  EDIT THIS FILE to manage your blog.
  - Add each Mononoke light novel to BOOKS (order = order on the shelf).
  - Add translated chapters to a book's `chapters`. Text is plain text;
    a blank line starts a new paragraph.
  - `color` = spine/cover colour. `cover` (optional) = path to an image, e.g. "img/book1.jpg".
  - `tag` = group used by the filter buttons (e.g. "Volume 1-3"). Use any labels you like.
  The entries below are PLACEHOLDERS: replace the titles with the real ones.
*/
const BOOKS = [
  {
    id: "vol1",
    title: "Mononoke – Volume 1",
    jp: "モノノ怪 第一巻",
    year: 2008,
    tag: "Series",
    color: "#7a1f1f",
    cover: "",
    chapters: [
      {
        title: { en: "Chapter 1 (sample)", pl: "Rozdział 1 (przykład)" },
        text: {
          en: "Your English translation goes here.\n\nBlank line = new paragraph.",
          pl: "Tutaj wpisz polskie tłumaczenie.\n\nPusta linia = nowy akapit."
        }
      }
    ]
  },
  { id: "vol2", title: "Mononoke – Volume 2", jp: "モノノ怪 第二巻", year: 2009, tag: "Series", color: "#1f3a6b", cover: "", chapters: [] },
  { id: "vol3", title: "Mononoke – Volume 3", jp: "モノノ怪 第三巻", year: 2010, tag: "Series", color: "#2e5b3a", cover: "", chapters: [] },
  { id: "vol4", title: "Mononoke – Volume 4", jp: "モノノ怪 第四巻", year: 2011, tag: "Series", color: "#8a6d1f", cover: "", chapters: [] },
  { id: "vol5", title: "Mononoke – Volume 5", jp: "モノノ怪 第五巻", year: 2012, tag: "Series", color: "#5b2e6b", cover: "", chapters: [] },
  { id: "vol6", title: "Mononoke – Volume 6", jp: "モノノ怪 第六巻", year: 2013, tag: "Series", color: "#1f5b6b", cover: "", chapters: [] },
  { id: "vol7", title: "Mononoke – Volume 7", jp: "モノノ怪 第七巻", year: 2014, tag: "Series", color: "#6b3a1f", cover: "", chapters: [] },
  { id: "vol8", title: "Mononoke – Volume 8", jp: "モノノ怪 第八巻", year: 2015, tag: "Series", color: "#3a3a3a", cover: "", chapters: [] }
];
