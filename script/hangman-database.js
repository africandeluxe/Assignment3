const hangmanDatabase = [
  {
    id: 1,
    word: "oxygen",
    hint: "A colorless, odorless gas essential for life.",
  },
  {
    id: 2,
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface.",
  },
  {
    id: 3,
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena.",
  },
  {
    id: 4,
    word: "sun",
    hint: "The star at the center of our solar system.",
  },
  {
    id: 5,
    word: "dog",
    hint: "A domesticated mammal often kept as a pet.",
  },
  {
    id: 6,
    word: "moon",
    hint: "A natural satellite of the Earth.",
  },
  {
    id: 7,
    word: "car",
    hint: "A wheeled motor vehicle used for transportation.",
  },
  {
    id: 8,
    word: "bird",
    hint: "A warm-blooded, feathered vertebrate.",
  },
  {
    id: 9,
    word: "house",
    hint: "A building for human habitation.",
  },
  {
    id: 10,
    word: "river",
    hint: "A natural flowing watercourse.",
  },
  {
    id: 11,
    word: "watch",
    hint: "A timekeeping device worn on the wrist.",
  },
  {
    id: 12,
    word: "cat",
    hint: "A small domesticated carnivorous mammal.",
  },
  {
    id: 13,
    word: "pen",
    hint: "A writing instrument used to apply ink to paper.",
  },
  {
    id: 14,
    word: "football",
    hint: "A popular team sport played with a ball.",
  },
  {
    id: 15,
    word: "planet",
    hint: "A celestial body orbiting a star.",
  },
  {
    id: 16,
    word: "shoes",
    hint: "Footwear typically worn on the feet.",
  },
  {
    id: 17,
    word: "key",
    hint: "A small metal instrument used to lock or unlock things.",
  },
  {
    id: 18,
    word: "bike",
    hint: "A two-wheeled vehicle powered by pedaling.",
  },
  {
    id: 19,
    word: "garden",
    hint: "An outdoor area for growing plants.",
  },
  {
    id: 20,
    word: "hat",
    hint: "A covering for the head.",
  },
  {
    id: 21,
    word: "fire",
    hint: "The rapid oxidation of a material producing heat and light.",
  },
  {
    id: 22,
    word: "ball",
    hint: "A spherical object used in various sports and games.",
  },
  {
    id: 23,
    word: "shirt",
    hint: "A garment worn on the upper body.",
  },
  {
    id: 24,
    word: "bus",
    hint: "A large vehicle for transporting passengers.",
  },
  {
    id: 25,
    word: "map",
    hint: "A visual representation of an area.",
  },
  {
    id: 26,
    word: "bees",
    hint: "Flying insects known for making honey.",
  },
  {
    id: 27,
    word: "chocolate",
    hint: "A sweet food product made from cacao beans.",
  },
  {
    id: 28,
    word: "history",
    hint: "The study of past events and human civilization.",
  },
  {
    id: 29,
    word: "pizza",
    hint: "A savory dish consisting of a round, flattened base with toppings.",
  },
  {
    id: 30,
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    id: 31,
    word: "diamond",
    hint: "A precious gemstone known for its brilliance and hardness.",
  },
  {
    id: 32,
    word: "adventure",
    hint: "An exciting or daring experience.",
  },
  {
    id: 33,
    word: "rainbow",
    hint: "A meteorological phenomenon with a spectrum of colors.",
  },
  {
    id: 34,
    word: "shark",
    hint: "A large, carnivorous fish with sharp teeth.",
  },
  {
    id: 35,
    word: "television",
    hint: "An electronic device for watching broadcasts.",
  },
  {
    id: 36,
    word: "pencil",
    hint: "A writing instrument used to make marks on paper.",
  },
  {
    id: 37,
    word: "clock",
    hint: "A timekeeping device with hands or digits.",
  },
  {
    id: 38,
    word: "cookie",
    hint: "A sweet baked treat typically made from dough.",
  },
  {
    id: 39,
    word: "dog",
    hint: "A domesticated mammal often kept as a pet.",
  },
  {
    id: 40,
    word: "map",
    hint: "A visual representation of an area.",
  },
  {
    id: 41,
    word: "hat",
    hint: "A covering for the head.",
  },
  {
    id: 42,
    word: "car",
    hint: "A wheeled motor vehicle used for transportation.",
  },
  {
    id: 43,
    word: "ocean",
    hint: "A vast body of saltwater covering most of the Earth's surface.",
  },
  {
    id: 44,
    word: "sunglasses",
    hint: "Eyewear to protect eyes from the sun.",
  },
  {
    id: 45,
    word: "computer",
    hint: "An electronic device for processing data.",
  },
  {
    id: 46,
    word: "icecream",
    hint: "A frozen dessert made from dairy products.",
  },
  {
    id: 47,
    word: "key",
    hint: "A small metal instrument used to lock or unlock things.",
  },
  {
    id: 48,
    word: "camera",
    hint: "A device for capturing still or moving images.",
  },
  {
    id: 49,
    word: "hat",
    hint: "A covering for the head.",
  },
  {
    id: 50,
    word: "pen",
    hint: "A writing instrument used to apply ink to paper.",
  },
  {
    id: 51,
    word: "glasses",
    hint: "Eyewear for improving vision.",
  },
  {
    id: 52,
    word: "flag",
    hint: "A piece of fabric with distinctive colors and symbols.",
  },
  {
    id: 53,
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  {
    id: 54,
    word: "school",
    hint: "An institution for education.",
  },
  {
    id: 55,
    word: "dance",
    hint: "A rhythmic movement of the body often performed to music.",
  },
  {
    id: 56,
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    id: 57,
    word: "orchestra",
    hint: "A large ensemble of musicians playing various instruments.",
  },
  {
    id: 58,
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
  },
  {
    id: 59,
    word: "novel",
    hint: "A long work of fiction, typically with a complex plot and characters.",
  },
  {
    id: 60,
    word: "sculpture",
    hint: "A three-dimensional art form created by shaping or combining materials.",
  },
  {
    id: 61,
    word: "symphony",
    hint: "A long musical composition for a full orchestra, typically in multiple movements.",
  },
  {
    id: 62,
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    id: 63,
    word: "ballet",
    hint: "A classical dance form characterized by precise and graceful movements.",
  },
  {
    id: 64,
    word: "astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    id: 65,
    word: "waterfall",
    hint: "A cascade of water falling from a height.",
  },
  {
    id: 66,
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes.",
  },
  {
    id: 67,
    word: "universe",
    hint: "All existing matter, space, and time as a whole.",
  },
  {
    id: 68,
    word: "piano",
    hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
  },
  {
    id: 69,
    word: "vacation",
    hint: "A period of time devoted to pleasure, rest, or relaxation.",
  },
  {
    id: 70,
    word: "bicycle",
    hint: "A two-wheeled vehicle powered by pedaling.",
  },
  {
    id: 71,
    word: "guitar",
    hint: "A musical instrument with strings.",
  },
  {
    id: 72,
    word: "dog",
    hint: "A domesticated mammal often kept as a pet.",
  },
  {
    id: 73,
    word: "map",
    hint: "A visual representation of an area.",
  },
  {
    id: 74,
    word: "hat",
    hint: "A covering for the head.",
  },
  {
    id: 75,
    word: "car",
    hint: "A wheeled motor vehicle used for transportation.",
  },
  {
    id: 76,
    word: "beach",
    hint: "A sandy shoreline along a body of water.",
  },
  {
    id: 77,
    word: "soccer",
    hint: "A popular sport played with a ball on a field.",
  },
  {
    id: 78,
    word: "coffee",
    hint: "A caffeinated beverage made from roasted beans.",
  },
  {
    id: 79,
    word: "key",
    hint: "A small metal instrument used to lock or unlock things.",
  },
  {
    id: 80,
    word: "globe",
    hint: "A spherical representation of the Earth's surface.",
  },
  {
    id: 81,
    word: "hat",
    hint: "A covering for the head.",
  },
  {
    id: 82,
    word: "pen",
    hint: "A writing instrument used to apply ink to paper.",
  },
  {
    id: 83,
    word: "music",
    hint: "An art form consisting of organized sound elements.",
  },
  {
    id: 84,
    word: "fireworks",
    hint: "Explosive devices producing colorful displays in the sky.",
  },
  {
    id: 85,
    word: "swimming",
    hint: "The act of moving through water.",
  },
  {
    id: 86,
    word: "rainforest",
    hint: "A dense forest characterized by high rainfall and biodiversity.",
  },
  {
    id: 87,
    word: "theater",
    hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
  },
  {
    id: 88,
    word: "telephone",
    hint: "A device used to transmit sound over long distances.",
  },
  {
    id: 89,
    word: "language",
    hint: "A system of communication consisting of words, gestures, and syntax.",
  },
  {
    id: 90,
    word: "desert",
    hint: "A barren or arid land with little or no precipitation.",
  },
  {
    id: 91,
    word: "fantasy",
    hint: "A genre of imaginative fiction involving magic and supernatural elements.",
  },
  {
    id: 92,
    word: "telescope",
    hint: "An optical instrument used to view distant objects in space.",
  },
  {
    id: 93,
    word: "breeze",
    hint: "A gentle wind.",
  },
  {
    id: 94,
    word: "oasis",
    hint: "A fertile spot in a desert where water is found.",
  },
  {
    id: 95,
    word: "photography",
    hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
  },
  {
    id: 96,
    word: "safari",
    hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
  },
  {
    id: 97,
    word: "bathroom",
    hint: "A room used for personal hygiene activities.",
  },
  {
    id: 98,
    word: "painting",
    hint: "An artistic creation using colors on a canvas.",
  },
  {
    id: 99,
    word: "basketball",
    hint: "A team sport played with a ball and a hoop.",
  },
  {
    id: 100,
    word: "cloud",
    hint: "A visible mass of water droplets or ice crystals in the sky.",
  },
  {
    id: 101,
    word: "sun",
    hint: "The star at the center of our solar system.",
  },
  {
    id: 102,
    word: "flower",
    hint: "The reproductive structure found in plants.",
  },
  {
    id: 103,
    word: "dog",
    hint: "A domesticated mammal often kept as a pet.",
  },
  {
    id: 104,
    word: "map",
    hint: "A visual representation of an area.",
  },
  {
    id: 105,
    word: "book",
    hint: "A written or printed work consisting of pages.",
  },
  {
    id: 106,
    word: "hat",
    hint: "A covering for the head.",
  },
  {
    id: 107,
    word: "car",
    hint: "A wheeled motor vehicle used for transportation.",
  },
  {
    id: 108,
    word: "phone",
    hint: "A communication device for making calls.",
  },
  {
    id: 109,
    word: "tree",
    hint: "A tall, woody plant with branches and leaves.",
  },
  {
    id: 110,
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon.",
  },
  {
    id: 111,
    word: "mirror",
    hint: "A reflective surface for viewing oneself.",
  },
  {
    id: 112,
    word: "movie",
    hint: "A motion picture or film.",
  },
  {
    id: 113,
    word: "chair",
    hint: "A piece of furniture for sitting on.",
  },
  {
    id: 114,
    word: "key",
    hint: "A small metal instrument used to lock or unlock things.",
  },
  {
    id: 115,
    word: "candle",
    hint: "A source of light made from wax and a wick.",
  },
  {
    id: 116,
    word: "hat",
    hint: "A covering for the head.",
  },
  {
    id: 117,
    word: "rain",
    hint: "Precipitation in the form of water droplets from the sky.",
  },
  {
    id: 118,
    word: "butterfly",
    hint: "A colorful insect with large, often brightly colored wings.",
  },
  {
    id: 119,
    word: "ship",
    hint: "A large watercraft used for transportation on water.",
  },
  {
    id: 120,
    word: "pen",
    hint: "A writing instrument used to apply ink to paper.",
  },
  {
    id: 121,
    word: "sand",
    hint: "Small, loose particles of rock and mineral",
  },
  {
    id: 122,
    word: "tropical",
    hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
  },
  {
    id: 123,
    word: "enigma",
    hint: "Something that is mysterious, puzzling, or difficult to understand.",
  },
  {
    id: 124,
    word: "mysterious",
    hint: "Difficult or impossible to understand, explain, or identify.",
  },
  {
    id: 125,
    word: "paradox",
    hint: "A statement or situation that contradicts itself or defies intuition.",
  },
  {
    id: 126,
    word: "puzzle",
    hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
  },
  {
    id: 127,
    word: "whisper",
    hint: "To speak very softly or quietly, often in a secretive manner.",
  },
  {
    id: 128,
    word: "shadow",
    hint: "A dark area or shape produced by an object blocking the light.",
  },
  {
    id: 129,
    word: "secret",
    hint: "Something kept hidden or unknown to others.",
  },
  {
    id: 130,
    word: "curiosity",
    hint: "A strong desire to know or learn something.",
  },
  {
    id: 131,
    word: "unpredictable",
    hint: "Not able to be foreseen or known beforehand; uncertain.",
  },
  {
    id: 132,
    word: "obfuscate",
    hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
  },
  {
    id: 133,
    word: "unveil",
    hint: "To make known or reveal something previously secret or unknown.",
  },
  {
    id: 134,
    word: "illusion",
    hint: "A false perception or belief; a deceptive appearance or impression.",
  },
  {
    id: 135,
    word: "moonlight",
    hint: "The light from the moon.",
  },
  {
    id: 136,
    word: "vibrant",
    hint: "Full of energy, brightness, and life.",
  },
  {
    id: 137,
    word: "nostalgia",
    hint: "A sentimental longing or wistful affection for the past.",
  },
  {
    id: 138,
    word: "brilliant",
    hint: "Exceptionally clever, talented, or impressive.",
  },
];
