/*
  EDIT THIS FILE to manage your blog.
  - Each entry in BOOKS is one light novel (order = order on the shelf).
  - Add translated chapters to a book's `chapters`. Two kinds:
      * `text: {en, pl}` = plain text; a blank line starts a new paragraph.
      * `sentences: [...]` = the two-page reader (Japanese | translation). Each sentence has
        `jp`, `en`, `pl` and optional `words`, `grammar`, `note`;
        furigana: write the reading in braces right after the kanji, e.g. 漢字{かんじ}; `para: true` starts a new paragraph.
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
