/*
  EDIT THIS FILE to manage your blog.
  - Each entry in BOOKS is one light novel (order = order on the shelf).
  - Add translated chapters to a book's `chapters`. Two kinds:
      * `text: {en, pl}` = plain text; a blank line starts a new paragraph.
      * `sentences: [...]` = the two-page reader (Japanese | translation). Each sentence has
        `jp`, `en`, `pl` and optional `words`, `grammar`, `note`;
        furigana: write the reading in braces right after the kanji, e.g. 漢字{かんじ}; `para: true` starts a new paragraph.
        For several pages use `pages: [[sentences of page 1], [sentences of page 2], ...]` instead of `sentences`.
        See the sample entry "Tsurezuregusa" in the Other tab.
  - `main`/`mark`/`author`/`publisher` = text printed on the spine; `paper`/`band` = spine paper and bottom band colours; `w` = spine width in px. `cover` = image path (put images in /img).
  - `flashcards`: path to this book's vocabulary file (e.g. "files/shu-flashcards.apkg").
    While it is empty, the book page shows a disabled "Download flashcards" button.
  - `category`: which tab it appears in: "books" (default), "manga" or "other".
  - `tag` = group used by the filter buttons. `year` is optional.
*/
const BOOKS = [
  { id: "shu", title: "Mononoke: Shu", jp: "モノノ怪 執", author: "仁木英之", tag: "Novels", color: "#8a6d1f", cover: "img/shu.webp", main: "モノノ怪", mark: "執", publisher: "角川文庫", paper: "#d8b66e", band: "#4f8a78", w: 60,
    chapters: [] },
  { id: "oni", title: "Mononoke: Oni", jp: "モノノ怪 鬼", author: "仁木英之", tag: "Novels", color: "#7a1f1f", cover: "img/oni.webp", main: "モノノ怪", mark: "鬼", publisher: "角川文庫", paper: "#e7d6ad", band: "#a5442f", w: 54, chapters: [] },
  { id: "mou", title: "Mononoke: Mou", jp: "モノノ怪 妄", author: "仁木英之", tag: "Novels", color: "#1f5b6b", cover: "img/mou.webp", main: "モノノ怪", mark: "妄", publisher: "角川文庫", paper: "#cfa77a", band: "#4a6f86", w: 64, chapters: [] },
  { id: "karakasa", title: "Mononoke: Karakasa", jp: "モノノ怪 唐傘", tag: "Series", color: "#2a2a5a", cover: "img/karakasa.webp", chapters: [] },
  { id: "hinezumi", title: "Mononoke: Hinezumi", jp: "モノノ怪 火鼠", tag: "Series", color: "#a5442f", cover: "img/hinezumi.webp", chapters: [] },
  { id: "jashin", title: "Mononoke: Jashin", jp: "モノノ怪 蛇神", tag: "Series", color: "#cfcfe0", cover: "img/jashin.webp", chapters: [] },
  { id: "gangsta", title: "Gangsta.: Death of Anosmic Stray Dogs", jp: "ギャングスタ 鼻の利かない野良犬の死に様", author: "河端ジュン一 (原作: コースケ)", tag: "Novels", color: "#e07b1a", cover: "img/gangsta.png", chapters: [] },
  { id: "vhd-rose-princess-1", category: "manga", title: "Vampire Hunter D: The Rose Princess, Vol. 1", jp: "", author: "Hideyuki Kikuchi · Saiko Takaki", tag: "Manga", color: "#1f3550", cover: "img/vhd-rose-princess-1.png", chapters: [] },
  { id: "vhd-omnibus-1", title: "Vampire Hunter D: Omnibus Book One", jp: "", author: "Hideyuki Kikuchi · Yoshitaka Amano", tag: "Novels", color: "#8a6d1f", cover: "img/vhd-omnibus-1.webp", chapters: [] },
  // Sample for the two-page reader. Japanese text supplied by the site owner; the translations and
  // breakdowns are drafts to be checked. Delete this entry once you have your own chapters.
  { id: "tsurezuregusa-sample", category: "other", title: "Tsurezuregusa (reader sample)", jp: "徒然草", author: "兼好 (Kenkō)", tag: "Sample", color: "#2f3d3a", cover: "", chapters: [
{
        "title": {
          "jp": "『徒然草{つれづれぐさ}』と作者{さくしゃ}について",
          "en": "About Tsurezuregusa and Its Author",
          "pl": "O „Tsurezuregusa” i jego autorze"
        },
        "sentences": [
          {
            "jp": "『徒然草{つれづれぐさ}』は、鎌倉時代{かまくらじだい}（一一八五{せんひゃくはちじゅうご}〜一三三三年{せんさんびゃくさんじゅうさんねん}）の終{お}わり頃{ごろ}、兼好{けんこう}が書{か}きました。",
            "en": "Tsurezuregusa was written by Kenkō toward the end of the Kamakura period (1185–1333).",
            "pl": "„Tsurezuregusa” została napisana przez Kenkō pod koniec okresu Kamakura (1185–1333).",
            "words": [
              {
                "word": "徒然草",
                "reading": "tsurezuregusa",
                "meaning": {
                  "en": "Essays in Idleness (the title of the work)",
                  "pl": "„Zapiski w bezczynności” (tytuł dzieła)"
                }
              },
              {
                "word": "鎌倉時代",
                "reading": "kamakura jidai",
                "meaning": {
                  "en": "Kamakura period",
                  "pl": "okres Kamakura"
                }
              },
              {
                "word": "終わり頃",
                "reading": "owari goro",
                "meaning": {
                  "en": "toward the end, around the end",
                  "pl": "pod koniec, około końca"
                }
              },
              {
                "word": "兼好",
                "reading": "Kenkō",
                "meaning": {
                  "en": "Kenkō (the author)",
                  "pl": "Kenkō (autor)"
                }
              },
              {
                "word": "書きました",
                "reading": "kakimashita",
                "meaning": {
                  "en": "wrote (polite past of 書く)",
                  "pl": "napisał (grzeczny czas przeszły od 書く)"
                }
              }
            ],
            "grammar": [
              {
                "pattern": "～は",
                "explanation": {
                  "en": "Topic marker. The book is what we are talking about, even though it is logically the object of 書く.",
                  "pl": "Partykuła tematu. Książka jest tym, o czym mówimy, choć logicznie jest dopełnieniem czasownika 書く."
                }
              },
              {
                "pattern": "～の終わり頃",
                "explanation": {
                  "en": "頃 (goro) means 'around that time'. 終わり頃 = around the end of.",
                  "pl": "頃 (goro) znaczy „około tego czasu”. 終わり頃 = pod koniec."
                }
              },
              {
                "pattern": "兼好が書きました",
                "explanation": {
                  "en": "が marks the person who did the action.",
                  "pl": "が oznacza osobę wykonującą czynność."
                }
              },
              {
                "pattern": "～ました",
                "explanation": {
                  "en": "Polite past tense: verb stem 書き + ました.",
                  "pl": "Grzeczny czas przeszły: temat 書き + ました."
                }
              }
            ],
            "note": {
              "en": "徒然草 is usually translated 'Essays in Idleness'. 'Tsurezure' (徒然) means having nothing to do, so the title is something like 'notes from idle hours'.",
              "pl": "徒然草 tłumaczy się zwykle jako „Zapiski w bezczynności”. 徒然 (tsurezure) znaczy „nie mieć nic do roboty”, więc tytuł to coś w rodzaju „notatek z nudnych godzin”."
            }
          },
          {
            "para": true,
            "jp": "「つれづれなるままに（暇{ひま}ですることもないので）」という文{ぶん}で始{はじ}まって、兼好{けんこう}が思{おも}ったこと、考{かんが}えたこと、人{ひと}から聞{き}いたことや見{み}たことなどを書{か}いたものです。",
            "en": "It begins with the line “Tsurezure naru mama ni” (“having nothing else to do”), and it is a record of what Kenkō thought and considered, and things he heard from people or saw himself.",
            "pl": "Zaczyna się od zdania „Tsurezure naru mama ni” („nie mając nic innego do roboty”) i jest zapisem tego, co Kenkō pomyślał i rozważał, oraz tego, co usłyszał od ludzi lub zobaczył.",
            "words": [
              {
                "word": "つれづれ",
                "reading": "tsurezure",
                "meaning": {
                  "en": "having nothing to do, boredom",
                  "pl": "brak zajęcia, nuda"
                }
              },
              {
                "word": "暇",
                "reading": "hima",
                "meaning": {
                  "en": "free time",
                  "pl": "wolny czas"
                }
              },
              {
                "word": "文",
                "reading": "bun",
                "meaning": {
                  "en": "sentence",
                  "pl": "zdanie"
                }
              },
              {
                "word": "始まる",
                "reading": "hajimaru",
                "meaning": {
                  "en": "to begin (始まって is the て-form)",
                  "pl": "zaczynać się (始まって to forma て)"
                }
              },
              {
                "word": "思う",
                "reading": "omou",
                "meaning": {
                  "en": "to think, to feel",
                  "pl": "myśleć, czuć"
                }
              },
              {
                "word": "考える",
                "reading": "kangaeru",
                "meaning": {
                  "en": "to consider, to think over",
                  "pl": "rozważać, zastanawiać się"
                }
              },
              {
                "word": "聞く",
                "reading": "kiku",
                "meaning": {
                  "en": "to hear, to listen",
                  "pl": "słyszeć, słuchać"
                }
              },
              {
                "word": "書く",
                "reading": "kaku",
                "meaning": {
                  "en": "to write",
                  "pl": "pisać"
                }
              }
            ],
            "grammar": [
              {
                "pattern": "「～」という文",
                "explanation": {
                  "en": "という introduces a quotation or name: 'the sentence that goes ~'.",
                  "pl": "という wprowadza cytat lub nazwę: „zdanie, które brzmi ~”."
                }
              },
              {
                "pattern": "始まって",
                "explanation": {
                  "en": "て-form joins clauses: 'begins, and ...'.",
                  "pl": "Forma て łączy zdania: „zaczyna się i ...”."
                }
              },
              {
                "pattern": "Verb (plain past) + こと",
                "explanation": {
                  "en": "こと turns a verb into a noun: 思ったこと = 'what (he) thought'.",
                  "pl": "こと zamienia czasownik w rzeczownik: 思ったこと = „to, co pomyślał”."
                }
              },
              {
                "pattern": "～や～など",
                "explanation": {
                  "en": "'A, B and so on'. や gives examples from a longer list; など marks it as incomplete.",
                  "pl": "„A, B i tak dalej”. や podaje przykłady z dłuższej listy, など zaznacza, że lista jest niepełna."
                }
              },
              {
                "pattern": "書いたものです",
                "explanation": {
                  "en": "Verb (past) + もの + です: 'it is something that was written'. Describes what kind of work it is.",
                  "pl": "Czasownik (przeszły) + もの + です: „to coś, co zostało napisane”. Opisuje, czym jest dzieło."
                }
              },
              {
                "pattern": "～ので",
                "explanation": {
                  "en": "'Because ~'. Gives a reason, in a softer way than から.",
                  "pl": "„Ponieważ ~”. Podaje powód łagodniej niż から."
                }
              }
            ]
          },
          {
            "para": true,
            "jp": "このような読{よ}みものを「随筆{ずいひつ}」と言{い}います。",
            "en": "This kind of writing is called “zuihitsu” (essay).",
            "pl": "Taki rodzaj tekstu nazywa się „zuihitsu” (esej).",
            "words": [
              {
                "word": "このような",
                "reading": "kono yō na",
                "meaning": {
                  "en": "like this, of this kind",
                  "pl": "taki jak ten, tego rodzaju"
                }
              },
              {
                "word": "読みもの",
                "reading": "yomimono",
                "meaning": {
                  "en": "reading matter, something to read",
                  "pl": "tekst do czytania"
                }
              },
              {
                "word": "随筆",
                "reading": "zuihitsu",
                "meaning": {
                  "en": "essay, loosely connected personal writing",
                  "pl": "esej, luźno powiązane zapiski osobiste"
                }
              },
              {
                "word": "言う",
                "reading": "iu",
                "meaning": {
                  "en": "to say, to call",
                  "pl": "mówić, nazywać"
                }
              }
            ],
            "grammar": [
              {
                "pattern": "～ような + noun",
                "explanation": {
                  "en": "'Like ~, of the kind ~'. このような = 'of this kind'.",
                  "pl": "„Taki jak ~, tego rodzaju”. このような = „tego rodzaju”."
                }
              },
              {
                "pattern": "A を B と言う",
                "explanation": {
                  "en": "'To call A by the name B'. と marks the name.",
                  "pl": "„Nazywać A imieniem B”. と oznacza nazwę."
                }
              },
              {
                "pattern": "～と言います",
                "explanation": {
                  "en": "Japanese says 'people call it ~' with no subject. English turns it into the passive 'is called'.",
                  "pl": "Po japońsku mówi się „nazywa się ~” bez podmiotu. W polskim to strona bierna lub forma bezosobowa."
                }
              }
            ]
          },
          {
            "para": true,
            "jp": "『徒然草{つれづれぐさ}』には、仏教{ぶっきょう}のことや、不思議{ふしぎ}な話{はなし}、人{ひと}の生{い}き方{かた}など、二百四十三{にひゃくよんじゅうさん}の話{はなし}があります。",
            "en": "Tsurezuregusa contains 243 pieces, on Buddhism, mysterious tales, how people live, and more.",
            "pl": "„Tsurezuregusa” zawiera 243 opowieści: o buddyzmie, historie tajemnicze, o tym, jak żyją ludzie, i inne.",
            "words": [
              {
                "word": "仏教",
                "reading": "bukkyō",
                "meaning": {
                  "en": "Buddhism",
                  "pl": "buddyzm"
                }
              },
              {
                "word": "不思議な",
                "reading": "fushigi na",
                "meaning": {
                  "en": "mysterious, strange",
                  "pl": "tajemniczy, dziwny"
                }
              },
              {
                "word": "話",
                "reading": "hanashi",
                "meaning": {
                  "en": "story, talk",
                  "pl": "opowieść, rozmowa"
                }
              },
              {
                "word": "生き方",
                "reading": "ikikata",
                "meaning": {
                  "en": "way of living (生きる + 方)",
                  "pl": "sposób życia (生きる + 方)"
                }
              },
              {
                "word": "二百四十三",
                "reading": "nihyaku yonjūsan",
                "meaning": {
                  "en": "243",
                  "pl": "243"
                }
              },
              {
                "word": "ある",
                "reading": "aru",
                "meaning": {
                  "en": "to exist, to have (things)",
                  "pl": "istnieć, mieć (rzeczy)"
                }
              }
            ],
            "grammar": [
              {
                "pattern": "場所には～があります",
                "explanation": {
                  "en": "に marks the place where something exists, は adds contrast. Here the 'place' is the book: 'the book has ~'.",
                  "pl": "に oznacza miejsce istnienia, は dodaje kontrast. Tu „miejscem” jest książka: „książka zawiera ~”."
                }
              },
              {
                "pattern": "～や～など",
                "explanation": {
                  "en": "'Such as A, B and so on' (an incomplete list).",
                  "pl": "„Takie jak A, B i tak dalej” (lista niepełna)."
                }
              },
              {
                "pattern": "Verb stem + 方",
                "explanation": {
                  "en": "方 (kata) = 'way of doing': 生きる → 生き方 'way of living'.",
                  "pl": "方 (kata) = „sposób robienia”: 生きる → 生き方 „sposób życia”."
                }
              },
              {
                "pattern": "Number + の + noun",
                "explanation": {
                  "en": "A large number can go before the noun with の: 二百四十三の話 '243 stories'.",
                  "pl": "Liczba może stać przed rzeczownikiem z の: 二百四十三の話 „243 opowieści”."
                }
              }
            ]
          },
          {
            "jp": "七百年前{ななひゃくねんまえ}のものですが、人々{ひとびと}の暮{く}らしや気持{きも}ちが、今{いま}の私{わたし}たちにもよくわかります。",
            "en": "It is seven hundred years old, but even we today can understand people’s ways of life and feelings very well.",
            "pl": "Pochodzi sprzed siedmiuset lat, ale my, współcześni, też świetnie rozumiemy sposób życia i uczucia ludzi.",
            "words": [
              {
                "word": "七百年前",
                "reading": "nanahyaku-nen mae",
                "meaning": {
                  "en": "seven hundred years ago",
                  "pl": "siedemset lat temu"
                }
              },
              {
                "word": "もの",
                "reading": "mono",
                "meaning": {
                  "en": "thing (here: a work)",
                  "pl": "rzecz (tu: dzieło)"
                }
              },
              {
                "word": "人々",
                "reading": "hitobito",
                "meaning": {
                  "en": "people, everyone",
                  "pl": "ludzie, wszyscy"
                }
              },
              {
                "word": "暮らし",
                "reading": "kurashi",
                "meaning": {
                  "en": "daily life, way of living",
                  "pl": "codzienne życie, sposób życia"
                }
              },
              {
                "word": "気持ち",
                "reading": "kimochi",
                "meaning": {
                  "en": "feelings",
                  "pl": "uczucia"
                }
              },
              {
                "word": "今",
                "reading": "ima",
                "meaning": {
                  "en": "now",
                  "pl": "teraz"
                }
              },
              {
                "word": "私たち",
                "reading": "watashitachi",
                "meaning": {
                  "en": "we, us",
                  "pl": "my"
                }
              },
              {
                "word": "わかる",
                "reading": "wakaru",
                "meaning": {
                  "en": "to understand",
                  "pl": "rozumieć"
                }
              }
            ],
            "grammar": [
              {
                "pattern": "～ですが",
                "explanation": {
                  "en": "'~, but ...'. が here joins two clauses with a contrast.",
                  "pl": "„~, ale ...”. が łączy tu dwa zdania kontrastem."
                }
              },
              {
                "pattern": "七百年前の + もの",
                "explanation": {
                  "en": "Time + の + noun: 'something from 700 years ago'.",
                  "pl": "Czas + の + rzeczownik: „coś sprzed 700 lat”."
                }
              },
              {
                "pattern": "～がわかる",
                "explanation": {
                  "en": "わかる takes が for the thing understood, not を.",
                  "pl": "わかる przyjmuje が dla rozumianej rzeczy, nie を."
                }
              },
              {
                "pattern": "私たちにも",
                "explanation": {
                  "en": "に marks who understands, も means 'too': 'even for us'.",
                  "pl": "に oznacza, kto rozumie, も znaczy „też”: „także dla nas”."
                }
              },
              {
                "pattern": "よく",
                "explanation": {
                  "en": "Adverb from いい → よく: 'well, thoroughly'.",
                  "pl": "Przysłówek od いい → よく: „dobrze, dokładnie”."
                }
              }
            ]
          },
          {
            "para": true,
            "jp": "兼好{けんこう}は、若{わか}い時{とき}は天皇{てんのう}の下{した}で働{はたら}いていましたが、三十歳{さんじゅっさい}ぐらいの頃{ころ}お坊{ぼう}さんになり、京都{きょうと}の仁和寺{にんなじ}の近{ちか}くに住{す}んでいたと言{い}われています。",
            "en": "Kenkō worked under the Emperor when he was young, but around the age of thirty he became a monk, and he is said to have lived near Ninna-ji temple in Kyoto.",
            "pl": "Kenkō w młodości pracował u cesarza, ale około trzydziestego roku życia został mnichem i podobno mieszkał w pobliżu świątyni Ninna-ji w Kioto.",
            "words": [
              {
                "word": "若い時",
                "reading": "wakai toki",
                "meaning": {
                  "en": "when (he) was young",
                  "pl": "gdy był młody"
                }
              },
              {
                "word": "天皇",
                "reading": "tennō",
                "meaning": {
                  "en": "emperor",
                  "pl": "cesarz"
                }
              },
              {
                "word": "下で",
                "reading": "shita de",
                "meaning": {
                  "en": "under (someone’s authority)",
                  "pl": "pod (czyjąś władzą)"
                }
              },
              {
                "word": "働く",
                "reading": "hataraku",
                "meaning": {
                  "en": "to work",
                  "pl": "pracować"
                }
              },
              {
                "word": "三十歳",
                "reading": "sanjussai",
                "meaning": {
                  "en": "thirty years old",
                  "pl": "trzydzieści lat"
                }
              },
              {
                "word": "お坊さん",
                "reading": "obōsan",
                "meaning": {
                  "en": "Buddhist monk (polite)",
                  "pl": "mnich buddyjski (grzecznie)"
                }
              },
              {
                "word": "仁和寺",
                "reading": "Ninna-ji",
                "meaning": {
                  "en": "Ninna-ji, a temple in Kyoto",
                  "pl": "Ninna-ji, świątynia w Kioto"
                }
              },
              {
                "word": "近く",
                "reading": "chikaku",
                "meaning": {
                  "en": "nearby, vicinity",
                  "pl": "w pobliżu"
                }
              },
              {
                "word": "住む",
                "reading": "sumu",
                "meaning": {
                  "en": "to live, to reside",
                  "pl": "mieszkać"
                }
              }
            ],
            "grammar": [
              {
                "pattern": "～ていました",
                "explanation": {
                  "en": "Continuous past: 働いていました = 'was working', 'worked (for a period)'.",
                  "pl": "Czas przeszły trwały: 働いていました = „pracował (przez pewien czas)”."
                }
              },
              {
                "pattern": "～が",
                "explanation": {
                  "en": "'~, but ...' linking the two halves of the contrast.",
                  "pl": "„~, ale ...” łączy dwie części kontrastu."
                }
              },
              {
                "pattern": "～ぐらいの頃",
                "explanation": {
                  "en": "ぐらい = 'about', 頃 = 'around the time': 'around the age of thirty'.",
                  "pl": "ぐらい = „około”, 頃 = „w okolicach czasu”: „około trzydziestki”."
                }
              },
              {
                "pattern": "お坊さんになり",
                "explanation": {
                  "en": "～になる = 'to become'. なり is the stem form that joins clauses.",
                  "pl": "～になる = „stać się”. なり to forma łącząca zdania."
                }
              },
              {
                "pattern": "～と言われています",
                "explanation": {
                  "en": "'It is said that ~'. Passive of 言う + ています, with the plain form (住んでいた) before と.",
                  "pl": "„Mówi się, że ~”. Strona bierna 言う + ています, z formą prostą (住んでいた) przed と."
                }
              }
            ]
          },
          {
            "para": true,
            "jp": "この本{ほん}では、京都{きょうと}のお坊{ぼう}さんが出{で}てくる面白{おもしろ}い話{はなし}を三話{さんわ}、紹介{しょうかい}します。",
            "en": "In this book, I will introduce three interesting stories in which monks from Kyoto appear.",
            "pl": "W tej książce przedstawię trzy ciekawe opowieści, w których pojawiają się mnisi z Kioto.",
            "words": [
              {
                "word": "本",
                "reading": "hon",
                "meaning": {
                  "en": "book",
                  "pl": "książka"
                }
              },
              {
                "word": "出てくる",
                "reading": "detekuru",
                "meaning": {
                  "en": "to appear, to come out (in a story)",
                  "pl": "pojawiać się (w opowieści)"
                }
              },
              {
                "word": "面白い",
                "reading": "omoshiroi",
                "meaning": {
                  "en": "interesting, funny",
                  "pl": "ciekawy, zabawny"
                }
              },
              {
                "word": "三話",
                "reading": "sanwa",
                "meaning": {
                  "en": "three stories (話 used as a counter)",
                  "pl": "trzy opowieści (話 jako licznik)"
                }
              },
              {
                "word": "紹介する",
                "reading": "shōkai suru",
                "meaning": {
                  "en": "to introduce",
                  "pl": "przedstawiać"
                }
              }
            ],
            "grammar": [
              {
                "pattern": "この本では",
                "explanation": {
                  "en": "で marks where something happens; は sets the topic: 'in this book, ...'.",
                  "pl": "で oznacza miejsce, gdzie coś się dzieje; は ustawia temat: „w tej książce ...”."
                }
              },
              {
                "pattern": "京都のお坊さんが出てくる面白い話",
                "explanation": {
                  "en": "A whole clause (京都のお坊さんが出てくる) modifies 話. Japanese puts the description before the noun.",
                  "pl": "Całe zdanie (京都のお坊さんが出てくる) opisuje 話. Po japońsku opis stoi przed rzeczownikiem."
                }
              },
              {
                "pattern": "話を三話",
                "explanation": {
                  "en": "The counter 三話 comes after the object particle: 'three stories'.",
                  "pl": "Licznik 三話 stoi po partykule dopełnienia: „trzy opowieści”."
                }
              },
              {
                "pattern": "～ます",
                "explanation": {
                  "en": "Polite present/future: 'I will introduce'.",
                  "pl": "Grzeczny czas teraźniejszy/przyszły: „przedstawię”."
                }
              }
            ]
          }
        ]
      },
      {
        "title": {
          "jp": "仁和寺{にんなじ}の法師{ほうし}",
          "en": "The Monk of Ninna-ji",
          "pl": "Mnich z Ninna-ji"
        },
        "pages": [
          [
            {
              "jp": "昔{むかし}、京都{きょうと}の仁和寺{にんなじ}に、一人{ひとり}のお坊{ぼう}さんがいました。",
              "en": "Long ago, there was a monk at Ninna-ji temple in Kyoto.",
              "pl": "Dawno temu w świątyni Ninna-ji w Kioto żył pewien mnich.",
              "words": [
                {
                  "word": "昔",
                  "reading": "mukashi",
                  "meaning": {
                    "en": "long ago, in the past",
                    "pl": "dawno temu, w przeszłości"
                  }
                },
                {
                  "word": "一人",
                  "reading": "hitori",
                  "meaning": {
                    "en": "one person",
                    "pl": "jedna osoba"
                  }
                },
                {
                  "word": "お坊さん",
                  "reading": "obōsan",
                  "meaning": {
                    "en": "Buddhist monk (polite)",
                    "pl": "mnich buddyjski (grzecznie)"
                  }
                },
                {
                  "word": "いました",
                  "reading": "imashita",
                  "meaning": {
                    "en": "there was (polite past of いる)",
                    "pl": "był, istniał (grzeczny czas przeszły od いる)"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "場所に～がいました",
                  "explanation": {
                    "en": "に marks the place, が the thing that existed. いる is used for living beings.",
                    "pl": "に oznacza miejsce, が to, co istniało. いる dotyczy istot żywych."
                  }
                },
                {
                  "pattern": "一人の + noun",
                  "explanation": {
                    "en": "'One / a single ~'. Often used to introduce a character in a story.",
                    "pl": "„Jeden / pewien ~”. Często służy do wprowadzenia postaci w opowieści."
                  }
                }
              ]
            },
            {
              "jp": "彼{かれ}はもう年{とし}をとっていましたが、まだ石清水八幡宮{いわしみずはちまんぐう}に行{い}ったことがありませんでした。",
              "en": "He was already old, but he had never been to Iwashimizu Hachimangū shrine.",
              "pl": "Był już stary, ale nigdy nie był w świątyni Iwashimizu Hachimangū.",
              "words": [
                {
                  "word": "年をとる",
                  "reading": "toshi o toru",
                  "meaning": {
                    "en": "to grow old",
                    "pl": "starzeć się"
                  }
                },
                {
                  "word": "まだ",
                  "reading": "mada",
                  "meaning": {
                    "en": "still, (not) yet",
                    "pl": "jeszcze, wciąż"
                  }
                },
                {
                  "word": "石清水八幡宮",
                  "reading": "Iwashimizu Hachimangū",
                  "meaning": {
                    "en": "Iwashimizu Hachimangū, a major shrine near Kyoto",
                    "pl": "Iwashimizu Hachimangū, ważna świątynia szintoistyczna pod Kioto"
                  }
                },
                {
                  "word": "行く",
                  "reading": "iku",
                  "meaning": {
                    "en": "to go",
                    "pl": "iść, jechać"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～たことがある／ない",
                  "explanation": {
                    "en": "Experience: 'have (never) done ~'. 行ったことがありませんでした = 'had never been'.",
                    "pl": "Doświadczenie: „(nie) zdarzyło się ~”. 行ったことがありませんでした = „nigdy nie był”."
                  }
                },
                {
                  "pattern": "～ていました",
                  "explanation": {
                    "en": "State: 'was (already) old'. 年をとっている describes a condition.",
                    "pl": "Stan: „był (już) stary”. 年をとっている opisuje stan."
                  }
                },
                {
                  "pattern": "～が",
                  "explanation": {
                    "en": "'~, but ...'. Joins two clauses that contrast.",
                    "pl": "„~, ale ...”. Łączy dwa kontrastujące zdania."
                  }
                }
              ]
            },
            {
              "jp": "「一度{いちど}は行{い}かなければ」と思{おも}っていました。",
              "en": "He had been thinking, “I must go at least once.”",
              "pl": "Myślał sobie: „Muszę pójść choć raz”.",
              "words": [
                {
                  "word": "一度",
                  "reading": "ichido",
                  "meaning": {
                    "en": "once, one time",
                    "pl": "raz, jeden raz"
                  }
                },
                {
                  "word": "行かなければ",
                  "reading": "ikanakereba",
                  "meaning": {
                    "en": "if (I) don't go ... (must go)",
                    "pl": "jeśli nie pójdę ... (muszę pójść)"
                  }
                },
                {
                  "word": "思う",
                  "reading": "omou",
                  "meaning": {
                    "en": "to think",
                    "pl": "myśleć"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～なければ(ならない)",
                  "explanation": {
                    "en": "'Must ~'. The ending is often left unsaid, as here.",
                    "pl": "„Trzeba ~”. Końcówka bywa pomijana, tak jak tu."
                  }
                },
                {
                  "pattern": "～と思っていました",
                  "explanation": {
                    "en": "'Had been thinking that ~'. と quotes the thought; ～ていた gives a continuing state.",
                    "pl": "„Myślał, że ~”. と cytuje myśl, a ～ていた oznacza stan trwający."
                  }
                }
              ],
              "para": true
            }
          ],
          [
            {
              "jp": "ある日{ひ}、彼{かれ}は一人{ひとり}で出{で}かけました。",
              "en": "One day, he set out alone.",
              "pl": "Pewnego dnia wyruszył sam.",
              "words": [
                {
                  "word": "ある日",
                  "reading": "aru hi",
                  "meaning": {
                    "en": "one day",
                    "pl": "pewnego dnia"
                  }
                },
                {
                  "word": "一人で",
                  "reading": "hitori de",
                  "meaning": {
                    "en": "alone, by oneself",
                    "pl": "sam, samotnie"
                  }
                },
                {
                  "word": "出かける",
                  "reading": "dekakeru",
                  "meaning": {
                    "en": "to set out, to go out",
                    "pl": "wyruszyć, wyjść"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "ある + noun",
                  "explanation": {
                    "en": "'A certain ~'. ある日 = 'one day', a classic story opener.",
                    "pl": "„Pewien ~”. ある日 = „pewnego dnia”, typowy początek opowieści."
                  }
                },
                {
                  "pattern": "一人で",
                  "explanation": {
                    "en": "で marks the way or state in which something is done: 'alone'.",
                    "pl": "で oznacza sposób lub stan: „sam”."
                  }
                }
              ]
            },
            {
              "jp": "山{やま}のふもとには、小{ちい}さな寺{てら}や神社{じんじゃ}がたくさんありました。",
              "en": "At the foot of the mountain there were many small temples and shrines.",
              "pl": "U podnóża góry było mnóstwo małych świątyń buddyjskich i szintoistycznych.",
              "words": [
                {
                  "word": "ふもと",
                  "reading": "fumoto",
                  "meaning": {
                    "en": "foot (of a mountain)",
                    "pl": "podnóże (góry)"
                  }
                },
                {
                  "word": "小さな",
                  "reading": "chiisana",
                  "meaning": {
                    "en": "small",
                    "pl": "mały"
                  }
                },
                {
                  "word": "寺",
                  "reading": "tera",
                  "meaning": {
                    "en": "Buddhist temple",
                    "pl": "świątynia buddyjska"
                  }
                },
                {
                  "word": "神社",
                  "reading": "jinja",
                  "meaning": {
                    "en": "Shinto shrine",
                    "pl": "świątynia szintoistyczna"
                  }
                },
                {
                  "word": "たくさん",
                  "reading": "takusan",
                  "meaning": {
                    "en": "many, a lot",
                    "pl": "dużo, mnóstwo"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "場所には～がある",
                  "explanation": {
                    "en": "に marks the place, は adds contrast or sets the scene. ある is for things that are not alive.",
                    "pl": "に oznacza miejsce, は wprowadza kontrast lub scenę. ある dotyczy rzeczy nieożywionych."
                  }
                },
                {
                  "pattern": "～や～",
                  "explanation": {
                    "en": "'A and B (and others)'. A partial list.",
                    "pl": "„A i B (i inne)”. Lista niepełna."
                  }
                }
              ]
            },
            {
              "jp": "彼{かれ}はそれを見{み}て、「これが八幡宮{はちまんぐう}だ」と思{おも}いました。",
              "en": "Seeing them, he thought, “This is the shrine.”",
              "pl": "Zobaczywszy je, pomyślał: „To jest ta świątynia”.",
              "words": [
                {
                  "word": "それ",
                  "reading": "sore",
                  "meaning": {
                    "en": "that, those",
                    "pl": "to, tamto"
                  }
                },
                {
                  "word": "見て",
                  "reading": "mite",
                  "meaning": {
                    "en": "having seen (て-form of 見る)",
                    "pl": "zobaczywszy (forma て od 見る)"
                  }
                },
                {
                  "word": "これ",
                  "reading": "kore",
                  "meaning": {
                    "en": "this",
                    "pl": "to"
                  }
                },
                {
                  "word": "八幡宮",
                  "reading": "Hachimangū",
                  "meaning": {
                    "en": "Hachiman shrine",
                    "pl": "świątynia Hachiman"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～て、～",
                  "explanation": {
                    "en": "The て-form links actions in order: 'saw it, and then thought ...'.",
                    "pl": "Forma て łączy czynności po kolei: „zobaczył to i pomyślał ...”."
                  }
                },
                {
                  "pattern": "これが～だ",
                  "explanation": {
                    "en": "'This is ~.' が stresses which thing it is.",
                    "pl": "„To jest ~.” が podkreśla, o którą rzecz chodzi."
                  }
                }
              ]
            }
          ],
          [
            {
              "jp": "彼{かれ}は手{て}を合{あ}わせて、ていねいにお祈{いの}りをしました。",
              "en": "He pressed his hands together and prayed carefully.",
              "pl": "Złożył ręce i modlił się starannie.",
              "words": [
                {
                  "word": "手を合わせる",
                  "reading": "te o awaseru",
                  "meaning": {
                    "en": "to put one's palms together",
                    "pl": "złożyć dłonie"
                  }
                },
                {
                  "word": "ていねいに",
                  "reading": "teinei ni",
                  "meaning": {
                    "en": "politely, carefully",
                    "pl": "uprzejmie, starannie"
                  }
                },
                {
                  "word": "お祈り",
                  "reading": "oinori",
                  "meaning": {
                    "en": "prayer",
                    "pl": "modlitwa"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "手を合わせて",
                  "explanation": {
                    "en": "Idiom for the gesture of prayer. The て-form links it to the next action.",
                    "pl": "Idiom oznaczający gest modlitwy. Forma て łączy go z następną czynnością."
                  }
                },
                {
                  "pattern": "お祈りをする",
                  "explanation": {
                    "en": "Noun + をする = 'to do ~'. お祈りをする = 'to pray'.",
                    "pl": "Rzeczownik + をする = „robić ~”. お祈りをする = „modlić się”."
                  }
                }
              ]
            },
            {
              "jp": "それから、他{ほか}の人{ひと}たちが山{やま}に登{のぼ}っていくのに気{き}がつきました。",
              "en": "Then he noticed that other people were climbing up the mountain.",
              "pl": "Potem zauważył, że inni ludzie wchodzą na górę.",
              "words": [
                {
                  "word": "それから",
                  "reading": "sorekara",
                  "meaning": {
                    "en": "after that, then",
                    "pl": "potem"
                  }
                },
                {
                  "word": "他の人たち",
                  "reading": "hoka no hitotachi",
                  "meaning": {
                    "en": "other people",
                    "pl": "inni ludzie"
                  }
                },
                {
                  "word": "登る",
                  "reading": "noboru",
                  "meaning": {
                    "en": "to climb",
                    "pl": "wspinać się"
                  }
                },
                {
                  "word": "気がつく",
                  "reading": "ki ga tsuku",
                  "meaning": {
                    "en": "to notice",
                    "pl": "zauważyć"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～ていく",
                  "explanation": {
                    "en": "'Go on doing ~' (moving away). 登っていく = 'going up (and away)'.",
                    "pl": "„Iść i robić ~” (oddalając się). 登っていく = „iść w górę”."
                  }
                },
                {
                  "pattern": "～のに気がつく",
                  "explanation": {
                    "en": "の turns the clause into a noun: 'notice the fact that ~'.",
                    "pl": "の zamienia zdanie w rzeczownik: „zauważyć fakt, że ~”."
                  }
                }
              ]
            },
            {
              "jp": "でも、彼{かれ}は何{なに}も聞{き}かずに、そのまま帰{かえ}ることにしました。",
              "en": "But without asking anything, he decided to go straight home.",
              "pl": "Ale nie pytając o nic, postanowił wracać prosto do domu.",
              "words": [
                {
                  "word": "でも",
                  "reading": "demo",
                  "meaning": {
                    "en": "but, however",
                    "pl": "ale, jednak"
                  }
                },
                {
                  "word": "聞く",
                  "reading": "kiku",
                  "meaning": {
                    "en": "to ask, to listen",
                    "pl": "pytać, słuchać"
                  }
                },
                {
                  "word": "そのまま",
                  "reading": "sono mama",
                  "meaning": {
                    "en": "as it is, straight",
                    "pl": "tak jak jest, wprost"
                  }
                },
                {
                  "word": "帰る",
                  "reading": "kaeru",
                  "meaning": {
                    "en": "to return home",
                    "pl": "wracać do domu"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～ずに",
                  "explanation": {
                    "en": "'Without doing ~'. A more formal form of ～ないで.",
                    "pl": "„Bez robienia ~”. Bardziej formalna forma ～ないで."
                  }
                },
                {
                  "pattern": "～ことにする",
                  "explanation": {
                    "en": "'Decide to ~'. The speaker's own decision.",
                    "pl": "„Postanowić ~”. Własna decyzja mówiącego."
                  }
                },
                {
                  "pattern": "何も + negative",
                  "explanation": {
                    "en": "'Nothing at all'. 何も聞かずに = 'without asking anything'.",
                    "pl": "„Nic”. 何も聞かずに = „nie pytając o nic”."
                  }
                }
              ]
            }
          ],
          [
            {
              "jp": "寺{てら}に帰{かえ}ると、友達{ともだち}が待{ま}っていました。",
              "en": "When he got back to the temple, a friend was waiting.",
              "pl": "Gdy wrócił do świątyni, czekał na niego przyjaciel.",
              "words": [
                {
                  "word": "友達",
                  "reading": "tomodachi",
                  "meaning": {
                    "en": "friend",
                    "pl": "przyjaciel, kolega"
                  }
                },
                {
                  "word": "待つ",
                  "reading": "matsu",
                  "meaning": {
                    "en": "to wait",
                    "pl": "czekać"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～と、～",
                  "explanation": {
                    "en": "'When ~, (then) ...'. Often introduces something found after an action.",
                    "pl": "„Gdy ~, (to) ...”. Często wprowadza coś, co się zastaje po czynności."
                  }
                },
                {
                  "pattern": "～ていました",
                  "explanation": {
                    "en": "'Was waiting'. A continuing state in the past.",
                    "pl": "„Czekał”. Trwający stan w przeszłości."
                  }
                }
              ]
            },
            {
              "jp": "「どうでしたか。八幡宮{はちまんぐう}は立派{りっぱ}でしたか」と友達{ともだち}は聞{き}きました。",
              "en": "“How was it? Was the shrine magnificent?” his friend asked.",
              "pl": "„I jak było? Czy świątynia była okazała?” — zapytał przyjaciel.",
              "words": [
                {
                  "word": "どう",
                  "reading": "dō",
                  "meaning": {
                    "en": "how",
                    "pl": "jak"
                  }
                },
                {
                  "word": "立派",
                  "reading": "rippa",
                  "meaning": {
                    "en": "splendid, impressive",
                    "pl": "wspaniały, okazały"
                  }
                },
                {
                  "word": "聞く",
                  "reading": "kiku",
                  "meaning": {
                    "en": "to ask",
                    "pl": "pytać"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～でしたか",
                  "explanation": {
                    "en": "Polite past question with the copula です.",
                    "pl": "Grzeczne pytanie w czasie przeszłym z łącznikiem です."
                  }
                },
                {
                  "pattern": "立派な",
                  "explanation": {
                    "en": "立派 is a na-adjective: 立派な寺 = a splendid temple.",
                    "pl": "立派 to przymiotnik na: 立派な寺 = okazała świątynia."
                  }
                }
              ],
              "para": true
            },
            {
              "jp": "彼{かれ}は少{すこ}し自慢{じまん}そうに答{こた}えました。",
              "en": "He answered, looking a little proud.",
              "pl": "Odpowiedział z lekką dumą.",
              "words": [
                {
                  "word": "少し",
                  "reading": "sukoshi",
                  "meaning": {
                    "en": "a little",
                    "pl": "trochę"
                  }
                },
                {
                  "word": "自慢",
                  "reading": "jiman",
                  "meaning": {
                    "en": "pride, boasting",
                    "pl": "duma, przechwałki"
                  }
                },
                {
                  "word": "答える",
                  "reading": "kotaeru",
                  "meaning": {
                    "en": "to answer",
                    "pl": "odpowiadać"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～そうに",
                  "explanation": {
                    "en": "'Looking ~, seemingly ~'. 自慢そうに = 'in a proud manner'.",
                    "pl": "„Wyglądając na ~”. 自慢そうに = „z miną dumną”."
                  }
                }
              ]
            }
          ],
          [
            {
              "jp": "「ええ、とても立派{りっぱ}でした。ずっと行{い}きたかったので、うれしかったです」",
              "en": "“Yes, it was very impressive. I had wanted to go for so long, so I was happy.”",
              "pl": "„Tak, bardzo okazała. Od dawna chciałem tam pójść, więc byłem szczęśliwy.”",
              "words": [
                {
                  "word": "ええ",
                  "reading": "ee",
                  "meaning": {
                    "en": "yes (soft)",
                    "pl": "tak (łagodnie)"
                  }
                },
                {
                  "word": "ずっと",
                  "reading": "zutto",
                  "meaning": {
                    "en": "all along, for a long time",
                    "pl": "cały czas, od dawna"
                  }
                },
                {
                  "word": "行きたかった",
                  "reading": "ikitakatta",
                  "meaning": {
                    "en": "wanted to go",
                    "pl": "chciałem iść"
                  }
                },
                {
                  "word": "うれしい",
                  "reading": "ureshii",
                  "meaning": {
                    "en": "glad, happy",
                    "pl": "zadowolony, szczęśliwy"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～たい",
                  "explanation": {
                    "en": "'Want to ~'. It behaves like an i-adjective: 行きたい → 行きたかった (past).",
                    "pl": "„Chcieć ~”. Zachowuje się jak przymiotnik i: 行きたい → 行きたかった (przeszły)."
                  }
                },
                {
                  "pattern": "～ので",
                  "explanation": {
                    "en": "'Because ~'. A soft reason.",
                    "pl": "„Ponieważ ~”. Łagodny powód."
                  }
                }
              ],
              "para": true
            },
            {
              "jp": "「でも、不思議{ふしぎ}なことに、山{やま}に登{のぼ}っている人{ひと}がたくさんいました」",
              "en": "“But, strangely, there were many people climbing the mountain.”",
              "pl": "„Ale co dziwne, na górę szło mnóstwo ludzi.”",
              "words": [
                {
                  "word": "不思議な",
                  "reading": "fushigi na",
                  "meaning": {
                    "en": "strange, mysterious",
                    "pl": "dziwny, tajemniczy"
                  }
                },
                {
                  "word": "登っている",
                  "reading": "nobotte iru",
                  "meaning": {
                    "en": "is climbing",
                    "pl": "wspina się"
                  }
                },
                {
                  "word": "人",
                  "reading": "hito",
                  "meaning": {
                    "en": "person, people",
                    "pl": "człowiek, ludzie"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～ことに",
                  "explanation": {
                    "en": "'Strange to say ~'. An adjective + ことに comments on what follows.",
                    "pl": "„Co dziwne ~”. Przymiotnik + ことに komentuje to, co następuje."
                  }
                },
                {
                  "pattern": "登っている人",
                  "explanation": {
                    "en": "A verb phrase before a noun describes it: 'people who are climbing'.",
                    "pl": "Fraza czasownikowa przed rzeczownikiem go opisuje: „ludzie, którzy się wspinają”."
                  }
                }
              ],
              "para": true
            },
            {
              "jp": "「みんな何{なに}をしに行{い}ったのでしょうか」",
              "en": "“I wonder what they were all going there for.”",
              "pl": "„Ciekawe, po co oni wszyscy tam szli.”",
              "words": [
                {
                  "word": "みんな",
                  "reading": "minna",
                  "meaning": {
                    "en": "everyone",
                    "pl": "wszyscy"
                  }
                },
                {
                  "word": "何",
                  "reading": "nani",
                  "meaning": {
                    "en": "what",
                    "pl": "co"
                  }
                },
                {
                  "word": "しに",
                  "reading": "shi ni",
                  "meaning": {
                    "en": "in order to do",
                    "pl": "żeby zrobić"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "Verb stem + に行く",
                  "explanation": {
                    "en": "'Go in order to ~'. しに行く = 'go to do'.",
                    "pl": "„Iść, żeby ~”. しに行く = „iść coś zrobić”."
                  }
                },
                {
                  "pattern": "～のでしょうか",
                  "explanation": {
                    "en": "'I wonder ~'. A soft, thinking-aloud question.",
                    "pl": "„Ciekawe ~”. Łagodne pytanie, jakby do siebie."
                  }
                }
              ],
              "para": true
            }
          ],
          [
            {
              "jp": "友達{ともだち}は驚{おどろ}いて言{い}いました。",
              "en": "His friend was surprised and said:",
              "pl": "Przyjaciel zdziwił się i powiedział:",
              "words": [
                {
                  "word": "驚く",
                  "reading": "odoroku",
                  "meaning": {
                    "en": "to be surprised",
                    "pl": "dziwić się"
                  }
                },
                {
                  "word": "言う",
                  "reading": "iu",
                  "meaning": {
                    "en": "to say",
                    "pl": "mówić"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "驚いて",
                  "explanation": {
                    "en": "The て-form can give the reason or manner: 'being surprised, ...'.",
                    "pl": "Forma て może podawać powód lub sposób: „zdziwiony, ...”."
                  }
                }
              ]
            },
            {
              "jp": "「山{やま}の上{うえ}に本当{ほんとう}の八幡宮{はちまんぐう}があるんですよ」",
              "en": "“The real shrine is at the top of the mountain, you know.”",
              "pl": "„Prawdziwa świątynia jest na szczycie góry, wiesz.”",
              "words": [
                {
                  "word": "上",
                  "reading": "ue",
                  "meaning": {
                    "en": "top, above",
                    "pl": "góra, szczyt"
                  }
                },
                {
                  "word": "本当の",
                  "reading": "hontō no",
                  "meaning": {
                    "en": "real, true",
                    "pl": "prawdziwy"
                  }
                },
                {
                  "word": "ある",
                  "reading": "aru",
                  "meaning": {
                    "en": "to exist (things)",
                    "pl": "istnieć (rzeczy)"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～んです",
                  "explanation": {
                    "en": "Explains or gives background: 'the thing is that ~'. Short for のです.",
                    "pl": "Wyjaśnia lub podaje tło: „rzecz w tym, że ~”. Skrót od のです."
                  }
                },
                {
                  "pattern": "～よ",
                  "explanation": {
                    "en": "Sentence-final particle: 'you know', telling new information.",
                    "pl": "Partykuła końcowa: „wiesz”, przekazuje nową informację."
                  }
                }
              ],
              "para": true
            },
            {
              "jp": "「あなたが見{み}たのは、ふもとの小{ちい}さな寺{てら}ですよ」",
              "en": "“What you saw was a small temple at the foot of the mountain.”",
              "pl": "„To, co zobaczyłeś, to mała świątynia u podnóża góry.”",
              "words": [
                {
                  "word": "あなた",
                  "reading": "anata",
                  "meaning": {
                    "en": "you",
                    "pl": "ty"
                  }
                },
                {
                  "word": "見た",
                  "reading": "mita",
                  "meaning": {
                    "en": "saw (past of 見る)",
                    "pl": "zobaczył (przeszły od 見る)"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "Verb (plain) + の",
                  "explanation": {
                    "en": "の makes a noun phrase: あなたが見たの = 'the thing you saw'.",
                    "pl": "の tworzy wyrażenie rzeczownikowe: あなたが見たの = „to, co zobaczyłeś”."
                  }
                },
                {
                  "pattern": "～のは～です",
                  "explanation": {
                    "en": "'What ~ is ~'. Points out the answer.",
                    "pl": "„To, co ~, to ~”. Wskazuje odpowiedź."
                  }
                }
              ],
              "para": true
            }
          ],
          [
            {
              "jp": "お坊{ぼう}さんは顔{かお}が赤{あか}くなりました。",
              "en": "The monk's face turned red.",
              "pl": "Mnich zaczerwienił się na twarzy.",
              "words": [
                {
                  "word": "顔",
                  "reading": "kao",
                  "meaning": {
                    "en": "face",
                    "pl": "twarz"
                  }
                },
                {
                  "word": "赤い",
                  "reading": "akai",
                  "meaning": {
                    "en": "red",
                    "pl": "czerwony"
                  }
                },
                {
                  "word": "なる",
                  "reading": "naru",
                  "meaning": {
                    "en": "to become",
                    "pl": "stawać się"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "i-adjective: 赤い → 赤くなる",
                  "explanation": {
                    "en": "Drop い, add く, then なる: 'become red'.",
                    "pl": "Odrzuć い, dodaj く i なる: „stać się czerwonym”."
                  }
                },
                {
                  "pattern": "顔が赤くなる",
                  "explanation": {
                    "en": "A common phrase for blushing: 'the face becomes red'.",
                    "pl": "Częste wyrażenie na rumienienie się: „twarz robi się czerwona”."
                  }
                }
              ]
            },
            {
              "jp": "「そうだったのですか。知{し}りませんでした」",
              "en": "“Is that so? I did not know.”",
              "pl": "„Naprawdę? Nie wiedziałem.”",
              "words": [
                {
                  "word": "そうだった",
                  "reading": "sō datta",
                  "meaning": {
                    "en": "it was so",
                    "pl": "tak było"
                  }
                },
                {
                  "word": "知る",
                  "reading": "shiru",
                  "meaning": {
                    "en": "to know",
                    "pl": "wiedzieć"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～のですか",
                  "explanation": {
                    "en": "Asks for confirmation of an explanation: 'Is it that ~?'",
                    "pl": "Prosi o potwierdzenie wyjaśnienia: „Czy to znaczy, że ~?”"
                  }
                },
                {
                  "pattern": "知りませんでした",
                  "explanation": {
                    "en": "Polite past negative: 'did not know'.",
                    "pl": "Grzeczny czas przeszły przeczący: „nie wiedziałem”."
                  }
                }
              ],
              "para": true
            },
            {
              "jp": "「ちゃんと聞{き}けばよかったです」",
              "en": "“I should have asked properly.”",
              "pl": "„Trzeba było porządnie zapytać.”",
              "words": [
                {
                  "word": "ちゃんと",
                  "reading": "chanto",
                  "meaning": {
                    "en": "properly, in good order",
                    "pl": "porządnie, jak należy"
                  }
                },
                {
                  "word": "聞く",
                  "reading": "kiku",
                  "meaning": {
                    "en": "to ask",
                    "pl": "pytać"
                  }
                },
                {
                  "word": "よかった",
                  "reading": "yokatta",
                  "meaning": {
                    "en": "was good (past of いい)",
                    "pl": "było dobre (przeszły od いい)"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～ばよかった",
                  "explanation": {
                    "en": "'Should have done ~'. A regret about the past.",
                    "pl": "„Należało ~”. Żal z powodu przeszłości."
                  }
                },
                {
                  "pattern": "聞けば",
                  "explanation": {
                    "en": "The ば form of 聞く, a conditional: 'if (I) had asked'.",
                    "pl": "Forma ば od 聞く, warunkowa: „gdybym zapytał”."
                  }
                }
              ],
              "para": true
            }
          ],
          [
            {
              "jp": "少{すこ}しの間{あいだ}、二人{ふたり}は黙{だま}っていました。",
              "en": "For a little while, the two of them stayed silent.",
              "pl": "Przez chwilę obaj milczeli.",
              "words": [
                {
                  "word": "少しの間",
                  "reading": "sukoshi no aida",
                  "meaning": {
                    "en": "for a short while",
                    "pl": "przez chwilę"
                  }
                },
                {
                  "word": "二人",
                  "reading": "futari",
                  "meaning": {
                    "en": "two people",
                    "pl": "dwie osoby"
                  }
                },
                {
                  "word": "黙る",
                  "reading": "damaru",
                  "meaning": {
                    "en": "to fall silent",
                    "pl": "zamilknąć"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～ていました",
                  "explanation": {
                    "en": "A state that lasted: 'were silent'.",
                    "pl": "Stan, który trwał: „milczeli”."
                  }
                },
                {
                  "pattern": "少しの間",
                  "explanation": {
                    "en": "Duration expression: 'for a little while'.",
                    "pl": "Wyrażenie czasu trwania: „przez chwilę”."
                  }
                }
              ]
            },
            {
              "jp": "やがて友達{ともだち}は笑{わら}い出{だ}しました。",
              "en": "Before long, his friend burst out laughing.",
              "pl": "Wkrótce przyjaciel wybuchnął śmiechem.",
              "words": [
                {
                  "word": "やがて",
                  "reading": "yagate",
                  "meaning": {
                    "en": "before long, soon",
                    "pl": "wkrótce"
                  }
                },
                {
                  "word": "笑う",
                  "reading": "warau",
                  "meaning": {
                    "en": "to laugh",
                    "pl": "śmiać się"
                  }
                },
                {
                  "word": "出す",
                  "reading": "dasu",
                  "meaning": {
                    "en": "to put out, to start",
                    "pl": "wydobyć, zacząć"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "Verb stem + 出す",
                  "explanation": {
                    "en": "'Suddenly start to ~'. 笑い出す = 'burst out laughing'.",
                    "pl": "„Nagle zacząć ~”. 笑い出す = „wybuchnąć śmiechem”."
                  }
                }
              ]
            },
            {
              "jp": "お坊{ぼう}さんも、つられて笑{わら}ってしまいました。",
              "en": "The monk, too, was drawn in and ended up laughing.",
              "pl": "Mnich także dał się wciągnąć i w końcu zaczął się śmiać.",
              "words": [
                {
                  "word": "つられる",
                  "reading": "tsurareru",
                  "meaning": {
                    "en": "to be drawn along",
                    "pl": "dać się wciągnąć"
                  }
                },
                {
                  "word": "笑う",
                  "reading": "warau",
                  "meaning": {
                    "en": "to laugh",
                    "pl": "śmiać się"
                  }
                },
                {
                  "word": "も",
                  "reading": "mo",
                  "meaning": {
                    "en": "also, too",
                    "pl": "też"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～てしまう",
                  "explanation": {
                    "en": "'End up doing ~'. Often shows it happened without meaning to.",
                    "pl": "„Skończyć na ~”. Często pokazuje, że stało się to niechcący."
                  }
                },
                {
                  "pattern": "つられて",
                  "explanation": {
                    "en": "'Being drawn along by someone else's mood or action'.",
                    "pl": "„Dając się porwać cudzemu nastrojowi lub czynowi”."
                  }
                }
              ]
            }
          ],
          [
            {
              "jp": "兼好{けんこう}は、この話{はなし}の最後{さいご}にこう書{か}いています。",
              "en": "At the end of this story, Kenkō writes the following.",
              "pl": "Na końcu tej opowieści Kenkō pisze tak:",
              "words": [
                {
                  "word": "最後",
                  "reading": "saigo",
                  "meaning": {
                    "en": "the end, last",
                    "pl": "koniec, ostatni"
                  }
                },
                {
                  "word": "こう",
                  "reading": "kō",
                  "meaning": {
                    "en": "like this, as follows",
                    "pl": "tak, w ten sposób"
                  }
                },
                {
                  "word": "書く",
                  "reading": "kaku",
                  "meaning": {
                    "en": "to write",
                    "pl": "pisać"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～ています",
                  "explanation": {
                    "en": "Here it states what is written in the text: 'writes'.",
                    "pl": "Tu podaje, co jest napisane w tekście: „pisze”."
                  }
                },
                {
                  "pattern": "こう",
                  "explanation": {
                    "en": "'In this way'. Points to what comes next.",
                    "pl": "„W ten sposób”. Wskazuje na to, co następuje."
                  }
                }
              ]
            },
            {
              "jp": "「小{ちい}さなことでも、案内{あんない}してくれる人{ひと}がいるといい」",
              "en": "“Even in small matters, it is good to have someone who will guide you.”",
              "pl": "„Nawet w drobnych sprawach dobrze mieć kogoś, kto cię poprowadzi.”",
              "words": [
                {
                  "word": "案内",
                  "reading": "annai",
                  "meaning": {
                    "en": "guidance, guide",
                    "pl": "przewodnictwo, przewodnik"
                  }
                },
                {
                  "word": "いる",
                  "reading": "iru",
                  "meaning": {
                    "en": "to be, to have (a person)",
                    "pl": "być, mieć (osobę)"
                  }
                },
                {
                  "word": "いい",
                  "reading": "ii",
                  "meaning": {
                    "en": "good",
                    "pl": "dobry"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～でも",
                  "explanation": {
                    "en": "'Even ~'. 小さなことでも = 'even in small things'.",
                    "pl": "„Nawet ~”. 小さなことでも = „nawet w drobiazgach”."
                  }
                },
                {
                  "pattern": "～てくれる",
                  "explanation": {
                    "en": "'Someone does ~ for me/us'.",
                    "pl": "„Ktoś robi ~ dla mnie/nas”."
                  }
                },
                {
                  "pattern": "～といい",
                  "explanation": {
                    "en": "'It would be good if ~ / it is good to ~'.",
                    "pl": "„Dobrze by było ~ / dobrze ~”."
                  }
                }
              ],
              "para": true
            },
            {
              "jp": "知{し}らないことは、聞{き}くのが一番{いちばん}です。",
              "en": "When you do not know something, asking is the best thing to do.",
              "pl": "Gdy czegoś nie wiesz, najlepiej zapytać.",
              "words": [
                {
                  "word": "知らない",
                  "reading": "shiranai",
                  "meaning": {
                    "en": "not know (negative of 知る)",
                    "pl": "nie wiedzieć (przeczenie od 知る)"
                  }
                },
                {
                  "word": "聞く",
                  "reading": "kiku",
                  "meaning": {
                    "en": "to ask",
                    "pl": "pytać"
                  }
                },
                {
                  "word": "一番",
                  "reading": "ichiban",
                  "meaning": {
                    "en": "number one, best",
                    "pl": "najlepszy, numer jeden"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～のが一番です",
                  "explanation": {
                    "en": "'Doing ~ is best'. の nominalizes the verb.",
                    "pl": "„Najlepiej ~”. の zamienia czasownik w rzeczownik."
                  }
                },
                {
                  "pattern": "知らないこと",
                  "explanation": {
                    "en": "'Things one does not know'. Negative verb + こと.",
                    "pl": "„Rzeczy, których się nie wie”. Czasownik przeczący + こと."
                  }
                }
              ]
            }
          ],
          [
            {
              "jp": "七百年{ななひゃくねん}たった今{いま}でも、この話{はなし}はよく読{よ}まれています。",
              "en": "Even now, seven hundred years later, this story is still widely read.",
              "pl": "Nawet dziś, siedemset lat później, ta opowieść jest często czytana.",
              "words": [
                {
                  "word": "たつ",
                  "reading": "tatsu",
                  "meaning": {
                    "en": "(time) to pass",
                    "pl": "(o czasie) mijać"
                  }
                },
                {
                  "word": "今でも",
                  "reading": "ima demo",
                  "meaning": {
                    "en": "even now",
                    "pl": "nawet teraz"
                  }
                },
                {
                  "word": "読まれる",
                  "reading": "yomareru",
                  "meaning": {
                    "en": "to be read (passive of 読む)",
                    "pl": "być czytanym (strona bierna od 読む)"
                  }
                },
                {
                  "word": "よく",
                  "reading": "yoku",
                  "meaning": {
                    "en": "often, well",
                    "pl": "często, dobrze"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "七百年たった",
                  "explanation": {
                    "en": "'Seven hundred years have passed'. たつ is used for time passing.",
                    "pl": "„Minęło siedemset lat”. たつ używa się dla upływu czasu."
                  }
                },
                {
                  "pattern": "Passive: 読まれる",
                  "explanation": {
                    "en": "Godan verb: change the last sound to あ, then add れる.",
                    "pl": "Czasownik godan: zmień ostatnią sylabę na あ i dodaj れる."
                  }
                }
              ]
            },
            {
              "jp": "私{わたし}たちも、わからないことがあったら、すぐに聞{き}いてみましょう。",
              "en": "Let us also ask right away whenever there is something we do not understand.",
              "pl": "My też zapytajmy od razu, gdy czegoś nie rozumiemy.",
              "words": [
                {
                  "word": "わからない",
                  "reading": "wakaranai",
                  "meaning": {
                    "en": "not understand",
                    "pl": "nie rozumieć"
                  }
                },
                {
                  "word": "すぐに",
                  "reading": "sugu ni",
                  "meaning": {
                    "en": "right away",
                    "pl": "od razu"
                  }
                },
                {
                  "word": "聞く",
                  "reading": "kiku",
                  "meaning": {
                    "en": "to ask",
                    "pl": "pytać"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～たら",
                  "explanation": {
                    "en": "'If / when ~'. あったら = 'if there is'.",
                    "pl": "„Jeśli / gdy ~”. あったら = „jeśli jest”."
                  }
                },
                {
                  "pattern": "～てみましょう",
                  "explanation": {
                    "en": "'Let's try doing ~'. てみる = try, ましょう = let's.",
                    "pl": "„Spróbujmy ~”. てみる = spróbować, ましょう = zróbmy."
                  }
                }
              ]
            },
            {
              "jp": "この本{ほん}を読{よ}んでくれて、ありがとうございました。",
              "en": "Thank you for reading this book.",
              "pl": "Dziękuję za przeczytanie tej książki.",
              "words": [
                {
                  "word": "読む",
                  "reading": "yomu",
                  "meaning": {
                    "en": "to read",
                    "pl": "czytać"
                  }
                },
                {
                  "word": "ありがとうございました",
                  "reading": "arigatō gozaimashita",
                  "meaning": {
                    "en": "thank you (polite, past)",
                    "pl": "dziękuję (grzecznie, przeszły)"
                  }
                }
              ],
              "grammar": [
                {
                  "pattern": "～てくれて、ありがとう",
                  "explanation": {
                    "en": "'Thank you for doing ~ (for me)'.",
                    "pl": "„Dziękuję, że ~ (dla mnie)”."
                  }
                },
                {
                  "pattern": "ございました",
                  "explanation": {
                    "en": "Very polite past of ある, used in set phrases.",
                    "pl": "Bardzo grzeczny czas przeszły od ある, w stałych zwrotach."
                  }
                }
              ]
            }
          ]
        ]
      }
  ] }
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
