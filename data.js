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
    place: "Seerani, District Badin, Sindh",
    whatsapp: "923332597174",          /* country code ke saath, bina + ya space ke */
    contactName: "Head Master"
  },


  papersNote: "Class 9–10: past papers of the Sindh Board (BISE Hyderabad) are available through the links below. Class 6–8 papers are the school's own annual exams and will be uploaded soon.",
  libraryNote: "These links open outside websites (taleem360, Wikipedia, Dawn etc.) where STBB books and Shah Jo Risalo are available.",
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
    {
      "id": "physics",
      "title": "Physics - Motion, Force & Electricity",
      "subject": "Physics",
      "group": "Science",
      "cls": "9-10",
      "questions": [
        {
          "q": "SI unit of pressure is:",
          "options": [
            "Newton",
            "Joule",
            "Watt",
            "Pascal"
          ],
          "answer": 3
        },
        {
          "q": "Speed of light in vacuum is about:",
          "options": [
            "3 × 10⁶ m/s",
            "3 × 10⁸ m/s",
            "340 m/s",
            "30 m/s"
          ],
          "answer": 1
        },
        {
          "q": "Speed is calculated by:",
          "options": [
            "Distance ÷ Time",
            "Time ÷ Distance",
            "Distance × Time",
            "Mass × Acceleration"
          ],
          "answer": 0
        },
        {
          "q": "Which of these is a vector quantity?",
          "options": [
            "Velocity",
            "Mass",
            "Speed",
            "Time"
          ],
          "answer": 0
        },
        {
          "q": "Newton's first law of motion is also called the law of:",
          "options": [
            "Inertia",
            "Action and reaction",
            "Gravitation",
            "Acceleration"
          ],
          "answer": 0
        },
        {
          "q": "SI unit of electric current is:",
          "options": [
            "Volt",
            "Ohm",
            "Watt",
            "Ampere"
          ],
          "answer": 3
        },
        {
          "q": "The rear-view mirror of a vehicle is a:",
          "options": [
            "Concave mirror",
            "Plane mirror",
            "Convex mirror",
            "Cylindrical mirror"
          ],
          "answer": 2
        },
        {
          "q": "Which of these needs a material medium to travel?",
          "options": [
            "Sound",
            "Light",
            "Radio waves",
            "X-rays"
          ],
          "answer": 0
        },
        {
          "q": "According to Ohm's law, V =",
          "options": [
            "I ÷ R",
            "I + R",
            "I × R",
            "R ÷ I"
          ],
          "answer": 2
        },
        {
          "q": "Energy possessed by a body due to its motion is:",
          "options": [
            "Potential energy",
            "Heat energy",
            "Kinetic energy",
            "Chemical energy"
          ],
          "answer": 2
        }
      ]
    },
    {
      "id": "chemistry",
      "title": "Chemistry - Atoms, Acids & Elements",
      "subject": "Chemistry",
      "group": "Science",
      "cls": "9-10",
      "questions": [
        {
          "q": "The atomic number of an element is the number of:",
          "options": [
            "Neutrons",
            "Protons + neutrons",
            "Protons",
            "Molecules"
          ],
          "answer": 2
        },
        {
          "q": "Chemical symbol of sodium is:",
          "options": [
            "S",
            "Na",
            "So",
            "N"
          ],
          "answer": 1
        },
        {
          "q": "pH of pure water is:",
          "options": [
            "0",
            "7",
            "1",
            "14"
          ],
          "answer": 1
        },
        {
          "q": "Which gas is released when an acid reacts with a metal?",
          "options": [
            "Oxygen",
            "Hydrogen",
            "Nitrogen",
            "Chlorine"
          ],
          "answer": 1
        },
        {
          "q": "Common salt is chemically:",
          "options": [
            "KCl",
            "CaCO₃",
            "NaCl",
            "NaOH"
          ],
          "answer": 2
        },
        {
          "q": "Which of these is a noble gas?",
          "options": [
            "Oxygen",
            "Nitrogen",
            "Neon",
            "Hydrogen"
          ],
          "answer": 2
        },
        {
          "q": "Chemical formula of carbon dioxide is:",
          "options": [
            "CO",
            "CO₂",
            "C₂O",
            "O₂C"
          ],
          "answer": 1
        },
        {
          "q": "Rusting of iron is an example of:",
          "options": [
            "Oxidation",
            "Evaporation",
            "Condensation",
            "Sublimation"
          ],
          "answer": 0
        },
        {
          "q": "Which of these has the lowest pH?",
          "options": [
            "Milk",
            "Pure water",
            "Lemon juice",
            "Soap solution"
          ],
          "answer": 2
        },
        {
          "q": "The lightest element is:",
          "options": [
            "Hydrogen",
            "Helium",
            "Oxygen",
            "Carbon"
          ],
          "answer": 0
        }
      ]
    },
    {
      "id": "biology",
      "title": "Biology - Cell, Body & Plants",
      "subject": "Biology",
      "group": "Science",
      "cls": "9-10",
      "questions": [
        {
          "q": "The basic unit of life is the:",
          "options": [
            "Tissue",
            "Organ",
            "Cell",
            "Atom"
          ],
          "answer": 2
        },
        {
          "q": "Chlorophyll is found in the:",
          "options": [
            "Mitochondria",
            "Nucleus",
            "Ribosome",
            "Chloroplast"
          ],
          "answer": 3
        },
        {
          "q": "Which blood group is called the universal donor?",
          "options": [
            "A",
            "O",
            "B",
            "AB"
          ],
          "answer": 1
        },
        {
          "q": "How many chambers does the human heart have?",
          "options": [
            "2",
            "4",
            "3",
            "5"
          ],
          "answer": 1
        },
        {
          "q": "Which vitamin do we get from sunlight?",
          "options": [
            "Vitamin A",
            "Vitamin C",
            "Vitamin K",
            "Vitamin D"
          ],
          "answer": 3
        },
        {
          "q": "Loss of water vapour from the leaves of plants is called:",
          "options": [
            "Transpiration",
            "Respiration",
            "Digestion",
            "Excretion"
          ],
          "answer": 0
        },
        {
          "q": "DNA stands for:",
          "options": [
            "Dioxyribonucleic acid",
            "Dynamic nucleic acid",
            "Deoxyribonucleic acid",
            "Double nitrogen acid"
          ],
          "answer": 2
        },
        {
          "q": "Which organ filters blood and makes urine?",
          "options": [
            "Kidney",
            "Liver",
            "Stomach",
            "Lung"
          ],
          "answer": 0
        },
        {
          "q": "A normal human body cell has how many chromosomes?",
          "options": [
            "46",
            "23",
            "44",
            "48"
          ],
          "answer": 0
        },
        {
          "q": "Which blood cells fight infection?",
          "options": [
            "Red blood cells",
            "Platelets",
            "Plasma",
            "White blood cells"
          ],
          "answer": 3
        }
      ]
    },
    {
      "id": "maths910",
      "title": "Maths - Algebra, Geometry & Trigonometry",
      "subject": "Maths",
      "group": "Maths",
      "cls": "9-10",
      "questions": [
        {
          "q": "(a + b)² =",
          "options": [
            "a² + b²",
            "a² − 2ab + b²",
            "2a + 2b",
            "a² + 2ab + b²"
          ],
          "answer": 3
        },
        {
          "q": "The roots of x² − 5x + 6 = 0 are:",
          "options": [
            "1 and 6",
            "−2 and −3",
            "2 and 3",
            "5 and 1"
          ],
          "answer": 2
        },
        {
          "q": "Area of a circle of radius 7 (π = 22/7) is:",
          "options": [
            "154",
            "44",
            "49",
            "22"
          ],
          "answer": 0
        },
        {
          "q": "Hypotenuse of a right triangle with sides 3 and 4 is:",
          "options": [
            "5",
            "7",
            "6",
            "12"
          ],
          "answer": 0
        },
        {
          "q": "The value of sin 30° is:",
          "options": [
            "√3/2",
            "1",
            "0",
            "1/2"
          ],
          "answer": 3
        },
        {
          "q": "LCM of 4 and 6 is:",
          "options": [
            "12",
            "24",
            "10",
            "2"
          ],
          "answer": 0
        },
        {
          "q": "The value of 2⁵ is:",
          "options": [
            "10",
            "25",
            "16",
            "32"
          ],
          "answer": 3
        },
        {
          "q": "Sum of interior angles of a quadrilateral is:",
          "options": [
            "180°",
            "540°",
            "270°",
            "360°"
          ],
          "answer": 3
        },
        {
          "q": "log₁₀ 100 =",
          "options": [
            "10",
            "1",
            "2",
            "100"
          ],
          "answer": 2
        },
        {
          "q": "The value of (−3)² is:",
          "options": [
            "−9",
            "6",
            "−6",
            "9"
          ],
          "answer": 3
        }
      ]
    },
    {
      "id": "maths",
      "title": "Maths - Basic",
      "subject": "Maths",
      "group": "Maths",
      "cls": "6-8",
      "questions": [
        {
          "q": "What is 15% of 200?",
          "options": [
            "20",
            "25",
            "35",
            "30"
          ],
          "answer": 3
        },
        {
          "q": "Solve: x + 7 = 12. What is x?",
          "options": [
            "5",
            "4",
            "6",
            "19"
          ],
          "answer": 0
        },
        {
          "q": "Area of a rectangle with length 8 and width 5 is:",
          "options": [
            "13",
            "40",
            "26",
            "45"
          ],
          "answer": 1
        },
        {
          "q": "Square root of 144 is:",
          "options": [
            "12",
            "10",
            "11",
            "14"
          ],
          "answer": 0
        },
        {
          "q": "The sum of all angles of a triangle is:",
          "options": [
            "90°",
            "180°",
            "270°",
            "360°"
          ],
          "answer": 1
        },
        {
          "q": "3/4 written as a decimal is:",
          "options": [
            "0.75",
            "0.34",
            "0.43",
            "7.5"
          ],
          "answer": 0
        },
        {
          "q": "What is 7 × 8?",
          "options": [
            "56",
            "54",
            "48",
            "63"
          ],
          "answer": 0
        },
        {
          "q": "Perimeter of a rectangle with length 10 and width 6 is:",
          "options": [
            "16",
            "60",
            "36",
            "32"
          ],
          "answer": 3
        },
        {
          "q": "Which of these is a prime number?",
          "options": [
            "9",
            "13",
            "15",
            "21"
          ],
          "answer": 1
        },
        {
          "q": "What is the value of 5² + 3²?",
          "options": [
            "16",
            "34",
            "64",
            "30"
          ],
          "answer": 1
        }
      ]
    },
    {
      "id": "science",
      "title": "General Science",
      "subject": "Science",
      "group": "Science",
      "cls": "6-8",
      "questions": [
        {
          "q": "Which part of the cell is called the 'powerhouse'?",
          "options": [
            "Nucleus",
            "Ribosome",
            "Mitochondria",
            "Cell wall"
          ],
          "answer": 2
        },
        {
          "q": "Plants take in which gas for photosynthesis?",
          "options": [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen"
          ],
          "answer": 2
        },
        {
          "q": "Chemical formula of water is:",
          "options": [
            "CO₂",
            "O₂",
            "H₂O",
            "NaCl"
          ],
          "answer": 2
        },
        {
          "q": "SI unit of force is:",
          "options": [
            "Joule",
            "Watt",
            "Newton",
            "Pascal"
          ],
          "answer": 2
        },
        {
          "q": "Which planet is closest to the Sun?",
          "options": [
            "Mercury",
            "Venus",
            "Earth",
            "Mars"
          ],
          "answer": 0
        },
        {
          "q": "Which organ pumps blood around the body?",
          "options": [
            "Lungs",
            "Heart",
            "Liver",
            "Kidney"
          ],
          "answer": 1
        },
        {
          "q": "Water boils at sea level at:",
          "options": [
            "50°C",
            "100°C",
            "90°C",
            "150°C"
          ],
          "answer": 1
        },
        {
          "q": "Which gas is produced by our body and released when we breathe out?",
          "options": [
            "Oxygen",
            "Helium",
            "Argon",
            "Carbon dioxide"
          ],
          "answer": 3
        },
        {
          "q": "The natural satellite of the Earth is the:",
          "options": [
            "Sun",
            "Mars",
            "Moon",
            "Venus"
          ],
          "answer": 2
        },
        {
          "q": "The force that pulls objects towards the Earth is:",
          "options": [
            "Friction",
            "Gravity",
            "Magnetism",
            "Tension"
          ],
          "answer": 1
        }
      ]
    },
    {
      "id": "english",
      "title": "English Grammar",
      "subject": "English",
      "group": "English",
      "cls": "6-10",
      "questions": [
        {
          "q": "She ___ to school every day.",
          "options": [
            "goes",
            "go",
            "going",
            "gone"
          ],
          "answer": 0
        },
        {
          "q": "Plural of 'child' is:",
          "options": [
            "childs",
            "childes",
            "childrens",
            "children"
          ],
          "answer": 3
        },
        {
          "q": "Opposite of 'ancient' is:",
          "options": [
            "old",
            "modern",
            "huge",
            "weak"
          ],
          "answer": 1
        },
        {
          "q": "Which word is a proper noun?",
          "options": [
            "run",
            "quickly",
            "beautiful",
            "Karachi"
          ],
          "answer": 3
        },
        {
          "q": "I have ___ apple.",
          "options": [
            "a",
            "an",
            "the",
            "some"
          ],
          "answer": 1
        },
        {
          "q": "He ___ playing cricket now.",
          "options": [
            "are",
            "am",
            "were",
            "is"
          ],
          "answer": 3
        },
        {
          "q": "Past tense of 'write' is:",
          "options": [
            "wrote",
            "writed",
            "written",
            "writing"
          ],
          "answer": 0
        },
        {
          "q": "Synonym of 'big' is:",
          "options": [
            "tiny",
            "large",
            "thin",
            "short"
          ],
          "answer": 1
        },
        {
          "q": "Which word is an adjective?",
          "options": [
            "run",
            "slowly",
            "beautiful",
            "Karachi"
          ],
          "answer": 2
        },
        {
          "q": "She is ___ than her sister.",
          "options": [
            "tall",
            "tallest",
            "more tall",
            "taller"
          ],
          "answer": 3
        }
      ]
    },
    {
      "id": "vocab",
      "title": "English - Synonyms & Antonyms",
      "subject": "English",
      "group": "English",
      "cls": "6-10",
      "questions": [
        {
          "q": "Synonym of 'happy' is:",
          "options": [
            "sad",
            "angry",
            "glad",
            "tired"
          ],
          "answer": 2
        },
        {
          "q": "Antonym of 'hot' is:",
          "options": [
            "cold",
            "warm",
            "heat",
            "sunny"
          ],
          "answer": 0
        },
        {
          "q": "Synonym of 'begin' is:",
          "options": [
            "finish",
            "stop",
            "end",
            "start"
          ],
          "answer": 3
        },
        {
          "q": "Antonym of 'brave' is:",
          "options": [
            "bold",
            "strong",
            "cowardly",
            "fearless"
          ],
          "answer": 2
        },
        {
          "q": "Synonym of 'quick' is:",
          "options": [
            "slow",
            "late",
            "fast",
            "lazy"
          ],
          "answer": 2
        },
        {
          "q": "Antonym of 'success' is:",
          "options": [
            "victory",
            "win",
            "progress",
            "failure"
          ],
          "answer": 3
        },
        {
          "q": "Synonym of 'smart' is:",
          "options": [
            "clever",
            "foolish",
            "dull",
            "weak"
          ],
          "answer": 0
        },
        {
          "q": "Antonym of 'increase' is:",
          "options": [
            "grow",
            "rise",
            "expand",
            "decrease"
          ],
          "answer": 3
        },
        {
          "q": "Synonym of 'beautiful' is:",
          "options": [
            "pretty",
            "ugly",
            "plain",
            "rough"
          ],
          "answer": 0
        },
        {
          "q": "Antonym of 'generous' is:",
          "options": [
            "kind",
            "giving",
            "selfish",
            "rich"
          ],
          "answer": 2
        }
      ]
    },
    {
      "id": "sindh",
      "title": "Know Your Pakistan & Sindh",
      "subject": "General Knowledge",
      "group": "GK",
      "cls": "6-10",
      "questions": [
        {
          "q": "What is the capital city of Sindh?",
          "options": [
            "Hyderabad",
            "Karachi",
            "Sukkur",
            "Larkana"
          ],
          "answer": 1
        },
        {
          "q": "Which is the longest river of Pakistan?",
          "options": [
            "Jhelum",
            "Ravi",
            "Indus",
            "Chenab"
          ],
          "answer": 2
        },
        {
          "q": "Pakistan Day is celebrated on:",
          "options": [
            "14 August",
            "25 December",
            "23 March",
            "6 September"
          ],
          "answer": 2
        },
        {
          "q": "Who is known as the founder of Pakistan?",
          "options": [
            "Quaid-e-Azam Muhammad Ali Jinnah",
            "Allama Iqbal",
            "Liaquat Ali Khan",
            "Sir Syed Ahmad Khan"
          ],
          "answer": 0
        },
        {
          "q": "Mohenjo-daro belongs to which ancient civilization?",
          "options": [
            "Egyptian",
            "Indus Valley",
            "Roman",
            "Mesopotamian"
          ],
          "answer": 1
        },
        {
          "q": "The national language of Pakistan is:",
          "options": [
            "Sindhi",
            "English",
            "Punjabi",
            "Urdu"
          ],
          "answer": 3
        },
        {
          "q": "The capital of Pakistan is:",
          "options": [
            "Karachi",
            "Lahore",
            "Islamabad",
            "Peshawar"
          ],
          "answer": 2
        },
        {
          "q": "Which province of Pakistan is the largest by area?",
          "options": [
            "Punjab",
            "Balochistan",
            "Sindh",
            "Khyber Pakhtunkhwa"
          ],
          "answer": 1
        },
        {
          "q": "Pakistan became an independent country in:",
          "options": [
            "1940",
            "1956",
            "1947",
            "1971"
          ],
          "answer": 2
        },
        {
          "q": "Shah Abdul Latif Bhittai is a famous poet of which language?",
          "options": [
            "Urdu",
            "Punjabi",
            "Sindhi",
            "Pashto"
          ],
          "answer": 2
        }
      ]
    },
    {
      "id": "computer",
      "title": "Computer Basics",
      "subject": "Computer",
      "group": "Computer",
      "cls": "6-10",
      "questions": [
        {
          "q": "CPU stands for:",
          "options": [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing Unit"
          ],
          "answer": 0
        },
        {
          "q": "Which of these is an input device?",
          "options": [
            "Monitor",
            "Printer",
            "Keyboard",
            "Speaker"
          ],
          "answer": 2
        },
        {
          "q": "Which of these is an operating system?",
          "options": [
            "Google",
            "Windows",
            "Chrome",
            "Excel"
          ],
          "answer": 1
        },
        {
          "q": "1 byte equals how many bits?",
          "options": [
            "2",
            "8",
            "4",
            "16"
          ],
          "answer": 1
        },
        {
          "q": "Which of these should you NEVER share with anyone?",
          "options": [
            "Your favourite colour",
            "Your OTP / password",
            "Your class name",
            "Your school name"
          ],
          "answer": 1
        },
        {
          "q": "RAM stands for:",
          "options": [
            "Read Access Memory",
            "Random Access Memory",
            "Rapid Action Memory",
            "Run All Memory"
          ],
          "answer": 1
        },
        {
          "q": "Which of these is a web browser?",
          "options": [
            "Windows",
            "Excel",
            "Chrome",
            "Paint"
          ],
          "answer": 2
        },
        {
          "q": "The shortcut Ctrl + C is used to:",
          "options": [
            "Paste",
            "Cut",
            "Save",
            "Copy"
          ],
          "answer": 3
        },
        {
          "q": "Which of these is an output device?",
          "options": [
            "Printer",
            "Mouse",
            "Scanner",
            "Keyboard"
          ],
          "answer": 0
        },
        {
          "q": "1 Kilobyte (KB) equals:",
          "options": [
            "100 bytes",
            "1000 bits",
            "512 bytes",
            "1024 bytes"
          ],
          "answer": 3
        }
      ]
    }
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
    {
      "w": "Honest",
      "ur": "ایماندار",
      "ex": "A good student is always honest."
    },
    {
      "w": "Brave",
      "ur": "بہادر",
      "ex": "The brave boy saved his friend."
    },
    {
      "w": "Knowledge",
      "ur": "علم",
      "ex": "Knowledge is power."
    },
    {
      "w": "Discipline",
      "ur": "نظم و ضبط",
      "ex": "Discipline is important in school."
    },
    {
      "w": "Respect",
      "ur": "عزت / احترام",
      "ex": "We should respect our teachers."
    },
    {
      "w": "Courage",
      "ur": "ہمت",
      "ex": "It takes courage to say the truth."
    },
    {
      "w": "Gratitude",
      "ur": "شکر گزاری",
      "ex": "She showed gratitude to her parents."
    },
    {
      "w": "Curious",
      "ur": "متجسس",
      "ex": "Children are curious about everything."
    },
    {
      "w": "Journey",
      "ur": "سفر",
      "ex": "Our journey to Badin was long."
    },
    {
      "w": "Improve",
      "ur": "بہتر بنانا",
      "ex": "Reading daily will improve your English."
    },
    {
      "w": "Responsible",
      "ur": "ذمہ دار",
      "ex": "He is a responsible student."
    },
    {
      "w": "Opportunity",
      "ur": "موقع",
      "ex": "Education gives us a great opportunity."
    },
    {
      "w": "Generous",
      "ur": "سخی",
      "ex": "The generous man helped the poor."
    },
    {
      "w": "Patient",
      "ur": "صبر کرنے والا",
      "ex": "Be patient and keep trying."
    },
    {
      "w": "Victory",
      "ur": "فتح",
      "ex": "Our team won a great victory."
    },
    {
      "w": "Habit",
      "ur": "عادت",
      "ex": "Reading is a good habit."
    },
    {
      "w": "Society",
      "ur": "معاشرہ",
      "ex": "We should help our society."
    },
    {
      "w": "Environment",
      "ur": "ماحول",
      "ex": "Trees protect the environment."
    },
    {
      "w": "Education",
      "ur": "تعلیم",
      "ex": "Education makes a person successful."
    },
    {
      "w": "Health",
      "ur": "صحت",
      "ex": "Health is wealth."
    },
    {
      "w": "Friendship",
      "ur": "دوستی",
      "ex": "True friendship lasts forever."
    },
    {
      "w": "Challenge",
      "ur": "چیلنج / مشکل",
      "ex": "Every exam is a new challenge."
    },
    {
      "w": "Success",
      "ur": "کامیابی",
      "ex": "Hard work leads to success."
    },
    {
      "w": "Effort",
      "ur": "کوشش",
      "ex": "Make an effort every day."
    }
  ],

  grammar: [
    {
      "title": "Parts of Speech",
      "ur": "کلمے کی اقسام",
      "text": "Every word in a sentence has a job. Noun = name (Ali, Badin, book). Pronoun = replaces a noun (he, she, they). Verb = action (run, write). Adjective = describes a noun (tall, clever). Adverb = describes a verb (quickly, slowly).",
      "examples": [
        "Ali (noun) reads (verb) a good (adjective) book (noun).",
        "She (pronoun) walks (verb) slowly (adverb)."
      ]
    },
    {
      "title": "Simple Present Tense",
      "ur": "حال مطلق",
      "text": "Use it for habits and facts. With he / she / it, add -s or -es to the verb. Negative: do not / does not + verb. Question: Do / Does + subject + verb.",
      "examples": [
        "I play cricket every evening.",
        "He plays cricket every evening.",
        "She does not like tea.",
        "Do you walk to school?"
      ]
    },
    {
      "title": "Present Continuous Tense",
      "ur": "حال جاری",
      "text": "Use it for actions happening right now. Form: am / is / are + verb + ing.",
      "examples": [
        "I am reading a book.",
        "He is playing cricket.",
        "They are watching a match."
      ]
    },
    {
      "title": "Simple Past Tense",
      "ur": "ماضی مطلق",
      "text": "Use it for finished actions. Regular verbs add -ed (played). Irregular verbs change form (go → went, eat → ate). Negative: did not + base verb.",
      "examples": [
        "We visited Karachi last year.",
        "He went to school yesterday.",
        "I did not see him."
      ]
    },
    {
      "title": "Simple Future Tense",
      "ur": "مستقبل مطلق",
      "text": "Use it for actions that will happen later. Form: will / shall + base verb.",
      "examples": [
        "I will study tomorrow.",
        "She will visit her aunt.",
        "We shall win the match."
      ]
    },
    {
      "title": "Articles: a, an, the",
      "ur": "حروفِ تعریف",
      "text": "Use 'a' before a consonant sound (a book), 'an' before a vowel sound (an apple, an hour), and 'the' for a particular, known thing (the sun, the school).",
      "examples": [
        "I have a pen.",
        "She eats an orange.",
        "The teacher is in the class."
      ]
    },
    {
      "title": "Singular and Plural",
      "ur": "واحد اور جمع",
      "text": "Most nouns add -s (book → books). Nouns ending in s, x, ch, sh add -es (box → boxes). Some are irregular.",
      "examples": [
        "child → children",
        "man → men",
        "tooth → teeth",
        "foot → feet",
        "box → boxes"
      ]
    },
    {
      "title": "Prepositions",
      "ur": "حروفِ جار",
      "text": "Prepositions show place, time or direction: in, on, at, under, between, with, by, from, to.",
      "examples": [
        "The book is on the table.",
        "We start school at 8 o'clock.",
        "He sat between Ali and Raza.",
        "She goes to school by bus."
      ]
    },
    {
      "title": "Conjunctions",
      "ur": "حروفِ عطف",
      "text": "Conjunctions join words or sentences: and, but, or, because, so, although.",
      "examples": [
        "I like tea and milk.",
        "He is poor but honest.",
        "Study hard, or you will fail.",
        "I stayed home because it was raining."
      ]
    },
    {
      "title": "Degrees of Comparison",
      "ur": "صفت کے درجے",
      "text": "Positive (tall), Comparative (taller), Superlative (tallest). Long adjectives use more / most.",
      "examples": [
        "Ali is tall.",
        "Ali is taller than Raza.",
        "Ali is the tallest boy in the class.",
        "This book is more interesting than that one."
      ]
    },
    {
      "title": "Active and Passive Voice",
      "ur": "معروف اور مجہول",
      "text": "Active: the subject does the action. Passive: the action is done to the subject (be + past participle).",
      "examples": [
        "Active: Ali wrote a letter.",
        "Passive: A letter was written by Ali.",
        "Active: The teacher teaches us.",
        "Passive: We are taught by the teacher."
      ]
    },
    {
      "title": "Punctuation",
      "ur": "رموزِ اوقاف",
      "text": "Full stop (.) ends a sentence. Comma (,) separates items. Question mark (?) ends a question. Capital letters start sentences and names.",
      "examples": [
        "Ali, Raza and Imran are friends.",
        "What is your name?",
        "My name is Ali."
      ]
    },
    {
      "title": "Commonly Confused Words",
      "ur": "ملتے جلتے الفاظ",
      "text": "Learn the difference between words that sound alike.",
      "examples": [
        "their (belonging to them) / there (place) / they're (they are)",
        "its (belonging to it) / it's (it is)",
        "your (belonging to you) / you're (you are)",
        "to (direction) / too (also, very) / two (number 2)"
      ]
    }
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
  ],

  synonyms: [
    {
      "w": "Happy",
      "ur": "خوش",
      "s": [
        "glad",
        "cheerful",
        "joyful"
      ]
    },
    {
      "w": "Big",
      "ur": "بڑا",
      "s": [
        "large",
        "huge",
        "enormous"
      ]
    },
    {
      "w": "Small",
      "ur": "چھوٹا",
      "s": [
        "little",
        "tiny",
        "petite"
      ]
    },
    {
      "w": "Smart",
      "ur": "ہوشیار",
      "s": [
        "clever",
        "intelligent",
        "bright"
      ]
    },
    {
      "w": "Begin",
      "ur": "شروع کرنا",
      "s": [
        "start",
        "commence"
      ]
    },
    {
      "w": "End",
      "ur": "ختم کرنا",
      "s": [
        "finish",
        "conclude",
        "complete"
      ]
    },
    {
      "w": "Fast",
      "ur": "تیز",
      "s": [
        "quick",
        "rapid",
        "swift"
      ]
    },
    {
      "w": "Help",
      "ur": "مدد",
      "s": [
        "assist",
        "aid",
        "support"
      ]
    },
    {
      "w": "Beautiful",
      "ur": "خوبصورت",
      "s": [
        "pretty",
        "lovely",
        "attractive"
      ]
    },
    {
      "w": "Brave",
      "ur": "بہادر",
      "s": [
        "courageous",
        "bold",
        "fearless"
      ]
    },
    {
      "w": "Angry",
      "ur": "غصے میں",
      "s": [
        "furious",
        "mad",
        "annoyed"
      ]
    },
    {
      "w": "Tired",
      "ur": "تھکا ہوا",
      "s": [
        "exhausted",
        "weary",
        "fatigued"
      ]
    },
    {
      "w": "Choose",
      "ur": "چننا",
      "s": [
        "select",
        "pick",
        "prefer"
      ]
    },
    {
      "w": "Buy",
      "ur": "خریدنا",
      "s": [
        "purchase",
        "acquire"
      ]
    },
    {
      "w": "Ask",
      "ur": "پوچھنا",
      "s": [
        "enquire",
        "question",
        "inquire"
      ]
    },
    {
      "w": "Show",
      "ur": "دکھانا",
      "s": [
        "display",
        "exhibit",
        "reveal"
      ]
    },
    {
      "w": "Rich",
      "ur": "امیر",
      "s": [
        "wealthy",
        "affluent",
        "prosperous"
      ]
    },
    {
      "w": "Poor",
      "ur": "غریب",
      "s": [
        "needy",
        "impoverished"
      ]
    },
    {
      "w": "Old",
      "ur": "پرانا",
      "s": [
        "ancient",
        "aged",
        "elderly"
      ]
    },
    {
      "w": "Hard",
      "ur": "مشکل / سخت",
      "s": [
        "difficult",
        "tough",
        "challenging"
      ]
    },
    {
      "w": "Kind",
      "ur": "مہربان",
      "s": [
        "generous",
        "caring",
        "gentle"
      ]
    },
    {
      "w": "Important",
      "ur": "اہم",
      "s": [
        "significant",
        "essential",
        "vital"
      ]
    },
    {
      "w": "Look",
      "ur": "دیکھنا",
      "s": [
        "watch",
        "observe",
        "glance"
      ]
    },
    {
      "w": "Funny",
      "ur": "مزاحیہ",
      "s": [
        "humorous",
        "amusing",
        "comical"
      ]
    }
  ],

  antonyms: [
    {
      "w": "Hot",
      "a": "Cold",
      "ur": "گرم ↔ ٹھنڈا"
    },
    {
      "w": "Big",
      "a": "Small",
      "ur": "بڑا ↔ چھوٹا"
    },
    {
      "w": "Happy",
      "a": "Sad",
      "ur": "خوش ↔ اداس"
    },
    {
      "w": "Rich",
      "a": "Poor",
      "ur": "امیر ↔ غریب"
    },
    {
      "w": "Strong",
      "a": "Weak",
      "ur": "مضبوط ↔ کمزور"
    },
    {
      "w": "Fast",
      "a": "Slow",
      "ur": "تیز ↔ سست"
    },
    {
      "w": "Early",
      "a": "Late",
      "ur": "جلدی ↔ دیر"
    },
    {
      "w": "Brave",
      "a": "Cowardly",
      "ur": "بہادر ↔ بزدل"
    },
    {
      "w": "Honest",
      "a": "Dishonest",
      "ur": "ایماندار ↔ بے ایمان"
    },
    {
      "w": "Ancient",
      "a": "Modern",
      "ur": "قدیم ↔ جدید"
    },
    {
      "w": "Accept",
      "a": "Reject",
      "ur": "قبول کرنا ↔ رد کرنا"
    },
    {
      "w": "Increase",
      "a": "Decrease",
      "ur": "بڑھانا ↔ کم کرنا"
    },
    {
      "w": "Victory",
      "a": "Defeat",
      "ur": "فتح ↔ شکست"
    },
    {
      "w": "Truth",
      "a": "Lie",
      "ur": "سچ ↔ جھوٹ"
    },
    {
      "w": "Friend",
      "a": "Enemy",
      "ur": "دوست ↔ دشمن"
    },
    {
      "w": "Light",
      "a": "Dark",
      "ur": "روشنی ↔ اندھیرا"
    },
    {
      "w": "Love",
      "a": "Hate",
      "ur": "محبت ↔ نفرت"
    },
    {
      "w": "Young",
      "a": "Old",
      "ur": "جوان ↔ بوڑھا"
    },
    {
      "w": "Near",
      "a": "Far",
      "ur": "قریب ↔ دور"
    },
    {
      "w": "Always",
      "a": "Never",
      "ur": "ہمیشہ ↔ کبھی نہیں"
    },
    {
      "w": "Difficult",
      "a": "Easy",
      "ur": "مشکل ↔ آسان"
    },
    {
      "w": "Clean",
      "a": "Dirty",
      "ur": "صاف ↔ گندا"
    },
    {
      "w": "Arrive",
      "a": "Depart",
      "ur": "پہنچنا ↔ روانہ ہونا"
    },
    {
      "w": "Generous",
      "a": "Selfish",
      "ur": "سخی ↔ خود غرض"
    },
    {
      "w": "Success",
      "a": "Failure",
      "ur": "کامیابی ↔ ناکامی"
    },
    {
      "w": "Careful",
      "a": "Careless",
      "ur": "محتاط ↔ لاپرواہ"
    },
    {
      "w": "Permanent",
      "a": "Temporary",
      "ur": "مستقل ↔ عارضی"
    },
    {
      "w": "Include",
      "a": "Exclude",
      "ur": "شامل کرنا ↔ نکالنا"
    }
  ],

  idioms: [
    {
      "i": "Break the ice",
      "m": "To start a conversation in an awkward situation",
      "ur": "بات چیت کا آغاز کرنا",
      "ex": "He told a joke to break the ice."
    },
    {
      "i": "A piece of cake",
      "m": "Something very easy",
      "ur": "بہت آسان کام",
      "ex": "The English paper was a piece of cake."
    },
    {
      "i": "Once in a blue moon",
      "m": "Very rarely",
      "ur": "کبھی کبھار",
      "ex": "We eat out once in a blue moon."
    },
    {
      "i": "Hit the books",
      "m": "To study hard",
      "ur": "دل لگا کر پڑھنا",
      "ex": "Exams are near, so I must hit the books."
    },
    {
      "i": "Under the weather",
      "m": "Feeling sick",
      "ur": "طبیعت خراب ہونا",
      "ex": "I am under the weather today."
    },
    {
      "i": "Burn the midnight oil",
      "m": "To work or study late at night",
      "ur": "رات گئے تک محنت کرنا",
      "ex": "She burned the midnight oil before the exam."
    },
    {
      "i": "Cost an arm and a leg",
      "m": "Very expensive",
      "ur": "بہت مہنگا ہونا",
      "ex": "That phone costs an arm and a leg."
    },
    {
      "i": "Spill the beans",
      "m": "To reveal a secret",
      "ur": "راز کھول دینا",
      "ex": "Don't spill the beans about the party."
    },
    {
      "i": "Better late than never",
      "m": "It is better to do something late than not at all",
      "ur": "دیر آید درست آید",
      "ex": "He reached late, but better late than never."
    },
    {
      "i": "Actions speak louder than words",
      "m": "What you do matters more than what you say",
      "ur": "عمل باتوں سے زیادہ اہم ہے",
      "ex": "Help others; actions speak louder than words."
    },
    {
      "i": "Practice makes perfect",
      "m": "Doing something again and again makes you better",
      "ur": "مشق سے انسان کامل ہوتا ہے",
      "ex": "Keep reading aloud - practice makes perfect."
    },
    {
      "i": "The early bird catches the worm",
      "m": "The one who starts early gets the best result",
      "ur": "جو جلدی کرتا ہے فائدے میں رہتا ہے",
      "ex": "Wake up early; the early bird catches the worm."
    }
  ],

  writing: [
    {
      "title": "Application for Sick Leave",
      "text": "To,\nThe Head Master,\nGovernment Boys Higher Secondary School Seerani,\nDistrict Badin.\n\nSubject: Application for Sick Leave\n\nRespected Sir,\nI respectfully state that I am suffering from fever and cannot attend school. Kindly grant me leave for two days, from ______ to ______.\nI shall be very thankful to you.\n\nYours obediently,\nName: ____________\nClass: ____________\nDate: ____________"
    },
    {
      "title": "Letter to a Friend",
      "text": "Seerani,\n10 November 2026\n\nDear Ali,\nI hope you are well. I am writing to tell you that my exams will start next month and I am preparing hard. How are your studies going? Please write to me soon and give my salam to your parents.\n\nYour loving friend,\nRaza"
    },
    {
      "title": "Paragraph: My School",
      "text": "My school is Government Boys Higher Secondary School Seerani, in District Badin. It is a government school. Our teachers are kind and hardworking. We study English, Maths, Science, Sindhi and Urdu. We also celebrate national days like Independence Day. I love my school and I work hard to make it proud."
    },
    {
      "title": "Paragraph: Importance of Education",
      "text": "Education is very important in our life. It makes us a good human being. An educated person can think, speak and work better. Education helps a country to progress. We should study hard and use our knowledge to help our family and society."
    }
  ]
};
