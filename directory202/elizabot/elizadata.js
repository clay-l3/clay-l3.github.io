// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Hey there! How’s your day going?",
  "Hello! How are you doing?",
];

var elizaFinals = [
  "Mischief managed! Talk soon!",
  "I must not tell lies... but I do have to go. Bye!",
  "The conversation is over... for now. Nox!",
  "Until next time! May your Butterbeer always be frothy!"
];

var elizaQuits = [
  "bye",
  "goodbye",
  "exit",
  "quit",
  "see you"
];

var elizaPres = {
  "dont": "do not",
  "can't": "cannot",
  "shouldn't": "should not",
  "you're": "you are",
  "i'm": "i am",
  "i'd": "i would",
  "i've": "i have",
  "i'll": "i will",
  "quidditch": "the magical sport quidditch",
  "muggle": "non-magical person",
  "snitch": "golden snitch",
  "dementor": "a dark creature that feeds on happiness",
  "voldemort": "he who must not be named",
  "hogwarts": "the wizarding school hogwarts",
  "wand": "magic wand",
  "spell": "magical spell"
};


var elizaPosts = [
  "You're a wizard!",
  "Ah, another Hogwarts student!",
  "You remind me of someone from the books...",
  "Tell me, have you read the Harry Potter series?"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"harry potter": ["Harry Potter", "boy who lived"],
"hello": ["hi", "howdy", "Hello", "Hi"],
"how are you": ["Hows it going", "How are you",],
"hogwarts": ["castle", "Hogwarts"],
"book": ["books", "novel", "novels","Book"],
"spells": ["magic"],
"movie": ["film"]
};

var elizaKeywords = [
  ["xnone", 0, [
    ["*", [
  "Could you rephrase that? My wizarding brain needs another go!",
  "Try asking again—maybe in Parseltongue? Just kidding!",
  "I might need a Remembrall for that one. Mind trying again?",
  "That one’s tricky, but I'm up for the challenge! Ask me something else?",
  "You speak in riddles, my friend. Are you sure you're not a Ravenclaw?"
    ]]
  ]],
  ["hello", 0, [
    ["*", [
      "Hello! How are you today?",
      "Hi there! What's on your mind?",
      "Hey! How’s your day going?"
    ]]
  ]],
  ["how are you", 0, [
    ["*", [
      "I'm doing well, thanks for asking! Have you heard of harry potter?",
      "Pretty great, especially when talking about Harry Potter!",
      "I'm fantastic—just rereading some books in my head!"
    ]]
  ]],
  ["harry potter", 5, [
    ["*", [
      "Did you just mention Harry Potter? I love those books!",
      "Oh, are you a fellow Potterhead? Let’s talk magic!",
      "Which house do you think you’d be in at Hogwarts?"
    ]]
  ]],
  ["hogwarts", 4, [
    ["*", [
      "Ah, Hogwarts—the dream school! Which house do you belong to?",
      "Hogwarts is my home! Are you a Gryffindor, Hufflepuff, Ravenclaw, or Slytherin?",
      "I’d love to explore the castle’s secret passages! What’s your favorite Hogwarts location?"
    ]]
  ]],
  ["house", 3, [
    ["*", [
      "Sorting Hat time! What house do you think you'd be in?",
      "Are you brave like a Gryffindor, wise like a Ravenclaw, kind like a Hufflepuff, or ambitious like a Slytherin?",
    ]]
  ]],
  ["gryffindor", 3, [
    ["*", [
      "gryffindor! Thats cool! like harry potter!",
      "gryffindor! you must be brave!",
    ]]
  ]],
  ["ravenclaw", 3, [
    ["*", [
      "ravenclaw! Thats cool! you must be pretty smart!",
      "ravenclaw! like cedrick!",
    ]]
  ]],
  ["slytherin", 3, [
    ["*", [
      "slytherin! Thats cool! you must be very cunning!",
      "slytherin! the green and silver!",
    ]]
  ]],
  ["hufflepuff", 3, [
    ["*", [
      "hufflepuff! Thats cool! you must be very kind!",
      "hufflepuff! my favorite house!",
    ]]
  ]],
  ["favorite character", 4, [
    ["*", [
      "That’s a tough one! I love so many characters. Who’s your favorite?",
      "Hard to pick just one! Dumbledore, Hermione, Snape... what about you?",
      "I think Luna Lovegood is underrated! Who do you admire most?"
    ]]
  ]],
  ["movie", 3, [
    ["*", [
      "Are you talking about a Harry Potter movie? I can discuss them all day!",
      "The books are better than the movies, don't you think?",
      "Which Harry Potter movie is your favorite?"
    ]]
  ]],
  ["book", 3, [
    ["*", [
      "Which Harry Potter book do you love the most?",
      "Every book has its magic—do you prefer the early ones or the later ones?",
      "Have you read them multiple times like I have?"
    ]]
  ]],
  ["quidditch", 3, [
    ["*", [
      "Quidditch is the best sport! Would you rather be a Seeker, Chaser, Beater, or Keeper?",
      "I’d love to try flying on a broomstick! What about you?",
      "Do you support any professional Quidditch teams?"
    ]]
  ]],
  ["spells", 3, [
    ["*", [
      "Wingardium Leviosa! What’s your favorite spell?",
      "Expecto Patronum! What animal do you think your Patronus would be?",
      "If you could use one spell in real life, which one would it be?"
    ]]
  ]],
  ["wand", 3, [
    ["*", [
      "The wand chooses the wizard! What’s your wand made of?",
      "I wonder what Ollivander would say about your wand!",
      "Do you think your wand core would be phoenix feather, unicorn hair, or dragon heartstring?"
    ]]
  ]],
  ["goodbye", 0, [
    ["*", [
      "Goodbye! Hope we can talk about Harry Potter again soon!",
      "See you later! Mischief managed!",
      "It was great chatting! Until next time!"
    ]]
  ]]
];


var elizaDefault = [
  ["*", 0, [
    ["*", [
      "Interesting! Tell me more about that.",
      "I see. What else is on your mind?",
      "That's fascinating! Can you elaborate?"
    ]]
  ]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof