/*
  EDIT THIS FILE to manage your blog.
  - Each entry in BOOKS is one light novel (order = order on the shelf).
  - Add translated chapters to a book's `chapters`. Text is plain text;
    a blank line starts a new paragraph.
  - `main`/`mark`/`author`/`publisher` = text printed on the spine; `paper`/`band` = spine paper and bottom band colours; `w` = spine width in px. `cover` = image path (put images in /img).
  - `tag` = group used by the filter buttons. `year` is optional.
*/
const BOOKS = [
  { id: "shu", title: "Mononoke: Shu", jp: "モノノ怪 執", author: "仁木英之", tag: "Novels", color: "#8a6d1f", cover: "img/shu.webp", main: "モノノ怪", mark: "執", publisher: "角川文庫", paper: "#d8b66e", band: "#4f8a78", w: 60,
    chapters: [
      { title: { en: "Chapter 1 (sample)", pl: "Rozdział 1 (przykład)" },
        text: { en: "Your English translation goes here.\n\nBlank line = new paragraph.",
                pl: "Tutaj wpisz polskie tłumaczenie.\n\nPusta linia = nowy akapit." } }
    ] },
  { id: "oni", title: "Mononoke: Oni", jp: "モノノ怪 鬼", author: "仁木英之", tag: "Novels", color: "#7a1f1f", cover: "img/oni.webp", main: "モノノ怪", mark: "鬼", publisher: "角川文庫", paper: "#e7d6ad", band: "#a5442f", w: 54, chapters: [] },
  { id: "mou", title: "Mononoke: Mou", jp: "モノノ怪 妄", author: "仁木英之", tag: "Novels", color: "#1f5b6b", cover: "img/mou.webp", main: "モノノ怪", mark: "妄", publisher: "角川文庫", paper: "#cfa77a", band: "#4a6f86", w: 64, chapters: [] }
];
