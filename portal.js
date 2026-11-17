(function () {
  "use strict";
  var D = window.PORTAL_DATA;
  var page = document.body.getAttribute("data-page");
  var main = document.getElementById("main");

  /* ================= LANGUAGE (EN / سنڌي / اردو) ================= */
  var LANG = "en";
  try {
    var lq = /[?&]lang=(en|ur|sd)/.exec(location.search);
    LANG = (lq && lq[1]) || localStorage.getItem("lang") || "en";
    if (lq) localStorage.setItem("lang", LANG);
  } catch (e) { var lq2 = /[?&]lang=(en|ur|sd)/.exec(location.search); if (lq2) LANG = lq2[1]; }
  if (["en", "ur", "sd"].indexOf(LANG) < 0) LANG = "en";
  var IDX = LANG === "ur" ? 0 : 1;
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === "en" ? "ltr" : "rtl";
  var X = {
"Seerani Digital Portal": [
"سیرانی ڈیجیٹل پورٹل",
"سيراڻي ڊجيٽل پورٽل"
],
"GBHSS Seerani, Badin": [
"جی بی ایچ ایس ایس سیرانی، بدین",
"جي بي ايڇ ايس ايس سيراڻي، بدين"
],
"School Portal": [
"اسکول پورٹل",
"اسڪول پورٽل"
],
"All Features": [
"تمام سہولیات",
"سڀ سهولتون"
],
"Home": [
"ہوم",
"گهر"
],
"Quiz": [
"کوئز",
"ڪوئز"
],
"Papers": [
"پیپرز",
"پيپر"
],
"Contact": [
"رابطہ",
"رابطو"
],
"Government of Sindh · District Badin": [
"حکومتِ سندھ · ضلع بدین",
"سنڌ سرڪار · ضلعو بدين"
],
"Government Boys Higher Secondary School Seerani": [
"گورنمنٹ بوائز ہائر سیکنڈری اسکول سیرانی",
"گورنمينٽ بوائز هاءِ سيڪنڊري اسڪول سيراڻي"
],
"Smart ideas for a digital Sindh. Learn, practise and stay informed.": [
"ڈیجیٹل سندھ کے لیے سمارٹ آئیڈیاز۔ سیکھیں، مشق کریں اور باخبر رہیں۔",
"ڊجيٽل سنڌ لاءِ اسمارٽ خيال. سکو، مشق ڪريو ۽ باخبر رهو."
],
"Play a Quiz": [
"کوئز کھیلیں",
"ڪوئز کيڏو"
],
"Past Papers": [
"پرانے پیپرز",
"پراڻا پيپر"
],
"Contact / Report a problem": [
"رابطہ / مسئلے کی رپورٹ",
"رابطو / مسئلي جي رپورٽ"
],
"Quizzes": [
"کوئز",
"ڪوئز"
],
"MCQs": [
"ایم سی کیوز",
"MCQs"
],
"Books & Links": [
"کتابیں اور لنکس",
"ڪتاب ۽ لنڪس"
],
"English Words": [
"انگریزی الفاظ",
"انگريزي لفظ"
],
"Latest:": [
"تازہ ترین:",
"تازو:"
],
"Explore the portal": [
"پورٹل دیکھیں",
"پورٽل ڏسو"
],
"Our partners": [
"ہمارے شراکت دار",
"اسان جا ڀائيوار"
],
"Online Tests": [
"آن لائن ٹیسٹ",
"آن لائن ٽيسٽ"
],
"English Learning": [
"انگریزی سیکھیں",
"انگريزي سکيا"
],
"Digital Library": [
"ڈیجیٹل لائبریری",
"ڊجيٽل لائبريري"
],
"Notice Board": [
"نوٹس بورڈ",
"نوٽيس بورڊ"
],
"Our Teachers": [
"ہمارے اساتذہ",
"اسان جا استاد"
],
"Student Achievements": [
"طلبہ کی کامیابیاں",
"شاگردن جون ڪاميابيون"
],
"School Calendar": [
"اسکول کیلنڈر",
"اسڪول ڪئلينڊر"
],
"Contact & Report": [
"رابطہ اور رپورٹ",
"رابطو ۽ رپورٽ"
],
"Photo Gallery": [
"فوٹو گیلری",
"فوٽو گيلري"
],
"Contact & Report a Problem": [
"رابطہ اور مسئلے کی رپورٹ",
"رابطو ۽ مسئلي جي رپورٽ"
],
"Class 6–10 Sindh board papers": [
"جماعت 6 تا 10 سندھ بورڈ کے پیپرز",
"ڪلاس 6 کان 10 سنڌ بورڊ جا پيپر"
],
"Physics, Chemistry, Biology, Maths and more": [
"فزکس، کیمسٹری، بائیولوجی، ریاضی اور مزید",
"فزڪس، ڪيمسٽري، بائيولاجي، رياضي ۽ وڌيڪ"
],
"Grammar, synonyms, antonyms, speaking": [
"گرامر، ہم معنی، متضاد، بول چال",
"گرامر، هم معنيٰ، ابتڙ، ڳالهائڻ"
],
"STBB books & Shah Jo Risalo": [
"ایس ٹی بی بی کتابیں اور شاہ جو رسالو",
"STBB ڪتاب ۽ شاھ جو رسالو"
],
"School announcements": [
"اسکول کے اعلانات",
"اسڪول جا اعلان"
],
"Staff, subjects and profiles": [
"عملہ، مضامین اور تعارف",
"عملو، مضمون ۽ تعارف"
],
"Position holders & competitions": [
"پوزیشن ہولڈرز اور مقابلے",
"پوزيشن هولڊر ۽ مقابلا"
],
"Exams, holidays and events": [
"امتحانات، چھٹیاں اور تقریبات",
"امتحان، موڪلون ۽ تقريبون"
],
"WhatsApp message or problem report": [
"واٹس ایپ پیغام یا مسئلے کی رپورٹ",
"واٽس ايپ پيغام يا مسئلي جي رپورٽ"
],
"School activities & memories": [
"اسکول کی سرگرمیاں اور یادیں",
"اسڪول جون سرگرميون ۽ يادگيريون"
],
"Class 6–10, subject-wise PDF papers": [
"جماعت 6 تا 10، مضمون وار پی ڈی ایف پیپرز",
"ڪلاس 6 کان 10، مضمون موجب PDF پيپر"
],
"Position holders, certificates, competitions": [
"پوزیشن ہولڈرز، سرٹیفکیٹ، مقابلے",
"پوزيشن هولڊر، سرٽيفڪيٽ، مقابلا"
],
"Teachers' names, subjects and profiles": [
"اساتذہ کے نام، مضامین اور تعارف",
"استادن جا نالا، مضمون ۽ تعارف"
],
"School announcements and notifications": [
"اسکول کے اعلانات اور اطلاعات",
"اسڪول جا اعلان ۽ ڄاڻ"
],
"Books, notes and educational PDFs": [
"کتابیں، نوٹس اور تعلیمی پی ڈی ایف",
"ڪتاب، نوٽس ۽ تعليمي PDF"
],
"MCQs, quizzes and chapter tests": [
"ایم سی کیوز، کوئز اور باب وار ٹیسٹ",
"MCQs، ڪوئز ۽ باب وار ٽيسٽ"
],
"Exams, holidays and school events": [
"امتحانات، چھٹیاں اور اسکول کی تقریبات",
"امتحان، موڪلون ۽ اسڪول جون تقريبون"
],
"School activities and memorable events": [
"اسکول کی سرگرمیاں اور یادگار تقریبات",
"اسڪول جون سرگرميون ۽ يادگار تقريبون"
],
"Vocabulary, grammar and speaking practice": [
"الفاظ، گرامر اور بول چال کی مشق",
"لفظ، گرامر ۽ ڳالهائڻ جي مشق"
],
"Send a WhatsApp message to the school or report a problem": [
"اسکول کو واٹس ایپ پیغام بھیجیں یا مسئلے کی رپورٹ کریں",
"اسڪول کي واٽس ايپ پيغام موڪليو يا مسئلي جي رپورٽ ڏيو"
],
"Government Boys Higher Secondary School Seerani, District Badin, Sindh": [
"گورنمنٹ بوائز ہائر سیکنڈری اسکول سیرانی، ضلع بدین، سندھ",
"گورنمينٽ بوائز هاءِ سيڪنڊري اسڪول سيراڻي، ضلعو بدين، سنڌ"
],
"Built by students with free tools · No personal data is stored": [
"طلبہ نے مفت ٹولز سے بنایا · کوئی ذاتی ڈیٹا محفوظ نہیں ہوتا",
"شاگردن مفت اوزارن سان ٺاهيو · ڪا به ذاتي ڊيٽا محفوظ نه ٿي ٿئي"
],
"All": [
"سب",
"سڀ"
],
"All classes": [
"تمام جماعتیں",
"سڀ ڪلاس"
],
"All subjects": [
"تمام مضامین",
"سڀ مضمون"
],
"All Subjects": [
"تمام مضامین",
"سڀ مضمون"
],
"Class All": [
"تمام جماعتیں",
"سڀ ڪلاس"
],
"Search…": [
"تلاش کریں…",
"ڳولهيو…"
],
"Search teacher or subject…": [
"استاد یا مضمون تلاش کریں…",
"استاد يا مضمون ڳولهيو…"
],
"Open ↗": [
"کھولیں ↖",
"کوليو ↖"
],
"Open / Download": [
"کھولیں / ڈاؤن لوڈ",
"کوليو / ڊائونلوڊ"
],
"Nothing here yet - information will be added soon.": [
"ابھی یہاں کچھ نہیں - معلومات جلد شامل کی جائیں گی۔",
"اڃا هتي ڪجهه ناهي - ڄاڻ جلد شامل ڪئي ويندي."
],
"Class 9–10: past papers of the Sindh Board (BISE Hyderabad) are available through the links below. Class 6–8 papers are the school's own annual exams and will be uploaded soon.": [
"جماعت 9–10: سندھ بورڈ (بی آئی ایس ای حیدرآباد) کے پرانے پیپرز نیچے دیے گئے لنکس پر دستیاب ہیں۔ جماعت 6–8 کے پیپرز اسکول کے اپنے سالانہ امتحانات کے ہوتے ہیں، جو جلد یہاں اپ لوڈ کیے جائیں گے۔",
"ڪلاس 9–10: سنڌ بورڊ (BISE حيدرآباد) جا پراڻا پيپر هيٺ ڏنل لنڪن تي موجود آهن. ڪلاس 6–8 جا پيپر اسڪول جي پنهنجي ساليانه امتحانن جا هوندا آهن، جيڪي جلد هتي اپ لوڊ ڪيا ويندا."
],
"These links open outside websites (taleem360, Wikipedia, Dawn etc.) where STBB books and Shah Jo Risalo are available.": [
"یہ لنکس بیرونی ویب سائٹس (taleem360، وکی پیڈیا، ڈان وغیرہ) پر کھلتے ہیں جہاں ایس ٹی بی بی کی کتابیں اور شاہ جو رسالو موجود ہیں۔",
"هي لنڪ ٻاهرين ويب سائيٽن (taleem360، وڪيپيڊيا، ڊان وغيره) تي کلن ٿا جتي STBB جا ڪتاب ۽ شاھ جو رسالو موجود آهن."
],
"Position Holder": [
"پوزیشن ہولڈر",
"پوزيشن هولڊر"
],
"Certificate": [
"سرٹیفکیٹ",
"سرٽيفڪيٽ"
],
"Competition": [
"مقابلہ",
"مقابلو"
],
"Events": [
"تقریبات",
"تقريبون"
],
"Award": [
"ایوارڈ",
"ايوارڊ"
],
"Awards": [
"ایوارڈز",
"ايوارڊ"
],
"Sports": [
"کھیل",
"راندين"
],
"Science Exhibition": [
"سائنس نمائش",
"سائنس نمائش"
],
"Staff": [
"عملہ",
"عملو"
],
"Classroom": [
"کلاس روم",
"ڪلاس روم"
],
"Science": [
"سائنس",
"سائنس"
],
"Exam": [
"امتحان",
"امتحان"
],
"Holiday": [
"چھٹی",
"موڪل"
],
"Event": [
"تقریب",
"تقريب"
],
"exam": [
"امتحان",
"امتحان"
],
"holiday": [
"چھٹی",
"موڪل"
],
"event": [
"تقریب",
"تقريب"
],
"General": [
"عمومی",
"عام"
],
"Admission": [
"داخلہ",
"داخلا"
],
"Important": [
"اہم",
"اهم"
],
"Book": [
"کتاب",
"ڪتاب"
],
"Shah Jo Risalo": [
"شاہ جو رسالو",
"شاھ جو رسالو"
],
"Notes": [
"نوٹس",
"نوٽس"
],
"Educational PDF": [
"تعلیمی پی ڈی ایف",
"تعليمي PDF"
],
"Maths": [
"ریاضی",
"رياضي"
],
"English": [
"انگریزی",
"انگريزي"
],
"GK": [
"عمومی معلومات",
"عام ڄاڻ"
],
"Computer": [
"کمپیوٹر",
"ڪمپيوٽر"
],
"Physics": [
"فزکس",
"فزڪس"
],
"Chemistry": [
"کیمسٹری",
"ڪيمسٽري"
],
"Biology": [
"بائیولوجی",
"بائيولاجي"
],
"General Knowledge": [
"عمومی معلومات",
"عام ڄاڻ"
],
"Social Studies": [
"معاشرتی علوم",
"سماجي اڀياس"
],
"Sindhi": [
"سندھی",
"سنڌي"
],
"Urdu": [
"اردو",
"اردو"
],
"Islamiat": [
"اسلامیات",
"اسلاميات"
],
"Sindhi Literature": [
"سندھی ادب",
"سنڌي ادب"
],
"Physics - Motion, Force & Electricity": [
"فزکس - حرکت، قوت اور بجلی",
"فزڪس - حرڪت، قوت ۽ بجلي"
],
"Chemistry - Atoms, Acids & Elements": [
"کیمسٹری - ایٹم، تیزاب اور عناصر",
"ڪيمسٽري - ائٽم، تيزاب ۽ عنصر"
],
"Biology - Cell, Body & Plants": [
"بائیولوجی - خلیہ، جسم اور پودے",
"بائيولاجي - سيل، جسم ۽ ٻوٽا"
],
"Maths - Algebra, Geometry & Trigonometry": [
"ریاضی - الجبرا، جیومیٹری اور مثلثیات",
"رياضي - الجبرا، جاميٽري ۽ ٽرگنوميٽري"
],
"Maths - Basic": [
"ریاضی - بنیادی",
"رياضي - بنيادي"
],
"General Science": [
"عمومی سائنس",
"عام سائنس"
],
"English Grammar": [
"انگریزی گرامر",
"انگريزي گرامر"
],
"English - Synonyms & Antonyms": [
"انگریزی - ہم معنی اور متضاد",
"انگريزي - هم معنيٰ ۽ ابتڙ"
],
"Know Your Pakistan & Sindh": [
"اپنے پاکستان اور سندھ کو جانیں",
"پنهنجي پاڪستان ۽ سنڌ کي ڄاڻو"
],
"Computer Basics": [
"کمپیوٹر کی بنیادی باتیں",
"ڪمپيوٽر جون بنيادي ڳالهيون"
],
"Start Test": [
"ٹیسٹ شروع کریں",
"ٽيسٽ شروع ڪريو"
],
"Next →": [
"اگلا ←",
"اڳيون ←"
],
"← Previous": [
"→ پچھلا",
"→ پويون"
],
"See result": [
"نتیجہ دیکھیں",
"نتيجو ڏسو"
],
"Excellent!": [
"شاندار!",
"شاندار!"
],
"Good, keep practising": [
"اچھا، مزید مشق کریں",
"سٺو، وڌيڪ مشق ڪريو"
],
"Try again": [
"دوبارہ کوشش کریں",
"ٻيهر ڪوشش ڪريو"
],
"Review": [
"جائزہ",
"جائزو"
],
"Your answer": [
"آپ کا جواب",
"توهان جو جواب"
],
"Correct answer": [
"درست جواب",
"صحيح جواب"
],
"Test list": [
"ٹیسٹ کی فہرست",
"ٽيسٽن جي لسٽ"
],
"Head Master": [
"ہیڈ ماسٹر",
"هيڊ ماسٽر"
],
"Open WhatsApp directly": [
"براہِ راست واٹس ایپ کھولیں",
"سڌو واٽس ايپ کوليو"
],
"WhatsApp:": [
"واٹس ایپ:",
"واٽس ايپ:"
],
"Send a message": [
"پیغام بھیجیں",
"پيغام موڪليو"
],
"Fill in the form, then press Send on WhatsApp. WhatsApp will open with the message already written; you press Send yourself. This site does not save any information.": [
"فارم بھریں، پھر «واٹس ایپ پر بھیجیں» دبائیں۔ واٹس ایپ پہلے سے لکھے ہوئے پیغام کے ساتھ کھلے گا؛ آپ خود Send دبائیں گے۔ اس سائٹ پر کوئی معلومات محفوظ نہیں ہوتی۔",
"فارم ڀريو، پوءِ «واٽس ايپ تي موڪليو» دٻايو. واٽس ايپ اڳ ۾ لکيل پيغام سان کلندو؛ توهان پاڻ Send دٻائيندا. هن سائيٽ تي ڪا به ڄاڻ محفوظ نٿي ٿئي."
],
"What is this about?": [
"یہ کس بارے میں ہے؟",
"هي ڪنهن بابت آهي؟"
],
"Report a problem": [
"مسئلے کی رپورٹ",
"مسئلي جي رپورٽ"
],
"Question": [
"سوال",
"سوال"
],
"Suggestion": [
"تجویز",
"تجويز"
],
"Admission inquiry": [
"داخلے کی معلومات",
"داخلا جي پڇا ڳاڇا"
],
"Type of problem": [
"مسئلے کی قسم",
"مسئلي جو قسم"
],
"Broken furniture": [
"ٹوٹا ہوا فرنیچر",
"ڀڳل فرنيچر"
],
"Water or toilets": [
"پانی یا بیت الخلا",
"پاڻي يا ٽوائلٽ"
],
"Cleanliness": [
"صفائی",
"صفائي"
],
"Harassment or bullying": [
"ہراسانی یا بدمعاشی (بلنگ)",
"ايذاءُ يا بدمعاشي (بلنگ)"
],
"Electricity or fans": [
"بجلی یا پنکھے",
"بجلي يا پکا"
],
"Other": [
"دیگر",
"ٻيو"
],
"Class": [
"جماعت",
"ڪلاس"
],
"Parent / Other": [
"والدین / دیگر",
"والدين / ٻيا"
],
"Your name (optional)": [
"آپ کا نام (اختیاری)",
"توهان جو نالو (اختياري)"
],
"Your name": [
"آپ کا نام",
"توهان جو نالو"
],
"Message": [
"پیغام",
"پيغام"
],
"Write your message here…": [
"یہاں اپنا پیغام لکھیں…",
"هتي پنهنجو پيغام لکو…"
],
"For serious issues like harassment or bullying, please also speak to the Head Master directly.": [
"ہراسانی یا بدمعاشی جیسے سنگین مسئلے میں ہیڈ ماسٹر سے براہِ راست بھی بات کریں۔",
"ايذاءَ يا بدمعاشي جهڙي سنگين مسئلي ۾ هيڊ ماسٽر سان سڌو به ڳالهايو."
],
"Send on WhatsApp": [
"واٹس ایپ پر بھیجیں",
"واٽس ايپ تي موڪليو"
],
"Copy message": [
"پیغام کاپی کریں",
"پيغام ڪاپي ڪريو"
],
"Please write a message first.": [
"پہلے پیغام لکھیں۔",
"پهريان پيغام لکو."
],
"WhatsApp opened - press Send there.": [
"واٹس ایپ کھل گیا - وہاں Send دبائیں۔",
"واٽس ايپ کلي ويو - اتي Send دٻايو."
],
"Message copied.": [
"پیغام کاپی ہو گیا۔",
"پيغام ڪاپي ٿي ويو."
],
"Events this month": [
"اس مہینے کے پروگرام",
"هن مهيني جا پروگرام"
],
"No events this month.": [
"اس مہینے کوئی پروگرام نہیں۔",
"هن مهيني ڪو پروگرام ناهي."
],
"January": [
"جنوری",
"جنوري"
],
"February": [
"فروری",
"فيبروري"
],
"March": [
"مارچ",
"مارچ"
],
"April": [
"اپریل",
"اپريل"
],
"May": [
"مئی",
"مئي"
],
"June": [
"جون",
"جون"
],
"July": [
"جولائی",
"جولاءِ"
],
"August": [
"اگست",
"آگسٽ"
],
"September": [
"ستمبر",
"سيپٽمبر"
],
"October": [
"اکتوبر",
"آڪٽوبر"
],
"November": [
"نومبر",
"نومبر"
],
"December": [
"دسمبر",
"ڊسمبر"
],
"Sun": [
"اتوار",
"آچر"
],
"Mon": [
"پیر",
"سومر"
],
"Tue": [
"منگل",
"اڱارو"
],
"Wed": [
"بدھ",
"اربع"
],
"Thu": [
"جمعرات",
"خميس"
],
"Fri": [
"جمعہ",
"جمع"
],
"Sat": [
"ہفتہ",
"ڇنڇر"
],
"Kashmir Solidarity Day": [
"یومِ یکجہتیِ کشمیر",
"ڪشمير سان يڪجهتي جو ڏينهن"
],
"Pakistan Day": [
"یومِ پاکستان",
"پاڪستان ڏينهن"
],
"Labour Day": [
"یومِ مزدور",
"مزدورن جو ڏينهن"
],
"Independence Day": [
"یومِ آزادی",
"آزاديءَ جو ڏينهن"
],
"Teachers' Day": [
"یومِ اساتذہ",
"استادن جو ڏينهن"
],
"Iqbal Day": [
"یومِ اقبال",
"اقبال ڏينهن"
],
"Quaid-e-Azam Day": [
"یومِ قائداعظم",
"قائداعظم ڏينهن"
],
"Photos will be added soon. 📷": [
"تصاویر جلد شامل کی جائیں گی۔ 📷",
"تصويرون جلد شامل ڪيون وينديون. 📷"
],
"Morning Assembly": [
"صبح کی اسمبلی",
"صبح جي اسيمبلي"
],
"Celebrating Culture Day": [
"ثقافت کا دن منانا",
"ثقافتي ڏينهن ملهائڻ"
],
"Prize Distribution": [
"انعامات کی تقسیم",
"انعام ورهائڻ"
],
"Trophy Presentation": [
"ٹرافی کی پیشکش",
"ٽرافي ڏيڻ"
],
"School Staff": [
"اسکول کا عملہ",
"اسڪول جو عملو"
],
"School staff": [
"اسکول کا عملہ",
"اسڪول جو عملو"
],
"Teachers in Assembly": [
"اسمبلی میں اساتذہ",
"اسيمبلي ۾ استاد"
],
"Teachers in assembly": [
"اسمبلی میں اساتذہ",
"اسيمبلي ۾ استاد"
],
"At School": [
"اسکول میں",
"اسڪول ۾"
],
"Students and Teacher": [
"طلبہ اور استاد",
"شاگرد ۽ استاد"
],
"Students Working": [
"طلبہ کام کرتے ہوئے",
"شاگرد ڪم ڪندي"
],
"Teacher Checking Papers in Class": [
"استاد کلاس میں پیپرز چیک کرتے ہوئے",
"استاد ڪلاس ۾ پيپر چڪاسيندي"
],
"Our Science Lab": [
"ہماری سائنس لیب",
"اسان جي سائنس ليب"
],
"Vocabulary": [
"الفاظ",
"لفظ"
],
"Grammar": [
"گرامر",
"گرامر"
],
"Synonyms": [
"ہم معنی الفاظ",
"هم معنيٰ لفظ"
],
"Antonyms": [
"متضاد الفاظ",
"ابتڙ لفظ"
],
"Idioms": [
"محاورے",
"محاورا"
],
"Speaking": [
"بول چال",
"ڳالهائڻ"
],
"Writing": [
"تحریر",
"لکڻ"
],
"Listen": [
"سنیں",
"ٻڌو"
],
"Search synonyms… (e.g. happy)": [
"ہم معنی تلاش کریں… (مثلاً happy)",
"هم معنيٰ ڳولهيو… (مثال happy)"
],
"Search antonyms… (e.g. hot)": [
"متضاد تلاش کریں… (مثلاً hot)",
"ابتڙ ڳولهيو… (مثال hot)"
],
"No word found.": [
"کوئی لفظ نہیں ملا۔",
"ڪو لفظ نه مليو."
],
"Copy": [
"کاپی",
"ڪاپي"
],
"Copied ✓": [
"کاپی ہو گیا ✓",
"ڪاپي ٿيو ✓"
],
"Your browser does not support audio.": [
"آپ کا براؤزر آواز سپورٹ نہیں کرتا۔",
"توهان جو برائوزر آواز سپورٽ نٿو ڪري."
],
"Greetings": [
"سلام دعا",
"سلام دعا"
],
"In the Classroom": [
"کلاس روم میں",
"ڪلاس روم ۾"
],
"Introducing Yourself": [
"اپنا تعارف",
"پنهنجو تعارف"
],
"Asking for Help": [
"مدد مانگنا",
"مدد گهرڻ"
],
"Application for Sick Leave": [
"بیماری کی چھٹی کی درخواست",
"بيماريءَ جي موڪل جي درخواست"
],
"Letter to a Friend": [
"دوست کو خط",
"دوست ڏانهن خط"
],
"Paragraph: My School": [
"پیراگراف: میرا اسکول",
"پيراگراف: منهنجو اسڪول"
],
"Paragraph: Importance of Education": [
"پیراگراف: تعلیم کی اہمیت",
"پيراگراف: تعليم جي اهميت"
]
};
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function lookup(core) {
    if (Object.prototype.hasOwnProperty.call(X, core)) return X[core][IDX];
    var m;
    if ((m = /^Class (\d+(?:[–-]\d+)?)$/.exec(core))) return (IDX === 0 ? "جماعت " : "ڪلاس ") + m[1];
    if ((m = /^(\d+) MCQs · new order every time$/.exec(core))) return m[1] + " MCQs · " + (IDX === 0 ? "ہر بار نئی ترتیب" : "هر ڀيري نئين ترتيب");
    if ((m = /^Card (\d+) \/ (\d+) — tap the card to flip$/.exec(core))) return (IDX === 0 ? "کارڈ " : "ڪارڊ ") + m[1] + " / " + m[2] + " — " + (IDX === 0 ? "پلٹنے کے لیے کارڈ پر ٹیپ کریں" : "ڦيرائڻ لاءِ ڪارڊ تي ٽيپ ڪريو");
    if ((m = /^([\s\S]*) · Question (\d+) \/ (\d+)$/.exec(core))) return trStr(m[1]) + " · سوال " + m[2] + " / " + m[3];
    if ((m = new RegExp("^(" + MONTHS.join("|") + ") (\\d{4})$").exec(core))) return lookup(m[1]) + " " + m[2];
    if ((m = new RegExp("^(\\d+) (" + MONTHS.join("|") + ")$").exec(core))) return m[1] + " " + lookup(m[2]);
    if ((m = /^Example: ([\s\S]*)$/.exec(core))) return "مثال: " + m[1];
    return null;
  }
  function trStr(s) {
    if (LANG === "en" || !s || !/[A-Za-z]/.test(s)) return s;
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(s), core = m[2];
    if (!core) return s;
    var r = lookup(core);
    if (r == null) {
      var pre = /^[^A-Za-z]*/.exec(core)[0], rest = core.slice(pre.length);
      r = lookup(rest);
      if (r != null) r = pre + r;
      else {
        var tail = /[^A-Za-z0-9]*$/.exec(rest)[0], r2 = lookup(rest.slice(0, rest.length - tail.length));
        if (r2 != null && tail) r = pre + r2 + tail;
      }
    }
    return r == null ? s : m[1] + r + m[3];
  }
  function tr(s) { return trStr(s); }
  var SKIP = "script,style,pre,textarea,.wel p,[data-notr]";
  function trTree(node) {
    if (LANG === "en" || !node) return;
    if (node.nodeType === 3) {
      if (node.parentNode && node.parentNode.closest && node.parentNode.closest(SKIP)) return;
      var v = node.nodeValue, w = trStr(v);
      if (w !== v) node.nodeValue = w;
      return;
    }
    if (node.nodeType !== 1 || (node.matches && node.matches(SKIP)) || (node.closest && node.closest(SKIP))) return;
    var tw = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null), n, list = [];
    while ((n = tw.nextNode())) list.push(n);
    list.forEach(trTree);
    var els = node.querySelectorAll ? node.querySelectorAll("[placeholder]") : [];
    Array.prototype.forEach.call(els, function (e) { e.setAttribute("placeholder", trStr(e.getAttribute("placeholder"))); });
    if (node.getAttribute && node.getAttribute("placeholder")) node.setAttribute("placeholder", trStr(node.getAttribute("placeholder")));
  }
  if (LANG !== "en") {
    new MutationObserver(function (muts) {
      muts.forEach(function (mu) { Array.prototype.forEach.call(mu.addedNodes, trTree); });
    }).observe(document.body, { childList: true, subtree: true });
  }
  /* language switcher */
  (function () {
    var hdr = document.querySelector(".top .wrap");
    if (!hdr) return;
    var sw = document.createElement("div");
    sw.className = "lang"; sw.setAttribute("data-notr", "1");
    sw.innerHTML = [["en", "EN"], ["sd", "سنڌي"], ["ur", "اردو"]].map(function (l) {
      return '<button type="button" data-l="' + l[0] + '" class="' + (l[0] === LANG ? "on" : "") + '">' + l[1] + "</button>";
    }).join("");
    hdr.insertBefore(sw, hdr.children[1] || null);
    sw.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      try { localStorage.setItem("lang", b.getAttribute("data-l")); } catch (x) {}
      location.href = location.pathname + "?lang=" + b.getAttribute("data-l");
    });
  })();
  /* =============================================================== */

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function empty(msg) { return '<div class="empty">' + esc(msg || "Nothing here yet - information will be added soon.") + "</div>"; }
  function ph(s) { return (window.PORTAL_PHOTOS && window.PORTAL_PHOTOS[s]) || s; }
  function uniq(arr) { return arr.filter(function (v, i) { return arr.indexOf(v) === i; }); }
  function fmtDate(d) {
    var dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString(LANG === "en" ? "en-GB" : "ur-PK", { day: "numeric", month: "short", year: "numeric" });
  }
  function chips(container, options, onPick) {
    var cur = options[0];
    container.innerHTML = options.map(function (o, i) {
      return '<button class="chip' + (i === 0 ? " on" : "") + '" data-v="' + esc(o) + '">' + esc(o) + "</button>";
    }).join("");
    container.addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      $$(".chip", container).forEach(function (x) { x.classList.remove("on"); });
      b.classList.add("on"); cur = b.getAttribute("data-v"); onPick(cur);
    });
  }

  var R = {};

  /* ---------- HUB ---------- */
  R.hub = function () {
    var latest = D.notices.slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).slice(0, 5);
    var t = $("#ticker");
    if (t && latest.length) t.innerHTML = latest.map(function (n) { return esc(n.title); }).join("   •   ");
    var st = $("#stats");
    if (st) {
      var mcq = D.tests.reduce(function (a, t) { return a + t.questions.length; }, 0);
      st.innerHTML = [[D.tests.length, "Quizzes"], [mcq, "MCQs"], [D.library.length, "Books & Links"], [D.vocab.length + D.synonyms.length + D.antonyms.length, "English Words"]].map(function (x) {
        return "<div><b>" + x[0] + "</b><span>" + x[1] + "</span></div>";
      }).join("");
    }
    var s = $("#strip");
    if (s && D.gallery.length) s.innerHTML = D.gallery.slice(0, 6).map(function (g) {
      return '<a href="gallery.html"><figure><div class="ph"><img loading="lazy" src="' + esc(ph(g.src)) + '" alt="' + esc(g.caption) + '"></div><figcaption>' + esc(g.caption) + "</figcaption></figure></a>";
    }).join("");
  };

  /* ---------- PAST PAPERS ---------- */
  R.papers = function () {
    main.innerHTML =
      '<div class="note">Class 9–10: past papers of the Sindh Board (BISE Hyderabad) are available through the links below. Class 6–8 papers are the school\'s own annual exams and will be uploaded soon.</div>' +
      '<div class="bar"><select id="c"><option value="">All classes</option>' +
      [6, 7, 8, 9, 10].map(function (c) { return '<option value="' + c + '">Class ' + c + "</option>"; }).join("") +
      '</select><select id="s"><option value="">All subjects</option>' +
      uniq(D.papers.map(function (p) { return p.subject; })).sort().map(function (s) { return "<option>" + esc(s) + "</option>"; }).join("") +
      '</select><input id="q" placeholder="Search…"></div><div id="out" class="list"></div>';
    function draw() {
      var c = $("#c").value, s = $("#s").value, q = $("#q").value.toLowerCase();
      var items = D.papers.filter(function (p) {
        return (!c || String(p.cls) === c) && (!s || p.subject === s) &&
          (p.subject + " " + p.title + " " + (p.years || p.year)).toLowerCase().indexOf(q) > -1;
      }).sort(function (a, b) { return b.cls - a.cls || a.subject.localeCompare(b.subject); });
      $("#out").innerHTML = items.length ? items.map(function (p) {
        return '<div class="card row"><div><h3>' + esc(p.subject) + " — " + esc(p.title) + "</h3>" +
          '<div class="meta"><span class="tag">Class ' + p.cls + '</span><span class="tag gold">' + esc(p.years || p.year) + "</span></div></div>" +
          '<a class="btn sm" href="' + esc(p.file) + '" target="_blank" rel="noopener">' + (/^https?:/.test(p.file) ? "Open ↗" : "⬇ PDF") + "</a></div>";
      }).join("") : empty();
    }
    $$("#c,#s,#q").forEach(function (e) { e.addEventListener("input", draw); }); draw();
  };

  /* ---------- STUDENT ACHIEVEMENTS ---------- */
  R.students = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="grid" id="out"></div>';
    function draw(cat) {
      var items = D.studentAchievements.filter(function (a) { return cat === "All" || a.category === cat; });
      $("#out").innerHTML = items.length ? items.map(function (a) {
        var av = a.photo ? '<img class="avatar" src="' + esc(ph(a.photo)) + '" alt="">' : '<div class="avatar">' + esc(a.name.charAt(0)) + "</div>";
        return '<div class="card person">' + av + "<div><h3>" + esc(a.name) + '</h3><div class="meta">' + esc(a.cls) + " · " + a.year +
          "</div><div>" + esc(a.title) + '</div><span class="tag">' + esc(a.category) + "</span></div></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Position Holder", "Certificate", "Competition"], draw); draw("All");
  };

  /* ---------- SCHOOL ACHIEVEMENTS ---------- */
  R.school = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="list" id="out"></div>';
    function draw(cat) {
      var items = D.schoolAchievements.filter(function (a) { return cat === "All" || a.category === cat; })
        .sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
      $("#out").innerHTML = items.length ? items.map(function (a) {
        return '<div class="card">' + (a.image ? '<img src="' + esc(ph(a.image)) + '" alt="' + esc(a.title) + '" style="border-radius:10px;margin-bottom:10px;width:100%;max-height:340px;object-fit:cover">' : "") +
          '<div class="row"><h3>🏅 ' + esc(a.title) + '</h3>' + (a.year ? '<span class="tag gold">' + a.year + "</span>" : "") +
          '</div><span class="tag">' + esc(a.category) + '</span><p class="meta" style="margin:8px 0 0">' + esc(a.text) + "</p></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Events", "Award", "Sports", "Science Exhibition"], draw); draw("All");
  };

  /* ---------- TEACHERS ---------- */
  R.teachers = function () {
    main.innerHTML = (D.staffPhotos && D.staffPhotos.length ? '<div class="gal" style="margin-bottom:18px">' + D.staffPhotos.map(function (p) {
      return '<figure><div class="ph"><img src="' + esc(ph(p.src)) + '" alt="' + esc(p.caption) + '" loading="lazy"></div><figcaption>' + esc(p.caption) + "</figcaption></figure>";
    }).join("") + "</div>" : "") + '<div class="bar"><input id="q" placeholder="Search teacher or subject…"></div><div class="grid" id="out"></div>';
    function draw() {
      var q = $("#q").value.toLowerCase();
      var items = D.teachers.filter(function (t) { return (t.name + " " + t.subject + " " + t.role).toLowerCase().indexOf(q) > -1; });
      $("#out").innerHTML = items.length ? items.map(function (t) {
        var av = t.photo ? '<img class="avatar" src="' + esc(ph(t.photo)) + '" alt="">' : '<div class="avatar">' + esc(t.name.charAt(0)) + "</div>";
        return '<div class="card person">' + av + "<div><h3>" + esc(t.name) + '</h3><span class="tag">' + esc(t.subject) +
          '</span><div class="meta">' + esc(t.role) + "<br>" + esc(t.qualification) + "</div></div></div>";
      }).join("") : empty();
    }
    $("#q").addEventListener("input", draw); draw();
  };

  /* ---------- NOTICES ---------- */
  R.notices = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="list" id="out"></div>';
    function draw(cat) {
      var items = D.notices.filter(function (n) { return cat === "All" || n.category === cat; })
        .sort(function (a, b) { return b.date.localeCompare(a.date); });
      $("#out").innerHTML = items.length ? items.map(function (n) {
        return '<div class="card"><div class="row"><h3>' + (n.important ? "📌 " : "") + esc(n.title) + '</h3><span class="meta">' + fmtDate(n.date) +
          "</span></div>" + '<span class="tag ' + (n.important ? "red" : "") + '">' + (n.important ? tr("Important") + " · " : "") + tr(n.category) +
          '</span><p style="margin:8px 0 0">' + esc(n.text) + "</p></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All"].concat(uniq(D.notices.map(function (n) { return n.category; }))), draw); draw("All");
  };

  /* ---------- LIBRARY ---------- */
  R.library = function () {
    main.innerHTML = (D.libraryNote ? '<div class="note">ℹ️ ' + esc(D.libraryNote) + "</div>" : "") + '<div class="chips" id="ch"></div><div class="bar"><select id="c"><option value="">All classes</option>' +
      ["6", "7", "8", "9", "10"].map(function (c) { return '<option value="' + c + '">Class ' + c + "</option>"; }).join("") +
      '</select><input id="q" placeholder="Search…"></div><div class="list" id="out"></div>';
    var type = "All";
    function draw() {
      var c = $("#c").value, q = $("#q").value.toLowerCase();
      var items = D.library.filter(function (b) {
        return (type === "All" || b.type === type) && (!c || b.cls === c || b.cls === "All") &&
          (b.title + " " + b.subject).toLowerCase().indexOf(q) > -1;
      });
      $("#out").innerHTML = items.length ? items.map(function (b) {
        var ic = b.type === "Book" ? "📘" : b.type === "Notes" ? "📝" : b.type === "Shah Jo Risalo" ? "📜" : "📄";
        return '<div class="card row"><div><h3>' + ic + " " + esc(b.title) + '</h3><div class="meta"><span class="tag">' + esc(b.type) +
          '</span><span class="tag gold">Class ' + esc(b.cls) + '</span><span class="tag blue">' + esc(b.subject) + "</span></div></div>" +
          '<a class="btn sm" href="' + esc(b.file) + '" target="_blank" rel="noopener">' + (/^https?:/.test(b.file) ? "Open ↗" : "Open / Download") + "</a></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Book", "Shah Jo Risalo", "Notes", "Educational PDF"], function (v) { type = v; draw(); });
    $$("#c,#q").forEach(function (e) { e.addEventListener("input", draw); }); draw();
  };

  /* ---------- ONLINE TESTS ---------- */
  R.tests = function () {
    var gcol = { Maths: "#e0a82e", Science: "#0b8a5f", English: "#a3162f", GK: "#1f6fb2", Computer: "#6b3fa0" };
    var cur = "All";
    function shuffle(a) {
      a = a.slice();
      for (var i = a.length - 1; i > 0; i--) { var k = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[k]; a[k] = t; }
      return a;
    }
    function menu() {
      var groups = ["All"].concat(uniq(D.tests.map(function (t) { return t.group; })));
      main.innerHTML = '<div class="chips" id="ch"></div><div class="grid" id="out"></div>';
      var ch = $("#ch");
      ch.innerHTML = groups.map(function (g) { return '<button class="chip' + (g === cur ? " on" : "") + '" data-v="' + esc(g) + '">' + esc(g) + "</button>"; }).join("");
      ch.addEventListener("click", function (e) {
        var b = e.target.closest(".chip"); if (!b) return;
        cur = b.getAttribute("data-v");
        $$(".chip", ch).forEach(function (x) { x.classList.toggle("on", x === b); });
        list();
      });
      list();
    }
    function list() {
      var items = D.tests.filter(function (t) { return cur === "All" || t.group === cur; });
      $("#out").innerHTML = items.map(function (t) {
        return '<div class="card tcard" style="--g:' + (gcol[t.group] || "#1b2a6b") + '"><h3>' + esc(t.title) + '</h3><div class="meta"><span class="tag">' + esc(t.subject) +
          '</span><span class="tag gold">Class ' + esc(t.cls) + '</span></div><p class="meta" style="margin:8px 0 12px">' + t.questions.length +
          ' MCQs · new order every time</p><button class="btn" data-id="' + t.id + '">▶ Start Test</button></div>';
      }).join("");
      $$("button[data-id]").forEach(function (b) { b.addEventListener("click", function () { start(b.getAttribute("data-id")); }); });
    }
    function start(id) {
      var t = D.tests.filter(function (x) { return x.id === id; })[0], i = 0, score = 0, log = [];
      var qs = shuffle(t.questions).map(function (q) {
        return { q: q.q, opts: shuffle(q.options.map(function (o, k) { return { o: o, ok: k === q.answer }; })) };
      });
      function q() {
        var cur = qs[i], L = ["A", "B", "C", "D"];
        main.innerHTML = '<div class="card"><div class="meta">' + esc(t.title) + " · Question " + (i + 1) + " / " + qs.length +
          '</div><div class="prog"><div style="width:' + (i / qs.length * 100) + '%"></div></div><h3 style="font-size:1.2rem;margin-bottom:10px">' + esc(cur.q) + "</h3>" +
          cur.opts.map(function (o, k) { return '<button class="opt" data-k="' + k + '"><b>' + L[k] + "</b>" + esc(o.o) + "</button>"; }).join("") +
          '<div id="nx"></div></div>';
        $$(".opt").forEach(function (b) {
          b.addEventListener("click", function () {
            var k = +b.getAttribute("data-k"), right = "";
            $$(".opt").forEach(function (x, n) { x.disabled = true; if (cur.opts[n].ok) { x.classList.add("ok"); right = cur.opts[n].o; } });
            if (!cur.opts[k].ok) b.classList.add("bad"); else score++;
            log.push({ q: cur.q, picked: cur.opts[k].o, right: right, ok: cur.opts[k].ok });
            $("#nx").innerHTML = '<button class="btn" id="go">' + (i + 1 < qs.length ? "Next →" : "See result") + "</button>";
            $("#go").addEventListener("click", function () { i++; i < qs.length ? q() : done(); });
          });
        });
      }
      function done() {
        var pct = Math.round(score / qs.length * 100);
        var msg = pct >= 80 ? tr("Excellent!") + " 🌟" : pct >= 50 ? tr("Good, keep practising") + " 👍" : tr("Try again") + " 💪";
        main.innerHTML = '<div class="card"><div class="score">' + score + " / " + qs.length + '</div><p style="text-align:center;font-size:1.1rem">' + pct + "% — " + msg + "</p>" +
          "<h3>Review</h3>" + log.map(function (l) {
            return '<div class="note" style="background:' + (l.ok ? "#e6f4ec" : "#fde8e5") + '">' + (l.ok ? "✅ " : "❌ ") + esc(l.q) +
              (l.ok ? "" : "<br><small>" + tr("Your answer") + ": " + esc(l.picked) + " · " + tr("Correct answer") + ": <b>" + esc(l.right) + "</b></small>") + "</div>";
          }).join("") + '<button class="btn" id="re">Try again</button> <button class="btn alt" id="mn">Test list</button></div>';
        $("#re").addEventListener("click", function () { start(id); });
        $("#mn").addEventListener("click", menu);
        window.scrollTo(0, 0);
      }
      q();
      window.scrollTo(0, 0);
    }
    menu();
  };

  /* ---------- CONTACT ---------- */
  R.contact = function () {
    var num = D.school.whatsapp, who = D.school.contactName || "School";
    var pretty = "+" + num.slice(0, 2) + " " + num.slice(2, 5) + " " + num.slice(5);
    var types = ["Report a problem", "Question", "Suggestion", "Admission inquiry"];
    var probs = ["Broken furniture", "Water or toilets", "Cleanliness", "Harassment or bullying", "Electricity or fans", "Other"];
    var classes = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Parent / Other"];
    function opts(a) { return a.map(function (t) { return '<option value="' + esc(t) + '">' + esc(t) + "</option>"; }).join(""); }
    main.innerHTML =
      '<div class="card" style="margin-bottom:16px"><div class="row"><div><h3>📱 ' + esc(who) + '</h3><div class="meta">WhatsApp: <b dir="ltr">' + esc(pretty) + '</b></div></div>' +
      '<a class="btn" href="https://wa.me/' + esc(num) + '" target="_blank" rel="noopener">Open WhatsApp directly</a></div></div>' +
      '<div class="card"><h3>✉️ Send a message</h3><p class="meta">Fill in the form, then press Send on WhatsApp. WhatsApp will open with the message already written; you press Send yourself. This site does not save any information.</p>' +
      '<div class="form"><label>What is this about?<select id="ty">' + opts(types) + '</select></label>' +
      '<label id="pl" style="display:block">Type of problem<select id="pr">' + opts(probs) + '</select></label>' +
      '<label>Class<select id="cl">' + opts(classes) + '</select></label>' +
      '<label>Your name (optional)<input id="nm" placeholder="Your name"></label>' +
      '<label>Message<textarea id="ms" rows="5" placeholder="Write your message here…"></textarea></label>' +
      '<div class="note" id="serious" style="display:none">⚠️ For serious issues like harassment or bullying, please also speak to the Head Master directly.</div>' +
      '<div class="row" style="justify-content:flex-start"><button class="btn" id="send">💬 Send on WhatsApp</button><button class="btn alt" id="cp">Copy message</button></div><p id="st" class="meta"></p></div></div>';
    function build() {
      var ty = $("#ty").value, lines = ["*Seerani Digital Portal*", "Type: " + ty];
      if (ty === "Report a problem") lines.push("Problem: " + $("#pr").value);
      lines.push("Class: " + $("#cl").value);
      if ($("#nm").value.trim()) lines.push("Name: " + $("#nm").value.trim());
      lines.push("", $("#ms").value.trim());
      return lines.join("\n");
    }
    function sync() {
      var rep = $("#ty").value === "Report a problem";
      $("#pl").style.display = rep ? "block" : "none";
      $("#serious").style.display = rep && $("#pr").value === "Harassment or bullying" ? "block" : "none";
    }
    $$("#ty,#pr").forEach(function (e) { e.addEventListener("change", sync); }); sync();
    $("#send").addEventListener("click", function () {
      if (!$("#ms").value.trim()) { $("#st").textContent = "Please write a message first."; return; }
      window.open("https://wa.me/" + num + "?text=" + encodeURIComponent(build()), "_blank");
      $("#st").textContent = "WhatsApp opened - press Send there.";
    });
    $("#cp").addEventListener("click", function () {
      if (!$("#ms").value.trim()) { $("#st").textContent = "Please write a message first."; return; }
      if (navigator.clipboard) navigator.clipboard.writeText(build()).then(function () { $("#st").textContent = "Message copied."; });
      else $("#st").textContent = build();
    });
  };

  /* ---------- STEAM ---------- */
  R.steam = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="grid" id="out"></div>';
    var icon = { Science: "🔬", Technology: "💻", Engineering: "⚙️", Art: "🎨", Maths: "📐" };
    function draw(cat) {
      var items = D.steam.filter(function (p) { return cat === "All" || p.category === cat; });
      $("#out").innerHTML = items.length ? items.map(function (p) {
        var img = p.image ? '<img src="' + esc(ph(p.image)) + '" alt="' + esc(p.title) + '" style="border-radius:10px;margin-bottom:8px;width:100%">' : "";
        return '<div class="card">' + img + "<h3>" + (icon[p.category] || "💡") + " " + esc(p.title) + '</h3><span class="tag">' + esc(p.category) +
          '</span><span class="tag gold">' + esc(p.cls) + '</span><p style="margin:8px 0">' + esc(p.text) + '</p><div class="meta">👥 ' + esc(p.students) + "</div></div>";
      }).join("") : empty();
    }
    chips($("#ch"), ["All", "Science", "Technology", "Engineering", "Art", "Maths"], draw); draw("All");
  };

  /* ---------- CALENDAR ---------- */
  R.calendar = function () {
    var now = new Date(), y = now.getFullYear(), m = now.getMonth();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function evOn(yy, mm, dd) {
      var ds = yy + "-" + pad(mm + 1) + "-" + pad(dd), md = pad(mm + 1) + "-" + pad(dd);
      return D.calendar.filter(function (e) { return e.date === ds || e.md === md; });
    }
    function draw() {
      var first = new Date(y, m, 1).getDay(), days = new Date(y, m + 1, 0).getDate(), html = "";
      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(function (n) { html += '<div class="dn">' + n + "</div>"; });
      for (var b = 0; b < first; b++) html += '<div class="d blank"></div>';
      var list = [];
      for (var d = 1; d <= days; d++) {
        var evs = evOn(y, m, d), isT = d === now.getDate() && m === now.getMonth() && y === now.getFullYear();
        var dow = new Date(y, m, d).getDay();
        html += '<div class="d' + (isT ? " today" : "") + (dow === 5 ? " fri" : "") + '"><b>' + d + "</b>" +
          evs.map(function (e) { list.push({ d: d, e: e }); return '<span class="ev ' + e.type + '">' + esc(e.title) + "</span>"; }).join("") + "</div>";
      }
      main.innerHTML = '<div class="calhead"><button class="btn sm" id="pv">← Previous</button><h2>' + months[m] + " " + y +
        '</h2><button class="btn sm" id="nx">Next →</button></div><div class="cal">' + html + "</div>" +
        '<div class="legend"><span><i style="background:var(--red)"></i>Exam</span><span><i style="background:var(--green)"></i>Holiday</span><span><i style="background:var(--blue)"></i>Event</span></div>' +
        "<h3>Events this month</h3>" + (list.length ? '<div class="list">' + list.map(function (x) {
          return '<div class="card row"><b>' + x.d + " " + months[m] + "</b><span>" + esc(x.e.title) + '</span><span class="tag ' +
            (x.e.type === "exam" ? "red" : x.e.type === "event" ? "blue" : "") + '">' + x.e.type + "</span></div>";
        }).join("") + "</div>" : empty("No events this month."));
      $("#pv").addEventListener("click", function () { m--; if (m < 0) { m = 11; y--; } draw(); });
      $("#nx").addEventListener("click", function () { m++; if (m > 11) { m = 0; y++; } draw(); });
    }
    draw();
  };

  /* ---------- GALLERY ---------- */
  R.gallery = function () {
    main.innerHTML = '<div class="chips" id="ch"></div><div class="gal" id="out"></div>' +
      '<div class="lb" id="lb"><button aria-label="Close">×</button><div><img id="lbi" alt=""><p id="lbc"></p></div></div>';
    function draw(cat) {
      var items = D.gallery.filter(function (g) { return cat === "All" || g.category === cat; });
      $("#out").innerHTML = items.length ? items.map(function (g, i) {
        return '<figure data-i="' + D.gallery.indexOf(g) + '"><div class="ph"><img loading="lazy" src="' + esc(ph(g.src)) + '" alt="' + esc(g.caption) +
          '" onerror="this.parentNode.textContent=\'🖼️\'"></div><figcaption>' + esc(g.caption) + "</figcaption></figure>";
      }).join("") : empty("Photos will be added soon. 📷");
    }
    $("#out").addEventListener("click", function (e) {
      var f = e.target.closest("figure"); if (!f) return;
      var g = D.gallery[+f.getAttribute("data-i")];
      $("#lbi").src = ph(g.src); $("#lbc").textContent = g.caption; $("#lb").classList.add("open");
    });
    $("#lb").addEventListener("click", function () { $("#lb").classList.remove("open"); });
    chips($("#ch"), ["All"].concat(uniq(D.gallery.map(function (g) { return g.category; }))), draw); draw("All");
  };

  /* ---------- ENGLISH ---------- */
  R.english = function () {
    main.innerHTML = '<div class="chips" id="tabs"></div><div id="out"></div>';
    function speak(t) {
      if (!("speechSynthesis" in window)) { alert(tr("Your browser does not support audio.")); return; }
      window.speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(t); u.lang = "en-US"; u.rate = 0.9; window.speechSynthesis.speak(u);
    }
    function searchList(items, render, ph) {
      $("#out").innerHTML = '<div class="bar"><input id="sq" placeholder="' + ph + '"></div><div class="wl" id="wl"></div>';
      function draw() {
        var q = $("#sq").value.toLowerCase();
        var f = items.filter(function (x) { return JSON.stringify(x).toLowerCase().indexOf(q) > -1; });
        $("#wl").innerHTML = f.length ? f.map(render).join("") : empty("No word found.");
      }
      $("#sq").addEventListener("input", draw); draw();
    }
    var tabs = {
      "Vocabulary": function () {
        var i = 0;
        function card() {
          var v = D.vocab[i];
          $("#out").innerHTML = '<p class="meta" style="text-align:center">Card ' + (i + 1) + " / " + D.vocab.length + ' — tap the card to flip</p>' +
            '<div class="flash"><div class="in" id="fl"><div class="f">' + esc(v.w) + '</div><div class="b"><div><span class="urdu">' + esc(v.ur) + "</span><small>" + esc(v.ex) + "</small></div></div></div></div>" +
            '<p style="text-align:center;margin-top:18px"><button class="btn alt" id="p">← Previous</button> <button class="btn alt" id="sp">🔊 Listen</button> <button class="btn" id="n">Next →</button></p>';
          $("#fl").addEventListener("click", function () { this.classList.toggle("flip"); });
          $("#p").addEventListener("click", function () { i = (i - 1 + D.vocab.length) % D.vocab.length; card(); });
          $("#n").addEventListener("click", function () { i = (i + 1) % D.vocab.length; card(); });
          $("#sp").addEventListener("click", function () { speak(v.w + ". " + v.ex); });
        }
        card();
      },
      "Grammar": function () {
        $("#out").innerHTML = '<div class="list">' + D.grammar.map(function (g, n) {
          return '<details class="card"' + (n === 0 ? " open" : "") + "><summary>" + esc(g.title) + ' <span class="urdu" style="color:var(--muted);font-size:1rem">— ' + esc(g.ur) + "</span></summary><p>" + esc(g.text) +
            '</p><ul style="margin:0;padding-left:20px">' + g.examples.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + "</ul></details>";
        }).join("") + "</div>";
      },
      "Synonyms": function () {
        searchList(D.synonyms, function (s) {
          return '<div class="r"><div><b>' + esc(s.w) + '</b> <span class="urdu meta">' + esc(s.ur) + '</span></div><div>' +
            s.s.map(function (x) { return '<span class="pill">' + esc(x) + "</span>"; }).join("") + "</div></div>";
        }, "Search synonyms… (e.g. happy)");
      },
      "Antonyms": function () {
        searchList(D.antonyms, function (s) {
          return '<div class="r"><div><b>' + esc(s.w) + '</b> <span class="meta">↔</span> <b style="color:var(--red)">' + esc(s.a) + '</b></div><div class="urdu meta">' + esc(s.ur) + "</div></div>";
        }, "Search antonyms… (e.g. hot)");
      },
      "Idioms": function () {
        $("#out").innerHTML = '<div class="list">' + D.idioms.map(function (x) {
          return '<div class="card"><h3>💬 ' + esc(x.i) + "</h3><div>" + esc(x.m) + '</div><div class="urdu meta">' + esc(x.ur) + '</div><div class="meta" style="margin-top:6px">Example: ' + esc(x.ex) + "</div></div>";
        }).join("") + "</div>";
      },
      "Speaking": function () {
        $("#out").innerHTML = D.speaking.map(function (g) {
          return "<h3>" + esc(g.group) + '</h3><div class="list" style="margin-bottom:18px">' + g.items.map(function (s) {
            return '<div class="card row"><div><b>' + esc(s.en) + '</b><div class="urdu meta">' + esc(s.ur) + '</div></div><button class="btn sm" data-s="' + esc(s.en) + '">🔊</button></div>';
          }).join("") + "</div>";
        }).join("");
        $$("button[data-s]").forEach(function (b) { b.addEventListener("click", function () { speak(b.getAttribute("data-s")); }); });
      },
      "Writing": function () {
        $("#out").innerHTML = '<div class="list">' + D.writing.map(function (w, n) {
          return '<div class="card"><div class="row"><h3>✍️ ' + esc(w.title) + '</h3><button class="btn sm" data-c="' + n + '">Copy</button></div><pre class="letter">' + esc(w.text) + "</pre></div>";
        }).join("") + "</div>";
        $$("button[data-c]").forEach(function (b) {
          b.addEventListener("click", function () {
            var t = D.writing[+b.getAttribute("data-c")].text;
            if (navigator.clipboard) navigator.clipboard.writeText(t).then(function () { b.textContent = "Copied ✓"; }); else alert(t);
          });
        });
      }
    };
    chips($("#tabs"), Object.keys(tabs), function (k) { tabs[k](); });
    tabs.Vocabulary();
  };

  if (page !== "contact" && D.school.whatsapp) {
    var fab = document.createElement("a");
    fab.className = "wafab"; fab.href = "contact.html"; fab.setAttribute("aria-label", "Contact the school"); fab.innerHTML = "💬<span>Contact</span>";
    document.body.appendChild(fab);
  }
  function boot() {
    if (R[page]) R[page]();
    try { if (LANG !== "en" && localStorage.getItem("lang") !== LANG) throw 1; } catch (e) {
      $$("a[href]").forEach(function (a) {
        var h = a.getAttribute("href");
        if (/^(https?:|#|mailto:|tel:)/.test(h) || h.indexOf("lang=") > -1) return;
        a.setAttribute("href", h + (h.indexOf("?") > -1 ? "&" : "?") + "lang=" + LANG);
      });
    }
  }
  trTree(document.body);
  if (page === "gallery" || page === "teachers" || page === "hub") {
    var sc = document.createElement("script");
    sc.src = "photos.js"; sc.onload = boot; sc.onerror = boot;
    document.head.appendChild(sc);
  } else boot();
})();
