/*
  EDIT THIS FILE to manage your blog.
  - Each entry in BOOKS is one light novel (order = order on the shelf).
  - Add translated chapters to a book's `chapters`. Text is plain text;
    a blank line starts a new paragraph.
  - `main`/`mark`/`author`/`publisher` = text printed on the spine; `paper`/`band` = spine paper and bottom band colours; `w` = spine width in px. `cover` = image path (put images in /img).
  - `category`: which tab it appears in: "books" (default), "manga" or "other".
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
  { id: "mou", title: "Mononoke: Mou", jp: "モノノ怪 妄", author: "仁木英之", tag: "Novels", color: "#1f5b6b", cover: "img/mou.webp", main: "モノノ怪", mark: "妄", publisher: "角川文庫", paper: "#cfa77a", band: "#4a6f86", w: 64, chapters: [] },
  { id: "karakasa", title: "Mononoke: Karakasa", jp: "モノノ怪 唐傘", tag: "Series", color: "#2a2a5a", cover: "img/karakasa.webp", chapters: [] },
  { id: "hinezumi", title: "Mononoke: Hinezumi", jp: "モノノ怪 火鼠", tag: "Series", color: "#a5442f", cover: "img/hinezumi.webp", chapters: [] },
  { id: "jashin", title: "Mononoke: Jashin", jp: "モノノ怪 蛇神", tag: "Series", color: "#cfcfe0", cover: "img/jashin.webp", chapters: [] },
  { id: "gangsta", title: "Gangsta.: Death of Anosmic Stray Dogs", jp: "ギャングスタ 鼻の利かない野良犬の死に様", author: "河端ジュン一 (原作: コースケ)", tag: "Novels", color: "#e07b1a", cover: "img/gangsta.png", chapters: [] },
  { id: "vhd-rose-princess-1", category: "manga", title: "Vampire Hunter D: The Rose Princess, Vol. 1", jp: "", author: "Hideyuki Kikuchi · Saiko Takaki", tag: "Manga", color: "#1f3550", cover: "img/vhd-rose-princess-1.png", chapters: [] },
  { id: "vhd-omnibus-1", title: "Vampire Hunter D: Omnibus Book One", jp: "", author: "Hideyuki Kikuchi · Yoshitaka Amano", tag: "Novels", color: "#8a6d1f", cover: "img/vhd-omnibus-1.webp", chapters: [] }
];

// Text for the About page (blank line = new paragraph).
const ABOUT = {
  en: "Fan translations of the Mononoke light novels by Hideyuki Niki, from Japanese into English and Polish.\n\nThese are unofficial, non-commercial translations made out of love for the series. Please support the official releases.",
  pl: "Fanowskie tłumaczenia light novel z serii Mononoke autorstwa Hideyuki Nikiego, z japońskiego na angielski i polski.\n\nSą to nieoficjalne, niekomercyjne tłumaczenia, powstałe z miłości do serii. Wspieraj oficjalne wydania."
};

// "Learn Japanese" tab: words taken from the series and its covers. Add more rows freely.
const LEARN_WORDS = [
  { jp: "モノノ怪", read: "mononoke", en: "a vengeful spirit", pl: "mściwy duch" },
  { jp: "薬売り", read: "kusuriuri", en: "medicine seller", pl: "sprzedawca lekarstw" },
  { jp: "形", read: "katachi", en: "form, shape", pl: "kształt, forma" },
  { jp: "真", read: "makoto", en: "truth", pl: "prawda" },
  { jp: "理", read: "kotowari", en: "reason, principle", pl: "rozum, zasada" },
  { jp: "執", read: "shū", en: "attachment, obsession", pl: "przywiązanie, obsesja" },
  { jp: "鬼", read: "oni", en: "demon, ogre", pl: "demon, oni" },
  { jp: "妄", read: "mō", en: "delusion", pl: "złudzenie" }
];
