const { title } = require('process');

const works = [
  {
    "title": "Gunnm",
    "note": "Œuvre majeure du cyberpunk mêlant action et réflexion sur l'humanité",
    "year": "1990",
    "series": [
      "Original",
      "Last Order",
      "Mars Chronicle"
    ],
    "type": "Manga",
    "author": "Yukito Kishiro",
    "genres": [
      "Cyberpunk",
      "Action",
      "Science-fiction"
    ]
  },
  {
    "title": "Battle Angel Alita: Last Order",
    "type": "Manga",
    "author": "Yukito Kishiro",
    "genres": [
      "Science-fiction",
      "Action",
      "Drama"
    ],
    "year": 2000,
    "note": "Suite directe de Gunnm, expand vers l'espace",
    "series": [
      "Complete Series"
    ]
  },
  {
    "title": "Battle Angel Alita: Mars Chronicle",
    "type": "Manga",
    "author": "Yukito Kishiro",
    "genres": [
      "Science-fiction",
      "Action",
      "Drama"
    ],
    "year": 2014,
    "note": "Suite de Gunnm explorant les origines de Gally sur Mars",
    "series": [
      "Original Series"
    ]
  },
  {
    "title": "Berserk",
    "type": "Manga",
    "author": "Kentaro Miura",
    "genres": [
      "Dark Fantasy",
      "Action",
      "Horror"
    ],
    "year": 1989,
    "note": "Chef-d'œuvre du manga dark fantasy, connu pour son art détaillé et son histoire tragique",
    "series": [
      "Original Series",
      "Posthumous Chapters"
    ]
  },
  {
    "title": "20th Century Boys",
    "type": "Manga",
    "author": "Naoki Urasawa",
    "genres": [
      "Mystery",
      "Science-fiction",
      "Thriller"
    ],
    "year": 1999,
    "note": "Thriller complexe mêlant conspiration, nostalgie et science-fiction",
    "series": [
      "Main Series",
      "21st Century Boys"
    ]
  },
  {
    "title": "Monster",
    "type": "Manga",
    "author": "Naoki Urasawa",
    "genres": [
      "Thriller",
      "Mystery",
      "Psychological"
    ],
    "year": 1994,
    "note": "Thriller psychologique sur la nature du mal à travers l'Europe post-guerre froide",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Pluto",
    "type": "Manga",
    "author": "Naoki Urasawa",
    "genres": [
      "Science-fiction",
      "Mystery",
      "Psychological"
    ],
    "year": 2003,
    "note": "Réinterprétation mature d'Astro Boy en thriller sur les droits des robots",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Master Keaton",
    "type": "Manga",
    "author": "Naoki Urasawa",
    "genres": [
      "Mystery",
      "Adventure",
      "Slice of Life"
    ],
    "year": 1988,
    "note": "Aventures d'un archéologue/enquêteur d'assurance/ex-SAS à travers le monde",
    "series": [
      "Original Series",
      "Master Keaton Remaster"
    ]
  },
  {
    "title": "Berserk (1997)",
    "type": "Anime",
    "author": "OLM",
    "genres": [
      "Dark Fantasy",
      "Action",
      "Horror"
    ],
    "year": 1997,
    "note": "Adaptation animée classique couvrant l'Arc de l'Âge d'Or",
    "series": [
      "TV Series"
    ]
  },
  {
    "title": "Monster anime",
    "type": "Anime",
    "author": "Madhouse",
    "genres": [
      "Thriller",
      "Mystery",
      "Psychological"
    ],
    "year": 2004,
    "note": "Adaptation fidèle et atmosphérique du manga",
    "series": [
      "TV Series"
    ]
  },
  {
    "title": "Master Keaton anime",
    "type": "Anime",
    "author": "Madhouse",
    "genres": [
      "Mystery",
      "Adventure",
      "Slice of Life"
    ],
    "year": 1998,
    "note": "Adaptation qui développe de nouvelles histoires",
    "series": [
      "TV Series",
      "OVA"
    ]
  },
  {
    "title": "Iria: Zeiram the Animation",
    "type": "Anime",
    "author": "Keita Amemiya",
    "genres": [
      "Science-fiction",
      "Action",
      "Cyberpunk"
    ],
    "year": 1994,
    "note": "Design unique, chasseuse de primes dans un univers cyberpunk organique",
    "series": [
      "OVA Series"
    ]
  },
  {
    "title": "Green Legend Ran",
    "type": "Anime",
    "author": "Satoshi Saga",
    "genres": [
      "Post-apocalyptic",
      "Environmental",
      "Action"
    ],
    "year": 1992,
    "note": "Vision unique post-apocalyptique avec des thèmes environnementaux profonds",
    "series": [
      "OVA Series"
    ]
  },
  {
    "title": "Bio Hunter",
    "type": "Anime",
    "author": "Yuzo Sato",
    "genres": [
      "Horror",
      "Science-fiction",
      "Action"
    ],
    "year": 1995,
    "note": "Horreur biologique sophistiquée dans la veine de Genocyber",
    "series": [
      "OVA"
    ]
  },
  {
    "title": "Midnight Eye Goku",
    "type": "Anime",
    "author": "Yoshiaki Kawajiri",
    "genres": [
      "Cyberpunk",
      "Action",
      "Detective"
    ],
    "year": 1989,
    "note": "Du réalisateur de Cyber City Oedo 808, détective cyberpunk stylé",
    "series": [
      "OVA Series"
    ]
  },
  {
    "title": "Violence Jack",
    "type": "Manga",
    "author": "Go Nagai",
    "genres": [
      "Post-apocalyptic",
      "Horror",
      "Action"
    ],
    "year": 1973,
    "note": "Manga ultra-violent qui a influencé Berserk et autres œuvres dark fantasy",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "The Third: The Girl with the Blue Eye",
    "type": "Anime",
    "author": "XEBEC",
    "genres": [
      "Post-apocalyptic",
      "Science-fiction",
      "Adventure"
    ],
    "year": 2006,
    "note": "Vision unique du post-apocalyptique avec des éléments philosophiques",
    "series": [
      "TV Series"
    ]
  },
  {
    "title": "NOiSE",
    "type": "Manga",
    "author": "Tsutomu Nihei",
    "genres": [
      "Cyberpunk",
      "Horror",
      "Science-fiction"
    ],
    "year": 2000,
    "note": "Prequel de BLAME! qui explore les origines de la Mégastructure et des Safeguards",
    "series": [
      "BLAME! Universe",
      "Complete Edition"
    ]
  },
  {
    "title": "Blame!",
    "note": "Chef-d'œuvre du cyberpunk architectural avec narration minimaliste",
    "year": "1997",
    "series": [
      "Blame!",
      "NOiSE"
    ],
    "type": "Manga",
    "author": "Tsutomu Nihei",
    "genres": [
      "Cyberpunk",
      "Science-fiction",
      "Horror"
    ]
  },
  {
    "title": "Biomega",
    "note": "Science-fiction apocalyptique avec zombies et transhumanisme",
    "year": "2004",
    "series": "Complete Edition",
    "type": "Manga",
    "author": "Tsutomu Nihei",
    "genres": [
      "Science-fiction",
      "Horror",
      "Action"
    ]
  },
  {
    "title": "Abara",
    "note": "Body horror et action frénétique dans un monde dystopique",
    "year": "2005",
    "series": "Complete Edition",
    "type": "Manga",
    "author": "Tsutomu Nihei",
    "genres": [
      "Science-fiction",
      "Horror",
      "Action"
    ]
  },
  {
    "title": "Chainsaw Man",
    "note": "Déconstruction violente et satirique des shonen traditionnels",
    "year": "2018",
    "series": "Part 1",
    "type": "Manga",
    "author": "Tatsuki Fujimoto",
    "genres": [
      "Action",
      "Horror",
      "Dark Fantasy"
    ]
  },
  {
    "title": "Dandadan",
    "type": "Manga",
    "author": "Yukinobu Tatsu",
    "genres": [
      "Action",
      "Supernatural",
      "Comedy"
    ],
    "year": 2021,
    "note": "Son œuvre majeure actuelle, mélange unique d'ovnis et d'esprits",
    "series": [
      "Ongoing"
    ]
  },
  {
    "title": "Seigi no Rokugō",
    "note": "Sa première œuvre publiée chez Kodansha",
    "year": 2010,
    "series": "One-shot",
    "type": "Manga",
    "author": "Yukinobu Tatsu",
    "genres": [
      "Action",
      "One-shot",
      "School"
    ]
  },
  {
    "title": "Dorohedoro",
    "type": "Manga",
    "author": "Q Hayashida",
    "genres": [
      "Dark Fantasy",
      "Horror",
      "Comedy"
    ],
    "year": 2000,
    "note": "Mélange unique d'horreur et d'humour noir dans un univers post-apocalyptique",
    "series": [
      "Complete"
    ]
  },
  {
    "title": "Dorohedoro (2020)",
    "note": "Adaptation anime fidèle mélangeant horreur et humour noir",
    "year": 2020,
    "series": "Season 1",
    "type": "Anime",
    "author": "MAPPA",
    "genres": [
      "Dark Fantasy",
      "Horror",
      "Comedy"
    ]
  },
  {
    "title": "Eden: It's an Endless World!",
    "note": "Post-apocalyptique mature avec thèmes politiques et sociaux profonds",
    "year": "1997",
    "series": "Complete Edition",
    "type": "Manga",
    "author": "Hiroki Endo",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Action"
    ]
  },
  {
    "title": "Fire Punch",
    "note": "Œuvre sombre sur la vengeance et la survie dans un monde gelé",
    "year": "2016",
    "series": "Complete Series",
    "type": "Manga",
    "author": "Tatsuki Fujimoto",
    "genres": [
      "Dark Fantasy",
      "Horror",
      "Psychological"
    ]
  },
  {
    "title": "Parasyte",
    "note": "Classic du body horror avec réflexion sur l'humanité",
    "year": "1988",
    "series": "Complete Series",
    "type": "Manga",
    "author": "Hitoshi Iwaaki",
    "genres": [
      "Horror",
      "Science-fiction",
      "Psychological"
    ]
  },
  {
    "title": "MPD Psycho",
    "note": "Thriller psychologique complexe sur la fragmentation de l'identité",
    "year": "1997",
    "series": "Complete Series",
    "type": "Manga",
    "author": "Eiji Otsuka",
    "genres": [
      "Psychological",
      "Horror",
      "Mystery"
    ]
  },
  {
    "title": "Gantz",
    "note": "Science-fiction brutale sur la survie et la nature humaine",
    "year": "2000",
    "series": "Complete Series",
    "type": "Manga",
    "author": "Hiroya Oku",
    "genres": [
      "Science-fiction",
      "Horror",
      "Action"
    ]
  },
  {
    "title": "Hellsing",
    "note": "Réinvention violente du mythe des vampires",
    "year": "1997",
    "series": "Complete Series",
    "type": "Manga",
    "author": "Kouta Hirano",
    "genres": [
      "Horror",
      "Action",
      "Supernatural"
    ]
  },
  {
    "title": "Akira",
    "note": "Chef-d'œuvre cyberpunk qui a révolutionné l'animation japonaise",
    "year": "1988",
    "series": "Film",
    "type": "Anime",
    "author": "Katsuhiro Otomo",
    "genres": [
      "Cyberpunk",
      "Science-fiction",
      "Psychological"
    ]
  },
  {
    "title": "Cyber City Oedo 808",
    "note": "OVA cyberpunk noir avec des criminels chasseurs de criminels",
    "year": "1990",
    "series": "OVA Series",
    "type": "Anime",
    "author": "Yoshiaki Kawajiri",
    "genres": [
      "Cyberpunk",
      "Action",
      "Science-fiction"
    ]
  },
  {
    "title": "Demon City Shinjuku",
    "note": "Dark fantasy urbaine basée sur l'œuvre de Hideyuki Kikuchi",
    "year": "1988",
    "series": "Film",
    "type": "Anime",
    "author": "Yoshiaki Kawajiri",
    "genres": [
      "Horror",
      "Supernatural",
      "Action"
    ]
  },
  {
    "title": "Wicked City",
    "note": "Fusion d'horreur et de film noir dans un Tokyo surnaturel",
    "year": "1987",
    "series": "Film",
    "type": "Anime",
    "author": "Yoshiaki Kawajiri",
    "genres": [
      "Horror",
      "Supernatural",
      "Action"
    ]
  },
  {
    "title": "Ninja Scroll",
    "note": "Classic du film d'action surnaturel japonais",
    "year": "1993",
    "series": "Film",
    "type": "Anime",
    "author": "Yoshiaki Kawajiri",
    "genres": [
      "Supernatural",
      "Action",
      "Horror"
    ]
  },
  {
    "title": "Genocyber",
    "note": "OVA cyberpunk ultra-violent sur l'évolution forcée de l'humanité",
    "year": "1994",
    "series": "OVA Series",
    "type": "Anime",
    "author": "Tony Takezaki",
    "genres": [
      "Cyberpunk",
      "Horror",
      "Science-fiction"
    ]
  },
  {
    "title": "Bubblegum Crisis",
    "note": "Série cyberpunk emblématique des années 80",
    "year": "1987",
    "series": "Original OVA Series",
    "type": "Anime",
    "author": "Katsuhito Akiyama",
    "genres": [
      "Cyberpunk",
      "Action",
      "Science-fiction"
    ]
  },
  {
    "title": "A.D. Police: To Protect and Serve",
    "type": "Anime",
    "author": "AIC",
    "genres": [
      "Cyberpunk",
      "Police",
      "Science-fiction"
    ],
    "year": 1999,
    "note": "Série TV dans l'univers de Bubblegum Crisis, plus conventionnelle que les OVA",
    "series": [
      "TV Series"
    ]
  },
  {
    "title": "A.D. Police Files",
    "type": "Anime",
    "author": "Akira Nishimori",
    "genres": [
      "Cyberpunk",
      "Police",
      "Horror"
    ],
    "year": 1990,
    "note": "Spin-off plus sombre de Bubblegum Crisis",
    "series": [
      "OVA Series"
    ]
  },
  {
    "title": "Memories",
    "type": "Anime",
    "author": "Multiple Directors",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Horror"
    ],
    "year": 1995,
    "note": "Film anthologique en trois parties",
    "series": [
      "Magnetic Rose (par Koji Morimoto, scénario de Satoshi Kon)",
      "Stink Bomb (par Tensai Okamura)",
      "Cannon Fodder (par Katsuhiro Otomo)"
    ]
  },
  {
    "title": "Jin-Roh",
    "note": "Thriller politique alternatif dans un Japon post-WWII",
    "year": "1999",
    "series": "Film",
    "type": "Anime",
    "author": "Mamoru Oshii",
    "genres": [
      "Political",
      "Drama",
      "Alternative History"
    ]
  },
  {
    "title": "Angel's Egg",
    "note": "Film expérimental profondément symbolique",
    "year": "1985",
    "series": "Film",
    "type": "Anime",
    "author": "Mamoru Oshii",
    "genres": [
      "Fantasy",
      "Psychological",
      "Avant-garde"
    ]
  },
  {
    "title": "Venus Wars",
    "note": "Science-fiction sur Mars avec courses de motos",
    "year": "1989",
    "series": "Film",
    "type": "Anime",
    "author": "Yoshikazu Yasuhiko",
    "genres": [
      "Science-fiction",
      "Action",
      "War"
    ]
  },
  {
    "title": "Black Magic M-66",
    "type": "Manga",
    "author": "Masamune Shirow",
    "genres": [
      "Science-fiction",
      "Action",
      "Military"
    ],
    "year": 1983,
    "note": "Une de ses premières œuvres, sur des androïdes militaires hors de contrôle",
    "series": [
      "Original Work"
    ]
  },
  {
    "title": "Black Magic M-66 (1987)",
    "type": "Anime",
    "author": "Masamune Shirow",
    "genres": [
      "Science-fiction",
      "Action",
      "Military"
    ],
    "year": 1987,
    "note": "Adaptation OVA coréalisée par Shirow lui-même",
    "series": [
      "Film Adaptation"
    ]
  },
  {
    "title": "Dominion Tank Police",
    "type": "Manga",
    "author": "Masamune Shirow",
    "genres": [
      "Science-fiction",
      "Comedy",
      "Action"
    ],
    "year": 1986,
    "note": "Mélange unique d'action policière et d'humour dans un futur pollué",
    "series": [
      "Original Series",
      "No More Noise",
      "Conflict 1"
    ]
  },
  {
    "title": "Dominion Tank Police (1988)",
    "type": "Anime",
    "author": "Agent 21",
    "genres": [
      "Science-fiction",
      "Comedy",
      "Action"
    ],
    "year": 1988,
    "note": "Adaptation OVA qui capture parfaitement l'humour déjanté du manga original",
    "series": [
      "Original OVA Series"
    ]
  },
  {
    "title": "New Dominion Tank Police",
    "type": "Anime",
    "author": "J.C.Staff",
    "genres": [
      "Science-fiction",
      "Comedy",
      "Action"
    ],
    "year": 1993,
    "note": "Suite qui continue dans le même esprit avec une animation modernisée",
    "series": [
      "New Series"
    ]
  },
  {
    "title": "Orion",
    "type": "Manga",
    "author": "Masamune Shirow",
    "genres": [
      "Science-fiction",
      "Fantasy",
      "Mythology"
    ],
    "year": 1991,
    "note": "Mélange unique de mythologie et de science-fiction high-tech",
    "series": [
      "One Shot"
    ]
  },
  {
    "title": "Pandora in the Crimson Shell: Ghost Urn",
    "type": "Manga",
    "author": "Masamune Shirow",
    "genres": [
      "Science-fiction",
      "Cyberpunk",
      "Comedy"
    ],
    "year": 2012,
    "note": "Concept original de Shirow, dessiné par Koshi Rikdo",
    "series": [
      "Original Series"
    ]
  },
  {
    "title": "Gundiver",
    "type": "Manga",
    "author": "Masamune Shirow",
    "genres": [
      "Science-fiction",
      "Mecha",
      "Action"
    ],
    "year": 1991,
    "note": "Histoire de plongeurs en armures mécaniques",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Ghost in the Shell",
    "type": "Manga",
    "author": "Masamune Shirow",
    "genres": [
      "Cyberpunk",
      "Science-fiction",
      "Philosophical"
    ],
    "year": 1989,
    "note": "Manga original qui a révolutionné le genre cyberpunk",
    "series": [
      "Ghost in the Shell",
      "Man-Machine Interface",
      "Human-Error Processor"
    ]
  },
  {
    "title": "Ghost in the Shell (1995)",
    "type": "Anime",
    "author": "Mamoru Oshii",
    "genres": [
      "Cyberpunk",
      "Psychological",
      "Science-fiction"
    ],
    "year": 1995,
    "note": "Chef-d'œuvre philosophique qui a influencé Matrix",
    "series": [
      "Films"
    ]
  },
  {
    "title": "Ghost in the Shell 2: Innocence",
    "type": "Anime",
    "author": "Mamoru Oshii",
    "genres": [
      "Cyberpunk",
      "Philosophical",
      "Mystery"
    ],
    "year": 2004,
    "note": "Suite encore plus philosophique du film original",
    "series": [
      "Films"
    ]
  },
  {
    "title": "Ghost in the Shell: Stand Alone Complex",
    "type": "Anime",
    "author": "Production I.G",
    "genres": [
      "Cyberpunk",
      "Crime",
      "Science-fiction"
    ],
    "year": 2002,
    "note": "Série TV qui développe l'aspect policier de l'univers",
    "series": [
      "S.A.C",
      "2nd GIG",
      "Solid State Society"
    ]
  },
  {
    "title": "Appleseed",
    "type": "Manga",
    "author": "Masamune Shirow",
    "genres": [
      "Cyberpunk",
      "Science-fiction",
      "Action"
    ],
    "year": 1985,
    "note": "Une autre œuvre majeure de Shirow, mélange de mecha et politique",
    "series": [
      "Original Series"
    ]
  },
  {
    "title": "Appleseed (2004)",
    "type": "Anime",
    "author": "Shinji Aramaki",
    "genres": [
      "Cyberpunk",
      "Action",
      "Science-fiction"
    ],
    "year": 2004,
    "note": "Remake en CGI innovant pour l'époque",
    "series": [
      "Film Series"
    ]
  },
  {
    "title": "Appleseed Ex Machina",
    "type": "Anime",
    "author": "Shinji Aramaki",
    "genres": [
      "Cyberpunk",
      "Action",
      "Science-fiction"
    ],
    "year": 2007,
    "note": "Suite produite par John Woo, plus orientée action",
    "series": [
      "Film Series"
    ]
  },
  {
    "title": "Appleseed XIII",
    "type": "Anime",
    "author": "Jinroh Keiichi",
    "genres": [
      "Cyberpunk",
      "Science-fiction",
      "Action"
    ],
    "year": 2011,
    "note": "Série en CGI qui réinterprète l'histoire originale",
    "series": [
      "TV Series"
    ]
  },
  {
    "title": "Appleseed Alpha",
    "type": "Anime",
    "author": "Shinji Aramaki",
    "genres": [
      "Cyberpunk",
      "Action",
      "Science-fiction"
    ],
    "year": 2014,
    "note": "Préquelle en CGI montrant les origines de Deunan et Briareos",
    "series": [
      "Film Series"
    ]
  },
  {
    "title": "Download",
    "type": "Anime",
    "author": "Masaaki Yuasa",
    "genres": [
      "Cyberpunk",
      "Experimental",
      "Psychological"
    ],
    "year": 1992,
    "note": "Animation expérimentale sur la fusion homme-machine",
    "series": [
      "OVA"
    ]
  },
  {
    "title": "Kujaku Ou",
    "type": "Anime",
    "author": "Hiroshi Noguchi",
    "genres": [
      "Horror",
      "Supernatural",
      "Psychological"
    ],
    "year": 1988,
    "note": "Mélange unique de bouddhisme ésotérique et d'horreur psychologique",
    "series": [
      "Movie",
      "OVA Series"
    ]
  },
  {
    "title": "Armitage III",
    "note": "Thriller cyberpunk sur l'identité des androïdes",
    "year": "1995",
    "series": "OVA Series",
    "type": "Anime",
    "author": "Hiroyuki Ochi",
    "genres": [
      "Cyberpunk",
      "Science-fiction",
      "Police"
    ]
  },
  {
    "title": "Goku: Midnight Eye",
    "type": "Manga",
    "author": "Buichi Terasawa",
    "genres": [
      "Cyberpunk",
      "Action",
      "Detective"
    ],
    "year": 1987,
    "note": "Du créateur de Cobra, détective cyberpunk avec un œil connecté à tous les ordinateurs",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Landlock",
    "type": "Anime",
    "author": "Masami Obari",
    "genres": [
      "Fantasy",
      "Science-fiction",
      "Action"
    ],
    "year": 1996,
    "note": "Mélange unique de fantasy et mecha avec un style visuel distinct",
    "series": [
      "OVA"
    ]
  },
  {
    "title": "Perfect Blue",
    "note": "Thriller psychologique sur la célébrité et l'identité",
    "year": "1997",
    "series": "Film",
    "type": "Anime",
    "author": "Satoshi Kon",
    "genres": [
      "Psychological",
      "Thriller",
      "Horror"
    ]
  },
  {
    "title": "Texhnolyze",
    "note": "Dystopie cyberpunk philosophique et expérimentale",
    "year": "2003",
    "series": "TV Series",
    "type": "Anime",
    "author": "Yoshitoshi ABe",
    "genres": [
      "Cyberpunk",
      "Psychological",
      "Science-fiction"
    ]
  },
  {
    "title": "Serial Experiments Lain",
    "note": "Série avant-gardiste sur la technologie et l'identité",
    "year": "1998",
    "series": "TV Series",
    "type": "Anime",
    "author": "Yoshitoshi ABe",
    "genres": [
      "Cyberpunk",
      "Psychological",
      "Science-fiction"
    ]
  },
  {
    "title": "Jigokuraku (Hell's Paradise)",
    "note": "Dark fantasy sur des criminels cherchant l'élixir d'immortalité",
    "year": 2018,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Yuji Kaku",
    "genres": [
      "Dark Fantasy",
      "Horror",
      "Action"
    ]
  },
  {
    "title": "Hell's Paradise",
    "type": "Anime",
    "author": "MAPPA",
    "genres": [
      "Dark Fantasy",
      "Horror",
      "Action"
    ],
    "year": 2023
  },
  {
    "title": "Jagaaaaan",
    "note": "Body horror urbain avec transformation et violence",
    "year": 2017,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Muneyuki Kaneshiro",
    "genres": [
      "Psychological",
      "Body Horror",
      "Action"
    ]
  },
  {
    "title": "Made in Abyss",
    "note": "Dark fantasy qui contraste innocence et horreur",
    "year": 2012,
    "series": "Ongoing Series",
    "type": "Manga",
    "author": "Akihito Tsukushi",
    "genres": [
      "Dark Fantasy",
      "Science-fiction",
      "Adventure"
    ]
  },
  {
    "title": "Dead Dead Demon's Dededede Destruction",
    "note": "Invasion alien vue à travers le quotidien",
    "year": 2014,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Inio Asano",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Slice of Life"
    ]
  },
  {
    "title": "Houseki no Kuni (Land of the Lustrous)",
    "type": "Manga",
    "author": "Haruko Ichikawa",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Post-apocalyptic"
    ],
    "year": 2012
  },
  {
    "title": "Kaiju No. 8",
    "note": "Nouvelle approche du genre kaiju avec transformation",
    "year": 2020,
    "series": "Ongoing Series",
    "type": "Manga",
    "author": "Naoya Matsumoto",
    "genres": [
      "Action",
      "Science-fiction",
      "Horror"
    ]
  },
  {
    "title": "Dai Dark",
    "note": "Science-fantasy sombre avec humour noir",
    "year": 2019,
    "series": "Ongoing Series",
    "type": "Manga",
    "author": "Q Hayashida",
    "genres": [
      "Dark Fantasy",
      "Science-fiction",
      "Horror"
    ]
  },
  {
    "title": "The Boy's Abyss",
    "note": "Drame psychologique sur la dépression et les relations toxiques",
    "year": 2020,
    "series": "Ongoing Series",
    "type": "Manga",
    "author": "Ryo Minenami",
    "genres": [
      "Psychological",
      "Drama",
      "Dark"
    ]
  },
  {
    "title": "Happiness",
    "note": "Histoire de vampire moderne et psychologique",
    "year": 2015,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Shuzo Oshimi",
    "genres": [
      "Psychological",
      "Horror",
      "Supernatural"
    ]
  },
  {
    "title": "Cyberpunk: Edgerunners",
    "note": "Adaptation anime intense de l'univers Cyberpunk 2077",
    "year": 2022,
    "series": "Complete Series",
    "type": "Anime",
    "author": "Studio Trigger",
    "genres": [
      "Cyberpunk",
      "Action",
      "Psychological"
    ]
  },
  {
    "title": "Id:Invaded",
    "note": "Thriller policier SF sur l'exploration des esprits criminels",
    "year": 2020,
    "series": "TV Series",
    "type": "Anime",
    "author": "Ei Aoki",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Detective"
    ]
  },
  {
    "title": "No Guns Life",
    "note": "Noir cyberpunk sur un cyborg avec une tête-revolver",
    "year": 2014,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Tasuku Karasuma",
    "genres": [
      "Cyberpunk",
      "Action",
      "Neo-noir"
    ]
  },
  {
    "title": "Oshi no Ko",
    "note": "Drame sur l'industrie du divertissement avec éléments surnaturels",
    "year": 2020,
    "series": "Ongoing Series",
    "type": "Manga",
    "author": "Aka Akasaka",
    "genres": [
      "Psychological",
      "Drama",
      "Supernatural"
    ]
  },
  {
    "title": "Samurai Champloo",
    "note": "Fusion unique de samouraï et hip-hop par le créateur de Cowboy Bebop",
    "year": 2004,
    "series": "TV Series",
    "type": "Anime",
    "author": "Shinichirō Watanabe",
    "genres": [
      "Action",
      "Historical",
      "Hip-hop"
    ]
  },
  {
    "title": "Vagabond",
    "note": "Manga historique sur Miyamoto Musashi avec un art exceptionnel",
    "year": 1998,
    "series": "Incomplete Series",
    "type": "Manga",
    "author": "Takehiko Inoue",
    "genres": [
      "Historical",
      "Action",
      "Psychological"
    ]
  },
  {
    "title": "Jujutsu Kaisen",
    "note": "Moderne mais avec une profondeur intéressante dans son système de malédictions",
    "year": 2018,
    "series": "Ongoing Series",
    "type": "Manga",
    "author": "Gege Akutami",
    "genres": [
      "Dark Fantasy",
      "Action",
      "Horror"
    ]
  },
  {
    "title": "Yongbi",
    "note": "Mélange unique d'humour et d'arts martiaux traditionnels",
    "year": 1998,
    "series": "Complete Series",
    "type": "Manhwa",
    "author": "Moon Jung-hoo",
    "genres": [
      "Action",
      "Comedy",
      "Martial Arts"
    ]
  },
  {
    "title": "Blade of the Immortal",
    "note": "Style artistique unique, violence sophistiquée",
    "year": 1993,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Hiroaki Samura",
    "genres": [
      "Action",
      "Historical",
      "Dark Fantasy"
    ]
  },
  {
    "title": "Blade of the Immortal (2019)",
    "note": "Version complète et fidèle",
    "year": 2019,
    "series": "TV Series",
    "type": "Anime",
    "author": "LIDENFILMS",
    "genres": [
      "Action",
      "Supernatural",
      "Historical"
    ]
  },
  {
    "title": "Shigurui",
    "note": "Ultra violent mais historiquement détaillé",
    "year": 2003,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Takayuki Yamaguchi",
    "genres": [
      "Historical",
      "Horror",
      "Psychological"
    ]
  },
  {
    "title": "Shigurui: Death Frenzy",
    "note": "Adaptation ultra violente et artistique",
    "year": 2007,
    "series": "TV Series",
    "type": "Anime",
    "author": "Madhouse",
    "genres": [
      "Historical",
      "Horror",
      "Action"
    ]
  },
  {
    "title": "Gosu",
    "note": "Du même auteur que Yongbi, style similaire",
    "year": 2015,
    "series": "Complete Series",
    "type": "Manhwa",
    "author": "Moon Jung-hoo",
    "genres": [
      "Action",
      "Martial Arts",
      "Comedy"
    ]
  },
  {
    "title": "Homunculus",
    "note": "Exploration psychologique profonde",
    "year": 2003,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Hideo Yamamoto",
    "genres": [
      "Psychological",
      "Horror",
      "Mystery"
    ]
  },
  {
    "title": "Red Storm",
    "note": "Plus sérieux que Yongbi mais même énergie",
    "year": 2012,
    "series": "Complete Series",
    "type": "Manhwa",
    "author": "Cyan Storm",
    "genres": [
      "Action",
      "Fantasy",
      "Martial Arts"
    ]
  },
  {
    "title": "The Breaker",
    "type": "Manhwa",
    "author": "Jeon Geuk-jin",
    "genres": [
      "Action",
      "Martial Arts",
      "Drama"
    ],
    "year": 2007,
    "series": [
      "The Breaker",
      "New Waves",
      "Eternal Force"
    ]
  },
  {
    "title": "Bastard",
    "note": "Thriller psychologique intense sur la relation père-fils",
    "year": 2014,
    "series": "Complete Series",
    "type": "Manhwa",
    "author": "Carnby Kim",
    "genres": [
      "Psychological",
      "Horror",
      "Thriller"
    ]
  },
  {
    "title": "Sweet Home",
    "note": "Même auteur que Bastard, horreur psychologique",
    "year": 2017,
    "series": "Complete Series",
    "type": "Manhwa",
    "author": "Carnby Kim",
    "genres": [
      "Horror",
      "Psychological",
      "Post-apocalyptic"
    ]
  },
  {
    "title": "City of the Dead Sorcerer",
    "note": "Complexe et sophistiqué, mélange magie et thriller",
    "year": 2013,
    "series": "Complete Series",
    "type": "Manhwa",
    "author": "Jung Yong",
    "genres": [
      "Dark Fantasy",
      "Psychological",
      "Mystery"
    ]
  },
  {
    "title": "Burning Effect",
    "note": "Style visuel unique, narration non-linéaire",
    "year": 2017,
    "series": "Ongoing Series",
    "type": "Manhwa",
    "author": "CR",
    "genres": [
      "Action",
      "Science-fiction",
      "Post-apocalyptic"
    ]
  },
  {
    "title": "Soil",
    "note": "Lynch meets Twin Peaks en manga",
    "year": 2003,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Atsushi Kaneko",
    "genres": [
      "Mystery",
      "Horror",
      "Psychological"
    ]
  },
  {
    "title": "Sanctuary",
    "note": "Thriller politique sophistiqué",
    "year": 1990,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Sho Fumimura",
    "genres": [
      "Political",
      "Drama",
      "Crime"
    ]
  },
  {
    "title": "Ultra Heaven",
    "note": "Trip psychédélique sur la conscience humaine",
    "year": 2004,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Keiichi Koike",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Experimental"
    ]
  },
  {
    "title": "Kunstler",
    "note": "Style artistique unique, narration expérimentale",
    "year": 2013,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Taiyou Matsumoto",
    "genres": [
      "Drama",
      "Psychological",
      "Avant-garde"
    ]
  },
  {
    "title": "The World Is Mine",
    "note": "Violent et nihiliste mais profondément humain",
    "year": 1997,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Hideki Arai",
    "genres": [
      "Psychological",
      "Crime",
      "Drama"
    ]
  },
  {
    "title": "Dragon Head",
    "note": "Survie psychologique claustrophobe",
    "year": 1994,
    "series": "Complete Series",
    "type": "Manga",
    "author": "Minetaro Mochizuki",
    "genres": [
      "Horror",
      "Psychological",
      "Survival"
    ]
  },
  {
    "title": "The God of High School",
    "note": "Animation spectaculaire mais histoire condensée",
    "year": 2020,
    "series": "TV Series",
    "type": "Anime",
    "author": "MAPPA",
    "genres": [
      "Action",
      "Supernatural",
      "Martial Arts"
    ]
  },
  {
    "title": "Tower of God",
    "note": "Adaptation fidèle avec une belle direction artistique",
    "year": 2020,
    "series": "TV Series",
    "type": "Anime",
    "author": "Telecom Animation Film",
    "genres": [
      "Fantasy",
      "Action",
      "Mystery"
    ]
  },
  {
    "title": "Mononoke",
    "note": "Le plus violent et mature des Ghibli. Style visuel unique, horreur traditionnelle japonaise",
    "year": 2007,
    "series": "TV Series",
    "type": "Anime",
    "author": "Toei Animation",
    "genres": [
      "Horror",
      "Supernatural",
      "Mystery",
      "Fantasy",
      "Adventure",
      "Environmental"
    ]
  },
  {
    "title": "Nausicaa of the Valley of the Wind",
    "note": "Post-apocalyptique philosophique",
    "year": 1984,
    "series": "Film",
    "type": "Anime",
    "author": "Hayao Miyazaki",
    "genres": [
      "Post-apocalyptic",
      "Fantasy",
      "Environmental"
    ]
  },
  {
    "title": "Grave of the Fireflies",
    "note": "Drame de guerre déchirant",
    "year": 1988,
    "series": "Film",
    "type": "Anime",
    "author": "Isao Takahata",
    "genres": [
      "Drama",
      "War",
      "Historical"
    ]
  },
  {
    "title": "Spirited Away",
    "note": "Fantastique et symbolique",
    "year": 2001,
    "series": "Film",
    "type": "Anime",
    "author": "Hayao Miyazaki",
    "genres": [
      "Fantasy",
      "Adventure",
      "Coming of age"
    ]
  },
  {
    "title": "Howl's Moving Castle",
    "note": "Critique de la guerre et romance",
    "year": 2004,
    "series": "Film",
    "type": "Anime",
    "author": "Hayao Miyazaki",
    "genres": [
      "Fantasy",
      "Romance",
      "War"
    ]
  },
  {
    "title": "Sword of the Stranger",
    "note": "Chef d'œuvre des scènes de combat au sabre",
    "year": 2007,
    "series": "Film",
    "type": "Anime",
    "author": "Bones",
    "genres": [
      "Action",
      "Historical",
      "Samurai"
    ]
  },
  {
    "title": "Redline",
    "note": "Animation spectaculaire, style unique",
    "year": 2009,
    "series": "Film",
    "type": "Anime",
    "author": "Madhouse",
    "genres": [
      "Racing",
      "Science-fiction",
      "Action"
    ]
  },
  {
    "title": "Vampire Hunter D: Bloodlust",
    "note": "Dark fantasy gothique sublime",
    "year": 2000,
    "series": "Film",
    "type": "Anime",
    "author": "Madhouse",
    "genres": [
      "Horror",
      "Dark Fantasy",
      "Science-fiction"
    ]
  },
  {
    "title": "Metropolis",
    "note": "Adaptation du manga de Tezuka, visuellement stupéfiant",
    "year": 2001,
    "series": "Film",
    "type": "Anime",
    "author": "Madhouse",
    "genres": [
      "Science-fiction",
      "Drama",
      "Cyberpunk"
    ]
  },
  {
    "title": "Kaiba",
    "type": "Anime",
    "author": "Madhouse",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Romance"
    ],
    "year": 2008,
    "note": "Science-fiction expérimentale",
    "series": [
      "Neo-Human Casshern Universe"
    ]
  },
  {
    "title": "Neo-Human Casshern",
    "type": "Anime",
    "author": "Tatsunoko Production",
    "genres": [
      "Science-fiction",
      "Superhero",
      "Action"
    ],
    "year": 1973,
    "note": "Série anime originale qui a lancé la franchise, mettant en scène un cyborg combattant contre une armée de robots",
    "series": [
      "Neo-Human Casshern Universe Original Series"
    ]
  },
  {
    "title": "Casshern",
    "type": "Live Action",
    "author": "Kazuaki Kiriya",
    "genres": [
      "Science-fiction",
      "Superhero",
      "Action"
    ],
    "year": 2004,
    "note": "Adaptation live-action stylisée avec des effets visuels novateurs",
    "series": [
      "Neo-Human Casshern Universe"
    ]
  },
  {
    "title": "Casshern Sins",
    "type": "Anime",
    "author": "Madhouse",
    "genres": [
      "Science-fiction",
      "Post-apocalyptic",
      "Action"
    ],
    "year": 2008,
    "note": "Post-apocalyptique philosophique",
    "series": [
      "Neo-Human Casshern Universe"
    ]
  },
  {
    "title": "Spriggan",
    "type": "Manga",
    "author": "Hiroshi Takashige",
    "genres": [
      "Science-fiction",
      "Action",
      "Adventure"
    ],
    "year": 1989,
    "note": "Mélange d'archéologie et de science-fiction avec des combats spectaculaires",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Spriggan (1998)",
    "type": "Anime",
    "author": "Katsuhiro Otomo",
    "genres": [
      "Science-fiction",
      "Action",
      "Adventure"
    ],
    "year": 1998,
    "note": "Adaptation film par le créateur d'Akira",
    "series": [
      "Film"
    ]
  },
  {
    "title": "Giver: Shumatsu Sekai no Fortissimo",
    "type": "Manga",
    "author": "Miyoko Ikeda",
    "genres": [
      "Post-apocalyptic",
      "Action",
      "Science-fiction"
    ],
    "year": 1999,
    "note": "Histoire complexe sur la survie dans un monde post-apocalyptique",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Neon Genesis Evangelion",
    "type": "Anime",
    "author": "Hideaki Anno",
    "genres": [
      "Psychological",
      "Mecha",
      "Science-fiction"
    ],
    "year": 1995,
    "note": "Série révolutionnaire qui a redéfini le genre mecha",
    "series": [
      "Original Series",
      "Death & Rebirth",
      "End of Evangelion",
      "Rebuild of Evangelion"
    ]
  },
  {
    "title": "Vision of Escaflowne",
    "type": "Anime",
    "author": "Shoji Kawamori",
    "genres": [
      "Fantasy",
      "Mecha",
      "Romance"
    ],
    "year": 1996,
    "note": "Mélange unique de fantasy et mecha avec une superbe bande son de Yoko Kanno",
    "series": [
      "TV Series",
      "Movie Edition"
    ]
  },
  {
    "title": "Strange Dawn",
    "type": "Anime",
    "author": "Jun Kawagoe",
    "genres": [
      "Science-fiction",
      "Psychological",
      "War"
    ],
    "year": 2000,
    "note": "Déconstruction brutale des isekai avec un style trompeur",
    "series": [
      "TV Series"
    ]
  },
  {
    "title": "Maze Bakunetsu Jikuu",
    "type": "Anime",
    "author": "Triangle Staff",
    "genres": [
      "Science-fiction",
      "Horror",
      "Fantasy"
    ],
    "year": 1996,
    "note": "Commence comme une comédie puis devient étonnamment sombre et philosophique",
    "series": [
      "OVA",
      "TV Series"
    ]
  },
  {
    "title": "Neo Tokyo",
    "type": "Anime",
    "author": "Multiple",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Experimental"
    ],
    "year": 1987,
    "note": "Anthologie expérimentale incluant des travaux de Rintaro et Otomo",
    "series": [
      "Film Anthology"
    ]
  },
  {
    "title": "Birth",
    "type": "Anime",
    "author": "Shin Itagaki",
    "genres": [
      "Science-fiction",
      "Post-apocalyptic",
      "Experimental"
    ],
    "year": 1984,
    "note": "Animation expérimentale avec peu de dialogue mais visuellement stupéfiante",
    "series": [
      "Film"
    ]
  },
  {
    "title": "Lily C.A.T.",
    "type": "Anime",
    "author": "Hisayuki Toriumi",
    "genres": [
      "Horror",
      "Science-fiction",
      "Space"
    ],
    "year": 1987,
    "note": "Mélange d'Alien et The Thing avec une touche cyberpunk unique",
    "series": [
      "Film"
    ]
  },
  {
    "title": "Angel Cop",
    "type": "Anime",
    "author": "Ichiro Itano",
    "genres": [
      "Cyberpunk",
      "Action",
      "Police"
    ],
    "year": 1989,
    "note": "Ultra-violent et controversé, animation exceptionnelle par le spécialiste des scènes de missiles",
    "series": [
      "OVA Series"
    ]
  },
  {
    "title": "Twilight of the Dark Master",
    "type": "Anime",
    "author": "Akiyuki Shinbo",
    "genres": [
      "Horror",
      "Supernatural",
      "Cyberpunk"
    ],
    "year": 1997,
    "note": "Mélange unique d'horreur occulte et cyberpunk",
    "series": [
      "OVA"
    ]
  },
  {
    "title": "Baoh",
    "type": "Anime",
    "author": "Hirohiko Araki",
    "genres": [
      "Horror",
      "Science-fiction",
      "Action"
    ],
    "year": 1989,
    "note": "Du créateur de JoJo, body horror et action surpuissante",
    "series": [
      "OVA"
    ]
  },
  {
    "title": "Crystal Triangle",
    "type": "Anime",
    "author": "Hidehiro Ito",
    "genres": [
      "Supernatural",
      "Science-fiction",
      "Mystery"
    ],
    "year": 1987,
    "note": "Mélange bizarre et fascinant de science-fiction et d'occultisme",
    "series": [
      "Film"
    ]
  },
  {
    "title": "Psychic Wars",
    "type": "Anime",
    "author": "Satoru Yamamoto",
    "genres": [
      "Horror",
      "Supernatural",
      "Science-fiction"
    ],
    "year": 1991,
    "note": "Body horror médical mêlé à du surnaturel ancien",
    "series": [
      "OVA"
    ]
  },
  {
    "title": "Urotsukidoji",
    "type": "Manga",
    "author": "Toshio Maeda",
    "genres": [
      "Horror",
      "Supernatural",
      "Adult"
    ],
    "year": 1986,
    "note": "Œuvre controversée qui a créé son propre sous-genre",
    "series": [
      "Legend of the Overfiend",
      "Legend of the Demon Womb"
    ]
  },
  {
    "title": "On Your Mark",
    "type": "Anime",
    "author": "Hayao Miyazaki",
    "genres": [
      "Science-fiction",
      "Music Video",
      "Adventure"
    ],
    "year": 1995,
    "note": "Court métrage animé sur la chanson de Chage & Aska",
    "series": [
      "Short Film"
    ]
  },
  {
    "title": "3x3 Eyes",
    "type": "Manga",
    "author": "Yuzo Takada",
    "genres": [
      "Supernatural",
      "Action",
      "Horror"
    ],
    "year": 1987,
    "note": "Histoire complexe mêlant mythologie tibétaine et horreur",
    "series": [
      "Original Series",
      "3x3 Eyes Seima Densetsu"
    ]
  },
  {
    "title": "InuYasha",
    "type": "Manga",
    "author": "Rumiko Takahashi",
    "genres": [
      "Fantasy",
      "Adventure",
      "Romance"
    ],
    "year": 1996,
    "note": "Mélange d'action et de romance dans le Japon féodal",
    "series": [
      "Original Series",
      "The Final Act"
    ]
  },
  {
    "title": "Trigun",
    "type": "Manga",
    "author": "Yasuhiro Nightow",
    "genres": [
      "Science-fiction",
      "Western",
      "Action"
    ],
    "year": 1995,
    "note": "Western spatial avec des thèmes pacifistes profonds",
    "series": [
      "Original Series",
      "Trigun Maximum"
    ]
  },
  {
    "title": "Cowboy Bebop",
    "type": "Anime",
    "author": "Shinichiro Watanabe",
    "genres": [
      "Science-fiction",
      "Neo-noir",
      "Space Western"
    ],
    "year": 1998,
    "note": "Série culte mélangeant genres et influences avec une BO jazz légendaire",
    "series": [
      "TV Series",
      "Movie: Knockin' on Heaven's Door"
    ]
  },
  {
    "title": "The Super Dimension Fortress Macross",
    "type": "Anime",
    "author": "Shoji Kawamori",
    "genres": [
      "Mecha",
      "Romance",
      "Science-fiction"
    ],
    "year": 1982,
    "note": "La série originale qui a établi le mélange unique de mecha, musique et romance",
    "series": [
      "Original TV Series",
      "Do You Remember Love?",
      "Flashback 2012"
    ]
  },
  {
    "title": "Macross Plus",
    "type": "Anime",
    "author": "Shoji Kawamori",
    "genres": [
      "Mecha",
      "Science-fiction",
      "Drama"
    ],
    "year": 1994,
    "note": "Histoire mature sur l'IA et les relations humaines, avec musique de Yoko Kanno",
    "series": [
      "OVA Series",
      "Movie Edition"
    ]
  },
  {
    "title": "Macross 7",
    "type": "Anime",
    "author": "Shoji Kawamori",
    "genres": [
      "Mecha",
      "Music",
      "Science-fiction"
    ],
    "year": 1994,
    "note": "Série focalisée sur le pouvoir de la musique rock dans l'espace",
    "series": [
      "TV Series",
      "Dynamite",
      "Encore",
      "Plus"
    ]
  },
  {
    "title": "Macross Zero",
    "type": "Anime",
    "author": "Shoji Kawamori",
    "genres": [
      "Mecha",
      "Military",
      "Science-fiction"
    ],
    "year": 2002,
    "note": "Préquelle explorant les origines du protoculture",
    "series": [
      "OVA Series"
    ]
  },
  {
    "title": "Macross Frontier",
    "type": "Anime",
    "author": "Shoji Kawamori",
    "genres": [
      "Mecha",
      "Music",
      "Romance"
    ],
    "year": 2008,
    "note": "Renaissance moderne de la franchise avec une production somptueuse",
    "series": [
      "TV Series",
      "The False Songstress",
      "The Wings of Goodbye"
    ]
  },
  {
    "title": "Mobile Suit Gundam",
    "type": "Anime",
    "author": "Yoshiyuki Tomino",
    "genres": [
      "Mecha",
      "Military",
      "Science-fiction"
    ],
    "year": 1979,
    "note": "La série originale qui a révolutionné le genre mecha avec son réalisme",
    "series": [
      "TV Series",
      "Movie Trilogy"
    ]
  },
  {
    "title": "Mobile Suit Zeta Gundam",
    "type": "Anime",
    "author": "Yoshiyuki Tomino",
    "genres": [
      "Mecha",
      "Military",
      "Drama"
    ],
    "year": 1985,
    "note": "Suite plus sombre et complexe de la série originale",
    "series": [
      "TV Series",
      "A New Translation Movies"
    ]
  },
  {
    "title": "Mobile Suit Gundam: Char's Counterattack",
    "type": "Anime",
    "author": "Yoshiyuki Tomino",
    "genres": [
      "Mecha",
      "Military",
      "Drama"
    ],
    "year": 1988,
    "note": "Conclusion épique de la rivalité Amuro-Char",
    "series": [
      "Universal Century"
    ]
  },
  {
    "title": "Mobile Suit Gundam Wing",
    "type": "Anime",
    "author": "Sunrise",
    "genres": [
      "Mecha",
      "Military",
      "Political"
    ],
    "year": 1995,
    "note": "Version alternative qui a popularisé Gundam en Occident",
    "series": [
      "TV Series",
      "Endless Waltz"
    ]
  },
  {
    "title": "Turn A Gundam",
    "type": "Anime",
    "author": "Yoshiyuki Tomino",
    "genres": [
      "Mecha",
      "Post-apocalyptic",
      "Drama"
    ],
    "year": 1999,
    "note": "Vision unique mélangeant technologie futuriste et ambiance rétro",
    "series": [
      "TV Series",
      "Movies"
    ]
  },
  {
    "title": "Macross Delta",
    "type": "Anime",
    "author": "Shoji Kawamori",
    "genres": [
      "Mecha",
      "Music",
      "Science-fiction"
    ],
    "year": 2016,
    "note": "Nouvelle itération mélangeant idoles, mecha et virus musical",
    "series": [
      "TV Series",
      "Movie: Passionate Walküre",
      "Movie: Absolute Live"
    ]
  },
  {
    "title": "Gundam SEED",
    "type": "Anime",
    "author": "Sunrise",
    "genres": [
      "Mecha",
      "Military",
      "Drama"
    ],
    "year": 2002,
    "note": "Réinterprétation moderne des thèmes de la série originale",
    "series": [
      "TV Series",
      "SEED Destiny"
    ]
  },
  {
    "title": "Mobile Suit Gundam 00",
    "type": "Anime",
    "author": "Sunrise",
    "genres": [
      "Mecha",
      "Political",
      "Science-fiction"
    ],
    "year": 2007,
    "note": "Vision moderne sur le terrorisme et l'intervention militaire",
    "series": [
      "Season 1",
      "Season 2",
      "A Wakening of the Trailblazer"
    ]
  },
  {
    "title": "Iron-Blooded Orphans",
    "type": "Anime",
    "author": "Sunrise",
    "genres": [
      "Mecha",
      "Military",
      "Drama"
    ],
    "year": 2015,
    "note": "Histoire sombre sur des enfants soldats dans l'espace",
    "series": [
      "Season 1",
      "Season 2"
    ]
  },
  {
    "title": "Highschool! Kimengumi",
    "type": "Manga",
    "author": "Motoei Shinzawa",
    "genres": [
      "Comedy",
      "School Life",
      "Gag"
    ],
    "year": 1982,
    "note": "Connu en France sous le nom 'Collège Fou Fou Fou'",
    "series": [
      "Original Series"
    ]
  },
  {
    "title": "Highschool! Kimengumi anime",
    "type": "Anime",
    "author": "Studio Pierrot",
    "genres": [
      "Comedy",
      "School Life",
      "Gag"
    ],
    "year": 1985,
    "note": "Adaptation anime qui a marqué toute une génération en France",
    "series": [
      "TV Series",
      "OVA"
    ]
  },
  {
    "title": "Mobile Suit Gundam: The Witch from Mercury",
    "type": "Anime",
    "author": "Sunrise",
    "genres": [
      "Mecha",
      "Political",
      "Drama"
    ],
    "year": 2022,
    "note": "Première série Gundam avec une protagoniste féminine principale",
    "series": [
      "Season 1",
      "Season 2"
    ]
  },
  {
    "title": "Macross II: Lovers Again",
    "type": "Anime",
    "author": "Big West",
    "genres": [
      "Mecha",
      "Romance",
      "Science-fiction"
    ],
    "year": 1992,
    "note": "Série parallèle non-canon mais intéressante dans la franchise",
    "series": [
      "OVA Series"
    ]
  },
  {
    "title": "Key: The Metal Idol",
    "type": "Anime",
    "author": "Studio Pierrot",
    "genres": [
      "Psychological",
      "Science-fiction",
      "Drama"
    ],
    "year": 1994,
    "note": "Comme Ghost in the Shell mais plus intimiste, sur une androïde cherchant son humanité",
    "series": [
      "Complete OVA Series"
    ]
  },
  {
    "title": "Alien 9",
    "type": "Manga",
    "author": "Hitoshi Tomizawa",
    "genres": [
      "Horror",
      "Psychological",
      "Science-fiction"
    ],
    "year": 1998,
    "note": "Apparence trompeuse, cache une horreur psychologique profonde comme Genocyber",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Boogiepop Phantom",
    "type": "Anime",
    "author": "Madhouse",
    "genres": [
      "Psychological",
      "Horror",
      "Mystery"
    ],
    "year": 2000,
    "note": "Narration non-linéaire complexe, ambiance proche de Serial Experiments Lain",
    "series": [
      "TV Series"
    ]
  },
  {
    "title": "Dennou Coil",
    "type": "Anime",
    "author": "Mitsuo Iso",
    "genres": [
      "Science-fiction",
      "Mystery",
      "Cyberpunk"
    ],
    "year": 2007,
    "note": "Cyberpunk subtil qui devient étonnamment sombre et profond",
    "series": [
      "Complete Series"
    ]
  },
  {
    "title": "Wolf's Rain",
    "type": "Anime",
    "author": "BONES",
    "genres": [
      "Post-apocalyptic",
      "Psychological",
      "Fantasy"
    ],
    "year": 2003,
    "note": "De l'auteur de Cyber City Oedo 808, mais plus philosophique",
    "series": [
      "TV Series",
      "OVA"
    ]
  },
  {
    "title": "Coppelion",
    "type": "Manga",
    "author": "Tomonori Inoue",
    "genres": [
      "Post-apocalyptic",
      "Science-fiction",
      "Action"
    ],
    "year": 2008,
    "note": "Mélange unique d'action post-apocalyptique et de commentaire sur l'énergie nucléaire",
    "series": [
      "Complete Series"
    ]
  },
  {
    "title": "Malice@Doll",
    "type": "Anime",
    "author": "Keitarō Motonaga",
    "genres": [
      "Cyberpunk",
      "Horror",
      "Psychological"
    ],
    "year": 2001,
    "note": "Expérimental, mélange d'animation traditionnelle et 3D, thèmes d'humanité comme dans Ghost in the Shell",
    "series": [
      "Film"
    ]
  },
  {
    "title": "Blue Gender",
    "type": "Anime",
    "author": "Ryōsuke Takahashi",
    "genres": [
      "Horror",
      "Military",
      "Science-fiction"
    ],
    "year": 1999,
    "note": "Comme Genocyber mais avec plus de développement militaire et psychologique",
    "series": [
      "TV Series",
      "The Warrior"
    ]
  },
  {
    "title": "Roujin Z",
    "type": "Anime",
    "author": "Katsuhiro Otomo",
    "genres": [
      "Science-fiction",
      "Dark Comedy",
      "Social Commentary"
    ],
    "year": 1991,
    "note": "Du créateur d'Akira, satire sociale sur le vieillissement et la technologie",
    "series": [
      "Film"
    ]
  },
  {
    "title": "Sadamitsu the Destroyer",
    "type": "Manga",
    "author": "Yuuki Hoshino",
    "genres": [
      "Science-fiction",
      "Action",
      "Cyberpunk"
    ],
    "year": 1999,
    "note": "Action cyberpunk brutal avec des thèmes similaires à Guyver",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "King of Thorn",
    "type": "Manga",
    "author": "Yuji Iwahara",
    "genres": [
      "Horror",
      "Science-fiction",
      "Psychological"
    ],
    "year": 2002,
    "note": "Horreur psychologique sophistiquée avec des éléments de hard sci-fi",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "King of Thorn OVA",
    "type": "Anime",
    "author": "Sunrise",
    "genres": [
      "Horror",
      "Science-fiction",
      "Psychological"
    ],
    "year": 2009,
    "note": "Mélange d'horreur corporelle et de science-fiction psychologique",
    "series": [
      "Film"
    ]
  },
  {
    "title": "MD Geist",
    "type": "Anime",
    "author": "Koichi Ohata",
    "genres": [
      "Post-apocalyptic",
      "Action",
      "Cyberpunk"
    ],
    "year": 1986,
    "note": "Ultra-violent comme Genocyber, du même réalisateur",
    "series": [
      "Director's Cut",
      "Death Force"
    ]
  },
  {
    "title": "Armored Trooper Votoms",
    "type": "Anime",
    "author": "Ryōsuke Takahashi",
    "genres": [
      "Military",
      "Mecha",
      "Political"
    ],
    "year": 1983,
    "note": "Mecha réaliste et sombre, plus proche de la hard science que Gundam",
    "series": [
      "TV Series",
      "OVAs"
    ]
  },
  {
    "title": "Gankutsuou",
    "note": "Adaptation SF du Comte de Monte-Cristo",
    "year": 2004,
    "series": "TV Series",
    "type": "Anime",
    "author": "Gonzo",
    "genres": [
      "Science-fiction",
      "Mystery",
      "Drama"
    ]
  },
  {
    "title": "Vinland Saga",
    "type": "Manga",
    "author": "Makoto Yukimura",
    "genres": [
      "Historical",
      "Action",
      "Psychological"
    ],
    "year": 2005,
    "note": "De l'auteur de Planetes, évolution d'un personnage de la vengeance vers la paix",
    "series": [
      "Part 1 - War",
      "Part 2 - Slave",
      "Part 3 - Eastern Expedition",
      "Part 4 - Final"
    ]
  },
  {
    "title": "Shin Angyo Onshi",
    "type": "Manhwa",
    "author": "In-Wan Youn",
    "genres": [
      "Dark Fantasy",
      "Historical",
      "Psychological"
    ],
    "year": 2001,
    "note": "Souvent considéré comme le Berserk coréen, mélange unique de folklore asiatique",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Shin Angyo Onshi: The Movie",
    "type": "Anime",
    "author": "Park Joong-kwon",
    "genres": [
      "Dark Fantasy",
      "Historical",
      "Action"
    ],
    "year": 2004,
    "note": "Adaptation animée du manhwa, aussi connu sous le titre 'Blade of the Phantom Master'",
    "series": [
      "Film"
    ]
  },
  {
    "title": "Rainbow",
    "type": "Manga",
    "author": "George Abe",
    "genres": [
      "Historical",
      "Drama",
      "Psychological"
    ],
    "year": 2002,
    "note": "Drame dur mais profondément humain sur des jeunes dans le Japon d'après-guerre",
    "series": [
      "Nisha Rokubō no Shichinin"
    ]
  },
  {
    "title": "Kasane",
    "type": "Manga",
    "author": "Daruma Matsuura",
    "genres": [
      "Psychological",
      "Horror",
      "Drama"
    ],
    "year": 2013,
    "note": "Thriller psychologique sur l'identité et la beauté",
    "series": [
      "Part 1",
      "Part 2"
    ]
  },
  {
    "title": "Devilman Crybaby",
    "type": "Anime",
    "author": "Masaaki Yuasa",
    "genres": [
      "Horror",
      "Psychological",
      "Action"
    ],
    "year": 2018,
    "note": "Réinterprétation moderne et expérimentale du manga classique",
    "series": [
      "Netflix Series"
    ]
  },
  {
    "title": "Legend of the Northern Blade",
    "type": "Manhwa",
    "author": "Woo-Gak",
    "genres": [
      "Action",
      "Martial Arts",
      "Dark Fantasy"
    ],
    "year": 2019,
    "note": "Plus sérieux que Yongbi mais avec une excellente construction du monde",
    "series": [
      "Season 1",
      "Season 2"
    ]
  },
  {
    "title": "Kokou no Hito",
    "type": "Manga",
    "author": "Shinichi Sakamoto",
    "genres": [
      "Psychological",
      "Sports",
      "Drama"
    ],
    "year": 2007,
    "note": "Utilise l'alpinisme comme métaphore de la lutte intérieure",
    "series": [
      "The Climber"
    ]
  },
  {
    "title": "Ping Pong",
    "type": "Anime",
    "author": "Masaaki Yuasa",
    "genres": [
      "Sports",
      "Psychological",
      "Coming of age"
    ],
    "year": 2014,
    "note": "Animation expérimentale, exploration psychologique profonde",
    "series": [
      "The Animation"
    ]
  },
  {
    "title": "Kingdom",
    "type": "Manga",
    "author": "Yasuhisa Hara",
    "genres": [
      "Historical",
      "Military",
      "Action"
    ],
    "year": 2006,
    "note": "Épopée historique chinoise avec une excellente stratégie militaire",
    "series": [
      "Season 1",
      "Season 2",
      "Season 3",
      "Season 4"
    ]
  },
  {
    "title": "Umineko no Naku Koro ni",
    "type": "Manga",
    "author": "Ryukishi07",
    "genres": [
      "Mystery",
      "Psychological",
      "Horror"
    ],
    "year": 2007,
    "note": "Mystère complexe mélangeant réalité et fantaisie",
    "series": [
      "Question Arcs",
      "Answer Arcs"
    ]
  },
  {
    "title": "Mardock Scramble",
    "type": "Anime",
    "author": "GoHands",
    "genres": [
      "Cyberpunk",
      "Psychological",
      "Action"
    ],
    "year": 2010,
    "note": "Ultraviolence stylisée à la Ghost in the Shell avec des thèmes de traumatisme et rédemption",
    "series": [
      "The First Compression",
      "The Second Combustion",
      "The Third Exhaust"
    ]
  },
  {
    "title": "Gyo",
    "type": "Manga",
    "author": "Junji Ito",
    "genres": [
      "Horror",
      "Body Horror",
      "Apocalyptic"
    ],
    "year": 2001,
    "note": "Horreur écologique et mécanique par le maître de l'horreur manga",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Harmony",
    "type": "Anime",
    "author": "Studio 4°C",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Cyberpunk"
    ],
    "year": 2015,
    "note": "Du Project Itoh, dystopie médicale philosophiquement dense",
    "series": [
      "Film"
    ]
  },
  {
    "title": "Gantz:O",
    "type": "Anime",
    "author": "Digital Frontier",
    "genres": [
      "Horror",
      "Action",
      "Science-fiction"
    ],
    "year": 2016,
    "note": "Adaptation CG ultraviolente qui respecte l'esprit du manga original",
    "series": [
      "Film"
    ]
  },
  {
    "title": "Inuyashiki",
    "type": "Manga",
    "author": "Hiroya Oku",
    "genres": [
      "Science-fiction",
      "Psychological",
      "Action"
    ],
    "year": 2014,
    "note": "Du créateur de Gantz, violence extrême avec questionnement moral",
    "series": [
      "Complete Edition"
    ]
  },
  {
    "title": "Sidonia no Kishi",
    "type": "Manga",
    "author": "Tsutomu Nihei",
    "genres": [
      "Science-fiction",
      "Space",
      "Horror"
    ],
    "year": 2009,
    "note": "Du créateur de BLAME!, mêle horreur cosmique et survie spatiale",
    "series": [
      "Complete Series"
    ]
  },
  {
    "title": "APOSIMZ",
    "type": "Manga",
    "author": "Tsutomu Nihei",
    "genres": [
      "Science-fiction",
      "Post-apocalyptic",
      "Action"
    ],
    "year": 2016,
    "note": "Nouveau style de Nihei mais même profondeur dystopique",
    "series": [
      "Complete Series"
    ]
  }
];



works.forEach(o => {
  if (!Array.isArray(o.series)) {
    o.series = [o.series]
  }
})




require('fs').writeFileSync('missing.txt',JSON.stringify(works, null, 2))
