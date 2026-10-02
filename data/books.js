/*
  EDIT THIS FILE to manage your blog.
  - Each entry in BOOKS is one light novel (order = order on the shelf).
  - Add translated chapters to a book's `chapters`. Two kinds:
      * `text: {en, pl}` = plain text; a blank line starts a new paragraph.
      * `sentences: [...]` = the two-page reader (Japanese | translation). Each sentence has
        `jp`, `en`, `pl` and optional `words`, `grammar`, `note`; `para: true` starts a new paragraph.
        See the sample chapter in the first book.
  - `main`/`mark`/`author`/`publisher` = text printed on the spine; `paper`/`band` = spine paper and bottom band colours; `w` = spine width in px. `cover` = image path (put images in /img).
  - `category`: which tab it appears in: "books" (default), "manga" or "other".
  - `tag` = group used by the filter buttons. `year` is optional.
*/
const BOOKS = [
  { id: "shu", title: "Mononoke: Shu", jp: "モノノ怪 執", author: "仁木英之", tag: "Novels", color: "#8a6d1f", cover: "img/shu.webp", main: "モノノ怪", mark: "執", publisher: "角川文庫", paper: "#d8b66e", band: "#4f8a78", w: 60,
    chapters: [
      // DEMO of the two-page reader. These example sentences were written for this site;
      // they are NOT quotes from the book. Replace them with your own translations.
      { title: { en: "Sample page (example sentences)", pl: "Strona przykładowa (zdania przykładowe)" },
        sentences: [
          { jp: "薬売りは静かに刀を抜いた。",
            en: "The medicine seller quietly drew his sword.",
            pl: "Sprzedawca lekarstw cicho dobył miecza.",
            words: [
              { word: "薬売り", reading: "kusuriuri", meaning: { en: "medicine seller (薬 medicine + 売り selling)", pl: "sprzedawca lekarstw (薬 lekarstwo + 売り sprzedawanie)" } },
              { word: "静かに", reading: "shizuka ni", meaning: { en: "quietly", pl: "cicho, spokojnie" } },
              { word: "刀", reading: "katana", meaning: { en: "sword", pl: "miecz" } },
              { word: "抜いた", reading: "nuita", meaning: { en: "drew, pulled out (past of 抜く)", pl: "dobył, wyciągnął (czas przeszły od 抜く)" } }
            ],
            grammar: [
              { pattern: "～は", explanation: { en: "Topic marker. 薬売り is what the sentence is about.", pl: "Partykuła tematu. 薬売り to to, o czym jest zdanie." } },
              { pattern: "na-adjective + に", explanation: { en: "静か (quiet) + に makes an adverb: quietly.", pl: "静か (cichy) + に tworzy przysłówek: cicho." } },
              { pattern: "～を", explanation: { en: "Marks the direct object (what is drawn).", pl: "Oznacza dopełnienie bliższe (co zostało dobyte)." } },
              { pattern: "抜く → 抜いた", explanation: { en: "Godan verb ending in く: past tense is いた.", pl: "Czasownik godan na く: czas przeszły to いた." } }
            ] },
          { jp: "この家には、何かがいる。",
            en: "There is something in this house.",
            pl: "W tym domu coś jest.",
            words: [
              { word: "この", reading: "kono", meaning: { en: "this (before a noun)", pl: "ten (przed rzeczownikiem)" } },
              { word: "家", reading: "ie", meaning: { en: "house", pl: "dom" } },
              { word: "何か", reading: "nanika", meaning: { en: "something", pl: "coś" } },
              { word: "いる", reading: "iru", meaning: { en: "to be, to exist (living things)", pl: "być, istnieć (istoty żywe)" } }
            ],
            grammar: [
              { pattern: "場所に～がいる", explanation: { en: "Existence pattern: に marks the place, が the thing that exists.", pl: "Wzór istnienia: に oznacza miejsce, が to, co istnieje." } },
              { pattern: "いる / ある", explanation: { en: "いる is for living or moving things, ある for objects. Using いる here hints that the 'something' is alive.", pl: "いる dotyczy istot żywych lub poruszających się, ある przedmiotów. いる sugeruje tu, że to „coś” żyje." } },
              { pattern: "には", explanation: { en: "に + は: the place is picked out for contrast ('in this house, at least').", pl: "に + は: miejsce jest wyróżnione kontrastem („przynajmniej w tym domu”)." } }
            ] },
          { para: true,
            jp: "夜が更けるにつれて、物の怪の気配が濃くなった。",
            en: "As the night deepened, the presence of the mononoke grew stronger.",
            pl: "Wraz z tym, jak noc się pogłębiała, obecność mononoke stawała się silniejsza.",
            words: [
              { word: "夜", reading: "yoru", meaning: { en: "night", pl: "noc" } },
              { word: "更ける", reading: "fukeru", meaning: { en: "to grow late (of night or seasons)", pl: "robić się późno (o nocy lub porze roku)" } },
              { word: "物の怪", reading: "mononoke", meaning: { en: "vengeful spirit", pl: "mściwy duch" } },
              { word: "気配", reading: "kehai", meaning: { en: "presence, sign of something", pl: "obecność, znak czegoś" } },
              { word: "濃い", reading: "koi", meaning: { en: "dense, strong, dark", pl: "gęsty, silny, ciemny" } }
            ],
            grammar: [
              { pattern: "～につれて", explanation: { en: "'As X changes, Y changes along with it.' Verb dictionary form + につれて.", pl: "„W miarę jak X się zmienia, zmienia się też Y.” Forma słownikowa + につれて." } },
              { pattern: "i-adjective: 濃い → 濃くなる", explanation: { en: "Drop い, add く, then なる: 'become'. Past: 濃くなった.", pl: "Odrzuć い, dodaj く i なる: „stać się”. Czas przeszły: 濃くなった." } },
              { pattern: "AのB", explanation: { en: "の links two nouns: 物の怪の気配 = the presence of the mononoke.", pl: "の łączy dwa rzeczowniki: 物の怪の気配 = obecność mononoke." } }
            ] },
          { jp: "恨みを晴らさない限り、あの霊は消えないだろう。",
            en: "Unless the grudge is dispelled, that spirit will probably not vanish.",
            pl: "Dopóki uraza nie zostanie rozwiana, ten duch prawdopodobnie nie zniknie.",
            words: [
              { word: "恨み", reading: "urami", meaning: { en: "grudge, resentment", pl: "uraza, żal" } },
              { word: "晴らす", reading: "harasu", meaning: { en: "to clear away, to dispel", pl: "rozwiać, rozproszyć" } },
              { word: "限り", reading: "kagiri", meaning: { en: "as long as, limit", pl: "dopóki, granica" } },
              { word: "霊", reading: "rei", meaning: { en: "spirit, soul", pl: "duch, dusza" } },
              { word: "消える", reading: "kieru", meaning: { en: "to vanish, to disappear", pl: "znikać" } }
            ],
            grammar: [
              { pattern: "～ない限り", explanation: { en: "'Unless' / 'as long as not'. Negative verb + 限り.", pl: "„Chyba że” / „dopóki nie”. Czasownik w formie przeczącej + 限り." } },
              { pattern: "～だろう", explanation: { en: "Guess or probability: 'probably'. Plain form of でしょう.", pl: "Przypuszczenie: „prawdopodobnie”. Zwykła forma でしょう." } },
              { pattern: "あの", explanation: { en: "'That' over there, or something known to both speakers.", pl: "„Tamten”, albo coś znanego obu rozmówcom." } }
            ] }
        ] }
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
