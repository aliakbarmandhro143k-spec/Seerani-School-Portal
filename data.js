/* ==========================================================
   SEERANI SCHOOL PORTAL - DATA FILE
   Yeh wahid file hai jise aapne edit karna hai.
   Har section ke andar naye items copy-paste karke add karein.
   Entries jin par "(SAMPLE)" likha hai woh sirf namoona hain -
   unhe apni asal maloomat se badal dein ya delete kar dein.
   ========================================================== */
window.PORTAL_DATA = {

  school: {
    name: "Government Boys Higher Secondary School Seerani",
    place: "Seerani, District Badin, Sindh"
  },

  /* ---------- 1. PAST PAPERS ----------
     file: PDF ka path. PDF ko papers/ folder mein upload karein.
     Masalan: papers/class6/english-2024.pdf                      */
  papers: [
    { cls: 6,  subject: "English",   year: 2024, title: "Annual Examination", file: "papers/class6/english-2024.pdf" },
    { cls: 6,  subject: "Maths",     year: 2024, title: "Annual Examination", file: "papers/class6/maths-2024.pdf" },
    { cls: 7,  subject: "Science",   year: 2024, title: "Annual Examination", file: "papers/class7/science-2024.pdf" },
    { cls: 7,  subject: "Urdu",      year: 2023, title: "Annual Examination", file: "papers/class7/urdu-2023.pdf" },
    { cls: 8,  subject: "Maths",     year: 2024, title: "Annual Examination", file: "papers/class8/maths-2024.pdf" },
    { cls: 8,  subject: "Sindhi",    year: 2023, title: "Annual Examination", file: "papers/class8/sindhi-2023.pdf" },
    { cls: 9,  subject: "Physics",   year: 2024, title: "Board Paper",        file: "papers/class9/physics-2024.pdf" },
    { cls: 9,  subject: "Chemistry", year: 2023, title: "Board Paper",        file: "papers/class9/chemistry-2023.pdf" },
    { cls: 10, subject: "Biology",   year: 2024, title: "Board Paper",        file: "papers/class10/biology-2024.pdf" },
    { cls: 10, subject: "English",   year: 2024, title: "Board Paper",        file: "papers/class10/english-2024.pdf" }
  ],

  /* ---------- 2. STUDENT ACHIEVEMENTS ----------
     category: "Position Holder" | "Certificate" | "Competition"
     photo: optional, jaise "images/students/ali.jpg"            */
  studentAchievements: [
    { name: "Student Name (SAMPLE)", cls: "Class 10", title: "1st Position - Annual Exam", category: "Position Holder", year: 2025, photo: "" },
    { name: "Student Name (SAMPLE)", cls: "Class 9",  title: "Certificate of Excellence", category: "Certificate",    year: 2025, photo: "" },
    { name: "Student Name (SAMPLE)", cls: "Class 8",  title: "Winner - Taluka Quiz Competition", category: "Competition", year: 2025, photo: "" }
  ],

  /* ---------- 3. SCHOOL ACHIEVEMENTS ----------
     category: "Award" | "Sports" | "Science Exhibition"          */
  schoolAchievements: [
    { title: "Best School Award (SAMPLE)",        category: "Award",              year: 2025, text: "Yahan award ki tafseel likhein." },
    { title: "Inter-School Cricket Winner (SAMPLE)", category: "Sports",          year: 2025, text: "Yahan muqable ki tafseel likhein." },
    { title: "Science Exhibition - Top Stall (SAMPLE)", category: "Science Exhibition", year: 2025, text: "Yahan exhibition ki tafseel likhein." }
  ],

  /* ---------- 4. TEACHERS ----------
     photo: optional, jaise "images/teachers/sir-ali.jpg"          */
  teachers: [
    { name: "Head Master (SAMPLE)", subject: "Administration", qualification: "M.A, B.Ed", role: "Head Master", photo: "" },
    { name: "Teacher Name (SAMPLE)", subject: "Mathematics",   qualification: "M.Sc, B.Ed", role: "Subject Teacher", photo: "" },
    { name: "Teacher Name (SAMPLE)", subject: "English",       qualification: "M.A English, B.Ed", role: "Subject Teacher", photo: "" },
    { name: "Teacher Name (SAMPLE)", subject: "Science",       qualification: "M.Sc, B.Ed", role: "Subject Teacher", photo: "" }
  ],

  /* ---------- 5. NOTICE BOARD ----------
     date: YYYY-MM-DD   |   important: true/false
     category: "Exam" | "Holiday" | "General" | "Admission"        */
  notices: [
    { date: "2026-11-10", title: "Annual exam datesheet (SAMPLE)", category: "Exam",    important: true,  text: "Datesheet jald school notice board par lagayi jayegi." },
    { date: "2026-11-05", title: "Parent-Teacher meeting (SAMPLE)", category: "General", important: false, text: "Waldain se guzarish hai ke meeting mein shirkat karein." },
    { date: "2026-10-28", title: "Winter vacation notice (SAMPLE)", category: "Holiday", important: false, text: "Sardiyon ki chuttiyon ki tareekh ka elaan baad mein kiya jayega." }
  ],

  /* ---------- 6. DIGITAL LIBRARY ----------
     type: "Book" | "Notes" | "Educational PDF"
     cls: "6" ... "10" ya "All"                                   */
  library: [
    { title: "Maths Class 6 - Textbook",  type: "Book",            cls: "6",   subject: "Maths",   file: "library/books/maths-6.pdf" },
    { title: "Physics Class 9 - Notes",   type: "Notes",           cls: "9",   subject: "Physics", file: "library/notes/physics-9-notes.pdf" },
    { title: "English Grammar Guide",     type: "Educational PDF", cls: "All", subject: "English", file: "library/pdfs/english-grammar.pdf" },
    { title: "Biology Class 10 - Notes",  type: "Notes",           cls: "10",  subject: "Biology", file: "library/notes/biology-10-notes.pdf" }
  ],

  /* ---------- 7. ONLINE TESTS ----------
     answer = sahi option ka number (0 se shuru: 0=pehla, 1=doosra...) */
  tests: [
    { id: "maths", title: "Maths - Basic", subject: "Maths", cls: "6-8", questions: [
      { q: "What is 15% of 200?", options: ["20", "30", "25", "35"], answer: 1 },
      { q: "Solve: x + 7 = 12. What is x?", options: ["4", "5", "6", "19"], answer: 1 },
      { q: "Area of a rectangle with length 8 and width 5 is:", options: ["13", "26", "40", "45"], answer: 2 },
      { q: "Square root of 144 is:", options: ["10", "11", "12", "14"], answer: 2 },
      { q: "The sum of all angles of a triangle is:", options: ["90°", "180°", "270°", "360°"], answer: 1 }
    ]},
    { id: "science", title: "General Science", subject: "Science", cls: "6-8", questions: [
      { q: "Which part of the cell is called the 'powerhouse'?", options: ["Nucleus", "Ribosome", "Mitochondria", "Cell wall"], answer: 2 },
      { q: "Plants take in which gas for photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: 1 },
      { q: "Chemical formula of water is:", options: ["CO₂", "H₂O", "O₂", "NaCl"], answer: 1 },
      { q: "SI unit of force is:", options: ["Joule", "Watt", "Newton", "Pascal"], answer: 2 },
      { q: "Which planet is closest to the Sun?", options: ["Venus", "Earth", "Mars", "Mercury"], answer: 3 }
    ]},
    { id: "english", title: "English Grammar", subject: "English", cls: "6-10", questions: [
      { q: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], answer: 1 },
      { q: "Plural of 'child' is:", options: ["childs", "childes", "children", "childrens"], answer: 2 },
      { q: "Opposite of 'ancient' is:", options: ["old", "modern", "huge", "weak"], answer: 1 },
      { q: "Which word is a proper noun?", options: ["run", "quickly", "Karachi", "beautiful"], answer: 2 },
      { q: "I have ___ apple.", options: ["a", "an", "the", "some"], answer: 1 }
    ]},
    { id: "sindh", title: "Know Your Pakistan & Sindh", subject: "General Knowledge", cls: "6-10", questions: [
      { q: "What is the capital city of Sindh?", options: ["Hyderabad", "Sukkur", "Karachi", "Larkana"], answer: 2 },
      { q: "Which is the longest river of Pakistan?", options: ["Jhelum", "Indus", "Ravi", "Chenab"], answer: 1 },
      { q: "Pakistan Day is celebrated on:", options: ["14 August", "23 March", "25 December", "6 September"], answer: 1 },
      { q: "Who is known as the founder of Pakistan?", options: ["Allama Iqbal", "Liaquat Ali Khan", "Quaid-e-Azam Muhammad Ali Jinnah", "Sir Syed Ahmad Khan"], answer: 2 },
      { q: "Mohenjo-daro belongs to which ancient civilization?", options: ["Egyptian", "Indus Valley", "Roman", "Mesopotamian"], answer: 1 }
    ]},
    { id: "computer", title: "Computer Basics", subject: "Computer", cls: "6-10", questions: [
      { q: "CPU stands for:", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing Unit"], answer: 0 },
      { q: "Which of these is an input device?", options: ["Monitor", "Printer", "Keyboard", "Speaker"], answer: 2 },
      { q: "Which is an operating system?", options: ["Google", "Windows", "Chrome", "Excel"], answer: 1 },
      { q: "1 byte equals how many bits?", options: ["2", "4", "8", "16"], answer: 2 },
      { q: "Which of these should you NEVER share with anyone?", options: ["Your favourite colour", "Your OTP / password", "Your class name", "Your school name"], answer: 1 }
    ]}
  ],

  /* ---------- 8. STEAM PROJECTS ----------
     category: "Science" | "Technology" | "Engineering" | "Art" | "Maths"
     image: optional, jaise "images/steam/solar-model.jpg"         */
  steam: [
    { title: "Solar Energy Model (SAMPLE)", category: "Science",     students: "Student names", cls: "Class 9",  text: "Project ki mukhtasar tafseel yahan likhein.", image: "" },
    { title: "Water Filter (SAMPLE)",       category: "Engineering", students: "Student names", cls: "Class 10", text: "Project ki mukhtasar tafseel yahan likhein.", image: "" },
    { title: "Geometry Models (SAMPLE)",    category: "Maths",       students: "Student names", cls: "Class 8",  text: "Project ki mukhtasar tafseel yahan likhein.", image: "" }
  ],

  /* ---------- 9. SCHOOL CALENDAR ----------
     Ek hi din ka event:   { date: "2026-12-10", title: "...", type: "exam" }
     Har saal dohrane wala: { md: "08-14", title: "...", type: "holiday" }
     type: "exam" | "holiday" | "event"
     Mulki chuttiyon ki tareekhein har saal wohi hoti hain; Eid, Muharram
     wagera chand par munhasir hain, unhe khud date daal kar add karein.   */
  calendar: [
    { md: "02-05", title: "Kashmir Solidarity Day",     type: "holiday" },
    { md: "03-23", title: "Pakistan Day",               type: "holiday" },
    { md: "05-01", title: "Labour Day",                 type: "holiday" },
    { md: "08-14", title: "Independence Day",           type: "holiday" },
    { md: "10-05", title: "Teachers' Day",              type: "event" },
    { md: "11-09", title: "Iqbal Day",                  type: "event" },
    { md: "12-25", title: "Quaid-e-Azam Day",           type: "holiday" },
    { date: "2026-12-14", title: "Annual Exams begin (SAMPLE)", type: "exam" },
    { date: "2026-11-28", title: "Parent-Teacher Meeting (SAMPLE)", type: "event" }
  ],

  /* ---------- 10. PHOTO GALLERY ----------
     Photos ko images/gallery/ folder mein upload karein.
     category: "Events" | "Sports" | "Science" | "Classroom"       */
  gallery: [
    { src: "download.jpeg",        caption: "School Photo 1", category: "Events" },
    { src: "download%20(1).jpeg",  caption: "School Photo 2", category: "Events" },
    { src: "download%20(2).jpeg",  caption: "School Photo 3", category: "Events" }
  ],

  /* ---------- 11. ENGLISH LEARNING ---------- */
  vocab: [
    { w: "Honest",       ur: "ایماندار",       ex: "A good student is always honest." },
    { w: "Brave",        ur: "بہادر",          ex: "The brave boy saved his friend." },
    { w: "Knowledge",    ur: "علم",            ex: "Knowledge is power." },
    { w: "Discipline",   ur: "نظم و ضبط",      ex: "Discipline is important in school." },
    { w: "Respect",      ur: "عزت / احترام",   ex: "We should respect our teachers." },
    { w: "Courage",      ur: "ہمت",            ex: "It takes courage to say the truth." },
    { w: "Gratitude",    ur: "شکر گزاری",      ex: "She showed gratitude to her parents." },
    { w: "Curious",      ur: "متجسس",          ex: "Children are curious about everything." },
    { w: "Journey",      ur: "سفر",            ex: "Our journey to Badin was long." },
    { w: "Improve",      ur: "بہتر بنانا",     ex: "Reading daily will improve your English." },
    { w: "Responsible",  ur: "ذمہ دار",        ex: "He is a responsible student." },
    { w: "Opportunity",  ur: "موقع",           ex: "Education gives us a great opportunity." }
  ],

  grammar: [
    { title: "Parts of Speech", ur: "کلمے کی اقسام",
      text: "Every word in a sentence has a job. Noun = name (Ali, Badin, book). Pronoun = replaces a noun (he, she, they). Verb = action (run, write). Adjective = describes a noun (tall, clever). Adverb = describes a verb (quickly, slowly).",
      examples: ["Ali (noun) reads (verb) a good (adjective) book (noun).", "She (pronoun) walks (verb) slowly (adverb)."] },
    { title: "Simple Present Tense", ur: "حال مطلق",
      text: "Use it for habits and facts. With he / she / it, add -s or -es to the verb. Negative: do not / does not + verb. Question: Do / Does + subject + verb.",
      examples: ["I play cricket every evening.", "He plays cricket every evening.", "She does not like tea.", "Do you walk to school?"] },
    { title: "Articles: a, an, the", ur: "حروفِ تعریف",
      text: "Use 'a' before a consonant sound (a book), 'an' before a vowel sound (an apple, an hour), and 'the' for a particular, known thing (the sun, the school).",
      examples: ["I have a pen.", "She eats an orange.", "The teacher is in the class."] },
    { title: "Simple Past Tense", ur: "ماضی مطلق",
      text: "Use it for finished actions. Regular verbs add -ed (played). Irregular verbs change form (go → went, eat → ate). Negative: did not + base verb.",
      examples: ["We visited Karachi last year.", "He went to school yesterday.", "I did not see him."] }
  ],

  speaking: [
    { group: "Greetings", items: [
      { en: "Good morning, sir. How are you?", ur: "صبح بخیر سر، آپ کیسے ہیں؟" },
      { en: "I am fine, thank you. And you?",  ur: "میں ٹھیک ہوں، شکریہ۔ اور آپ؟" },
      { en: "Nice to meet you.",               ur: "آپ سے مل کر خوشی ہوئی۔" }
    ]},
    { group: "In the Classroom", items: [
      { en: "May I come in, sir?",             ur: "کیا میں اندر آ سکتا ہوں سر؟" },
      { en: "Sir, may I ask a question?",      ur: "سر، کیا میں ایک سوال پوچھ سکتا ہوں؟" },
      { en: "Could you please repeat that?",   ur: "کیا آپ دوبارہ بتا سکتے ہیں؟" },
      { en: "I did not understand this topic.", ur: "مجھے یہ موضوع سمجھ نہیں آیا۔" }
    ]},
    { group: "Introducing Yourself", items: [
      { en: "My name is Ali and I study in Class 8.", ur: "میرا نام علی ہے اور میں آٹھویں جماعت میں پڑھتا ہوں۔" },
      { en: "I live in Seerani, District Badin.",     ur: "میں سیرانی، ضلع بدین میں رہتا ہوں۔" },
      { en: "My favourite subject is Maths.",         ur: "میرا پسندیدہ مضمون ریاضی ہے۔" }
    ]},
    { group: "Asking for Help", items: [
      { en: "Excuse me, can you help me?",     ur: "معاف کیجیے، کیا آپ میری مدد کر سکتے ہیں؟" },
      { en: "Where is the library?",           ur: "لائبریری کہاں ہے؟" },
      { en: "Thank you very much for your help.", ur: "آپ کی مدد کا بہت شکریہ۔" }
    ]}
  ]
};
