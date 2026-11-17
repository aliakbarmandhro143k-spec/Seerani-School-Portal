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


  papersNote: "Class 9 aur 10 ke Sindh board (BISE Hyderabad) ke papers neeche links se khulte hain. Class 6-8 ke liye board paper nahi hote - ye school ke annual papers hote hain; apne school ke PDF papers GitHub par upload karke yahan add karein.",
  libraryNote: "Ye links bahari websites (taleem360, Wikipedia, Dawn waghera) par khulte hain jahan STBB ki kitabein aur Shah Jo Risalo mojood hain. Apni PDF upload karni ho to GitHub par daal kar yahan 'file' mein naam likhein.",
  staffPhotos: [
    { src: "photo-09-teachers-group.jpg", caption: "Teachers in assembly" },
    { src: "photo-04-staff.jpg", caption: "School staff" }
  ],

  /* ---------- 1. PAST PAPERS ----------
     url = bahar ki website ka link, file = aapki apni PDF.
     file: PDF ka path. PDF ko papers/ folder mein upload karein.
     Masalan: papers/class6/english-2024.pdf   (ya koi bhi https:// link)                      */
  papers: [
    { cls: 10, subject: "English", years: "2021-2026", title: "BISE Hyderabad - 10th Class English", file: "https://www.eduvision.edu.pk/exam/bise-hyderabad-eng-10th-exams-13" },
    { cls: 10, subject: "Maths", years: "2021-2026", title: "BISE Hyderabad - 10th Class Mathematics", file: "https://www.eduvision.edu.pk/exam/bise-hyderabad-math-10th-exams-16" },
    { cls: 10, subject: "Physics", years: "2021-2026", title: "BISE Hyderabad - 10th Class Physics", file: "https://www.eduvision.edu.pk/exam/bise-hyderabad-physics-10th-exams-17" },
    { cls: 10, subject: "Sindhi", years: "2021-2026", title: "BISE Hyderabad - 10th Class Asan Sindhi", file: "https://www.eduvision.edu.pk/exam/bise-hyderabad-asan-sindhi-10th-exams-18" },
    { cls: 10, subject: "Urdu", years: "2021-2026", title: "BISE Hyderabad - 10th Class Salees Urdu", file: "https://www.eduvision.edu.pk/exam/bise-hyderabad-salees-urdu-10th-exams-19" },
    { cls: 10, subject: "Islamiat", years: "2021-2026", title: "BISE Hyderabad - 10th Class Islamiat (Urdu)", file: "https://www.eduvision.edu.pk/exam/bise-hyderabad-islamiat-urdu-10th-exams-14" },
    { cls: 10, subject: "All Subjects", years: "2021-2026", title: "Hyderabad Board Matric Past Papers (all subjects)", file: "https://www.ilmkidunya.com/past_papers/hyderabad-board-matric-past-papers.aspx" },
    { cls: 9, subject: "All Subjects", years: "2021-2026", title: "Hyderabad Board Matric Past Papers (9th & 10th, all subjects)", file: "https://www.ilmkidunya.com/past_papers/hyderabad-board-matric-past-papers.aspx" }
  ],

  /* ---------- 2. STUDENT ACHIEVEMENTS ----------
     category: "Position Holder" | "Certificate" | "Competition"
     photo: optional, jaise "images/students/ali.jpg"            */
  studentAchievements: [
    /* Misaal (shuru mein "/*" hata kar use karein):
    { name: "Ali Khan", cls: "Class 10", title: "1st Position - Annual Exam", category: "Position Holder", year: 2026, photo: "" }, */
  
  ],

  /* ---------- 3. SCHOOL ACHIEVEMENTS ----------
     category: "Award" | "Sports" | "Science Exhibition"          */
  schoolAchievements: [
    { title: "Prize Distribution Ceremony", category: "Award", text: "Students receiving a trophy from guests at a school function.", image: "photo-03-prize-1.jpg" },
    { title: "Trophy Presentation", category: "Award", text: "Presentation of a trophy to a student winner at school.", image: "photo-05-prize-2.jpg" },
    { title: "Culture Day Celebration", category: "Events", text: "Students and guests in traditional Sindhi dress with ajrak and Sindhi caps on Sindhi Culture Day.", image: "photo-02-culture-day.jpg" },
    { title: "Independence Day Celebration", category: "Events", text: "Students, teachers and guests celebrating Independence Day in the school hall.", image: "photo-12-independence-day.jpg" }
  ],

  /* ---------- 4. TEACHERS ----------
     photo: optional, jaise "images/teachers/sir-ali.jpg"          */
  teachers: [
    /* Misaal:
    { name: "Sir Ali Raza", subject: "Mathematics", qualification: "M.Sc, B.Ed", role: "Subject Teacher", photo: "" }, */
  
  ],

  /* ---------- 5. NOTICE BOARD ----------
     date: YYYY-MM-DD   |   important: true/false
     category: "Exam" | "Holiday" | "General" | "Admission"        */
  notices: [
    /* Misaal:
    { date: "2026-12-01", title: "Annual exams ka datesheet", category: "Exam", important: true, text: "Tafseel yahan likhein." }, */
  
  ],

  /* ---------- 6. DIGITAL LIBRARY ----------
     type: "Book" | "Notes" | "Educational PDF"
     cls: "6" ... "10" ya "All"                                   */
  library: [
    { title: "Class 6 - English (STBB)", type: "Book", cls: "6", subject: "English", file: "https://www.taleem360.com/6th-class-english-text-book-in-pdf-by-sindh-board-r97" },
    { title: "Class 6 - Mathematics, English medium (STBB)", type: "Book", cls: "6", subject: "Maths", file: "https://www.taleem360.com/6th-class-mathematics-text-book-pdf-in-english-by-stbb-pjd" },
    { title: "Class 6 - Science, Sindhi medium (STBB)", type: "Book", cls: "6", subject: "Science", file: "https://www.taleem360.com/6th-class-science-pdf-text-book-in-sindhi-by-sindh-board-acr" },
    { title: "Class 6 - Social Studies, Sindhi (STBB)", type: "Book", cls: "6", subject: "Social Studies", file: "https://www.taleem360.com/6th-class-social-studies-text-book-pdf-in-sindhi-by-stbb-gsp" },
    { title: "Class 6 - Asaan Sindhi (STBB)", type: "Book", cls: "6", subject: "Sindhi", file: "https://www.taleem360.com/6th-class-asaan-sindhi-text-book-in-pdf-by-stbb-gze" },
    { title: "Class 6 - Sindhi Reader (STBB)", type: "Book", cls: "6", subject: "Sindhi", file: "https://www.taleem360.com/6th-class-sindhi-reader-text-book-in-pdf-by-stbb-g8o" },
    { title: "Class 6 - Asan Urdu (Sindh Board)", type: "Book", cls: "6", subject: "Urdu", file: "https://www.taleem360.com/6th-class-asan-urdu-text-book-in-pdf-by-sindh-board-xfx" },
    { title: "Class 6 - Islamiyat, Urdu (Sindh Board)", type: "Book", cls: "6", subject: "Islamiat", file: "https://www.taleem360.com/6th-class-islamiyat-text-book-pdf-in-urdu-by-sindh-board-ayo" },
    { title: "Class 6 - all Sindh Board books (list)", type: "Book", cls: "6", subject: "All subjects", file: "https://www.taleem360.com/categories/text-books-sindh?page=5" },
    { title: "Class 7 - My English (Sindh Board)", type: "Book", cls: "7", subject: "English", file: "https://www.taleem360.com/7th-class-my-english-text-book-in-pdf-by-sindh-board-do8" },
    { title: "Class 7 - Mathematics, English medium (Sindh Board)", type: "Book", cls: "7", subject: "Maths", file: "https://www.taleem360.com/7th-class-mathematics-pdf-text-book-in-english-by-sindh-board-b7u" },
    { title: "Class 7 - General Science, English (STBB)", type: "Book", cls: "7", subject: "Science", file: "https://www.taleem360.com/7th-class-general-science-text-book-in-english-by-stbb-rhk" },
    { title: "Class 7 - General Science, Urdu (STBB)", type: "Book", cls: "7", subject: "Science", file: "https://www.taleem360.com/7th-class-general-science-text-book-in-urdu-by-stbb-vi3" },
    { title: "Class 7 - Science, Sindhi (STBB)", type: "Book", cls: "7", subject: "Science", file: "https://www.taleem360.com/7th-class-science-text-book-pdf-in-sindhi-by-stbb-iya" },
    { title: "Class 7 - Social Studies, English (STBB)", type: "Book", cls: "7", subject: "Social Studies", file: "https://www.taleem360.com/7th-class-social-studies-text-book-pdf-in-english-by-stbb-k1v" },
    { title: "Class 7 - Asaan Sindhi (STBB)", type: "Book", cls: "7", subject: "Sindhi", file: "https://www.taleem360.com/7th-class-asaan-sindhi-text-book-in-pdf-by-stbb-bkx" },
    { title: "Class 7 - Sindhi Reader (STBB)", type: "Book", cls: "7", subject: "Sindhi", file: "https://www.taleem360.com/7th-class-sindhi-reader-text-book-in-pdf-by-stbb-mul" },
    { title: "Class 7 - Urdu Reader (STBB)", type: "Book", cls: "7", subject: "Urdu", file: "https://www.taleem360.com/7th-class-urdu-reader-text-book-in-pdf-by-stbb-tqx" },
    { title: "Class 7 - Islamiat, Sindhi (STBB)", type: "Book", cls: "7", subject: "Islamiat", file: "https://www.taleem360.com/7th-class-islamiat-sindhi-text-book-in-pdf-by-stbb-5bn" },
    { title: "Class 7 - all Sindh Board books (list)", type: "Book", cls: "7", subject: "All subjects", file: "https://www.taleem360.com/categories/7th-text-books-sindh" },
    { title: "Class 8 - My English (Sindh Board)", type: "Book", cls: "8", subject: "English", file: "https://www.taleem360.com/8th-class-my-english-text-book-in-pdf-by-sindh-board-qnk" },
    { title: "Class 8 - Mathematics, English medium (2024-25 edition)", type: "Book", cls: "8", subject: "Maths", file: "https://smartparho.com/?p=2372" },
    { title: "Class 8 - Science, Urdu medium (Sindh Board)", type: "Book", cls: "8", subject: "Science", file: "https://www.taleem360.com/8th-class-science-urdu-medium-text-book-by-sindh-board-usa" },
    { title: "Class 8 - General Science, Sindhi (STBB)", type: "Book", cls: "8", subject: "Science", file: "https://www.taleem360.com/class-8th-general-science-sindhi-text-book-in-pdf-by-stbb-hy0" },
    { title: "Class 8 - Asaan Sindhi (Sindh Board)", type: "Book", cls: "8", subject: "Sindhi", file: "https://www.taleem360.com/asaan-sindhi-class-8th-text-book-pdf-by-sindh-board-wto" },
    { title: "Class 8 - Sindhi Reader (STBB)", type: "Book", cls: "8", subject: "Sindhi", file: "https://www.taleem360.com/8th-class-sindhi-reader-text-book-in-pdf-by-stbb-xz9" },
    { title: "Class 8 - Urdu Reader (STBB)", type: "Book", cls: "8", subject: "Urdu", file: "https://www.taleem360.com/8th-class-urdu-reader-text-book-in-pdf-by-stbb-tcs" },
    { title: "Class 8 - Islamiat, Urdu medium (Sindh Board)", type: "Book", cls: "8", subject: "Islamiat", file: "https://www.taleem360.com/8th-class-islamiyat-urdu-medium-text-book-by-sindh-board-zzj" },
    { title: "Class 8 - all Sindh Board books (list)", type: "Book", cls: "8", subject: "All subjects", file: "https://www.taleem360.com/categories/8th-text-books-sindh" },
    { title: "STBB books Class 1 to 12 (all subjects)", type: "Book", cls: "All", subject: "All subjects", file: "https://medicoengineer.com/new-sindh-textbook-board-updated-books-1-to-12-year-2023-24" },
    { title: "Shah Jo Risalo - introduction (Shah Abdul Latif Bhittai)", type: "Shah Jo Risalo", cls: "All", subject: "Sindhi Literature", file: "https://en.wikipedia.org/wiki/Shah_Jo_Risalo" },
    { title: "An authentic version of Shah Jo Risalo (Dawn)", type: "Shah Jo Risalo", cls: "All", subject: "Sindhi Literature", file: "https://www.dawn.com/news/774412/an-authentic-version-of-shah-jo-risalo" },
    { title: "Bhittaipedia - Shah Jo Risalo with English translation", type: "Shah Jo Risalo", cls: "All", subject: "Sindhi Literature", file: "https://bhittaipedia.org" }
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
    { title: "Our Science Lab", category: "Science", students: "Science Department", cls: "School", text: "Our school science lab: chemicals, litmus solution, lime water, Fehling's solution, a digital scale, beakers and other apparatus for practical work.", image: "photo-10-science-lab.jpg" },
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
    { src: "photo-01-assembly.jpg", caption: "Morning Assembly", category: "Events" },
    { src: "photo-02-culture-day.jpg", caption: "Celebrating Culture Day", category: "Events" },
    { src: "photo-12-independence-day.jpg", caption: "Independence Day", category: "Events" },
    { src: "photo-03-prize-1.jpg", caption: "Prize Distribution", category: "Awards" },
    { src: "photo-05-prize-2.jpg", caption: "Trophy Presentation", category: "Awards" },
    { src: "photo-04-staff.jpg", caption: "School Staff", category: "Staff" },
    { src: "photo-09-teachers-group.jpg", caption: "Teachers in Assembly", category: "Staff" },
    { src: "photo-06-at-school-1.jpg", caption: "At School", category: "Staff" },
    { src: "photo-07-at-school-2.jpg", caption: "At School", category: "Staff" },
    { src: "photo-08-students-teacher.jpg", caption: "Students and Teacher", category: "Classroom" },
    { src: "photo-11-students-working.jpg", caption: "Students Working", category: "Classroom" },
    { src: "photo-13-teacher-checking.jpg", caption: "Teacher Checking Papers in Class", category: "Classroom" },
    { src: "photo-10-science-lab.jpg", caption: "Our Science Lab", category: "Science" }
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
