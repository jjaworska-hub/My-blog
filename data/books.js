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
    `flashcardsCount` = number of words, shown on the card.
    `flashcardsText` = the same cards as a tab-separated .txt (Anki text import); it is used where
    .apkg downloads are not allowed, such as the Claude preview.
  - `category`: which tab it appears in: "books" (default), "manga" or "other".
  - `tag` = group used by the filter buttons. `year` is optional.
*/
const BOOKS = [
  { id: "shu", title: "Mononoke: Shu", jp: "モノノ怪 執", author: "仁木英之", tag: "Novels", color: "#8a6d1f", cover: "img/shu.webp", main: "モノノ怪", mark: "執", publisher: "角川文庫", paper: "#d8b66e", band: "#4f8a78", w: 60, flashcards: "files/shu-flashcards.apkg", flashcardsText: "files/shu-flashcards.txt", flashcardsCount: 320,
    chapters: [
      {
        "title": {
          "jp": "第一話　鎌{かま}鼬{いたち}",
          "en": "Story 1: Kamaitachi",
          "pl": "Opowieść 1: Kamaitachi"
        },
        "pages": [
          {
            "kind": "toc",
            "sentences": [
              {
                "jp": "目次",
                "en": "Contents",
                "pl": "Spis treści",
                "style": "head",
                "para": true,
                "words": [
                  {
                    "word": "目次",
                    "reading": "mokuji",
                    "meaning": {
                      "en": "table of contents",
                      "pl": "spis treści"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "目＋次",
                    "explanation": {
                      "en": "目 (item, eye) + 次 (order): the items in order.",
                      "pl": "目 (pozycja) + 次 (kolejność): pozycje po kolei."
                    }
                  }
                ]
              },
              {
                "jp": "第一話　鎌{かま}鼬{いたち}\t5",
                "en": "Story 1: Kamaitachi (the Sickle Weasel), page 5.",
                "pl": "Opowieść 1: Kamaitachi (Sierpowa Łasica), strona 5.",
                "words": [
                  {
                    "word": "第一話",
                    "reading": "dai-ichi-wa",
                    "meaning": {
                      "en": "story no. 1 (first story)",
                      "pl": "opowieść nr 1 (pierwsza)"
                    }
                  },
                  {
                    "word": "鎌鼬",
                    "reading": "kamaitachi",
                    "meaning": {
                      "en": "sickle weasel, a yōkai that makes sudden clean cuts on the skin",
                      "pl": "kamaitachi, „sierpowa łasica”, yōkai zadające nagłe, czyste cięcia"
                    }
                  },
                  {
                    "word": "5",
                    "reading": "go",
                    "meaning": {
                      "en": "five (the page number)",
                      "pl": "pięć (numer strony)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "第＋number＋話",
                    "explanation": {
                      "en": "第 makes an ordinal (No. X). 話 is a counter for stories and episodes.",
                      "pl": "第 tworzy liczbę porządkową (nr X). 話 to licznik opowieści i odcinków."
                    }
                  },
                  {
                    "pattern": "鎌＋鼬",
                    "explanation": {
                      "en": "Compound: 鎌 (sickle) + 鼬 (weasel). か becomes が/い in speech: kama-itachi.",
                      "pl": "Złożenie: 鎌 (sierp) + 鼬 (łasica): kama-itachi."
                    }
                  }
                ],
                "style": "toc",
                "para": true
              },
              {
                "jp": "第二話　亀{かめ}姫{ひめ}\t49",
                "en": "Story 2: Kamehime (the Turtle Princess), page 49.",
                "pl": "Opowieść 2: Kamehime (Księżniczka Żółw), strona 49.",
                "words": [
                  {
                    "word": "亀",
                    "reading": "kame",
                    "meaning": {
                      "en": "turtle, tortoise",
                      "pl": "żółw"
                    }
                  },
                  {
                    "word": "姫",
                    "reading": "hime",
                    "meaning": {
                      "en": "princess",
                      "pl": "księżniczka"
                    }
                  },
                  {
                    "word": "亀姫",
                    "reading": "Kame-hime",
                    "meaning": {
                      "en": "Kamehime, a princess figure from yōkai folklore",
                      "pl": "Kamehime, księżniczka z folkloru yōkai"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "第＋number＋話",
                    "explanation": {
                      "en": "第 makes an ordinal (No. X). 話 is a counter for stories and episodes.",
                      "pl": "第 tworzy liczbę porządkową (nr X). 話 to licznik opowieści i odcinków."
                    }
                  }
                ],
                "style": "toc",
                "para": true
              },
              {
                "jp": "第三話　玉藻前{たまものまえ}\t91",
                "en": "Story 3: Tamamo-no-Mae, page 91.",
                "pl": "Opowieść 3: Tamamo-no-Mae, strona 91.",
                "words": [
                  {
                    "word": "玉藻前",
                    "reading": "Tamamo-no-Mae",
                    "meaning": {
                      "en": "Tamamo-no-Mae, the legendary fox who took the form of a court lady",
                      "pl": "Tamamo-no-Mae, legendarna lisica w postaci damy dworu"
                    }
                  },
                  {
                    "word": "前",
                    "reading": "mae",
                    "meaning": {
                      "en": "here: part of a noble woman's name (not 'front')",
                      "pl": "tu: część imienia szlachetnej kobiety (nie „przód”)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "第＋number＋話",
                    "explanation": {
                      "en": "第 makes an ordinal (No. X). 話 is a counter for stories and episodes.",
                      "pl": "第 tworzy liczbę porządkową (nr X). 話 to licznik opowieści i odcinków."
                    }
                  }
                ],
                "style": "toc",
                "para": true
              },
              {
                "jp": "第四話　文車妖妃{ふぐるまようひ}\t137",
                "en": "Story 4: Fuguruma Yōhi, page 137.",
                "pl": "Opowieść 4: Fuguruma Yōhi, strona 137.",
                "words": [
                  {
                    "word": "文車妖妃",
                    "reading": "fuguruma yōhi",
                    "meaning": {
                      "en": "a yōkai said to arise from love letters (name from Toriyama Sekien's bestiary)",
                      "pl": "yōkai podobno rodzący się z listów miłosnych (nazwa z bestiariusza Toriyamy Sekiena)"
                    }
                  },
                  {
                    "word": "妖",
                    "reading": "yō",
                    "meaning": {
                      "en": "eerie, supernatural",
                      "pl": "upiorny, nadprzyrodzony"
                    }
                  },
                  {
                    "word": "妃",
                    "reading": "hi",
                    "meaning": {
                      "en": "consort, princess",
                      "pl": "małżonka, księżna"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "第＋number＋話",
                    "explanation": {
                      "en": "第 makes an ordinal (No. X). 話 is a counter for stories and episodes.",
                      "pl": "第 tworzy liczbę porządkową (nr X). 話 to licznik opowieści i odcinków."
                    }
                  }
                ],
                "style": "toc",
                "para": true
              },
              {
                "jp": "第五話　饕餮{とうてつ}\t177",
                "en": "Story 5: Tōtetsu (the Taotie), page 177.",
                "pl": "Opowieść 5: Tōtetsu (Taotie), strona 177.",
                "words": [
                  {
                    "word": "饕餮",
                    "reading": "tōtetsu",
                    "meaning": {
                      "en": "taotie, a gluttonous monster known from ancient Chinese bronzes",
                      "pl": "taotie, żarłoczny potwór znany z chińskich brązów"
                    }
                  },
                  {
                    "word": "177",
                    "reading": "hyaku nanajū nana",
                    "meaning": {
                      "en": "one hundred seventy-seven",
                      "pl": "sto siedemdziesiąt siedem"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "第＋number＋話",
                    "explanation": {
                      "en": "第 makes an ordinal (No. X). 話 is a counter for stories and episodes.",
                      "pl": "第 tworzy liczbę porządkową (nr X). 話 to licznik opowieści i odcinków."
                    }
                  }
                ],
                "style": "toc",
                "para": true
              },
              {
                "jp": "第六話　ぬっぺらほふ\t213",
                "en": "Story 6: Nuppeppō, page 213.",
                "pl": "Opowieść 6: Nuppeppō, strona 213.",
                "words": [
                  {
                    "word": "ぬっぺらほふ",
                    "reading": "Nuppeppō",
                    "meaning": {
                      "en": "a yōkai: a faceless lump of flesh",
                      "pl": "yōkai: bezlicy kawał ciała"
                    }
                  },
                  {
                    "word": "213",
                    "reading": "nihyaku jūsan",
                    "meaning": {
                      "en": "two hundred thirteen",
                      "pl": "dwieście trzynaście"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "第＋number＋話",
                    "explanation": {
                      "en": "第 makes an ordinal (No. X). 話 is a counter for stories and episodes.",
                      "pl": "第 tworzy liczbę porządkową (nr X). 話 to licznik opowieści i odcinków."
                    }
                  }
                ],
                "note": {
                  "en": "Written in hiragana, as the yōkai's name is in the old picture-scrolls.",
                  "pl": "Zapisane hiraganą, tak jak nazwa tego yōkai w dawnych zwojach z obrazkami."
                },
                "style": "toc",
                "para": true
              }
            ]
          },
          {
            "kind": "title",
            "sentences": [
              {
                "jp": "第一話　鎌{かま}鼬{いたち}",
                "en": "Story One: Kamaitachi (the Sickle Weasel)",
                "pl": "Opowieść pierwsza: Kamaitachi (Sierpowa Łasica)",
                "words": [
                  {
                    "word": "第一話",
                    "reading": "dai-ichi-wa",
                    "meaning": {
                      "en": "story no. 1",
                      "pl": "opowieść nr 1"
                    }
                  },
                  {
                    "word": "鎌",
                    "reading": "kama",
                    "meaning": {
                      "en": "sickle",
                      "pl": "sierp"
                    }
                  },
                  {
                    "word": "鼬",
                    "reading": "itachi",
                    "meaning": {
                      "en": "weasel",
                      "pl": "łasica"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "第＋number＋話",
                    "explanation": {
                      "en": "第 makes an ordinal (No. X). 話 is a counter for stories and episodes.",
                      "pl": "第 tworzy liczbę porządkową (nr X). 話 to licznik opowieści i odcinków."
                    }
                  },
                  {
                    "pattern": "鎌鼬",
                    "explanation": {
                      "en": "A kamaitachi is a whirlwind that leaves cuts on the skin as if made by a sickle. Folklore blamed an unseen weasel.",
                      "pl": "Kamaitachi to wicher zostawiający cięcia jak od sierpa. Folklor winił za to niewidzialną łasicę."
                    }
                  }
                ],
                "style": "title",
                "para": true
              }
            ]
          },
          {
            "kind": "chars",
            "sentences": [
              {
                "jp": "徳右衛門{とくえもん}",
                "en": "Tokuemon",
                "pl": "Tokuemon",
                "words": [
                  {
                    "word": "徳右衛門",
                    "reading": "Tokuemon",
                    "meaning": {
                      "en": "Tokuemon (a man's name)",
                      "pl": "Tokuemon (imię męskie)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～右衛門",
                    "explanation": {
                      "en": "-emon is a common ending of male given names in the Edo period.",
                      "pl": "-emon to częste zakończenie męskich imion w okresie Edo."
                    }
                  }
                ],
                "style": "head",
                "para": true
              },
              {
                "jp": "三河万歳{みかわまんざい}の門付{かどづ}け芸人{げいにん}。",
                "en": "A kadozuke performer of Mikawa manzai.",
                "pl": "Wędrowny artysta kadozuke, wykonawca mikawa-manzai.",
                "words": [
                  {
                    "word": "三河万歳",
                    "reading": "Mikawa manzai",
                    "meaning": {
                      "en": "manzai from Mikawa: New Year blessing performances, an ancestor of modern manzai comedy",
                      "pl": "manzai z Mikawy: noworoczne występy z błogosławieństwami, przodek współczesnego komedio-manzai"
                    }
                  },
                  {
                    "word": "門付け",
                    "reading": "kadozuke",
                    "meaning": {
                      "en": "performing from door to door for money",
                      "pl": "występowanie od drzwi do drzwi za pieniądze"
                    }
                  },
                  {
                    "word": "芸人",
                    "reading": "geinin",
                    "meaning": {
                      "en": "performer, entertainer",
                      "pl": "artysta, wykonawca"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "AのB",
                    "explanation": {
                      "en": "の links nouns: 三河万歳の門付け芸人 = 'a kadozuke performer of Mikawa manzai'.",
                      "pl": "の łączy rzeczowniki: 三河万歳の門付け芸人 = „artysta kadozuke od mikawa-manzai”."
                    }
                  },
                  {
                    "pattern": "Noun-ending sentence",
                    "explanation": {
                      "en": "Profiles often end on a noun, with no verb (体言止め).",
                      "pl": "Opisy często kończą się rzeczownikiem, bez czasownika (体言止め)."
                    }
                  }
                ],
                "para": true
              },
              {
                "jp": "芸を教えるのは厳しい父・忠右衛門{ちゅうえもん}。",
                "en": "The one who teaches him the art is his strict father, Chūemon.",
                "pl": "Sztuki uczy go surowy ojciec, Chūemon.",
                "words": [
                  {
                    "word": "芸",
                    "reading": "gei",
                    "meaning": {
                      "en": "art, craft, performance skill",
                      "pl": "sztuka, rzemiosło, umiejętność występu"
                    }
                  },
                  {
                    "word": "教える",
                    "reading": "oshieru",
                    "meaning": {
                      "en": "to teach",
                      "pl": "uczyć"
                    }
                  },
                  {
                    "word": "厳しい",
                    "reading": "kibishii",
                    "meaning": {
                      "en": "strict, harsh",
                      "pl": "surowy, ostry"
                    }
                  },
                  {
                    "word": "父",
                    "reading": "chichi",
                    "meaning": {
                      "en": "(my) father",
                      "pl": "ojciec"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～のは～(だ)",
                    "explanation": {
                      "en": "の turns '(someone) who teaches the art' into a noun; the 'is' is left out.",
                      "pl": "の zamienia „ktoś, kto uczy sztuki” w rzeczownik; „jest” pominięto."
                    }
                  },
                  {
                    "pattern": "父・忠右衛門",
                    "explanation": {
                      "en": "The dot ・ joins a descriptor and a name (apposition): 'father, Chūemon'.",
                      "pl": "Kropka ・ łączy opis i imię (apozycja): „ojciec, Chūemon”."
                    }
                  }
                ]
              },
              {
                "jp": "万歳{まんざい}とは、もとは農耕を害する獣や虫、病を祓い、田畠を荒らす精霊としての鹿や蟹を従わせるための呪言を謡い踊る芸のこと。",
                "en": "Manzai originally refers to the art of singing and dancing incantations to drive off the beasts, insects and diseases that harm farming, and to subdue the deer and crabs that ravage the fields as spirits.",
                "pl": "Manzai oznaczało pierwotnie sztukę śpiewania i tańczenia zaklęć, które odpędzały zwierzęta, owady i choroby szkodzące uprawom oraz ujarzmiały jelenie i kraby, uważane za duchy niszczące pola.",
                "words": [
                  {
                    "word": "農耕",
                    "reading": "nōkō",
                    "meaning": {
                      "en": "farming, cultivation",
                      "pl": "uprawa roli"
                    }
                  },
                  {
                    "word": "祓う",
                    "reading": "harau",
                    "meaning": {
                      "en": "to purify, to drive away",
                      "pl": "oczyszczać, odpędzać"
                    }
                  },
                  {
                    "word": "荒らす",
                    "reading": "arasu",
                    "meaning": {
                      "en": "to ravage, to lay waste",
                      "pl": "pustoszyć, niszczyć"
                    }
                  },
                  {
                    "word": "従わせる",
                    "reading": "shitagawaseru",
                    "meaning": {
                      "en": "to make obey, to subdue",
                      "pl": "zmusić do posłuszeństwa, ujarzmić"
                    }
                  },
                  {
                    "word": "呪言",
                    "reading": "jugon",
                    "meaning": {
                      "en": "incantation, spell",
                      "pl": "zaklęcie"
                    }
                  },
                  {
                    "word": "謡う",
                    "reading": "utau",
                    "meaning": {
                      "en": "to chant (in the Noh style)",
                      "pl": "śpiewać (jak w teatrze Noh)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～とは、～のこと",
                    "explanation": {
                      "en": "Definition pattern: 'X means Y'.",
                      "pl": "Wzór definicji: „X to Y”."
                    }
                  },
                  {
                    "pattern": "～ための",
                    "explanation": {
                      "en": "'For the purpose of ~'. 従わせるための呪言 = 'incantations to subdue'.",
                      "pl": "„W celu ~”. 従わせるための呪言 = „zaklęcia, by ujarzmić”."
                    }
                  },
                  {
                    "pattern": "従わせる",
                    "explanation": {
                      "en": "Causative of 従う (obey): 'make obey'.",
                      "pl": "Sprawczy od 従う (słuchać): „zmusić do posłuszeństwa”."
                    }
                  },
                  {
                    "pattern": "～としての",
                    "explanation": {
                      "en": "'As ~'. 精霊としての鹿 = 'deer, in their role as spirits'.",
                      "pl": "„Jako ~”. 精霊としての鹿 = „jelenie w roli duchów”."
                    }
                  }
                ],
                "note": {
                  "en": "Manzai started as a New Year ritual of blessing houses. Modern manzai comedy grew out of it.",
                  "pl": "Manzai zaczęło się jako noworoczny rytuał błogosławienia domów. Wyrosła z niego współczesna komedia manzai."
                }
              },
              {
                "jp": "三河{みかわ}や尾張{おわり}地方でさかんなものを三河万歳という。",
                "en": "The kind that is popular in the Mikawa and Owari regions is called Mikawa manzai.",
                "pl": "Rodzaj popularny w regionach Mikawa i Owari nazywa się mikawa-manzai.",
                "words": [
                  {
                    "word": "尾張",
                    "reading": "Owari",
                    "meaning": {
                      "en": "Owari, an old province (west of today's Aichi)",
                      "pl": "Owari, dawna prowincja (zachód dzisiejszego Aichi)"
                    }
                  },
                  {
                    "word": "地方",
                    "reading": "chihō",
                    "meaning": {
                      "en": "region, district",
                      "pl": "region, okolica"
                    }
                  },
                  {
                    "word": "さかん",
                    "reading": "sakan",
                    "meaning": {
                      "en": "thriving, popular",
                      "pl": "kwitnący, popularny"
                    }
                  },
                  {
                    "word": "という",
                    "reading": "to iu",
                    "meaning": {
                      "en": "is called",
                      "pl": "nazywa się"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "A を B という",
                    "explanation": {
                      "en": "'Call A by the name B'.",
                      "pl": "„Nazywać A imieniem B”."
                    }
                  },
                  {
                    "pattern": "さかんなもの",
                    "explanation": {
                      "en": "さかん is a na-adjective. もの = 'the kind / the thing that is ~'.",
                      "pl": "さかん to przymiotnik na. もの = „rodzaj / to, co jest ~”."
                    }
                  }
                ]
              },
              {
                "jp": "熊野{くまの}神人{じんにん}の玄海{げんかい}",
                "en": "Genkai, a Kumano jinnin",
                "pl": "Genkai, jinnin z Kumano",
                "para": true,
                "words": [
                  {
                    "word": "熊野",
                    "reading": "Kumano",
                    "meaning": {
                      "en": "Kumano, a sacred area of Japan with great shrines",
                      "pl": "Kumano, święty region Japonii z wielkimi świątyniami"
                    }
                  },
                  {
                    "word": "神人",
                    "reading": "jinnin",
                    "meaning": {
                      "en": "shrine-attached itinerant priest-performer (explained below)",
                      "pl": "wędrowny kapłan-artysta związany ze świątynią (objaśnienie niżej)"
                    }
                  },
                  {
                    "word": "玄海",
                    "reading": "Genkai",
                    "meaning": {
                      "en": "Genkai (a name)",
                      "pl": "Genkai (imię)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "AのB",
                    "explanation": {
                      "en": "The name comes last: 'the Kumano jinnin, Genkai'.",
                      "pl": "Imię stoi na końcu: „jinnin z Kumano, Genkai”."
                    }
                  }
                ],
                "style": "head"
              },
              {
                "jp": "抜け目なく、盗み、犯し、何食わぬ顔で旅を続ける男。",
                "en": "A man who, shrewd and unscrupulous, steals, commits crimes and goes on travelling with an innocent face.",
                "pl": "Mężczyzna, który sprytny i bez skrupułów kradnie, popełnia zbrodnie i wędruje dalej z niewinną miną.",
                "words": [
                  {
                    "word": "抜け目ない",
                    "reading": "nukeme nai",
                    "meaning": {
                      "en": "shrewd, sharp (misses nothing)",
                      "pl": "przebiegły, sprytny (nic nie przeoczy)"
                    }
                  },
                  {
                    "word": "盗む",
                    "reading": "nusumu",
                    "meaning": {
                      "en": "to steal",
                      "pl": "kraść"
                    }
                  },
                  {
                    "word": "犯す",
                    "reading": "okasu",
                    "meaning": {
                      "en": "to commit (a crime), to violate",
                      "pl": "popełniać (przestępstwo), pogwałcić"
                    }
                  },
                  {
                    "word": "何食わぬ顔",
                    "reading": "nani kuwanu kao",
                    "meaning": {
                      "en": "an innocent look, as if nothing happened",
                      "pl": "niewinna mina, jakby nic się nie stało"
                    }
                  },
                  {
                    "word": "旅",
                    "reading": "tabi",
                    "meaning": {
                      "en": "journey, travel",
                      "pl": "podróż, wędrówka"
                    }
                  },
                  {
                    "word": "続ける",
                    "reading": "tsuzukeru",
                    "meaning": {
                      "en": "to continue",
                      "pl": "kontynuować"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "Verb stem chain: 盗み、犯し、",
                    "explanation": {
                      "en": "Verbs in the stem form listed one after another mean 'steals, commits crimes, ...'.",
                      "pl": "Czasowniki w formie ます-bez-ます wymienione po kolei: „kradnie, popełnia zbrodnie, ...”."
                    }
                  },
                  {
                    "pattern": "何食わぬ顔",
                    "explanation": {
                      "en": "ぬ is the old negative (= ない): 'a face that eats nothing', so a face that shows nothing.",
                      "pl": "ぬ to dawne przeczenie (= ない): „twarz, która niczego nie je”, czyli taka, która niczego nie zdradza."
                    }
                  },
                  {
                    "pattern": "Clause + 男",
                    "explanation": {
                      "en": "The whole description comes before 男 and modifies it.",
                      "pl": "Cały opis stoi przed 男 i go określa."
                    }
                  }
                ],
                "note": {
                  "en": "犯す can mean 'commit a crime' or 'violate (a person)'. The text does not say which here.",
                  "pl": "犯す może znaczyć „popełnić przestępstwo” albo „zgwałcić / pogwałcić”. Tekst nie precyzuje tu, o które chodzi."
                },
                "para": true
              },
              {
                "jp": "神人{じんにん}とは、伊勢{いせ}や熊野、白山{はくさん}といった大社{たいしゃ}の神符を授かり、各国の信者のもとを巡って、祈禱{きとう}や芸を披露していくばくかの銭を得る稼業のこと。",
                "en": "A jinnin is someone who receives talismans from great shrines such as Ise, Kumano and Hakusan, travels around to believers in each province, and earns a little money by performing prayers and arts.",
                "pl": "Jinin to ktoś, kto otrzymuje talizmany z wielkich świątyń, takich jak Ise, Kumano i Hakusan, obchodzi wiernych w poszczególnych prowincjach i zarabia niewielkie pieniądze, wykonując modlitwy i występy.",
                "words": [
                  {
                    "word": "神符",
                    "reading": "shinpu",
                    "meaning": {
                      "en": "a talisman from a shrine",
                      "pl": "talizman ze świątyni"
                    }
                  },
                  {
                    "word": "授かる",
                    "reading": "sazukaru",
                    "meaning": {
                      "en": "to be granted, to receive",
                      "pl": "otrzymać (dar, przydział)"
                    }
                  },
                  {
                    "word": "信者",
                    "reading": "shinja",
                    "meaning": {
                      "en": "believer, devotee",
                      "pl": "wierny, wyznawca"
                    }
                  },
                  {
                    "word": "巡る",
                    "reading": "meguru",
                    "meaning": {
                      "en": "to go around",
                      "pl": "obchodzić, objeżdżać"
                    }
                  },
                  {
                    "word": "披露する",
                    "reading": "hirō suru",
                    "meaning": {
                      "en": "to show, to present (a performance)",
                      "pl": "pokazać, zaprezentować (występ)"
                    }
                  },
                  {
                    "word": "いくばくか",
                    "reading": "ikubakuka",
                    "meaning": {
                      "en": "some, a little",
                      "pl": "trochę, nieco"
                    }
                  },
                  {
                    "word": "稼業",
                    "reading": "kagyō",
                    "meaning": {
                      "en": "trade, line of work",
                      "pl": "fach, zawód"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～といった",
                    "explanation": {
                      "en": "'Such as ~'. Gives examples: 伊勢や熊野、白山といった大社.",
                      "pl": "„Takie jak ~”. Podaje przykłady: 伊勢や熊野、白山といった大社."
                    }
                  },
                  {
                    "pattern": "AのもとをB",
                    "explanation": {
                      "en": "もと = 'the place of / with (someone)'. 信者のもとを巡る = 'visit the believers'.",
                      "pl": "もと = „u kogoś”. 信者のもとを巡る = „odwiedzać wiernych”."
                    }
                  },
                  {
                    "pattern": "～していく",
                    "explanation": {
                      "en": "'Go on doing ~' as they move on from place to place.",
                      "pl": "„Robić ~ idąc dalej” z miejsca na miejsce."
                    }
                  },
                  {
                    "pattern": "～とは～稼業のこと",
                    "explanation": {
                      "en": "Definition pattern again: 'A jinnin is a trade of ~'.",
                      "pl": "Znów wzór definicji: „Jinin to fach polegający na ~”."
                    }
                  }
                ]
              },
              {
                "jp": "傀儡師{くぐつし}",
                "en": "Kugutsushi (puppeteer)",
                "pl": "Kugutsushi (lalkarz)",
                "words": [
                  {
                    "word": "傀儡師",
                    "reading": "kugutsushi",
                    "meaning": {
                      "en": "a wandering puppeteer",
                      "pl": "wędrowny lalkarz"
                    }
                  },
                  {
                    "word": "傀儡",
                    "reading": "kugutsu",
                    "meaning": {
                      "en": "puppet",
                      "pl": "kukiełka, lalka"
                    }
                  },
                  {
                    "word": "師",
                    "reading": "shi",
                    "meaning": {
                      "en": "master, practitioner",
                      "pl": "mistrz, praktyk"
                    }
                  }
                ],
                "style": "head",
                "para": true
              },
              {
                "jp": "豊前{ぶぜん}の人形遣い。",
                "en": "A puppeteer from Buzen.",
                "pl": "Lalkarz z Buzen.",
                "para": true,
                "words": [
                  {
                    "word": "豊前",
                    "reading": "Buzen",
                    "meaning": {
                      "en": "Buzen, an old province in northern Kyūshū",
                      "pl": "Buzen, dawna prowincja na północy Kyūshū"
                    }
                  },
                  {
                    "word": "人形遣い",
                    "reading": "ningyō-zukai",
                    "meaning": {
                      "en": "puppeteer (puppet handler)",
                      "pl": "lalkarz (operator lalek)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "AのB",
                    "explanation": {
                      "en": "'Puppeteer of Buzen'. の shows where he is from.",
                      "pl": "„Lalkarz z Buzen”. の wskazuje, skąd pochodzi."
                    }
                  }
                ]
              },
              {
                "jp": "内裏内侍所御神楽{だいりないしどころみかぐら}の系譜を継ぐもので、八幡{はちまん}の神威を以て施主の禍を祓い福を招くもの。",
                "en": "He carries on the lineage of the sacred kagura of the Naishidokoro in the imperial palace, and by the divine power of Hachiman he wards off calamity from his patrons and calls in good fortune.",
                "pl": "Kontynuuje tradycję świętej kagura z Naishidokoro w pałacu cesarskim i dzięki boskiej mocy Hachimana odpędza nieszczęścia od zleceniodawców i sprowadza szczęście.",
                "words": [
                  {
                    "word": "内裏",
                    "reading": "dairi",
                    "meaning": {
                      "en": "the imperial palace",
                      "pl": "pałac cesarski"
                    }
                  },
                  {
                    "word": "内侍所",
                    "reading": "naishidokoro",
                    "meaning": {
                      "en": "the palace sanctuary of the sacred mirror",
                      "pl": "pałacowa świątynia świętego zwierciadła"
                    }
                  },
                  {
                    "word": "御神楽",
                    "reading": "mikagura",
                    "meaning": {
                      "en": "sacred Shinto music and dance",
                      "pl": "święta muzyka i taniec shintō"
                    }
                  },
                  {
                    "word": "系譜",
                    "reading": "keifu",
                    "meaning": {
                      "en": "lineage",
                      "pl": "rodowód, linia tradycji"
                    }
                  },
                  {
                    "word": "神威",
                    "reading": "shin'i",
                    "meaning": {
                      "en": "divine power",
                      "pl": "boska moc"
                    }
                  },
                  {
                    "word": "施主",
                    "reading": "sesshu",
                    "meaning": {
                      "en": "patron, sponsor (one who commissions)",
                      "pl": "mecenas, zleceniodawca"
                    }
                  },
                  {
                    "word": "禍",
                    "reading": "wazawai",
                    "meaning": {
                      "en": "calamity, misfortune",
                      "pl": "nieszczęście, klęska"
                    }
                  },
                  {
                    "word": "福",
                    "reading": "fuku",
                    "meaning": {
                      "en": "good fortune",
                      "pl": "szczęście"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～を以て",
                    "explanation": {
                      "en": "もって (formal) = 'by means of ~'. 八幡の神威を以て = 'through Hachiman's divine power'.",
                      "pl": "もって (formalnie) = „za pomocą ~”. 八幡の神威を以て = „dzięki boskiej mocy Hachimana”."
                    }
                  },
                  {
                    "pattern": "～ものだ / ～もの",
                    "explanation": {
                      "en": "'He is one who ~'. Used to describe a type of person.",
                      "pl": "„To ktoś, kto ~”. Służy do opisu rodzaju osoby."
                    }
                  },
                  {
                    "pattern": "祓い福を招く",
                    "explanation": {
                      "en": "Two verbs in a row: 'drives off calamity and invites fortune'.",
                      "pl": "Dwa czasowniki po sobie: „odpędza klęskę i sprowadza szczęście”."
                    }
                  }
                ]
              },
              {
                "jp": "祝詞{のりと}のようなものを上げながら人形芝居をする。",
                "en": "While chanting something like a norito, he performs a puppet play.",
                "pl": "Wygłaszając coś w rodzaju norito, wystawia przedstawienie lalkowe.",
                "words": [
                  {
                    "word": "祝詞",
                    "reading": "norito",
                    "meaning": {
                      "en": "a ritual prayer chanted at Shinto ceremonies",
                      "pl": "modlitwa rytualna recytowana podczas ceremonii shintō"
                    }
                  },
                  {
                    "word": "上げる",
                    "reading": "ageru",
                    "meaning": {
                      "en": "to raise (here: to chant aloud)",
                      "pl": "podnosić (tu: wygłaszać)"
                    }
                  },
                  {
                    "word": "人形芝居",
                    "reading": "ningyō shibai",
                    "meaning": {
                      "en": "puppet play",
                      "pl": "przedstawienie lalkowe"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～のようなもの",
                    "explanation": {
                      "en": "'Something like ~'.",
                      "pl": "„Coś w rodzaju ~”."
                    }
                  },
                  {
                    "pattern": "～ながら",
                    "explanation": {
                      "en": "'While doing ~'. Two actions at the same time.",
                      "pl": "„Robiąc ~”. Dwie czynności naraz."
                    }
                  },
                  {
                    "pattern": "芝居をする",
                    "explanation": {
                      "en": "'To perform a play'. Noun + をする makes a verb.",
                      "pl": "„Wystawiać przedstawienie”. Rzeczownik + をする tworzy czasownik."
                    }
                  }
                ]
              },
              {
                "jp": "角兵衛獅子{かくべえじし}",
                "en": "Kakubee-jishi (lion-dance performer)",
                "pl": "Kakubee-jishi (wykonawca tańca lwa)",
                "para": true,
                "words": [
                  {
                    "word": "角兵衛獅子",
                    "reading": "Kakubee-jishi",
                    "meaning": {
                      "en": "a street lion-dance act from Echigo, often performed by children",
                      "pl": "uliczny taniec lwa z Echigo, często wykonywany przez dzieci"
                    }
                  },
                  {
                    "word": "獅子",
                    "reading": "shishi",
                    "meaning": {
                      "en": "lion (lion dance)",
                      "pl": "lew (taniec lwa)"
                    }
                  }
                ],
                "style": "head"
              },
              {
                "jp": "子の与兵衛{よへえ}と一緒に、越後{えちご}地方の獅子芸をする。",
                "en": "Together with his child Yohei, he performs the lion-dance art of the Echigo region.",
                "pl": "Razem z dzieckiem Yohei wykonuje sztukę tańca lwa z regionu Echigo.",
                "words": [
                  {
                    "word": "子",
                    "reading": "ko",
                    "meaning": {
                      "en": "child",
                      "pl": "dziecko"
                    }
                  },
                  {
                    "word": "与兵衛",
                    "reading": "Yohei",
                    "meaning": {
                      "en": "Yohei (a name)",
                      "pl": "Yohei (imię)"
                    }
                  },
                  {
                    "word": "一緒に",
                    "reading": "issho ni",
                    "meaning": {
                      "en": "together",
                      "pl": "razem"
                    }
                  },
                  {
                    "word": "越後",
                    "reading": "Echigo",
                    "meaning": {
                      "en": "Echigo, an old province (today's Niigata)",
                      "pl": "Echigo, dawna prowincja (dzisiejsze Niigata)"
                    }
                  },
                  {
                    "word": "獅子芸",
                    "reading": "shishi-gei",
                    "meaning": {
                      "en": "lion-dance art",
                      "pl": "sztuka tańca lwa"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "A と一緒に",
                    "explanation": {
                      "en": "'Together with A'.",
                      "pl": "„Razem z A”."
                    }
                  },
                  {
                    "pattern": "AのB",
                    "explanation": {
                      "en": "の links: 越後地方の獅子芸 = 'lion-dance art of the Echigo region'.",
                      "pl": "の łączy: 越後地方の獅子芸 = „taniec lwa z regionu Echigo”."
                    }
                  },
                  {
                    "pattern": "芸をする",
                    "explanation": {
                      "en": "'Perform an art'.",
                      "pl": "„Wykonywać sztukę”."
                    }
                  }
                ],
                "para": true
              },
              {
                "jp": "薬売り",
                "en": "The Medicine Seller",
                "pl": "Sprzedawca Lekarstw",
                "para": true,
                "words": [
                  {
                    "word": "薬",
                    "reading": "kusuri",
                    "meaning": {
                      "en": "medicine",
                      "pl": "lekarstwo"
                    }
                  },
                  {
                    "word": "売り",
                    "reading": "uri",
                    "meaning": {
                      "en": "selling (stem of 売る)",
                      "pl": "sprzedawanie (temat od 売る)"
                    }
                  },
                  {
                    "word": "薬売り",
                    "reading": "kusuri-uri",
                    "meaning": {
                      "en": "medicine seller",
                      "pl": "sprzedawca lekarstw"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "Verb stem + noun",
                    "explanation": {
                      "en": "売る → 売り. Noun + stem names the person who does it: 薬売り.",
                      "pl": "売る → 売り. Rzeczownik + temat nazywa osobę, która to robi: 薬売り."
                    }
                  }
                ],
                "note": {
                  "en": "In the series he is known only by this title, never by a name.",
                  "pl": "W serii znany jest tylko pod tym tytułem, nigdy z imienia."
                },
                "style": "head"
              },
              {
                "jp": "退魔の剣を持ち、モノノ怪の気配があるところに現れる。",
                "en": "Carrying a sword that repels evil, he appears wherever there is a sign of a mononoke.",
                "pl": "Z mieczem odpędzającym zło pojawia się wszędzie tam, gdzie wyczuwalna jest obecność mononoke.",
                "words": [
                  {
                    "word": "退魔",
                    "reading": "taima",
                    "meaning": {
                      "en": "driving out evil, exorcism",
                      "pl": "wypędzanie zła, egzorcyzm"
                    }
                  },
                  {
                    "word": "剣",
                    "reading": "ken",
                    "meaning": {
                      "en": "sword",
                      "pl": "miecz"
                    }
                  },
                  {
                    "word": "持つ",
                    "reading": "motsu",
                    "meaning": {
                      "en": "to hold, to carry",
                      "pl": "trzymać, nosić"
                    }
                  },
                  {
                    "word": "気配",
                    "reading": "kehai",
                    "meaning": {
                      "en": "presence, sign of something",
                      "pl": "obecność, znak czegoś"
                    }
                  },
                  {
                    "word": "現れる",
                    "reading": "arawareru",
                    "meaning": {
                      "en": "to appear",
                      "pl": "pojawiać się"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "持ち、",
                    "explanation": {
                      "en": "Stem form joins the clauses: 'holds a sword, and ...'.",
                      "pl": "Forma łącząca: „trzyma miecz i ...”."
                    }
                  },
                  {
                    "pattern": "～があるところに",
                    "explanation": {
                      "en": "A clause + ところ = 'a place where ~'. Here: 'wherever a sign exists'.",
                      "pl": "Zdanie + ところ = „miejsce, gdzie ~”. Tu: „tam, gdzie jest znak”."
                    }
                  },
                  {
                    "pattern": "Xに現れる",
                    "explanation": {
                      "en": "に marks where he appears.",
                      "pl": "に oznacza, gdzie się pojawia."
                    }
                  }
                ],
                "para": true
              }
            ]
          },
          {
            "head": "7　第一話　鎌鼬",
            "side": "left",
            "sentences": [
              {
                "jp": "鎌鼬{かまいたち}",
                "en": "Kamaitachi",
                "pl": "Kamaitachi",
                "words": [
                  {
                    "word": "鎌鼬",
                    "reading": "kamaitachi",
                    "meaning": {
                      "en": "sickle weasel (see the chapter title)",
                      "pl": "sierpowa łasica (zob. tytuł rozdziału)"
                    }
                  }
                ],
                "style": "head",
                "para": true
              },
              {
                "jp": "これを使う人ありて、竹筒を持ちながら呪文を唱うれば、狐たちまちその管の中に入り、問いに応じて答えをなす。（井上円了『迷信解』）",
                "en": "There are people who use this: holding a bamboo tube and reciting a spell, they make a fox enter the tube at once and answer questions put to it. (Inoue Enryō, Meishin-kai)",
                "pl": "Są ludzie, którzy tego używają: trzymając bambusową rurkę i recytując zaklęcie, sprawiają, że lis natychmiast wchodzi do rurki i odpowiada na pytania. (Inoue Enryō, Meishin-kai)",
                "para": true,
                "words": [
                  {
                    "word": "使う",
                    "reading": "tsukau",
                    "meaning": {
                      "en": "to use",
                      "pl": "używać"
                    }
                  },
                  {
                    "word": "竹筒",
                    "reading": "takezutsu",
                    "meaning": {
                      "en": "bamboo tube",
                      "pl": "bambusowa rurka"
                    }
                  },
                  {
                    "word": "呪文",
                    "reading": "jumon",
                    "meaning": {
                      "en": "spell, incantation",
                      "pl": "zaklęcie"
                    }
                  },
                  {
                    "word": "唱う",
                    "reading": "tonau (= tonaeru)",
                    "meaning": {
                      "en": "to recite, to chant",
                      "pl": "recytować"
                    }
                  },
                  {
                    "word": "狐",
                    "reading": "kitsune",
                    "meaning": {
                      "en": "fox",
                      "pl": "lis"
                    }
                  },
                  {
                    "word": "たちまち",
                    "reading": "tachimachi",
                    "meaning": {
                      "en": "at once, in an instant",
                      "pl": "natychmiast"
                    }
                  },
                  {
                    "word": "応じる",
                    "reading": "ōjiru",
                    "meaning": {
                      "en": "to respond to",
                      "pl": "odpowiadać na"
                    }
                  },
                  {
                    "word": "答え",
                    "reading": "kotae",
                    "meaning": {
                      "en": "answer",
                      "pl": "odpowiedź"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "ありて",
                    "explanation": {
                      "en": "Old-style て-form of ある: 人ありて = 'there are people, and ...'. Modern: あって.",
                      "pl": "Dawna forma て od ある: 人ありて = „są ludzie i ...”. Współcześnie: あって."
                    }
                  },
                  {
                    "pattern": "唱うれば",
                    "explanation": {
                      "en": "Old conditional: 唱う + れば. Modern: 唱えれば, 'if / when (one) recites'.",
                      "pl": "Dawny tryb warunkowy: 唱う + れば. Współcześnie: 唱えれば, „gdy ktoś recytuje”."
                    }
                  },
                  {
                    "pattern": "答えをなす",
                    "explanation": {
                      "en": "なす = する (formal / old). 答えをなす = 'gives an answer'.",
                      "pl": "なす = する (formalnie / dawniej). 答えをなす = „udziela odpowiedzi”."
                    }
                  }
                ],
                "note": {
                  "en": "This is an epigraph, written in a formal old style. It describes a fox spirit kept in a tube and used to answer questions. Inoue Enryō was a Meiji-era scholar who studied folk beliefs.",
                  "pl": "To motto rozdziału, napisane starym, uroczystym stylem. Opisuje lisiego ducha trzymanego w rurce i używanego do udzielania odpowiedzi. Inoue Enryō był uczonym epoki Meiji badającym wierzenia ludowe."
                },
                "style": "epi"
              },
              {
                "jp": "※",
                "en": "※",
                "pl": "※",
                "style": "mark",
                "para": true,
                "words": [
                  {
                    "word": "※",
                    "reading": "kome-jirushi",
                    "meaning": {
                      "en": "a mark used to separate sections or to point to a note",
                      "pl": "znak oddzielający fragmenty lub wskazujący przypis"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "※",
                    "explanation": {
                      "en": "Here it only separates the epigraph from the story.",
                      "pl": "Tu tylko oddziela motto od opowieści."
                    }
                  }
                ]
              },
              {
                "jp": "年毎{としごと}に栄えゆく世を寿{ことほ}ぎて、\n今朝新玉{あらたま}の春を迎えん",
                "en": "Celebrating the world that flourishes more with every year, let us this morning welcome the new spring.",
                "pl": "Wysławiając świat, który z każdym rokiem rozkwita, powitajmy dziś rano nową wiosnę.",
                "para": true,
                "words": [
                  {
                    "word": "年毎",
                    "reading": "toshigoto",
                    "meaning": {
                      "en": "every year",
                      "pl": "co roku"
                    }
                  },
                  {
                    "word": "栄える",
                    "reading": "sakaeru",
                    "meaning": {
                      "en": "to prosper, to flourish",
                      "pl": "kwitnąć, prosperować"
                    }
                  },
                  {
                    "word": "世",
                    "reading": "yo",
                    "meaning": {
                      "en": "world, age",
                      "pl": "świat, epoka"
                    }
                  },
                  {
                    "word": "寿ぐ",
                    "reading": "kotohogu",
                    "meaning": {
                      "en": "to celebrate with blessings",
                      "pl": "wysławiać, życzyć pomyślności"
                    }
                  },
                  {
                    "word": "今朝",
                    "reading": "kesa",
                    "meaning": {
                      "en": "this morning",
                      "pl": "dziś rano"
                    }
                  },
                  {
                    "word": "新玉の",
                    "reading": "arata-ma no",
                    "meaning": {
                      "en": "'new' (poetic, used before year / spring)",
                      "pl": "„nowy” (poetycko, przed rokiem / wiosną)"
                    }
                  },
                  {
                    "word": "迎える",
                    "reading": "mukaeru",
                    "meaning": {
                      "en": "to welcome",
                      "pl": "powitać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "栄えゆく",
                    "explanation": {
                      "en": "ゆく = いく (old). 栄えゆく = 'goes on prospering'.",
                      "pl": "ゆく = いく (dawne). 栄えゆく = „coraz bardziej kwitnący”."
                    }
                  },
                  {
                    "pattern": "寿ぎて",
                    "explanation": {
                      "en": "Old て-form: 'celebrating, and ...'.",
                      "pl": "Dawna forma て: „wysławiając, i ...”."
                    }
                  },
                  {
                    "pattern": "迎えん",
                    "explanation": {
                      "en": "ん is the old volitional: 迎えん = 迎えよう, 'let us welcome'.",
                      "pl": "ん to dawna forma wolicjonalna: 迎えん = 迎えよう, „powitajmy”."
                    }
                  }
                ],
                "note": {
                  "en": "A New Year blessing in the style of manzai: Japan's old calendar put the first day of spring at the new year.",
                  "pl": "Noworoczne błogosławieństwo w stylu manzai: w dawnym kalendarzu początek wiosny przypadał na Nowy Rok."
                },
                "style": "poem"
              },
              {
                "jp": "誠に芽出度{めでと}う候……",
                "en": "Truly auspicious it is…",
                "pl": "Doprawdy, jakże to pomyślne…",
                "words": [
                  {
                    "word": "誠に",
                    "reading": "makoto ni",
                    "meaning": {
                      "en": "truly",
                      "pl": "doprawdy"
                    }
                  },
                  {
                    "word": "芽出度い",
                    "reading": "medetai",
                    "meaning": {
                      "en": "auspicious, joyful",
                      "pl": "pomyślny, radosny"
                    }
                  },
                  {
                    "word": "候",
                    "reading": "sōrō",
                    "meaning": {
                      "en": "old polite 'to be' (formal speech and letters)",
                      "pl": "dawne grzeczne „być” (mowa uroczysta, listy)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "芽出度う",
                    "explanation": {
                      "en": "い-adjective + く becomes う in old speech: めでたく → めでとう.",
                      "pl": "Przymiotnik na い + く zmienia się w う w dawnej mowie: めでたく → めでとう."
                    }
                  },
                  {
                    "pattern": "候",
                    "explanation": {
                      "en": "Formal ending of old letters and speeches: 'is / it is'.",
                      "pl": "Uroczyste zakończenie dawnych listów i przemów: „jest”."
                    }
                  }
                ],
                "style": "poem",
                "para": true
              },
              {
                "jp": "壁が崩れ、屋根のあちこちから冬の冷気が流れ込んでくるぼろ小屋に、鼓と謡の音が響いている。",
                "en": "In a ramshackle hut whose walls have crumbled and where the winter cold flows in from all over the roof, the sound of a drum and chanting echoes.",
                "pl": "W rozpadającej się chacie, gdzie ściany się sypią, a przez cały dach wlewa się zimowy chłód, rozbrzmiewają dźwięki bębenka i śpiewu.",
                "para": true,
                "words": [
                  {
                    "word": "崩れる",
                    "reading": "kuzureru",
                    "meaning": {
                      "en": "to crumble, to collapse",
                      "pl": "kruszyć się, zawalać"
                    }
                  },
                  {
                    "word": "冷気",
                    "reading": "reiki",
                    "meaning": {
                      "en": "cold air",
                      "pl": "zimne powietrze"
                    }
                  },
                  {
                    "word": "流れ込む",
                    "reading": "nagarekomu",
                    "meaning": {
                      "en": "to flow in",
                      "pl": "wpływać, wlewać się"
                    }
                  },
                  {
                    "word": "ぼろ小屋",
                    "reading": "boro-goya",
                    "meaning": {
                      "en": "ramshackle hut",
                      "pl": "rozpadająca się chata"
                    }
                  },
                  {
                    "word": "鼓",
                    "reading": "tsuzumi",
                    "meaning": {
                      "en": "hand drum",
                      "pl": "bębenek ręczny"
                    }
                  },
                  {
                    "word": "謡",
                    "reading": "utai",
                    "meaning": {
                      "en": "Noh-style chant",
                      "pl": "śpiew w stylu Noh"
                    }
                  },
                  {
                    "word": "響く",
                    "reading": "hibiku",
                    "meaning": {
                      "en": "to echo, to resound",
                      "pl": "rozbrzmiewać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～てくる",
                    "explanation": {
                      "en": "'Comes toward the speaker': 流れ込んでくる = 'flows in (to the hut)'.",
                      "pl": "„Przychodzi w stronę mówiącego”: 流れ込んでくる = „wlewa się (do chaty)”."
                    }
                  },
                  {
                    "pattern": "Long clause + ぼろ小屋",
                    "explanation": {
                      "en": "The whole description of the hut comes before the noun.",
                      "pl": "Cały opis chaty stoi przed rzeczownikiem."
                    }
                  },
                  {
                    "pattern": "～ている",
                    "explanation": {
                      "en": "'Is -ing': 響いている = 'is echoing'.",
                      "pl": "„Jest w trakcie ~”: 響いている = „rozbrzmiewa”."
                    }
                  },
                  {
                    "pattern": "あちこち",
                    "explanation": {
                      "en": "'Here and there, all over'.",
                      "pl": "„Tu i tam, wszędzie”."
                    }
                  }
                ]
              },
              {
                "jp": "囲炉裏{いろり}には縁{ふち}の欠けた鍋{なべ}がかけられ、せめてもの暖をもたらしている。",
                "en": "A pot with a chipped rim hangs over the hearth, giving what little warmth it can.",
                "pl": "Nad paleniskiem wisi garnek z wyszczerbionym brzegiem, dający choć odrobinę ciepła.",
                "words": [
                  {
                    "word": "囲炉裏",
                    "reading": "irori",
                    "meaning": {
                      "en": "sunken hearth in the floor",
                      "pl": "palenisko wpuszczone w podłogę"
                    }
                  },
                  {
                    "word": "縁",
                    "reading": "fuchi",
                    "meaning": {
                      "en": "rim, edge",
                      "pl": "brzeg, krawędź"
                    }
                  },
                  {
                    "word": "欠ける",
                    "reading": "kakeru",
                    "meaning": {
                      "en": "to be chipped",
                      "pl": "być wyszczerbionym"
                    }
                  },
                  {
                    "word": "鍋",
                    "reading": "nabe",
                    "meaning": {
                      "en": "pot",
                      "pl": "garnek"
                    }
                  },
                  {
                    "word": "かける",
                    "reading": "kakeru",
                    "meaning": {
                      "en": "to hang, to set over",
                      "pl": "zawiesić, postawić nad"
                    }
                  },
                  {
                    "word": "暖",
                    "reading": "dan",
                    "meaning": {
                      "en": "warmth",
                      "pl": "ciepło"
                    }
                  },
                  {
                    "word": "もたらす",
                    "reading": "motarasu",
                    "meaning": {
                      "en": "to bring about",
                      "pl": "przynosić"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "かけられ",
                    "explanation": {
                      "en": "Passive stem of かける: 'is hung (over the fire)'.",
                      "pl": "Temat strony biernej od かける: „jest zawieszony (nad ogniem)”."
                    }
                  },
                  {
                    "pattern": "縁の欠けた鍋",
                    "explanation": {
                      "en": "Past form describes the state: 'a pot with a chipped rim'.",
                      "pl": "Czas przeszły opisuje stan: „garnek z wyszczerbionym brzegiem”."
                    }
                  },
                  {
                    "pattern": "せめてもの＋noun",
                    "explanation": {
                      "en": "'The very least ~, a small consolation'.",
                      "pl": "„Choć tyle ~, mała pociecha”."
                    }
                  }
                ]
              },
              {
                "jp": "三河万歳{みかわまんざい}の門付{かどづ}け芸人、徳右衛門{とくえもん}の向かいでは父の忠右衛門{ちゅうえもん}が低い声で新年の祝いを唱えている。",
                "en": "Across from Tokuemon, a kadozuke performer of Mikawa manzai, his father Chūemon is chanting New Year's blessings in a low voice.",
                "pl": "Naprzeciw Tokuemona, wędrownego artysty mikawa-manzai, jego ojciec Chūemon niskim głosem recytuje noworoczne życzenia.",
                "words": [
                  {
                    "word": "向かい",
                    "reading": "mukai",
                    "meaning": {
                      "en": "opposite side",
                      "pl": "przeciwna strona"
                    }
                  },
                  {
                    "word": "低い",
                    "reading": "hikui",
                    "meaning": {
                      "en": "low",
                      "pl": "niski"
                    }
                  },
                  {
                    "word": "声",
                    "reading": "koe",
                    "meaning": {
                      "en": "voice",
                      "pl": "głos"
                    }
                  },
                  {
                    "word": "新年",
                    "reading": "shinnen",
                    "meaning": {
                      "en": "New Year",
                      "pl": "Nowy Rok"
                    }
                  },
                  {
                    "word": "祝い",
                    "reading": "iwai",
                    "meaning": {
                      "en": "celebration, congratulations",
                      "pl": "świętowanie, życzenia"
                    }
                  },
                  {
                    "word": "唱える",
                    "reading": "tonaeru",
                    "meaning": {
                      "en": "to chant, to recite",
                      "pl": "recytować"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "A、B (apposition)",
                    "explanation": {
                      "en": "三河万歳の門付け芸人、徳右衛門 = 'Tokuemon, the kadozuke performer'.",
                      "pl": "三河万歳の門付け芸人、徳右衛門 = „Tokuemon, artysta kadozuke”."
                    }
                  },
                  {
                    "pattern": "～の向かいでは",
                    "explanation": {
                      "en": "'Across from ~'. では sets the scene.",
                      "pl": "„Naprzeciw ~”. では ustawia scenę."
                    }
                  },
                  {
                    "pattern": "低い声で",
                    "explanation": {
                      "en": "で shows the manner: 'in a low voice'.",
                      "pl": "で wskazuje sposób: „niskim głosem”."
                    }
                  }
                ],
                "para": true
              },
              {
                "jp": "それに合わせて徳右衛門は鼓を打つ。",
                "en": "In time with it, Tokuemon beats the drum.",
                "pl": "W rytm tego Tokuemon uderza w bębenek.",
                "words": [
                  {
                    "word": "合わせる",
                    "reading": "awaseru",
                    "meaning": {
                      "en": "to match, to adjust to",
                      "pl": "dopasować"
                    }
                  },
                  {
                    "word": "打つ",
                    "reading": "utsu",
                    "meaning": {
                      "en": "to strike, to beat",
                      "pl": "uderzać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "Xに合わせて",
                    "explanation": {
                      "en": "'In accordance with X, keeping time with X'.",
                      "pl": "„Zgodnie z X, w rytm X”."
                    }
                  },
                  {
                    "pattern": "鼓を打つ",
                    "explanation": {
                      "en": "打つ is the verb used for striking drums.",
                      "pl": "打つ to czasownik używany przy uderzaniu w bębny."
                    }
                  }
                ]
              },
              {
                "jp": "謡と舞に合わせるはずが、わずかに音が揺れた。",
                "en": "He was supposed to keep time with the chant and dance, but the sound wavered slightly.",
                "pl": "Miał grać w rytm śpiewu i tańca, lecz dźwięk lekko zadrżał.",
                "words": [
                  {
                    "word": "舞",
                    "reading": "mai",
                    "meaning": {
                      "en": "dance",
                      "pl": "taniec"
                    }
                  },
                  {
                    "word": "はず",
                    "reading": "hazu",
                    "meaning": {
                      "en": "expected to be, supposed to",
                      "pl": "powinno być, miało być"
                    }
                  },
                  {
                    "word": "わずか",
                    "reading": "wazuka",
                    "meaning": {
                      "en": "slight, a little",
                      "pl": "nieznaczny, odrobina"
                    }
                  },
                  {
                    "word": "揺れる",
                    "reading": "yureru",
                    "meaning": {
                      "en": "to waver, to sway",
                      "pl": "drżeć, kołysać się"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～はずが",
                    "explanation": {
                      "en": "'Was supposed to ~, but ...'.",
                      "pl": "„Miało być ~, ale ...”."
                    }
                  },
                  {
                    "pattern": "わずかに",
                    "explanation": {
                      "en": "Adverb: 'slightly'.",
                      "pl": "Przysłówek: „nieznacznie”."
                    }
                  },
                  {
                    "pattern": "音が揺れる",
                    "explanation": {
                      "en": "'The sound wavers': the rhythm slips.",
                      "pl": "„Dźwięk drży”: rytm się potyka."
                    }
                  }
                ]
              },
              {
                "jp": "その刹那{せつな}、父は立ち上がると徳右衛門の頬を殴りつけた。",
                "en": "In that instant, his father stood up and struck Tokuemon hard across the cheek.",
                "pl": "W tej chwili ojciec wstał i uderzył Tokuemona w policzek.",
                "words": [
                  {
                    "word": "刹那",
                    "reading": "setsuna",
                    "meaning": {
                      "en": "an instant, a split second",
                      "pl": "chwila, ułamek sekundy"
                    }
                  },
                  {
                    "word": "立ち上がる",
                    "reading": "tachiagaru",
                    "meaning": {
                      "en": "to stand up",
                      "pl": "wstać"
                    }
                  },
                  {
                    "word": "頬",
                    "reading": "hō",
                    "meaning": {
                      "en": "cheek",
                      "pl": "policzek"
                    }
                  },
                  {
                    "word": "殴りつける",
                    "reading": "naguritsukeru",
                    "meaning": {
                      "en": "to strike hard",
                      "pl": "uderzyć mocno"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "その刹那",
                    "explanation": {
                      "en": "'At that instant'. No particle is needed for time words.",
                      "pl": "„W tej chwili”. Słowa czasu nie wymagają partykuły."
                    }
                  },
                  {
                    "pattern": "立ち上がると",
                    "explanation": {
                      "en": "と after a verb: 'as soon as / when ~, then ...'.",
                      "pl": "と po czasowniku: „gdy tylko ~, wtedy ...”."
                    }
                  },
                  {
                    "pattern": "Stem + つける",
                    "explanation": {
                      "en": "'Do ~ forcefully, at someone': 殴りつける.",
                      "pl": "„Zrobić ~ gwałtownie, w kogoś”: 殴りつける."
                    }
                  }
                ]
              },
              {
                "jp": "「何度言えばわかる」",
                "en": "“How many times do I have to tell you before you get it?”",
                "pl": "„Ile razy muszę ci to powtarzać, zanim zrozumiesz?”",
                "para": true,
                "words": [
                  {
                    "word": "何度",
                    "reading": "nando",
                    "meaning": {
                      "en": "how many times",
                      "pl": "ile razy"
                    }
                  },
                  {
                    "word": "言う",
                    "reading": "iu",
                    "meaning": {
                      "en": "to say",
                      "pl": "mówić"
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
                    "pattern": "～ば",
                    "explanation": {
                      "en": "Conditional: 言えば = 'if (I) say it'. 何度言えば～ = 'how many times must I say ...'.",
                      "pl": "Tryb warunkowy: 言えば = „jeśli powiem”. 何度言えば～ = „ile razy mam powiedzieć ...”."
                    }
                  },
                  {
                    "pattern": "わかる",
                    "explanation": {
                      "en": "Plain, blunt form, the way a harsh father speaks.",
                      "pl": "Zwykła, szorstka forma, tak jak mówi surowy ojciec."
                    }
                  }
                ]
              }
            ]
          },
          {
            "head": "8",
            "side": "right",
            "sentences": [
              {
                "jp": "父の汗と垢{あか}の臭いに、己の血の臭気が混じる。",
                "en": "The smell of his father's sweat and grime mixes with the stench of his own blood.",
                "pl": "Zapach potu i brudu ojca miesza się z odorem jego własnej krwi.",
                "words": [
                  {
                    "word": "汗",
                    "reading": "ase",
                    "meaning": {
                      "en": "sweat",
                      "pl": "pot"
                    }
                  },
                  {
                    "word": "垢",
                    "reading": "aka",
                    "meaning": {
                      "en": "grime, dirt",
                      "pl": "brud"
                    }
                  },
                  {
                    "word": "臭い",
                    "reading": "nioi",
                    "meaning": {
                      "en": "smell, odor",
                      "pl": "zapach, odór"
                    }
                  },
                  {
                    "word": "己",
                    "reading": "onore",
                    "meaning": {
                      "en": "oneself, one's own",
                      "pl": "własny, siebie samego"
                    }
                  },
                  {
                    "word": "臭気",
                    "reading": "shūki",
                    "meaning": {
                      "en": "stench",
                      "pl": "smród"
                    }
                  },
                  {
                    "word": "混じる",
                    "reading": "majiru",
                    "meaning": {
                      "en": "to mix, to be mixed",
                      "pl": "mieszać się"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "AとB",
                    "explanation": {
                      "en": "と joins nouns: 'sweat and grime'.",
                      "pl": "と łączy rzeczowniki: „pot i brud”."
                    }
                  },
                  {
                    "pattern": "Xに Y が混じる",
                    "explanation": {
                      "en": "'Y mixes into X'. に marks what it mixes into.",
                      "pl": "„Y miesza się z X”. に oznacza to, z czym się miesza."
                    }
                  },
                  {
                    "pattern": "己の",
                    "explanation": {
                      "en": "己 is literary for 'one's own'.",
                      "pl": "己 to literackie „własny”."
                    }
                  }
                ],
                "style": "cont",
                "para": true
              },
              {
                "jp": "「そんな芸で銭が取れるか！」",
                "en": "“Can you earn money with an act like that?!”",
                "pl": "„Z takim występem myślisz, że zarobisz?!”",
                "para": true,
                "words": [
                  {
                    "word": "そんな",
                    "reading": "sonna",
                    "meaning": {
                      "en": "such, that kind of",
                      "pl": "taki, coś takiego"
                    }
                  },
                  {
                    "word": "銭",
                    "reading": "zeni",
                    "meaning": {
                      "en": "money, coins",
                      "pl": "pieniądze, monety"
                    }
                  },
                  {
                    "word": "取れる",
                    "reading": "toreru",
                    "meaning": {
                      "en": "to be able to get / earn",
                      "pl": "móc zdobyć / zarobić"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "取れる",
                    "explanation": {
                      "en": "Potential form of 取る: 'can take, can earn'.",
                      "pl": "Forma potencjalna od 取る: „móc wziąć, zarobić”."
                    }
                  },
                  {
                    "pattern": "～か！",
                    "explanation": {
                      "en": "か as a rhetorical question: the answer is 'of course not'.",
                      "pl": "か jako pytanie retoryczne: odpowiedź to „oczywiście, że nie”."
                    }
                  },
                  {
                    "pattern": "芸で",
                    "explanation": {
                      "en": "で shows the means: 'with an act'.",
                      "pl": "で wskazuje środek: „takim występem”."
                    }
                  }
                ]
              },
              {
                "jp": "音が揺れた理由はわかっている。",
                "en": "He knows why the sound wavered.",
                "pl": "Wie, dlaczego dźwięk zadrżał.",
                "words": [
                  {
                    "word": "理由",
                    "reading": "riyū",
                    "meaning": {
                      "en": "reason",
                      "pl": "powód"
                    }
                  },
                  {
                    "word": "わかる",
                    "reading": "wakaru",
                    "meaning": {
                      "en": "to understand, to know",
                      "pl": "rozumieć, wiedzieć"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "音が揺れた理由",
                    "explanation": {
                      "en": "A clause before 理由 explains it: 'the reason (that) the sound wavered'.",
                      "pl": "Zdanie przed 理由 je objaśnia: „powód, dla którego dźwięk zadrżał”."
                    }
                  },
                  {
                    "pattern": "わかっている",
                    "explanation": {
                      "en": "'Knows (already)'. The ～ている form shows a state.",
                      "pl": "„Wie (już)”. Forma ～ている pokazuje stan."
                    }
                  }
                ]
              },
              {
                "jp": "「腹が減って……」",
                "en": "“I was hungry…”",
                "pl": "„Byłem głodny…”",
                "para": true,
                "words": [
                  {
                    "word": "腹",
                    "reading": "hara",
                    "meaning": {
                      "en": "belly, stomach",
                      "pl": "brzuch, żołądek"
                    }
                  },
                  {
                    "word": "減る",
                    "reading": "heru",
                    "meaning": {
                      "en": "to decrease",
                      "pl": "ubywać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "腹が減る",
                    "explanation": {
                      "en": "Idiom: 'to get hungry' (the belly shrinks).",
                      "pl": "Idiom: „zgłodnieć” (brzuch się kurczy)."
                    }
                  },
                  {
                    "pattern": "～て……",
                    "explanation": {
                      "en": "A て-form left hanging gives a reason without finishing the sentence.",
                      "pl": "Zawieszona forma て podaje powód bez dokończenia zdania."
                    }
                  }
                ]
              },
              {
                "jp": "最後まで言い終わらぬうちに逆の頬を殴られた。",
                "en": "Before he could finish speaking, he was hit on the other cheek.",
                "pl": "Zanim zdążył dokończyć, dostał w drugi policzek.",
                "words": [
                  {
                    "word": "最後",
                    "reading": "saigo",
                    "meaning": {
                      "en": "the end, last",
                      "pl": "koniec"
                    }
                  },
                  {
                    "word": "言い終わる",
                    "reading": "iiowaru",
                    "meaning": {
                      "en": "to finish saying",
                      "pl": "skończyć mówić"
                    }
                  },
                  {
                    "word": "逆",
                    "reading": "gyaku",
                    "meaning": {
                      "en": "opposite",
                      "pl": "przeciwny"
                    }
                  },
                  {
                    "word": "殴られる",
                    "reading": "nagurareru",
                    "meaning": {
                      "en": "to be hit (passive)",
                      "pl": "zostać uderzonym"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～ぬうちに",
                    "explanation": {
                      "en": "'Before ~ is done'. ぬ is the old negative (= ない).",
                      "pl": "„Zanim ~ się skończy”. ぬ to dawne przeczenie (= ない)."
                    }
                  },
                  {
                    "pattern": "殴られた",
                    "explanation": {
                      "en": "Passive: 殴る → 殴られる, 'was hit'.",
                      "pl": "Strona bierna: 殴る → 殴られる, „został uderzony”."
                    }
                  },
                  {
                    "pattern": "逆の頬",
                    "explanation": {
                      "en": "'The opposite cheek'.",
                      "pl": "„Przeciwny policzek”."
                    }
                  }
                ]
              },
              {
                "jp": "「お前の腹など施主は気にせんわ。俺も腹が減った。飯を作れ」",
                "en": "“The patron doesn't care about your belly. I'm hungry too. Make some food.”",
                "pl": "„Patrona nie obchodzi twój brzuch. Ja też jestem głodny. Zrób jedzenie.”",
                "para": true,
                "words": [
                  {
                    "word": "お前",
                    "reading": "omae",
                    "meaning": {
                      "en": "you (rough, to someone below)",
                      "pl": "ty (szorstko, do podwładnego)"
                    }
                  },
                  {
                    "word": "など",
                    "reading": "nado",
                    "meaning": {
                      "en": "such as; (belittling) 'the likes of'",
                      "pl": "takie jak; (lekceważąco) „coś takiego jak”"
                    }
                  },
                  {
                    "word": "気にする",
                    "reading": "ki ni suru",
                    "meaning": {
                      "en": "to care about, to mind",
                      "pl": "przejmować się"
                    }
                  },
                  {
                    "word": "俺",
                    "reading": "ore",
                    "meaning": {
                      "en": "I (rough, male)",
                      "pl": "ja (szorstko, męskie)"
                    }
                  },
                  {
                    "word": "飯",
                    "reading": "meshi",
                    "meaning": {
                      "en": "food, a meal (rough)",
                      "pl": "jedzenie, posiłek (szorstko)"
                    }
                  },
                  {
                    "word": "作れ",
                    "reading": "tsukure",
                    "meaning": {
                      "en": "make! (command)",
                      "pl": "zrób! (rozkaz)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～など",
                    "explanation": {
                      "en": "Belittling 'the likes of ~': お前の腹など = 'something as small as your hunger'.",
                      "pl": "Lekceważące „takie coś jak ~”: お前の腹など = „coś tak błahego jak twój głód”."
                    }
                  },
                  {
                    "pattern": "気にせん",
                    "explanation": {
                      "en": "せん = しない (rough speech). 気にせんわ = 'doesn't care'.",
                      "pl": "せん = しない (szorstka mowa). 気にせんわ = „nie przejmuje się”."
                    }
                  },
                  {
                    "pattern": "作れ",
                    "explanation": {
                      "en": "Command form of 作る, direct and harsh.",
                      "pl": "Tryb rozkazujący od 作る, bezpośredni i ostry."
                    }
                  }
                ]
              },
              {
                "jp": "「作れと言われても、米ももうないよ」",
                "en": "“Even if you tell me to cook, there's no rice left either.”",
                "pl": "„Nawet jeśli każesz mi gotować, ryżu też już nie ma.”",
                "para": true,
                "words": [
                  {
                    "word": "言われる",
                    "reading": "iwareru",
                    "meaning": {
                      "en": "to be told (passive)",
                      "pl": "usłyszeć polecenie (strona bierna)"
                    }
                  },
                  {
                    "word": "米",
                    "reading": "kome",
                    "meaning": {
                      "en": "rice (uncooked)",
                      "pl": "ryż (surowy)"
                    }
                  },
                  {
                    "word": "もう",
                    "reading": "mō",
                    "meaning": {
                      "en": "anymore, already",
                      "pl": "już"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～と言われても",
                    "explanation": {
                      "en": "'Even if I'm told ~'.",
                      "pl": "„Nawet jeśli mi powiedzą ~”."
                    }
                  },
                  {
                    "pattern": "米も",
                    "explanation": {
                      "en": "も adds: 'there's no money, and not even rice'.",
                      "pl": "も dodaje: „nie ma pieniędzy, a nawet ryżu”."
                    }
                  },
                  {
                    "pattern": "もう＋negative",
                    "explanation": {
                      "en": "'No longer'.",
                      "pl": "„Już nie”."
                    }
                  }
                ]
              },
              {
                "jp": "「ないなら買ってこい」",
                "en": "“If there's none, go and buy some.”",
                "pl": "„Jak nie ma, to idź kup.”",
                "para": true,
                "words": [
                  {
                    "word": "買う",
                    "reading": "kau",
                    "meaning": {
                      "en": "to buy",
                      "pl": "kupować"
                    }
                  },
                  {
                    "word": "来い",
                    "reading": "koi",
                    "meaning": {
                      "en": "come! (command of 来る)",
                      "pl": "przyjdź! (rozkaz od 来る)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～なら",
                    "explanation": {
                      "en": "'If that's the case ~'.",
                      "pl": "„Jeśli tak jest ~”."
                    }
                  },
                  {
                    "pattern": "買ってこい",
                    "explanation": {
                      "en": "て-form + 来い: 'go, buy it and come back'. A rough command.",
                      "pl": "Forma て + 来い: „idź, kup i wróć”. Szorstki rozkaz."
                    }
                  }
                ]
              },
              {
                "jp": "「だから銭も……」",
                "en": "“But there's no money either…”",
                "pl": "„Ale pieniędzy też nie ma…”",
                "para": true,
                "words": [
                  {
                    "word": "だから",
                    "reading": "dakara",
                    "meaning": {
                      "en": "so, therefore",
                      "pl": "więc"
                    }
                  },
                  {
                    "word": "銭",
                    "reading": "zeni",
                    "meaning": {
                      "en": "money",
                      "pl": "pieniądze"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "銭も……",
                    "explanation": {
                      "en": "も again: 'money too (is lacking)'. The sentence trails off.",
                      "pl": "も znowu: „pieniędzy też (brakuje)”. Zdanie się urywa."
                    }
                  }
                ]
              },
              {
                "jp": "すると忠右衛門{ちゅうえもん}は柄杓{ひしゃく}で鍋の熱湯を汲{く}むと、ためらうことなく息子の顔に叩{たた}きつけた。",
                "en": "Then Chūemon scooped boiling water from the pot with a ladle and, without hesitation, flung it in his son's face.",
                "pl": "Wtedy Chūemon nabrał chochlą wrzątek z garnka i bez wahania chlusnął synowi w twarz.",
                "para": true,
                "words": [
                  {
                    "word": "すると",
                    "reading": "suruto",
                    "meaning": {
                      "en": "and then",
                      "pl": "wtedy"
                    }
                  },
                  {
                    "word": "熱湯",
                    "reading": "nettō",
                    "meaning": {
                      "en": "boiling water",
                      "pl": "wrzątek"
                    }
                  },
                  {
                    "word": "汲む",
                    "reading": "kumu",
                    "meaning": {
                      "en": "to scoop, to draw (liquid)",
                      "pl": "czerpać, nabierać"
                    }
                  },
                  {
                    "word": "ためらう",
                    "reading": "tamerau",
                    "meaning": {
                      "en": "to hesitate",
                      "pl": "wahać się"
                    }
                  },
                  {
                    "word": "息子",
                    "reading": "musuko",
                    "meaning": {
                      "en": "son",
                      "pl": "syn"
                    }
                  },
                  {
                    "word": "叩きつける",
                    "reading": "tatakitsukeru",
                    "meaning": {
                      "en": "to slam, to fling at",
                      "pl": "rzucić, chlusnąć"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～と (汲むと)",
                    "explanation": {
                      "en": "と after a verb: 'when / as soon as ~, then ...'.",
                      "pl": "と po czasowniku: „gdy tylko ~, wtedy ...”."
                    }
                  },
                  {
                    "pattern": "～ことなく",
                    "explanation": {
                      "en": "'Without ~ing'. ためらうことなく = 'without hesitating'.",
                      "pl": "„Bez ~”. ためらうことなく = „bez wahania”."
                    }
                  },
                  {
                    "pattern": "Xに叩きつける",
                    "explanation": {
                      "en": "に marks the target of the throw.",
                      "pl": "に oznacza cel rzutu."
                    }
                  }
                ]
              },
              {
                "jp": "徳右衛門{とくえもん}は悲鳴を上げて逃げまどう。",
                "en": "Tokuemon lets out a scream and runs about in panic.",
                "pl": "Tokuemon krzyczy i miota się w panice.",
                "words": [
                  {
                    "word": "悲鳴",
                    "reading": "himei",
                    "meaning": {
                      "en": "scream, shriek",
                      "pl": "krzyk, wrzask"
                    }
                  },
                  {
                    "word": "上げる",
                    "reading": "ageru",
                    "meaning": {
                      "en": "to raise",
                      "pl": "unosić"
                    }
                  },
                  {
                    "word": "逃げまどう",
                    "reading": "nigemadou",
                    "meaning": {
                      "en": "to flee in confusion",
                      "pl": "miotać się w panice"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "悲鳴を上げる",
                    "explanation": {
                      "en": "Set phrase: 'to cry out'.",
                      "pl": "Stały zwrot: „krzyknąć”."
                    }
                  },
                  {
                    "pattern": "Stem + まどう",
                    "explanation": {
                      "en": "まどう adds 'in confusion': 逃げまどう.",
                      "pl": "まどう dodaje „w zamieszaniu”: 逃げまどう."
                    }
                  },
                  {
                    "pattern": "Present tense",
                    "explanation": {
                      "en": "The present tense makes the scene feel immediate.",
                      "pl": "Czas teraźniejszy nadaje scenie natychmiastowość."
                    }
                  }
                ]
              },
              {
                "jp": "「米がなければ買ってこい。金がなければ稼いでこい。そのあてもないなら盗んでこんか。何度同じことを言わせやがる」",
                "en": "“If there's no rice, buy it. If there's no money, go earn it. If you've no prospects for that either, go steal it. How many times are you going to make me say the same thing!”",
                "pl": "„Jak nie ma ryżu, to kup. Jak nie ma pieniędzy, to zarób. Jak nie masz na to szans, to ukradnij. Ile razy będziesz mnie zmuszać, żebym mówił to samo!”",
                "para": true,
                "words": [
                  {
                    "word": "稼ぐ",
                    "reading": "kasegu",
                    "meaning": {
                      "en": "to earn (by working)",
                      "pl": "zarabiać"
                    }
                  },
                  {
                    "word": "あて",
                    "reading": "ate",
                    "meaning": {
                      "en": "prospect, something to count on",
                      "pl": "widoki, coś pewnego"
                    }
                  },
                  {
                    "word": "盗む",
                    "reading": "nusumu",
                    "meaning": {
                      "en": "to steal",
                      "pl": "kraść"
                    }
                  },
                  {
                    "word": "同じ",
                    "reading": "onaji",
                    "meaning": {
                      "en": "the same",
                      "pl": "taki sam"
                    }
                  },
                  {
                    "word": "言わせる",
                    "reading": "iwaseru",
                    "meaning": {
                      "en": "to make (someone) say",
                      "pl": "zmusić do powiedzenia"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～なければ",
                    "explanation": {
                      "en": "'If there is not ~'.",
                      "pl": "„Jeśli nie ma ~”."
                    }
                  },
                  {
                    "pattern": "稼いでこい / 盗んでこんか",
                    "explanation": {
                      "en": "て-form + 来い / 来んか: 'go and earn it / go and steal it'. A harsh command.",
                      "pl": "Forma て + 来い / 来んか: „idź i zarób / idź i ukradnij”. Ostry rozkaz."
                    }
                  },
                  {
                    "pattern": "言わせやがる",
                    "explanation": {
                      "en": "Causative 言わせる + やがる, a rude ending showing contempt.",
                      "pl": "Sprawczy 言わせる + やがる, niegrzeczna końcówka okazująca pogardę."
                    }
                  }
                ]
              },
              {
                "jp": "小屋中{こやじゅう}に湯気が立ち、朦朧{もうろう}とした景色の向こうに醜い初老の男の顔が見える。",
                "en": "Steam rises throughout the hut, and beyond the hazy scene he can see the face of an ugly, middle-aged man.",
                "pl": "W całej chacie unosi się para, a za zamglonym obrazem widać twarz brzydkiego, starszego już mężczyzny.",
                "para": true,
                "words": [
                  {
                    "word": "湯気",
                    "reading": "yuge",
                    "meaning": {
                      "en": "steam",
                      "pl": "para"
                    }
                  },
                  {
                    "word": "立つ",
                    "reading": "tatsu",
                    "meaning": {
                      "en": "to rise",
                      "pl": "unosić się"
                    }
                  },
                  {
                    "word": "朦朧",
                    "reading": "mōrō",
                    "meaning": {
                      "en": "hazy, dim",
                      "pl": "mglisty, niewyraźny"
                    }
                  },
                  {
                    "word": "景色",
                    "reading": "keshiki",
                    "meaning": {
                      "en": "scene, view",
                      "pl": "widok"
                    }
                  },
                  {
                    "word": "醜い",
                    "reading": "minikui",
                    "meaning": {
                      "en": "ugly",
                      "pl": "brzydki"
                    }
                  },
                  {
                    "word": "初老",
                    "reading": "shorō",
                    "meaning": {
                      "en": "late middle age",
                      "pl": "starszy wiek średni"
                    }
                  },
                  {
                    "word": "見える",
                    "reading": "mieru",
                    "meaning": {
                      "en": "to be visible",
                      "pl": "być widocznym"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "小屋中",
                    "explanation": {
                      "en": "～中 (じゅう) = 'throughout ~'.",
                      "pl": "～中 (じゅう) = „w całym ~”."
                    }
                  },
                  {
                    "pattern": "朦朧とした",
                    "explanation": {
                      "en": "～とした + noun: 'hazy' (a と-adverb with する).",
                      "pl": "～とした + rzeczownik: „mglisty”."
                    }
                  },
                  {
                    "pattern": "見える",
                    "explanation": {
                      "en": "'Can be seen / comes into view', not an act of looking.",
                      "pl": "„Jest widoczny / pojawia się w polu widzenia”, nie czynność patrzenia."
                    }
                  }
                ]
              },
              {
                "jp": "黄色い歯が剥{む}き出しにされ、その間から絶え間ない罵倒{ばとう}が降り注いでくる。",
                "en": "Yellow teeth are bared, and from between them a ceaseless stream of abuse pours down.",
                "pl": "Żółte zęby są obnażone, a spomiędzy nich spada nieustanny potok wyzwisk.",
                "words": [
                  {
                    "word": "黄色い",
                    "reading": "kiiroi",
                    "meaning": {
                      "en": "yellow",
                      "pl": "żółty"
                    }
                  },
                  {
                    "word": "歯",
                    "reading": "ha",
                    "meaning": {
                      "en": "tooth, teeth",
                      "pl": "ząb, zęby"
                    }
                  },
                  {
                    "word": "剥き出し",
                    "reading": "mukidashi",
                    "meaning": {
                      "en": "bared, exposed",
                      "pl": "obnażony, odsłonięty"
                    }
                  },
                  {
                    "word": "絶え間ない",
                    "reading": "taema nai",
                    "meaning": {
                      "en": "ceaseless",
                      "pl": "nieustanny"
                    }
                  },
                  {
                    "word": "罵倒",
                    "reading": "batō",
                    "meaning": {
                      "en": "abuse, tirade",
                      "pl": "wyzwiska, tyrada"
                    }
                  },
                  {
                    "word": "降り注ぐ",
                    "reading": "furisosogu",
                    "meaning": {
                      "en": "to pour down",
                      "pl": "spadać strumieniem"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "剥き出しにされ",
                    "explanation": {
                      "en": "剥き出しにする passive: 'are bared'.",
                      "pl": "Strona bierna od 剥き出しにする: „są obnażone”."
                    }
                  },
                  {
                    "pattern": "その間から",
                    "explanation": {
                      "en": "'From between them (the teeth)'.",
                      "pl": "„Spomiędzy nich (zębów)”."
                    }
                  },
                  {
                    "pattern": "降り注いでくる",
                    "explanation": {
                      "en": "～てくる: the abuse comes at him.",
                      "pl": "～てくる: wyzwiska spadają na niego."
                    }
                  }
                ]
              },
              {
                "jp": "物心{ものごころ}ついた頃から、数えきれないほど繰り返されてきた光景だ。",
                "en": "It is a scene that has been repeated countless times since he was old enough to understand things.",
                "pl": "To scena, która powtarzała się niezliczoną ilość razy, odkąd zaczął cokolwiek rozumieć.",
                "words": [
                  {
                    "word": "物心がつく",
                    "reading": "monogokoro ga tsuku",
                    "meaning": {
                      "en": "to reach the age of understanding",
                      "pl": "dojść do wieku rozumu"
                    }
                  },
                  {
                    "word": "頃",
                    "reading": "koro",
                    "meaning": {
                      "en": "time, around the time",
                      "pl": "czas, okres"
                    }
                  },
                  {
                    "word": "数える",
                    "reading": "kazoeru",
                    "meaning": {
                      "en": "to count",
                      "pl": "liczyć"
                    }
                  },
                  {
                    "word": "繰り返す",
                    "reading": "kurikaesu",
                    "meaning": {
                      "en": "to repeat",
                      "pl": "powtarzać"
                    }
                  },
                  {
                    "word": "光景",
                    "reading": "kōkei",
                    "meaning": {
                      "en": "scene, sight",
                      "pl": "scena, widok"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～頃から",
                    "explanation": {
                      "en": "'Since the time when ~'.",
                      "pl": "„Od czasu, gdy ~”."
                    }
                  },
                  {
                    "pattern": "数えきれないほど",
                    "explanation": {
                      "en": "Stem + きれない = 'cannot ~ completely'. 'So many that one cannot count them'.",
                      "pl": "Temat + きれない = „nie da się ~ do końca”. „Tyle, że nie sposób zliczyć”."
                    }
                  },
                  {
                    "pattern": "繰り返されてきた",
                    "explanation": {
                      "en": "Passive + ～てきた: 'has been repeated up until now'.",
                      "pl": "Strona bierna + ～てきた: „powtarzało się aż do teraz”."
                    }
                  }
                ]
              }
            ]
          },
          {
            "head": "9　第一話　鎌鼬",
            "side": "left",
            "sentences": [
              {
                "jp": "何も思わない。",
                "en": "He thinks of nothing.",
                "pl": "Nie myśli o niczym.",
                "para": true,
                "words": [
                  {
                    "word": "何も",
                    "reading": "nani mo",
                    "meaning": {
                      "en": "nothing (with a negative)",
                      "pl": "nic (z przeczeniem)"
                    }
                  },
                  {
                    "word": "思う",
                    "reading": "omou",
                    "meaning": {
                      "en": "to think, to feel",
                      "pl": "myśleć, czuć"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "何も＋negative",
                    "explanation": {
                      "en": "'Nothing at all'.",
                      "pl": "„Zupełnie nic”."
                    }
                  },
                  {
                    "pattern": "思わない",
                    "explanation": {
                      "en": "Plain negative of 思う.",
                      "pl": "Zwykłe przeczenie od 思う."
                    }
                  }
                ],
                "style": "cont"
              },
              {
                "jp": "ただ何も考えられなくなって心が虚{うつ}ろなものへと変わっていく。",
                "en": "He simply becomes unable to think of anything, and his heart gradually turns into something hollow.",
                "pl": "Po prostu przestaje być w stanie o czymkolwiek myśleć, a jego serce stopniowo staje się puste.",
                "words": [
                  {
                    "word": "ただ",
                    "reading": "tada",
                    "meaning": {
                      "en": "only, simply",
                      "pl": "po prostu, tylko"
                    }
                  },
                  {
                    "word": "考える",
                    "reading": "kangaeru",
                    "meaning": {
                      "en": "to think, to consider",
                      "pl": "myśleć, rozważać"
                    }
                  },
                  {
                    "word": "虚ろ",
                    "reading": "utsuro",
                    "meaning": {
                      "en": "hollow, empty",
                      "pl": "pusty, wydrążony"
                    }
                  },
                  {
                    "word": "変わる",
                    "reading": "kawaru",
                    "meaning": {
                      "en": "to change",
                      "pl": "zmieniać się"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "考えられなくなる",
                    "explanation": {
                      "en": "Potential negative + なる: 'becomes unable to think'.",
                      "pl": "Potencjalne przeczenie + なる: „przestaje móc myśleć”."
                    }
                  },
                  {
                    "pattern": "AへとB",
                    "explanation": {
                      "en": "へと marks the direction of change: 'turns into ~'.",
                      "pl": "へと oznacza kierunek zmiany: „zmienia się w ~”."
                    }
                  },
                  {
                    "pattern": "～ていく",
                    "explanation": {
                      "en": "'Goes on becoming ~', a gradual change.",
                      "pl": "„Staje się coraz bardziej ~”, stopniowa zmiana."
                    }
                  }
                ]
              },
              {
                "jp": "痛みも恐怖も全て消えさり、諦{あきら}めの中で許しを請う。",
                "en": "Pain and fear both vanish completely, and in resignation he begs for forgiveness.",
                "pl": "Ból i strach znikają bez śladu, a on w rezygnacji prosi o wybaczenie.",
                "words": [
                  {
                    "word": "痛み",
                    "reading": "itami",
                    "meaning": {
                      "en": "pain",
                      "pl": "ból"
                    }
                  },
                  {
                    "word": "恐怖",
                    "reading": "kyōfu",
                    "meaning": {
                      "en": "fear, terror",
                      "pl": "strach, przerażenie"
                    }
                  },
                  {
                    "word": "全て",
                    "reading": "subete",
                    "meaning": {
                      "en": "all",
                      "pl": "wszystko"
                    }
                  },
                  {
                    "word": "消えさる",
                    "reading": "kiesaru",
                    "meaning": {
                      "en": "to vanish completely",
                      "pl": "zniknąć bez śladu"
                    }
                  },
                  {
                    "word": "諦め",
                    "reading": "akirame",
                    "meaning": {
                      "en": "resignation",
                      "pl": "rezygnacja"
                    }
                  },
                  {
                    "word": "許し",
                    "reading": "yurushi",
                    "meaning": {
                      "en": "forgiveness",
                      "pl": "wybaczenie"
                    }
                  },
                  {
                    "word": "請う",
                    "reading": "kou",
                    "meaning": {
                      "en": "to beg, to ask for",
                      "pl": "prosić, błagać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "AもBも",
                    "explanation": {
                      "en": "'Both A and B'.",
                      "pl": "„I A, i B”."
                    }
                  },
                  {
                    "pattern": "Stem + さる",
                    "explanation": {
                      "en": "さる adds 'completely, away': 消えさる.",
                      "pl": "さる dodaje „całkowicie, bez śladu”: 消えさる."
                    }
                  },
                  {
                    "pattern": "請う",
                    "explanation": {
                      "en": "A literary word for 'to beg, to request'.",
                      "pl": "Literackie słowo oznaczające „błagać, prosić”."
                    }
                  }
                ]
              },
              {
                "jp": "そうすれば父の気もすんで、後は逆らわないように気を付けていればよかった。",
                "en": "If he did that, his father's temper would also settle, and after that all he had to do was take care not to defy him.",
                "pl": "Wtedy gniew ojca też mijał, a potem wystarczyło uważać, by się nie sprzeciwiać.",
                "words": [
                  {
                    "word": "そうすれば",
                    "reading": "sō sureba",
                    "meaning": {
                      "en": "if (one) does so",
                      "pl": "jeśli tak zrobić"
                    }
                  },
                  {
                    "word": "気がすむ",
                    "reading": "ki ga sumu",
                    "meaning": {
                      "en": "to be satisfied, to feel settled",
                      "pl": "być usatysfakcjonowanym"
                    }
                  },
                  {
                    "word": "後",
                    "reading": "ato",
                    "meaning": {
                      "en": "afterwards",
                      "pl": "potem"
                    }
                  },
                  {
                    "word": "逆らう",
                    "reading": "sakarau",
                    "meaning": {
                      "en": "to defy, to go against",
                      "pl": "sprzeciwiać się"
                    }
                  },
                  {
                    "word": "気を付ける",
                    "reading": "ki o tsukeru",
                    "meaning": {
                      "en": "to be careful",
                      "pl": "uważać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～ば",
                    "explanation": {
                      "en": "Conditional: すれば = 'if (one) does'.",
                      "pl": "Tryb warunkowy: すれば = „jeśli się zrobi”."
                    }
                  },
                  {
                    "pattern": "気もすんで",
                    "explanation": {
                      "en": "気がすむ: 'one's mind is at ease'. も = 'also'.",
                      "pl": "気がすむ: „ma się spokój ducha”. も = „też”."
                    }
                  },
                  {
                    "pattern": "～ないように",
                    "explanation": {
                      "en": "'So as not to ~'.",
                      "pl": "„Tak, by nie ~”."
                    }
                  },
                  {
                    "pattern": "～ていればよかった",
                    "explanation": {
                      "en": "'It was enough to keep doing ~'. A past habit, not a regret.",
                      "pl": "„Wystarczyło cały czas ~”. Dawny nawyk, nie żal."
                    }
                  }
                ]
              },
              {
                "jp": "なのにこの日は違う。",
                "en": "And yet today is different.",
                "pl": "A jednak dziś jest inaczej.",
                "words": [
                  {
                    "word": "なのに",
                    "reading": "nanoni",
                    "meaning": {
                      "en": "and yet, even so",
                      "pl": "a jednak, mimo to"
                    }
                  },
                  {
                    "word": "違う",
                    "reading": "chigau",
                    "meaning": {
                      "en": "to be different",
                      "pl": "różnić się"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "なのに",
                    "explanation": {
                      "en": "'Even though that is so ~'. Starts a sentence that contradicts what came before.",
                      "pl": "„Mimo że tak jest ~”. Zaczyna zdanie przeczące poprzedniemu."
                    }
                  },
                  {
                    "pattern": "この日は",
                    "explanation": {
                      "en": "は contrasts this day with all the others.",
                      "pl": "は przeciwstawia ten dzień wszystkim pozostałym."
                    }
                  }
                ]
              },
              {
                "jp": "打擲{ちょうちゃく}は強く、叱責{しっせき}は終わらない。",
                "en": "The blows are hard, and the scolding does not end.",
                "pl": "Ciosy są mocne, a nagana się nie kończy.",
                "words": [
                  {
                    "word": "打擲",
                    "reading": "chōchaku",
                    "meaning": {
                      "en": "beating, blows",
                      "pl": "bicie, razy"
                    }
                  },
                  {
                    "word": "叱責",
                    "reading": "shisseki",
                    "meaning": {
                      "en": "scolding, reprimand",
                      "pl": "nagana, bura"
                    }
                  },
                  {
                    "word": "強い",
                    "reading": "tsuyoi",
                    "meaning": {
                      "en": "strong, hard",
                      "pl": "mocny, silny"
                    }
                  },
                  {
                    "word": "終わる",
                    "reading": "owaru",
                    "meaning": {
                      "en": "to end",
                      "pl": "kończyć się"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "強く、",
                    "explanation": {
                      "en": "The い-adjective stem form (-く) links the clause to the next.",
                      "pl": "Forma na -く przymiotnika na い łączy zdanie z następnym."
                    }
                  },
                  {
                    "pattern": "AはB、CはD",
                    "explanation": {
                      "en": "Two は clauses side by side set the two things against each other.",
                      "pl": "Dwa człony z は obok siebie zestawiają te dwie rzeczy."
                    }
                  }
                ]
              },
              {
                "jp": "虚ろな心の中に痛みが鳴り響き続ける。",
                "en": "Pain keeps echoing inside his hollow heart.",
                "pl": "W jego pustym sercu ból wciąż rozbrzmiewa.",
                "words": [
                  {
                    "word": "鳴り響く",
                    "reading": "nari-hibiku",
                    "meaning": {
                      "en": "to resound, to ring out",
                      "pl": "rozbrzmiewać"
                    }
                  },
                  {
                    "word": "続ける",
                    "reading": "tsuzukeru",
                    "meaning": {
                      "en": "to continue",
                      "pl": "kontynuować"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "Stem + 続ける",
                    "explanation": {
                      "en": "'Keep on ~ing': 鳴り響き続ける.",
                      "pl": "„Ciągle ~”: 鳴り響き続ける."
                    }
                  },
                  {
                    "pattern": "虚ろな心の中に",
                    "explanation": {
                      "en": "'Inside the hollow heart'. に marks the place.",
                      "pl": "„W pustym sercu”. に oznacza miejsce."
                    }
                  }
                ]
              },
              {
                "jp": "やがてそれは黒い奔流となって空っぽになったはずの魂魄{こんぱく}の中に渦巻き始め、一気に口から噴出していく。",
                "en": "Before long it becomes a black torrent, begins to swirl inside the soul that should have been emptied, and gushes out of his mouth all at once.",
                "pl": "Wkrótce staje się czarnym potokiem, zaczyna wirować w duszy, która miała być pusta, i jednym tchem wytryska z jego ust.",
                "words": [
                  {
                    "word": "やがて",
                    "reading": "yagate",
                    "meaning": {
                      "en": "before long",
                      "pl": "wkrótce"
                    }
                  },
                  {
                    "word": "奔流",
                    "reading": "honryū",
                    "meaning": {
                      "en": "torrent, rushing stream",
                      "pl": "rwący potok"
                    }
                  },
                  {
                    "word": "空っぽ",
                    "reading": "karappo",
                    "meaning": {
                      "en": "empty",
                      "pl": "pusty"
                    }
                  },
                  {
                    "word": "魂魄",
                    "reading": "konpaku",
                    "meaning": {
                      "en": "soul, spirit",
                      "pl": "dusza, duch"
                    }
                  },
                  {
                    "word": "渦巻く",
                    "reading": "uzumaku",
                    "meaning": {
                      "en": "to swirl",
                      "pl": "wirować"
                    }
                  },
                  {
                    "word": "一気に",
                    "reading": "ikki ni",
                    "meaning": {
                      "en": "all at once",
                      "pl": "jednym tchem"
                    }
                  },
                  {
                    "word": "噴出する",
                    "reading": "funshutsu suru",
                    "meaning": {
                      "en": "to gush out",
                      "pl": "wytryskiwać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～となって",
                    "explanation": {
                      "en": "'Becoming ~, and ...'.",
                      "pl": "„Stając się ~, i ...”."
                    }
                  },
                  {
                    "pattern": "～たはずの",
                    "explanation": {
                      "en": "'The one that should have ~': 空っぽになったはずの魂魄 = 'the soul that should have been emptied'.",
                      "pl": "„To, co powinno było ~”: 空っぽになったはずの魂魄 = „dusza, która powinna była zostać opróżniona”."
                    }
                  },
                  {
                    "pattern": "Stem + 始める",
                    "explanation": {
                      "en": "'Begin to ~'.",
                      "pl": "„Zaczynać ~”."
                    }
                  },
                  {
                    "pattern": "噴出していく",
                    "explanation": {
                      "en": "～ていく: 'goes on to gush'.",
                      "pl": "～ていく: „wytryskuje dalej”."
                    }
                  }
                ]
              },
              {
                "jp": "「これは……」",
                "en": "“This is…”",
                "pl": "„To jest…”",
                "para": true,
                "words": [
                  {
                    "word": "これ",
                    "reading": "kore",
                    "meaning": {
                      "en": "this",
                      "pl": "to"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "これは……",
                    "explanation": {
                      "en": "The speaker is lost for words, so the sentence is left open.",
                      "pl": "Mówiącemu brakuje słów, więc zdanie zostaje otwarte."
                    }
                  }
                ]
              },
              {
                "jp": "目の前で父が何かを振り上げている。",
                "en": "Right before his eyes, his father is holding something raised high.",
                "pl": "Tuż przed jego oczami ojciec trzyma coś uniesionego wysoko.",
                "words": [
                  {
                    "word": "目の前",
                    "reading": "me no mae",
                    "meaning": {
                      "en": "in front of one's eyes",
                      "pl": "przed oczami"
                    }
                  },
                  {
                    "word": "何か",
                    "reading": "nanika",
                    "meaning": {
                      "en": "something",
                      "pl": "coś"
                    }
                  },
                  {
                    "word": "振り上げる",
                    "reading": "furiageru",
                    "meaning": {
                      "en": "to raise (swinging)",
                      "pl": "unieść (zamachnąć się)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "目の前で",
                    "explanation": {
                      "en": "'Right before one's eyes'.",
                      "pl": "„Tuż przed oczami”."
                    }
                  },
                  {
                    "pattern": "振り上げている",
                    "explanation": {
                      "en": "～ている shows a state: the arm is held up.",
                      "pl": "～ている pokazuje stan: ręka jest uniesiona."
                    }
                  }
                ]
              },
              {
                "jp": "熱湯を汲{く}んでいた柄杓{ひしゃく}ではなく、細長い銀の棒だった。",
                "en": "It was not the ladle that had scooped the boiling water, but a long, thin silver rod.",
                "pl": "To nie była chochla, którą nabierał wrzątek, lecz długi, cienki srebrny pręt.",
                "words": [
                  {
                    "word": "細長い",
                    "reading": "hosonagai",
                    "meaning": {
                      "en": "long and thin",
                      "pl": "długi i cienki"
                    }
                  },
                  {
                    "word": "銀",
                    "reading": "gin",
                    "meaning": {
                      "en": "silver",
                      "pl": "srebro"
                    }
                  },
                  {
                    "word": "棒",
                    "reading": "bō",
                    "meaning": {
                      "en": "rod, stick",
                      "pl": "pręt, kij"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "AではなくB",
                    "explanation": {
                      "en": "'Not A but B'.",
                      "pl": "„Nie A, lecz B”."
                    }
                  },
                  {
                    "pattern": "汲んでいた柄杓",
                    "explanation": {
                      "en": "汲んでいた is 'had been scooping'. It describes the ladle.",
                      "pl": "汲んでいた to „nabierał (wcześniej)”. Opisuje chochlę."
                    }
                  }
                ]
              },
              {
                "jp": "先端は研ぎ上げたように尖{とが}り、そんなものを刺されたら急所でなくても死んでしまう。",
                "en": "Its tip was pointed as if freshly sharpened, and if he were stabbed with such a thing he would die even if it missed a vital spot.",
                "pl": "Jego czubek był zaostrzony jak świeżo naostrzony i gdyby go tym dźgnięto, umarłby, nawet jeśli nie trafiłoby w czuły punkt.",
                "words": [
                  {
                    "word": "先端",
                    "reading": "sentan",
                    "meaning": {
                      "en": "tip, point",
                      "pl": "koniec, czubek"
                    }
                  },
                  {
                    "word": "研ぐ",
                    "reading": "togu",
                    "meaning": {
                      "en": "to sharpen",
                      "pl": "ostrzyć"
                    }
                  },
                  {
                    "word": "尖る",
                    "reading": "togaru",
                    "meaning": {
                      "en": "to be pointed",
                      "pl": "być spiczastym"
                    }
                  },
                  {
                    "word": "刺す",
                    "reading": "sasu",
                    "meaning": {
                      "en": "to stab",
                      "pl": "dźgać"
                    }
                  },
                  {
                    "word": "急所",
                    "reading": "kyūsho",
                    "meaning": {
                      "en": "vital spot",
                      "pl": "czuły punkt, miejsce śmiertelne"
                    }
                  },
                  {
                    "word": "死ぬ",
                    "reading": "shinu",
                    "meaning": {
                      "en": "to die",
                      "pl": "umrzeć"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～ように",
                    "explanation": {
                      "en": "'As if ~': 研ぎ上げたように = 'as if freshly sharpened'.",
                      "pl": "„Jak gdyby ~”: 研ぎ上げたように = „jakby świeżo naostrzony”."
                    }
                  },
                  {
                    "pattern": "刺されたら",
                    "explanation": {
                      "en": "Passive + たら: 'if (he) were stabbed'.",
                      "pl": "Strona bierna + たら: „gdyby go dźgnięto”."
                    }
                  },
                  {
                    "pattern": "～でなくても",
                    "explanation": {
                      "en": "'Even if it is not ~'.",
                      "pl": "„Nawet jeśli to nie ~”."
                    }
                  },
                  {
                    "pattern": "死んでしまう",
                    "explanation": {
                      "en": "～てしまう: 'ends up dying'. Completion or regret.",
                      "pl": "～てしまう: „skończy martwy”. Dokonanie lub żal."
                    }
                  }
                ]
              },
              {
                "jp": "徳右衛門{とくえもん}の怒りと恐怖の奔流がそれを飲み込んだ。",
                "en": "The torrent of Tokuemon's anger and fear swallowed it.",
                "pl": "Potok gniewu i strachu Tokuemona pochłonął to.",
                "words": [
                  {
                    "word": "怒り",
                    "reading": "ikari",
                    "meaning": {
                      "en": "anger",
                      "pl": "gniew"
                    }
                  },
                  {
                    "word": "恐怖",
                    "reading": "kyōfu",
                    "meaning": {
                      "en": "fear",
                      "pl": "strach"
                    }
                  },
                  {
                    "word": "飲み込む",
                    "reading": "nomikomu",
                    "meaning": {
                      "en": "to swallow up",
                      "pl": "pochłonąć"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "AとBのC",
                    "explanation": {
                      "en": "怒りと恐怖の奔流 = 'a torrent of anger and fear'.",
                      "pl": "怒りと恐怖の奔流 = „potok gniewu i strachu”."
                    }
                  },
                  {
                    "pattern": "それを飲み込んだ",
                    "explanation": {
                      "en": "それ points back to the thought of the rod and of dying.",
                      "pl": "それ wskazuje na myśl o pręcie i śmierci."
                    }
                  }
                ]
              },
              {
                "jp": "次に彼が気付いた時には父の姿はなくなり、ただどす黒い血だまりが小屋の中に広がっているばかりであった。",
                "en": "By the time he next came to himself, his father's figure was gone, and only a pool of dark blood was spreading across the hut.",
                "pl": "Gdy następnym razem oprzytomniał, po ojcu nie było śladu, a po chacie rozlewała się tylko kałuża ciemnej krwi.",
                "words": [
                  {
                    "word": "次に",
                    "reading": "tsugi ni",
                    "meaning": {
                      "en": "next",
                      "pl": "następnie"
                    }
                  },
                  {
                    "word": "気付く",
                    "reading": "kizuku",
                    "meaning": {
                      "en": "to notice, to come to",
                      "pl": "zauważyć, oprzytomnieć"
                    }
                  },
                  {
                    "word": "姿",
                    "reading": "sugata",
                    "meaning": {
                      "en": "figure, form",
                      "pl": "postać, sylwetka"
                    }
                  },
                  {
                    "word": "どす黒い",
                    "reading": "dosuguroi",
                    "meaning": {
                      "en": "dark and murky",
                      "pl": "ciemny i mętny"
                    }
                  },
                  {
                    "word": "血だまり",
                    "reading": "chidamari",
                    "meaning": {
                      "en": "pool of blood",
                      "pl": "kałuża krwi"
                    }
                  },
                  {
                    "word": "広がる",
                    "reading": "hirogaru",
                    "meaning": {
                      "en": "to spread",
                      "pl": "rozlewać się"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～た時には",
                    "explanation": {
                      "en": "'By the time ~'. には stresses the result at that point.",
                      "pl": "„Gdy ~”. には podkreśla wynik w tym momencie."
                    }
                  },
                  {
                    "pattern": "なくなり",
                    "explanation": {
                      "en": "なくなる: 'disappear'. The stem form links to the next clause.",
                      "pl": "なくなる: „zniknąć”. Forma łącząca z następnym zdaniem."
                    }
                  },
                  {
                    "pattern": "～ばかりであった",
                    "explanation": {
                      "en": "'Nothing but ~'. であった is the formal written past of です.",
                      "pl": "„Nic tylko ~”. であった to pisemna forma przeszła od です."
                    }
                  }
                ]
              },
              {
                "jp": "一",
                "en": "1",
                "pl": "1",
                "para": true,
                "words": [
                  {
                    "word": "一",
                    "reading": "ichi",
                    "meaning": {
                      "en": "one (section number)",
                      "pl": "jeden (numer sekcji)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "Section number",
                    "explanation": {
                      "en": "Numbers like this divide a chapter into sections.",
                      "pl": "Takie numery dzielą rozdział na sekcje."
                    }
                  }
                ],
                "style": "mark"
              },
              {
                "jp": "鼓の音と共に烏帽子{えぼし}に長袴{ながばかま}姿の若者が歌い舞う。",
                "en": "To the sound of the drum, a young man in an eboshi hat and long hakama sings and dances.",
                "pl": "Przy dźwięku bębenka młody człowiek w czapce eboshi i długich hakama śpiewa i tańczy.",
                "words": [
                  {
                    "word": "共に",
                    "reading": "tomo ni",
                    "meaning": {
                      "en": "together with",
                      "pl": "razem z"
                    }
                  },
                  {
                    "word": "烏帽子",
                    "reading": "eboshi",
                    "meaning": {
                      "en": "a tall folded court hat",
                      "pl": "wysoka składana czapka dworska"
                    }
                  },
                  {
                    "word": "長袴",
                    "reading": "nagabakama",
                    "meaning": {
                      "en": "long trailing hakama",
                      "pl": "długie, wlokące się hakama"
                    }
                  },
                  {
                    "word": "姿",
                    "reading": "sugata",
                    "meaning": {
                      "en": "appearance, attire",
                      "pl": "wygląd, strój"
                    }
                  },
                  {
                    "word": "若者",
                    "reading": "wakamono",
                    "meaning": {
                      "en": "young man",
                      "pl": "młodzieniec"
                    }
                  },
                  {
                    "word": "歌い舞う",
                    "reading": "utai-mau",
                    "meaning": {
                      "en": "to sing and dance",
                      "pl": "śpiewać i tańczyć"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～と共に",
                    "explanation": {
                      "en": "'Together with ~, along with the sound of ~'.",
                      "pl": "„Razem z ~, wraz z dźwiękiem ~”."
                    }
                  },
                  {
                    "pattern": "AにB姿",
                    "explanation": {
                      "en": "'In the attire of A and B': 烏帽子に長袴姿.",
                      "pl": "„W stroju A i B”: 烏帽子に長袴姿."
                    }
                  },
                  {
                    "pattern": "歌い舞う",
                    "explanation": {
                      "en": "A compound of two verb stems: 'sing and dance'.",
                      "pl": "Złożenie dwóch tematów czasowników: „śpiewać i tańczyć”."
                    }
                  }
                ],
                "para": true
              },
              {
                "jp": "東照大権現{とうしょうだいごんげん}天下ご一統のみぎり、",
                "en": "In the days when Tōshō Daigongen unified the realm,",
                "pl": "W czasach, gdy Tōshō Daigongen zjednoczył kraj,",
                "words": [
                  {
                    "word": "東照大権現",
                    "reading": "Tōshō Daigongen",
                    "meaning": {
                      "en": "the deified Tokugawa Ieyasu",
                      "pl": "ubóstwiony Tokugawa Ieyasu"
                    }
                  },
                  {
                    "word": "天下",
                    "reading": "tenka",
                    "meaning": {
                      "en": "the realm, the whole country",
                      "pl": "cały kraj, państwo"
                    }
                  },
                  {
                    "word": "ご一統",
                    "reading": "go-ittō",
                    "meaning": {
                      "en": "unification",
                      "pl": "zjednoczenie"
                    }
                  },
                  {
                    "word": "みぎり",
                    "reading": "migiri",
                    "meaning": {
                      "en": "time, occasion (literary)",
                      "pl": "czas, okazja (literacko)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～のみぎり",
                    "explanation": {
                      "en": "'At the time of ~' (formal, literary).",
                      "pl": "„W czasie ~” (uroczyście, literacko)."
                    }
                  }
                ],
                "note": {
                  "en": "The sentence breaks off at the end of the page and continues at the top of the next one.",
                  "pl": "Zdanie urywa się na końcu strony i ciągnie się od góry następnej."
                }
              }
            ]
          },
          {
            "head": "10",
            "side": "right",
            "sentences": [
              {
                "jp": "諸国検分、調略の功を以{もっ}て関東十七州、やがては天下往来御免の許しを得た。",
                "en": "for their services in surveying the provinces and in intrigue, they won permission to travel freely through the seventeen provinces of the Kantō and, in time, the whole land.",
                "pl": "za zasługi w badaniu prowincji i w intrygach uzyskali zezwolenie na swobodne podróżowanie po siedemnastu prowincjach Kantō, a z czasem po całym kraju.",
                "para": true,
                "words": [
                  {
                    "word": "諸国検分",
                    "reading": "shokoku kenbun",
                    "meaning": {
                      "en": "inspecting the provinces",
                      "pl": "inspekcja prowincji"
                    }
                  },
                  {
                    "word": "調略",
                    "reading": "chōryaku",
                    "meaning": {
                      "en": "scheming, intrigue",
                      "pl": "intryga, knowania"
                    }
                  },
                  {
                    "word": "功",
                    "reading": "kō",
                    "meaning": {
                      "en": "merit, service",
                      "pl": "zasługa"
                    }
                  },
                  {
                    "word": "関東十七州",
                    "reading": "Kantō jūshichi-shū",
                    "meaning": {
                      "en": "the seventeen provinces of Kantō",
                      "pl": "siedemnaście prowincji Kantō"
                    }
                  },
                  {
                    "word": "往来御免",
                    "reading": "ōrai gomen",
                    "meaning": {
                      "en": "permission to travel freely",
                      "pl": "zezwolenie na swobodne podróże"
                    }
                  },
                  {
                    "word": "許し",
                    "reading": "yurushi",
                    "meaning": {
                      "en": "permission",
                      "pl": "zezwolenie"
                    }
                  },
                  {
                    "word": "得る",
                    "reading": "eru",
                    "meaning": {
                      "en": "to obtain",
                      "pl": "uzyskać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～の功を以て",
                    "explanation": {
                      "en": "もって: 'by virtue of the merit of ~'.",
                      "pl": "もって: „na mocy zasług ~”."
                    }
                  },
                  {
                    "pattern": "やがては",
                    "explanation": {
                      "en": "'In time, eventually'.",
                      "pl": "„Z czasem, w końcu”."
                    }
                  },
                  {
                    "pattern": "許しを得た",
                    "explanation": {
                      "en": "'Obtained permission'.",
                      "pl": "„Uzyskali zezwolenie”."
                    }
                  }
                ],
                "note": {
                  "en": "This line finishes the sentence begun at the bottom of the previous page. The omitted subject is the Mikawa manzai performers.",
                  "pl": "Ten wiersz kończy zdanie zaczęte na dole poprzedniej strony. Pominięty podmiot to wykonawcy mikawa-manzai."
                },
                "style": "cont"
              },
              {
                "jp": "鼓一つを音曲の源とし、種々の道具と見立て、天下万物を寿{ことほ}いでみせる。",
                "en": "Taking a single drum as the source of their music and treating it as all kinds of tools, they celebrate all things under heaven.",
                "pl": "Biorąc jeden bębenek za źródło muzyki i traktując go jak rozmaite narzędzia, wysławiają wszystko, co istnieje pod niebem.",
                "words": [
                  {
                    "word": "音曲",
                    "reading": "ongyoku",
                    "meaning": {
                      "en": "music, songs",
                      "pl": "muzyka, pieśni"
                    }
                  },
                  {
                    "word": "源",
                    "reading": "minamoto",
                    "meaning": {
                      "en": "source, origin",
                      "pl": "źródło, początek"
                    }
                  },
                  {
                    "word": "種々",
                    "reading": "shuju",
                    "meaning": {
                      "en": "various",
                      "pl": "rozmaite"
                    }
                  },
                  {
                    "word": "道具",
                    "reading": "dōgu",
                    "meaning": {
                      "en": "tool",
                      "pl": "narzędzie"
                    }
                  },
                  {
                    "word": "見立てる",
                    "reading": "mitateru",
                    "meaning": {
                      "en": "to liken, to treat as",
                      "pl": "traktować jak, przyrównać do"
                    }
                  },
                  {
                    "word": "天下万物",
                    "reading": "tenka banbutsu",
                    "meaning": {
                      "en": "all things under heaven",
                      "pl": "wszystko pod niebem"
                    }
                  },
                  {
                    "word": "寿ぐ",
                    "reading": "kotohogu",
                    "meaning": {
                      "en": "to celebrate with blessings",
                      "pl": "wysławiać, życzyć pomyślności"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "AをBとし",
                    "explanation": {
                      "en": "'Taking A as B': 鼓一つを音曲の源とし.",
                      "pl": "„Biorąc A za B”: 鼓一つを音曲の源とし."
                    }
                  },
                  {
                    "pattern": "見立てる",
                    "explanation": {
                      "en": "To see one thing as another, a traditional device in Japanese art.",
                      "pl": "Widzieć jedną rzecz jako inną, tradycyjny zabieg w sztuce japońskiej."
                    }
                  },
                  {
                    "pattern": "～てみせる",
                    "explanation": {
                      "en": "'Do ~ as a show': 寿いでみせる.",
                      "pl": "„Zrobić ~ na pokaz”: 寿いでみせる."
                    }
                  }
                ]
              },
              {
                "jp": "それが三河万歳をもっぱらとする芸人だ。",
                "en": "Such are the performers who devote themselves to Mikawa manzai.",
                "pl": "Tacy właśnie są artyści, którzy poświęcają się mikawa-manzai.",
                "words": [
                  {
                    "word": "もっぱら",
                    "reading": "moppara",
                    "meaning": {
                      "en": "exclusively, mainly",
                      "pl": "wyłącznie, głównie"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "Xをもっぱらとする",
                    "explanation": {
                      "en": "'To make X one's main business'.",
                      "pl": "„Uczynić X swoim głównym zajęciem”."
                    }
                  },
                  {
                    "pattern": "それが～だ",
                    "explanation": {
                      "en": "'That is the one who ~'.",
                      "pl": "„To właśnie ten, kto ~”."
                    }
                  }
                ]
              },
              {
                "jp": "「……ご当家さまには代々栄えてあら楽し」",
                "en": "“…May your honored house prosper for generations. Oh, what joy!”",
                "pl": "„…Obyż wasz szanowny dom kwitł przez pokolenia. Och, cóż za radość!”",
                "para": true,
                "words": [
                  {
                    "word": "ご当家",
                    "reading": "go-tōke",
                    "meaning": {
                      "en": "your honored household",
                      "pl": "wasz szanowny dom"
                    }
                  },
                  {
                    "word": "代々",
                    "reading": "daidai",
                    "meaning": {
                      "en": "generation after generation",
                      "pl": "z pokolenia na pokolenie"
                    }
                  },
                  {
                    "word": "栄える",
                    "reading": "sakaeru",
                    "meaning": {
                      "en": "to prosper",
                      "pl": "kwitnąć"
                    }
                  },
                  {
                    "word": "あら",
                    "reading": "ara",
                    "meaning": {
                      "en": "oh! (exclamation)",
                      "pl": "och!"
                    }
                  },
                  {
                    "word": "楽し",
                    "reading": "tanoshi",
                    "meaning": {
                      "en": "joyful (old form of 楽しい)",
                      "pl": "radosny (dawna forma 楽しい)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "ご当家さまには",
                    "explanation": {
                      "en": "Honorific ご + さま, then には: 'to your honored house'.",
                      "pl": "Honoryfikatywne ご + さま, potem には: „dla waszego szanownego domu”."
                    }
                  },
                  {
                    "pattern": "楽し",
                    "explanation": {
                      "en": "The old final form of an い-adjective drops the い: 楽しい → 楽し.",
                      "pl": "Dawna forma końcowa przymiotnika na い traci い: 楽しい → 楽し."
                    }
                  }
                ],
                "note": {
                  "en": "A fixed blessing from the manzai performance.",
                  "pl": "Stałe życzenia z występu manzai."
                }
              },
              {
                "jp": "万歳楽{まんざいらく}を終えて徳右衛門が深々と頭を下げると、そこには祝儀袋が置かれている。",
                "en": "When Tokuemon finished the manzairaku and bowed deeply, a gift envelope had been placed there.",
                "pl": "Gdy Tokuemon skończył manzairaku i głęboko się ukłonił, leżała tam koperta z datkiem.",
                "words": [
                  {
                    "word": "万歳楽",
                    "reading": "manzairaku",
                    "meaning": {
                      "en": "the manzai piece (the blessing performance)",
                      "pl": "utwór manzai (występ błogosławiący)"
                    }
                  },
                  {
                    "word": "終える",
                    "reading": "oeru",
                    "meaning": {
                      "en": "to finish",
                      "pl": "kończyć"
                    }
                  },
                  {
                    "word": "深々と",
                    "reading": "fukabuka to",
                    "meaning": {
                      "en": "deeply",
                      "pl": "głęboko"
                    }
                  },
                  {
                    "word": "頭を下げる",
                    "reading": "atama o sageru",
                    "meaning": {
                      "en": "to bow",
                      "pl": "kłaniać się"
                    }
                  },
                  {
                    "word": "祝儀袋",
                    "reading": "shūgi-bukuro",
                    "meaning": {
                      "en": "envelope for a gift of money",
                      "pl": "koperta na datek"
                    }
                  },
                  {
                    "word": "置く",
                    "reading": "oku",
                    "meaning": {
                      "en": "to put, to place",
                      "pl": "kłaść"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～と (下げると)",
                    "explanation": {
                      "en": "'When he bowed, (he found) ...'. Shows something discovered after an action.",
                      "pl": "„Gdy się ukłonił, (zobaczył) ...”. Pokazuje coś zastanego po czynności."
                    }
                  },
                  {
                    "pattern": "置かれている",
                    "explanation": {
                      "en": "Passive + ている: 'has been placed (and is there)'.",
                      "pl": "Strona bierna + ている: „został położony (i leży)”."
                    }
                  },
                  {
                    "pattern": "深々と",
                    "explanation": {
                      "en": "Adverbs ending in と: 'deeply'.",
                      "pl": "Przysłówki z と: „głęboko”."
                    }
                  }
                ]
              },
              {
                "jp": "次の出番を待つ熊野{くまの}神人{じんにん}が苛立{いらだ}った表情で場所を空けろと睨{にら}みつけていた。",
                "en": "A Kumano jinnin waiting for his turn was glaring at him with an irritated look, telling him to clear the spot.",
                "pl": "Czekający na swoją kolej jinnin z Kumano piorunował go zirytowanym spojrzeniem, każąc zwolnić miejsce.",
                "words": [
                  {
                    "word": "出番",
                    "reading": "deban",
                    "meaning": {
                      "en": "one's turn to appear",
                      "pl": "czyjaś kolej na wystąpienie"
                    }
                  },
                  {
                    "word": "苛立つ",
                    "reading": "iradatsu",
                    "meaning": {
                      "en": "to be irritated",
                      "pl": "być zirytowanym"
                    }
                  },
                  {
                    "word": "表情",
                    "reading": "hyōjō",
                    "meaning": {
                      "en": "expression",
                      "pl": "wyraz twarzy"
                    }
                  },
                  {
                    "word": "場所",
                    "reading": "basho",
                    "meaning": {
                      "en": "place, spot",
                      "pl": "miejsce"
                    }
                  },
                  {
                    "word": "空ける",
                    "reading": "akeru",
                    "meaning": {
                      "en": "to vacate, to clear",
                      "pl": "zwolnić, opróżnić"
                    }
                  },
                  {
                    "word": "睨みつける",
                    "reading": "niramitsukeru",
                    "meaning": {
                      "en": "to glare at",
                      "pl": "piorunować wzrokiem"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "空けろと",
                    "explanation": {
                      "en": "空けろ is the command of 空ける; と quotes it: 'telling him: clear the place'.",
                      "pl": "空けろ to rozkaz od 空ける; と cytuje go: „każąc: zwolnij miejsce”."
                    }
                  },
                  {
                    "pattern": "苛立った表情で",
                    "explanation": {
                      "en": "'With an irritated look'. で shows the manner.",
                      "pl": "„Z zirytowaną miną”. で wskazuje sposób."
                    }
                  },
                  {
                    "pattern": "睨みつけていた",
                    "explanation": {
                      "en": "～ていた: 'was glaring'.",
                      "pl": "～ていた: „piorunował wzrokiem”."
                    }
                  }
                ]
              },
              {
                "jp": "普段、芸を売り込みに来る「推参」な芸人たちは忌まれる。",
                "en": "Normally, the “presumptuous” performers who come to push their acts are shunned.",
                "pl": "Zwykle „bezczelni” artyści, którzy przychodzą oferować swoje występy, są unikani.",
                "para": true,
                "words": [
                  {
                    "word": "普段",
                    "reading": "fudan",
                    "meaning": {
                      "en": "usually, normally",
                      "pl": "zazwyczaj"
                    }
                  },
                  {
                    "word": "売り込む",
                    "reading": "urikomu",
                    "meaning": {
                      "en": "to promote, to sell oneself",
                      "pl": "zachwalać, wypromować"
                    }
                  },
                  {
                    "word": "推参",
                    "reading": "suisan",
                    "meaning": {
                      "en": "uninvited visit, presumption",
                      "pl": "nieproszona wizyta, zuchwałość"
                    }
                  },
                  {
                    "word": "忌む",
                    "reading": "imu",
                    "meaning": {
                      "en": "to shun, to detest",
                      "pl": "unikać, gardzić"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "Stem + に来る",
                    "explanation": {
                      "en": "'Come in order to ~': 売り込みに来る.",
                      "pl": "„Przyjść, żeby ~”: 売り込みに来る."
                    }
                  },
                  {
                    "pattern": "「推参」な",
                    "explanation": {
                      "en": "推参 used as a na-adjective, in quotation marks: the so-called presumptuous ones.",
                      "pl": "推参 użyte jak przymiotnik na, w cudzysłowie: tzw. zuchwali."
                    }
                  },
                  {
                    "pattern": "忌まれる",
                    "explanation": {
                      "en": "Passive of 忌む: 'are shunned'.",
                      "pl": "Strona bierna od 忌む: „są unikani”."
                    }
                  }
                ]
              },
              {
                "jp": "どの村に居つくこともできず、旅路に宿を願っても母屋で休めることはない。",
                "en": "They cannot settle down in any village, and even when they ask for a night's lodging on the road, they never get to rest in the main house.",
                "pl": "Nie mogą osiąść w żadnej wsi, a nawet gdy w drodze proszą o nocleg, nigdy nie pozwalają im odpocząć w głównym domu.",
                "words": [
                  {
                    "word": "居つく",
                    "reading": "itsuku",
                    "meaning": {
                      "en": "to settle in, to stay on",
                      "pl": "osiąść, zadomowić się"
                    }
                  },
                  {
                    "word": "旅路",
                    "reading": "tabiji",
                    "meaning": {
                      "en": "road, journey",
                      "pl": "droga, podróż"
                    }
                  },
                  {
                    "word": "宿",
                    "reading": "yado",
                    "meaning": {
                      "en": "lodging",
                      "pl": "nocleg"
                    }
                  },
                  {
                    "word": "願う",
                    "reading": "negau",
                    "meaning": {
                      "en": "to request",
                      "pl": "prosić"
                    }
                  },
                  {
                    "word": "母屋",
                    "reading": "omoya",
                    "meaning": {
                      "en": "main house",
                      "pl": "główny dom"
                    }
                  },
                  {
                    "word": "休める",
                    "reading": "yasumeru",
                    "meaning": {
                      "en": "to be able to rest",
                      "pl": "móc odpocząć"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～こともできず",
                    "explanation": {
                      "en": "'Cannot even ~'. ず = ない, linking the clause.",
                      "pl": "„Nie mogą nawet ~”. ず = ない, łączy zdanie."
                    }
                  },
                  {
                    "pattern": "～ても",
                    "explanation": {
                      "en": "'Even if ~'.",
                      "pl": "„Nawet jeśli ~”."
                    }
                  },
                  {
                    "pattern": "～ことはない",
                    "explanation": {
                      "en": "'It never happens that ~'.",
                      "pl": "„Nigdy nie zdarza się, żeby ~”."
                    }
                  }
                ]
              },
              {
                "jp": "だが、新年だけは別だ。",
                "en": "But the New Year alone is different.",
                "pl": "Ale sam Nowy Rok jest wyjątkiem.",
                "words": [
                  {
                    "word": "だが",
                    "reading": "daga",
                    "meaning": {
                      "en": "but",
                      "pl": "ale"
                    }
                  },
                  {
                    "word": "別",
                    "reading": "betsu",
                    "meaning": {
                      "en": "different, separate",
                      "pl": "inny, osobny"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "だけは",
                    "explanation": {
                      "en": "'Only this (is the exception)'.",
                      "pl": "„Tylko to (jest wyjątkiem)”."
                    }
                  },
                  {
                    "pattern": "別だ",
                    "explanation": {
                      "en": "'Is another matter'.",
                      "pl": "„To inna sprawa”."
                    }
                  }
                ]
              },
              {
                "jp": "富ある者は競って門付けを招き入れ、新しい年の禍{わざわい}を祓{はら}い、福を招こうとする。",
                "en": "The wealthy vie with one another to invite the kadozuke performers in, trying to drive off the misfortunes of the new year and call in good fortune.",
                "pl": "Zamożni rywalizują o zapraszanie wędrownych artystów do środka, próbując odpędzić nieszczęścia nowego roku i sprowadzić szczęście.",
                "words": [
                  {
                    "word": "富",
                    "reading": "tomi",
                    "meaning": {
                      "en": "wealth",
                      "pl": "bogactwo"
                    }
                  },
                  {
                    "word": "競う",
                    "reading": "kisou",
                    "meaning": {
                      "en": "to compete, to vie",
                      "pl": "rywalizować"
                    }
                  },
                  {
                    "word": "招き入れる",
                    "reading": "maneki-ireru",
                    "meaning": {
                      "en": "to invite in",
                      "pl": "zaprosić do środka"
                    }
                  },
                  {
                    "word": "禍",
                    "reading": "wazawai",
                    "meaning": {
                      "en": "misfortune",
                      "pl": "nieszczęście"
                    }
                  },
                  {
                    "word": "祓う",
                    "reading": "harau",
                    "meaning": {
                      "en": "to ward off",
                      "pl": "odpędzać"
                    }
                  },
                  {
                    "word": "福",
                    "reading": "fuku",
                    "meaning": {
                      "en": "good fortune",
                      "pl": "szczęście"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "富ある者",
                    "explanation": {
                      "en": "= 富のある者. In literary style の is dropped: 'people who have wealth'.",
                      "pl": "= 富のある者. W stylu literackim の się pomija: „ludzie, którzy mają bogactwo”."
                    }
                  },
                  {
                    "pattern": "競って",
                    "explanation": {
                      "en": "て-form as an adverb: 'competitively, vying'.",
                      "pl": "Forma て jako przysłówek: „rywalizując”."
                    }
                  },
                  {
                    "pattern": "～ようとする",
                    "explanation": {
                      "en": "Volitional + とする: 'try to ~'.",
                      "pl": "Forma wolicjonalna + とする: „próbować ~”."
                    }
                  }
                ]
              },
              {
                "jp": "「芸のご披露が終わった方はこちらへ」",
                "en": "“Those who have finished their performance, please come this way.”",
                "pl": "„Osoby, które zakończyły występ, proszone są tędy.”",
                "para": true,
                "words": [
                  {
                    "word": "披露",
                    "reading": "hirō",
                    "meaning": {
                      "en": "presentation, performance",
                      "pl": "prezentacja, występ"
                    }
                  },
                  {
                    "word": "方",
                    "reading": "kata",
                    "meaning": {
                      "en": "person (polite)",
                      "pl": "osoba (grzecznie)"
                    }
                  },
                  {
                    "word": "こちら",
                    "reading": "kochira",
                    "meaning": {
                      "en": "this way, here (polite)",
                      "pl": "tędy, tutaj (grzecznie)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "ご披露",
                    "explanation": {
                      "en": "ご + noun is honorific here.",
                      "pl": "ご + rzeczownik jest tu honoryfikatywne."
                    }
                  },
                  {
                    "pattern": "終わった方",
                    "explanation": {
                      "en": "A past clause before 方: 'a person who has finished'.",
                      "pl": "Zdanie w czasie przeszłym przed 方: „osoba, która skończyła”."
                    }
                  },
                  {
                    "pattern": "こちらへ",
                    "explanation": {
                      "en": "'(Please go) this way'. The verb is left out.",
                      "pl": "„(Proszę) tędy”. Czasownik pominięto."
                    }
                  }
                ]
              },
              {
                "jp": "庄屋の番頭が丁重に出迎えてくれる。",
                "en": "The village headman's chief clerk welcomes them courteously.",
                "pl": "Zarządca wójta wita ich uprzejmie.",
                "words": [
                  {
                    "word": "庄屋",
                    "reading": "shōya",
                    "meaning": {
                      "en": "village headman",
                      "pl": "wójt wsi, sołtys"
                    }
                  },
                  {
                    "word": "番頭",
                    "reading": "bantō",
                    "meaning": {
                      "en": "head clerk, manager",
                      "pl": "zarządca, główny pomocnik"
                    }
                  },
                  {
                    "word": "丁重",
                    "reading": "teichō",
                    "meaning": {
                      "en": "courteous, polite",
                      "pl": "uprzejmy, szacunkowy"
                    }
                  },
                  {
                    "word": "出迎える",
                    "reading": "demukaeru",
                    "meaning": {
                      "en": "to greet, to welcome",
                      "pl": "witać, wychodzić naprzeciw"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "丁重に",
                    "explanation": {
                      "en": "に makes an adverb: 'courteously'.",
                      "pl": "に tworzy przysłówek: „uprzejmie”."
                    }
                  },
                  {
                    "pattern": "～てくれる",
                    "explanation": {
                      "en": "'Does ~ for us (as a favor)'.",
                      "pl": "„Robi ~ dla nas (jako przysługę)”."
                    }
                  }
                ]
              },
              {
                "jp": "これは望外のもてなしである。",
                "en": "This is hospitality beyond all hope.",
                "pl": "To gościnność ponad wszelkie oczekiwania.",
                "words": [
                  {
                    "word": "望外",
                    "reading": "bōgai",
                    "meaning": {
                      "en": "beyond one's hopes",
                      "pl": "ponad oczekiwania"
                    }
                  },
                  {
                    "word": "もてなし",
                    "reading": "motenashi",
                    "meaning": {
                      "en": "hospitality, treatment of guests",
                      "pl": "gościnność"
                    }
                  },
                  {
                    "word": "である",
                    "reading": "de aru",
                    "meaning": {
                      "en": "is (formal, written)",
                      "pl": "jest (uroczyście, pisemnie)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "望外のもてなし",
                    "explanation": {
                      "en": "'Hospitality beyond expectation'.",
                      "pl": "„Gościnność ponad oczekiwania”."
                    }
                  },
                  {
                    "pattern": "である",
                    "explanation": {
                      "en": "The written, formal version of だ / です.",
                      "pl": "Pisemna, uroczysta wersja だ / です."
                    }
                  }
                ]
              },
              {
                "jp": "芸人を母屋へ上げて酒飯をふるまう。",
                "en": "To let performers into the main house and treat them to sake and food…",
                "pl": "Wpuścić artystów do głównego domu i poczęstować ich sake i jedzeniem…",
                "words": [
                  {
                    "word": "上げる",
                    "reading": "ageru",
                    "meaning": {
                      "en": "to let (someone) up, to invite in",
                      "pl": "wpuścić, zaprosić do środka"
                    }
                  },
                  {
                    "word": "酒飯",
                    "reading": "shuhan",
                    "meaning": {
                      "en": "sake and food",
                      "pl": "sake i jedzenie"
                    }
                  },
                  {
                    "word": "ふるまう",
                    "reading": "furumau",
                    "meaning": {
                      "en": "to treat (to food and drink)",
                      "pl": "częstować"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "AをBへ上げる",
                    "explanation": {
                      "en": "'Let A up into B'.",
                      "pl": "„Wpuścić A do B”."
                    }
                  },
                  {
                    "pattern": "Plain form as a subject",
                    "explanation": {
                      "en": "The sentence ends in the plain form and is explained by the next one.",
                      "pl": "Zdanie kończy się formą prostą i jest objaśnione następnym."
                    }
                  }
                ]
              },
              {
                "jp": "それは家に特別な慶弔があったことを意味する。",
                "en": "…means that the household has had some special occasion, joyful or sorrowful.",
                "pl": "…oznacza, że w domu zdarzyła się jakaś szczególna uroczystość, radosna lub żałobna.",
                "words": [
                  {
                    "word": "特別",
                    "reading": "tokubetsu",
                    "meaning": {
                      "en": "special",
                      "pl": "szczególny"
                    }
                  },
                  {
                    "word": "慶弔",
                    "reading": "keichō",
                    "meaning": {
                      "en": "celebrations and funerals",
                      "pl": "uroczystości i pogrzeby"
                    }
                  },
                  {
                    "word": "意味する",
                    "reading": "imi suru",
                    "meaning": {
                      "en": "to mean",
                      "pl": "oznaczać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "～があったことを意味する",
                    "explanation": {
                      "en": "'It means that ~ happened'.",
                      "pl": "„Oznacza, że zdarzyło się ~”."
                    }
                  },
                  {
                    "pattern": "慶弔",
                    "explanation": {
                      "en": "慶 (happy events) + 弔 (mourning): both joy and sorrow.",
                      "pl": "慶 (radosne wydarzenia) + 弔 (żałoba): i radość, i smutek."
                    }
                  }
                ]
              },
              {
                "jp": "村に縛り付けられた人々にとって、旅を続ける芸人は禍を運び去り、また福を運び込んでくれる存在でもある。",
                "en": "For people tied down to their villages, travelling performers are also beings who carry misfortune away and bring good fortune in.",
                "pl": "Dla ludzi uwiązanych do swoich wsi wędrowni artyści są też istotami, które odnoszą nieszczęście i przynoszą szczęście.",
                "words": [
                  {
                    "word": "縛り付ける",
                    "reading": "shibaritsukeru",
                    "meaning": {
                      "en": "to tie down, to bind",
                      "pl": "przywiązać, związać"
                    }
                  },
                  {
                    "word": "人々",
                    "reading": "hitobito",
                    "meaning": {
                      "en": "people",
                      "pl": "ludzie"
                    }
                  },
                  {
                    "word": "運び去る",
                    "reading": "hakobi-saru",
                    "meaning": {
                      "en": "to carry away",
                      "pl": "unieść, zabrać"
                    }
                  },
                  {
                    "word": "運び込む",
                    "reading": "hakobi-komu",
                    "meaning": {
                      "en": "to carry in",
                      "pl": "wnieść, przynieść"
                    }
                  },
                  {
                    "word": "存在",
                    "reading": "sonzai",
                    "meaning": {
                      "en": "being, existence",
                      "pl": "istota, byt"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "Xにとって",
                    "explanation": {
                      "en": "'For X, from X's point of view'.",
                      "pl": "„Dla X, z punktu widzenia X”."
                    }
                  },
                  {
                    "pattern": "縛り付けられた",
                    "explanation": {
                      "en": "Passive past modifier: 'tied down'.",
                      "pl": "Strona bierna w czasie przeszłym jako określenie: „uwiązanych”."
                    }
                  },
                  {
                    "pattern": "存在でもある",
                    "explanation": {
                      "en": "でも = 'also': 'are also beings who ~'.",
                      "pl": "でも = „też”: „są też istotami, które ~”."
                    }
                  },
                  {
                    "pattern": "～てくれる",
                    "explanation": {
                      "en": "'Does ~ for us'.",
                      "pl": "„Robi ~ dla nas”."
                    }
                  }
                ]
              },
              {
                "jp": "「……権兵衛{ごんべえ}が種子{たね}まき、烏{からす}がほじくる。",
                "en": "“…Gonbei sows the seeds, and the crows dig them up.",
                "pl": "„…Gonbei sieje nasiona, a wrony je wygrzebują.",
                "para": true,
                "words": [
                  {
                    "word": "権兵衛",
                    "reading": "Gonbei",
                    "meaning": {
                      "en": "Gonbei, a stock name for an ordinary man",
                      "pl": "Gonbei, typowe imię zwykłego człowieka"
                    }
                  },
                  {
                    "word": "種子",
                    "reading": "tane",
                    "meaning": {
                      "en": "seed",
                      "pl": "nasiono"
                    }
                  },
                  {
                    "word": "まき",
                    "reading": "maki",
                    "meaning": {
                      "en": "sowing (stem of 蒔く)",
                      "pl": "siew (temat od 蒔く)"
                    }
                  },
                  {
                    "word": "烏",
                    "reading": "karasu",
                    "meaning": {
                      "en": "crow",
                      "pl": "wrona, kruk"
                    }
                  },
                  {
                    "word": "ほじくる",
                    "reading": "hojikuru",
                    "meaning": {
                      "en": "to dig up, to poke at",
                      "pl": "wygrzebywać, dłubać"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "A が～、B が～",
                    "explanation": {
                      "en": "Two clauses side by side with が: a rhythmic saying.",
                      "pl": "Dwa zdania obok siebie z が: rytmiczne powiedzenie."
                    }
                  },
                  {
                    "pattern": "種子まき",
                    "explanation": {
                      "en": "Noun made from a verb stem: 'seed-sowing'.",
                      "pl": "Rzeczownik z tematu czasownika: „siew nasion”."
                    }
                  }
                ],
                "note": {
                  "en": "This looks like a folk saying about work that is undone by others. The line continues on the next page, which is not included here.",
                  "pl": "To wygląda na ludowe powiedzenie o pracy, którą ktoś inny psuje. Wers ciągnie się na następnej stronie, której tu nie ma."
                }
              },
              {
                "jp": "かならずこれを見習って、人のカサなどほ",
                "en": "Be sure to follow this example, and other people's kasa and the like…",
                "pl": "Koniecznie weźcie z tego przykład, a cudze kasa i tym podobne…",
                "words": [
                  {
                    "word": "かならず",
                    "reading": "kanarazu",
                    "meaning": {
                      "en": "without fail, surely",
                      "pl": "na pewno, koniecznie"
                    }
                  },
                  {
                    "word": "見習う",
                    "reading": "minarau",
                    "meaning": {
                      "en": "to follow the example of",
                      "pl": "brać przykład z"
                    }
                  },
                  {
                    "word": "人",
                    "reading": "hito",
                    "meaning": {
                      "en": "other people",
                      "pl": "inni ludzie"
                    }
                  },
                  {
                    "word": "カサ",
                    "reading": "kasa",
                    "meaning": {
                      "en": "unclear here: 傘 (umbrella), 笠 (hat) or 瘡 (sore)",
                      "pl": "niejasne: 傘 (parasol), 笠 (kapelusz) lub 瘡 (wrzód)"
                    }
                  }
                ],
                "grammar": [
                  {
                    "pattern": "かならず～て",
                    "explanation": {
                      "en": "'Be sure to ~'. The て-form continues the thought.",
                      "pl": "„Koniecznie ~”. Forma て ciągnie myśl dalej."
                    }
                  }
                ],
                "note": {
                  "en": "The line breaks off at the page edge and the photo ends here. What カサ means cannot be told from this page.",
                  "pl": "Wers urywa się na brzegu strony, a zdjęcie kończy się tutaj. Znaczenia カサ nie da się ustalić z tej strony."
                }
              }
            ]
          }
        ]
      }
    ] },
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
        "pages": [
        [
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
        ],
        [
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
