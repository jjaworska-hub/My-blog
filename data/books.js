/*
  EDIT THIS FILE to manage your blog.
  - Each entry in BOOKS is one light novel (order = order on the shelf).
  - Add translated chapters to a book's `chapters`. Text is plain text;
    a blank line starts a new paragraph.
  - `color` = spine colour. `cover` = image path (put images in /img).
  - `tag` = group used by the filter buttons. `year` is optional.
*/
const BOOKS = [
  { id: "shu", title: "Mononoke: Shu", jp: "モノノ怪 執", author: "仁木英之", tag: "Novels", color: "#8a6d1f", cover: "img/shu.webp",
    chapters: [
      { title: { en: "Chapter 1 (sample)", pl: "Rozdział 1 (przykład)" },
        text: { en: "Your English translation goes here.\n\nBlank line = new paragraph.",
                pl: "Tutaj wpisz polskie tłumaczenie.\n\nPusta linia = nowy akapit." } }
    ] },
  { id: "oni", title: "Mononoke: Oni", jp: "モノノ怪 鬼", author: "仁木英之", tag: "Novels", color: "#7a1f1f", cover: "img/oni.webp", chapters: [] },
  { id: "mou", title: "Mononoke: Mou", jp: "モノノ怪 妄", author: "仁木英之", tag: "Novels", color: "#1f5b6b", cover: "img/mou.webp", chapters: [] }
];
