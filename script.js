// Translations
const translations = {
    en: {
        pageTitle: "Professional Portfolio | Accountant & Administrative Coordinator",
        logo: "Rebaz <span>(Portfolio)</span>",
        navAbout: "About",
        navRoles: "Roles",
        navSkills: "Skills",
        navExperience: "Experience",
        navEducation: "Education",
        navContact: "Contact",
        heroGreeting: "Hello, I'm <span class='highlight'>Rebaz Jasim Othman</span>",
        heroSubtitle: "Accountant | Administrative Coordinator | Teacher",
        heroBio: "A versatile professional with diverse experience in administration, education, and management. Dedicated to maintaining high standards of accuracy, organization, and communication.",
        btnContact: "Contact Me",
        btnViewWork: "View Work",
        sectionAbout: "About Me",
        aboutProfTitle: "Professional",
        aboutProfDesc: "Experienced in diverse roles ranging from HR fundamentals and management to procurement and logistics.",
        aboutOrgTitle: "Organized",
        aboutOrgDesc: "Highly accurate and organized with strong problem-solving and critical thinking skills.",
        aboutCollabTitle: "Collaborative",
        aboutCollabDesc: "Excellent teamwork, communication, and leadership capabilities.",
        sectionRoles: "Professional Roles",
        roleAccountant: "Accountant",
        roleAccountantDesc: "Skilled in financial record keeping, accuracy, and maintaining confidentiality.",
        roleAdmin: "Administrative Coordinator",
        roleAdminDesc: "Expertise in efficient office administration, coordination, and management principles.",
        roleTeacher: "Teacher",
        roleTeacherDesc: "Experienced ESL and primary school teacher, delivering lessons in English, Science, and Math.",
        sectionSkills: "Skills & Expertise",
        skillKeyTitle: "Key Skills",
        skillTeamwork: "Teamwork Skills",
        skillComm: "Communication",
        skillLeadership: "Leadership Skills",
        skillCritical: "Critical Thinking",
        skillComputer: "Computer Skills",
        skillManagement: "Management Skills",
        skillFlexibility: "Flexibility",
        skillConfidentiality: "Maintains Confidentiality",
        skillAccuracy: "Accurate and Organized",
        skillProblem: "Problem Solving Skills",
        skillSoftTitle: "Software",
        softOffice: "Microsoft Office Suite (Word, Excel, PowerPoint, Outlook)",
        softArcGIS: "ArcGIS Pro & Google Earth Pro",
        softBase: "Base-map & Basecamp",
        softWebMap: "Web Map",
        softMail: "Microsoft Outlook & Regular Mail",
        softResearch: "Online Research Tools",
        skillLangTitle: "Languages",
        langKurdish: "<strong>Kurdish:</strong> Native",
        langEnglish: "<strong>English:</strong> Fluent",
        langArabic: "<strong>Arabic:</strong> Very Good",
        sectionExperience: "Work Experience",
        dateLass: "May 2025 - Present",
        roleLassTitle: "Accountant & Admin – Warranty",
        dutiesAccountant: "Accountant Duties:",
        lassAcc1: "Review, clear, and post employee expense invoices in accordance with company policies.",
        lassAcc2: "Create and manage Sales Orders, Deliveries, and Customer Invoices in the Odoo ERP system.",
        lassAcc3: "Record customer receipts, allocate payments, and reconcile customer accounts.",
        lassAcc4: "Process vendor payments, monitor Accounts Payable, and ensure timely settlements.",
        lassAcc5: "Prepare and issue Purchase Orders and record Goods Receipts (GRN) in the system.",
        lassAcc6: "Maintain and reconcile Accounts Receivable (AR) and Accounts Payable (AP) balances.",
        lassAcc7: "Record daily journal entries and ensure accurate posting to the general ledger.",
        lassAcc8: "Monitor daily accounting transactions and support monthly closing activities.",
        dutiesWarranty: "Warranty Duties:",
        lassWar1: "Submit warranty claims in line with company and supplier procedures (phone/email).",
        lassWar2: "Coordinate with relevant departments to ensure timely claim processing.",
        lassWar3: "Maintain and update warranty claim databases/records and track claim status.",
        lassWar4: "Respond to warranty-related inquiries professionally and organize supporting documents.",
        lassWar5: "Ensure warranty processes comply with company policies.",
        dateMagAdmin: "Nov 2021 - Mar 2025",
        roleMagAdminTitle: "Admin Coordinator",
        magAdmin1: "Manage MAG Erbil Head Office and MAG IQ guesthouses, ensuring safe/adequate conditions and Health & Safety compliance.",
        magAdmin2: "Draft/prepare official letters and assist Country Admin/Liaison Manager with coverage.",
        magAdmin3: "Provide administrative coverage for Baghdad Office Manager (including DNGO permissions).",
        magAdmin4: "Translate administrative/liaison documents and maintain archiving systems (online/physical).",
        magAdmin5: "Manage accommodations, hotel bookings (conferences/rooms), and internal flight bookings.",
        magAdmin6: "Supervise housekeepers, receptionists, and maintenance technicians.",
        magAdmin7: "Coordinate monthly communication/phone allowances and circulate visitor checklists.",
        dateMagSafe: "Jan 2021 - Nov 2021",
        roleMagSafeTitle: "Safeguarding Focal Point",
        magSafe1: "Updating operations staff on new updates of Safeguarding.",
        magSafe2: "Making sure that all operations staff understand and comply with safeguarding regulation and polices.",
        magSafe3: "Counselling operations staff on any safeguarding concerns and raising their concerns.",
        magSafe4: "Guiding and directing staff to go through proper channels when raising their concerns.",
        dateMagField: "Jun 2018 - Nov 2021",
        roleMagFieldTitle: "Field Support Officer",
        magField1: "Interpretation in the field on daily basis.",
        magField2: "Checking and sending Survey123 reports.",
        magField3: "Entering and maintaining data to Monthly databases on daily basis.",
        magField4: "Producing Progress maps, Completion Maps and any other required maps.",
        magField5: "Producing Progress Reports and Completion Reports.",
        magField6: "Help and support the Supervisors with Clearance plans.",
        magField7: "Training the Teams on new Systems.",
        magField8: "Attending weekly operation meetings and taking minutes if required.",
        magField9: "Keeping OPS Room up to date and Archiving box files.",
        magField10: "Support the Team leaders with daily Reports and any other required documents.",
        magField11: "Updating Briefing Boards for the Teams.",
        magField12: "Working as medium between TFM, Site Supervisors and Community Liaison teams.",
        magField13: "Providing support to the Program and communication Department.",
        dateNirozh: "2015 - 2017",
        roleNirozhDesc: "As a classroom teacher delivered everyday lessons of English, Science and Mathematics.",
        dateMaccos: "4 Courses - 2017",
        roleEslTeacher: "ESL Teacher",
        roleEslDesc: "Teaching English language as a second language.",
        dateKurdistan: "1 Course - 2017",
        sectionEducation: "Education & Training",
        eduEduTitle: "Education",
        eduDegree: "Bachelor in English Language",
        eduUni: "Salahaddin University - College of Languages",
        eduDate: "2014 - 2015",
        eduTrainTitle: "Certified Trainings",
        train1: "Fundaments of HR at mselect recruiter - 2025",
        train2: "Procurement and Logistics Workshop at MAG – 2024",
        train3: "People Management at MAG – 2024",
        train4: "Event Management at mselect recruiter - 2022",
        train5: "Human Resources Management (online) at Top Target Academy - 2021",
        train6: "HR Management at American Corner – 2021",
        train7: "Principles of Modern and Successful Management at Stratford University (Erbil) - 2019",
        train8: "Human Development at Student Development Organization - 2015",
        sectionContact: "Contact Me",
        location: "Iraq - Erbil",
        sectionRef: "References",
        ref1Role: "Information Management Coordinator",
        ref2Role: "Human Resources Coordinator",
        footerRights: "Created by DZT"
    },
    ar: {
        pageTitle: "ملف المحفظة المهنية | محاسب ومنسق إداري",
        logo: "ريباز <span>(الملف التعريفي)</span>",
        navAbout: "حول",
        navRoles: "الأدوار",
        navSkills: "المهارات",
        navExperience: "الخبرة",
        navEducation: "التعليم",
        navContact: "اتصل بي",
        heroGreeting: "مرحباً، أنا <span class='highlight'>ريباز جاسم عثمان</span>",
        heroSubtitle: "محاسب | منسق إداري | معلم",
        heroBio: "محترف متعدد المواهب ذو خبرة متنوعة في الإدارة والتعليم والإدارة. مكرس للحفاظ على معايير عالية من الدقة والتنظيم والتواصل.",
        btnContact: "اتصل بي",
        btnViewWork: "عرض أعمالي",
        sectionAbout: "عن نفسي",
        aboutProfTitle: "مهني",
        aboutProfDesc: "ذو خبرة في أدوار متنوعة تتراوح من أساسيات الموارد البشرية والإدارة إلى المشتريات والخدمات اللوجستية.",
        aboutOrgTitle: "منظم",
        aboutOrgDesc: "دقيق للغاية ومنظم مع مهارات قوية في حل المشكلات والتفكير النقدي.",
        aboutCollabTitle: "متعاون",
        aboutCollabDesc: "مهارات عمل جماعي وتواصل وقيادة ممتازة.",
        sectionRoles: "الأدوار المهنية",
        roleAccountant: "محاسب",
        roleAccountantDesc: "ماهر في حفظ السجلات المالية والدقة والحفاظ على السرية.",
        roleAdmin: "منسق إداري",
        roleAdminDesc: "خبرة في إدارة المكاتب بفعالية والتنسيق ومبادئ الإدارة.",
        roleTeacher: "معلم",
        roleTeacherDesc: "معلم ذو خبرة في تدريس اللغة الإنجليزية كلغة ثانية والمدارس الابتدائية، ويقدم دروساً في اللغة الإنجليزية والعلوم والرياضيات.",
        sectionSkills: "المهارات والخبرات",
        skillKeyTitle: "المهارات الرئيسية",
        skillTeamwork: "مهارات العمل الجماعي",
        skillComm: "التواصل",
        skillLeadership: "مهارات القيادة",
        skillCritical: "التفكير النقدي",
        skillComputer: "مهارات الحاسوب",
        skillManagement: "مهارات الإدارة",
        skillFlexibility: "المرونة",
        skillConfidentiality: "يحافظ على السرية",
        skillAccuracy: "دقيق ومنظم",
        skillProblem: "مهارات حل المشكلات",
        skillSoftTitle: "البرمجيات",
        softOffice: "مجموعة مايكروسوفت أوفيس (وورد، إكسل، باوربوينت، آوتلوك)",
        softArcGIS: "آرك جي آي إس برو وجوجل إيرث برو",
        softBase: "Base-map & Basecamp",
        softWebMap: "Web Map",
        softMail: "مايكروسوفت آوتلوك والبريد العادي",
        softResearch: "أدوات البحث عبر الإنترنت",
        skillLangTitle: "اللغات",
        langKurdish: "<strong>الكردية:</strong> اللغة الأم",
        langEnglish: "<strong>الإنجليزية:</strong> بطلاقة",
        langArabic: "<strong>العربية:</strong> جيد جداً",
        sectionExperience: "خبرة العمل",
        dateLass: "مايو 2025 - الحاضر",
        roleLassTitle: "محاسب ومسؤول إداري – الضمان",
        dutiesAccountant: "واجبات المحاسب:",
        lassAcc1: "مراجعة فواتير نفقات الموظفين واعتمادها وترحيلها وفقاً لسياسات الشركة.",
        lassAcc2: "إنشاء وإدارة أوامر المبيعات والتسليمات وفواتير العملاء في نظام Odoo ERP.",
        lassAcc3: "تسجيل إيصالات العملاء وتخصيص المدفوعات ومطابقة حسابات العملاء.",
        lassAcc4: "معالجة مدفوعات الموردين ومراقبة الحسابات الدائنة وضمان التسويات في الوقت المناسب.",
        lassAcc5: "إعداد وإصدار أوامر الشراء وتنسيق استلام البضائع (GRN) في النظام.",
        lassAcc6: "الاحتفاظ بأرصدة الحسابات المدينة (AR) والحسابات الدائنة (AP) ومطابقتها.",
        lassAcc7: "تسجيل قيود اليومية وضمان الترحيل الدقيق إلى دفتر الأستاذ العام.",
        lassAcc8: "مراقبة المعاملات المحاسبية اليومية ودعم أنشطة الإغلاق الشهري.",
        dutiesWarranty: "واجبات الضمان:",
        lassWar1: "تقديم مطالبات الضمان بما يتماشى مع إجراءات الشركة والموردين (هاتف/بريد إلكتروني).",
        lassWar2: "التنسيق مع الأقسام ذات الصلة لضمان معالجة المطالبات في الوقت المناسب.",
        lassWar3: "صيانة وتحديث قواعد بيانات وسجلات مطالبات الضمان وتتبع حالة المطالبة.",
        lassWar4: "الرد على الاستفسارات المتعلقة بالضمان بشكل احترافي وتنظيم المستندات الداعمة.",
        lassWar5: "تأكد من توافق عمليات الضمان مع سياسات الشركة.",
        dateMagAdmin: "نوفمبر 2021 - مارس 2025",
        roleMagAdminTitle: "منسق إداري",
        magAdmin1: "إدارة مكتب MAG الرئيسي في أربيل ودور الضيافة، وضمان ظروف معيشية وعمل آمنة ومناسبة.",
        magAdmin2: "صياغة وإعداد الرسائل الرسمية والمساعدة في تغطية المدير الإداري القطري/مسؤول الارتباط.",
        magAdmin3: "توفير التغطية الإدارية لمدير مكتب بغداد عند الحاجة.",
        magAdmin4: "ترجمة المستندات الإدارية ومستندات الارتباط والحفاظ على أنظمة الأرشفة.",
        magAdmin5: "إدارة الإقامة وحجوزات الفنادق وحجوزات الطيران الداخلية.",
        magAdmin6: "الإشراف على مدبرة المنزل وموظفي الاستقبال وفنيي الصيانة.",
        magAdmin7: "تنسيق بدلات الاتصالات/الهاتف الشهرية وتوزيع قوائم فحص الزوار.",
        dateMagSafe: "يناير 2021 - نوفمبر 2021",
        roleMagSafeTitle: "مسؤول الحماية",
        magSafe1: "تحديث موظفي العمليات بشأن التحديثات الجديدة للحماية.",
        magSafe2: "التأكد من أن جميع موظفي العمليات يفهمون ويمتثلون للوائح وسياسات الحماية.",
        magSafe3: "تقديم المشورة لموظفي العمليات بشأن أي مخاوف تتعلق بالحماية وإثارة مخاوفهم.",
        magSafe4: "توجيه وإرشاد الموظفين للذهاب من خلال القنوات المناسبة عند إثارة مخاوفهم.",
        dateMagField: "يونيو 2018 - نوفمبر 2021",
        roleMagFieldTitle: "موظف دعم ميداني",
        magField1: "الترجمة الفورية في الميدان بشكل يومي.",
        magField2: "فحص وإرسال تقارير Survey123.",
        magField3: "إدخال البيانات وصيانتها في قواعد البيانات الشهرية بشكل يومي.",
        magField4: "إنتاج خرائط التقدم وخرائط الإنجاز وأي خرائط أخرى مطلوبة.",
        magField5: "إنتاج تقارير التقدم وتقارير الإنجاز.",
        magField6: "مساعدة ودعم المشرفين في خطط التطهير.",
        magField7: "تدريب الفرق على الأنظمة الجديدة.",
        magField8: "حضور اجتماعات العمليات الأسبوعية وتدوين المحاضر.",
        magField9: "الحفاظ على تحديث غرفة العمليات وأرشفة الملفات.",
        magField10: "دعم قادة الفريق بالتقارير اليومية وأي مستندات أخرى.",
        magField11: "تحديث لوحات الإحاطة للفرق.",
        magField12: "العمل كوسيط بين TFM ومشرفي الموقع وفرق الارتباط المجتمعي.",
        magField13: "تقديم الدعم لقسم البرامج والاتصالات.",
        dateNirozh: "2015 - 2017",
        roleNirozhDesc: "معلم صف يقدم دروساً يومية في الإنجليزية والعلوم والرياضيات.",
        dateMaccos: "4 دورات - 2017",
        roleEslTeacher: "معلم لغة إنجليزية",
        roleEslDesc: "تدريس اللغة الإنجليزية كلغة ثانية.",
        dateKurdistan: "دورة واحدة - 2017",
        sectionEducation: "التعليم والتدريب",
        eduEduTitle: "التعليم",
        eduDegree: "بكالوريوس في اللغة الإنجليزية",
        eduUni: "جامعة صلاح الدين - كلية اللغات",
        eduDate: "2014 - 2015",
        eduTrainTitle: "التدريبات المعتمدة",
        train1: "أساسيات الموارد البشرية في mselect recruiter - 2025",
        train2: "ورشة عمل المشتريات والخدمات اللوجستية في MAG – 2024",
        train3: "إدارة الأفراد في MAG – 2024",
        train4: "إدارة الفعاليات في mselect recruiter - 2022",
        train5: "إدارة الموارد البشرية (أونلاين) في Top Target Academy - 2021",
        train6: "إدارة الموارد البشرية في American Corner – 2021",
        train7: "مبادئ الإدارة الحديثة والناجحة في جامعة ستراتفورد (أربيل) - 2019",
        train8: "التنمية البشرية في منظمة تنمية الطلاب - 2015",
        sectionContact: "اتصل بي",
        location: "العراق - أربيل",
        sectionRef: "المراجع",
        ref1Role: "منسق إدارة المعلومات",
        ref2Role: "منسق الموارد البشرية",
        footerRights: "تم الإنشاء بواسطة DZT"
    },
    ku: {
        pageTitle: "پۆرتفۆلیۆی پیشەیی | ژمێریار و ڕێکخەری کارگێڕی",
        logo: "ڕێباز <span>(پۆرتفۆلیۆ)</span>",
        navAbout: "دەربارە",
        navRoles: "ڕۆڵەکان",
        navSkills: "تواناکان",
        navExperience: "ئەزموون",
        navEducation: "خوێندن",
        navContact: "پەیوەندی",
        heroGreeting: "سڵاو، من <span class='highlight'>ڕێباز جاسم عوسمان</span>",
        heroSubtitle: "ژمێریار | ڕێکخەری کارگێڕی | مامۆستا",
        heroBio: "پیشەیی جۆراوجۆر بە ئەزموونی جیاواز لە کارگێڕی، پەروەردە، و بەڕێوەبردن. پابەندە بە پاراستنی ستانداردە بەرزەكانی وردبینی، ڕێکخستن، و پەیوەندی.",
        btnContact: "پەیوەندیم پێوە بکە",
        btnViewWork: "بینینی کارەکان",
        sectionAbout: "دەربارەی من",
        aboutProfTitle: "پیشەیی",
        aboutProfDesc: "خاوەن ئەزموون لە ڕۆڵی جۆراوجۆر لە بنەماکانی سەرچاوە مرۆییەکان و بەڕێوەبردن تا کڕین و لۆجستیک.",
        aboutOrgTitle: "ڕێکخراو",
        aboutOrgDesc: "زۆر ورد و ڕێکخراو بە توانای بەهێزی چارەسەرکردنی کێشە و بیرکردنەوەی ڕەخنەگرانە.",
        aboutCollabTitle: "هاوکار",
        aboutCollabDesc: "توانای نایابی کارکردنی بە کۆمەڵ، پەیوەندی، و سەرکردایەتی.",
        sectionRoles: "ڕۆڵە پیشەییەکان",
        roleAccountant: "ژمێریار",
        roleAccountantDesc: "شارەزا لە تۆمارکردنی دارایی، وردبینی، و پاراستنی نهێنی.",
        roleAdmin: "ڕێکخەری کارگێڕی",
        roleAdminDesc: "شارەزایی لە بەڕێوەبردنی کارای ئۆفیس، هەماهەنگی، و بنەماکانی بەڕێوەبردن.",
        roleTeacher: "مامۆستا",
        roleTeacherDesc: "مامۆستای بە ئەزموونی زمانی ئینگلیزی و قوتابخانەی سەرەتایی، وانەکانی ئینگلیزی، زانست، و بیرکاری دەڵێتەوە.",
        sectionSkills: "توانا و شارەزاییەکان",
        skillKeyTitle: "توانا سەرەکییەکان",
        skillTeamwork: "توانای کارکردنی بە کۆمەڵ",
        skillComm: "پەیوەندی",
        skillLeadership: "توانای سەرکردایەتی",
        skillCritical: "بیرکردنەوەی ڕەخنەگرانە",
        skillComputer: "توانای کۆمپیوتەر",
        skillManagement: "توانای بەڕێوەبردن",
        skillFlexibility: "نەرمی",
        skillConfidentiality: "پاراستنی نهێنی",
        skillAccuracy: "ورد و ڕێکخراو",
        skillProblem: "توانای چارەسەرکردنی کێشە",
        skillSoftTitle: "بەرنامەکان",
        softOffice: "مایکرۆسۆفت ئۆفیس (Word, Excel, PowerPoint, Outlook)",
        softArcGIS: "ArcGIS Pro & Google Earth Pro",
        softBase: "Base-map & Basecamp",
        softWebMap: "Web Map",
        softMail: "Microsoft Outlook & Regular Mail",
        softResearch: "Online Research Tools",
        skillLangTitle: "زمانەکان",
        langKurdish: "<strong>کوردی:</strong> زمانی دایک",
        langEnglish: "<strong>ئینگلیزی:</strong> پاراو",
        langArabic: "<strong>عەرەبی:</strong> زۆر باش",
        sectionExperience: "ئەزموونی کار",
        dateLass: "ئایار 2025 - ئێستا",
        roleLassTitle: "ژمێریار و کارگێڕ – گەرەنتی",
        dutiesAccountant: "رکەکانی ژمێریار:",
        lassAcc1: "پێداچوونەوە، پاککردنەوە، و تۆمارکردنی پسوڵەی خەرجی فەرمانبەران بەپێی سیاسەتەکانی کۆمپانیا.",
        lassAcc2: "دروستکردن و بەڕێوەبردنی داواکاری فرۆشتن، گەیاندن، و پسوڵەی کڕیار لە سیستەمی Odoo ERP.",
        lassAcc3: "تۆمارکردنی پسوڵەی کڕیار، دابەشکردنی پارەکان، و یەکلاکردنەوەی هەژماری کڕیاران.",
        lassAcc4: "پرۆسەکردنی پارەدانی فرۆشیار، چاودێریکردنی حسابی پارەدان، و دڵنیابوون لە یەکلاکردنەوەی کات.",
        lassAcc5: "ئامادەکردن و دەرکردنی داواکاری کڕین و تۆمارکردنی پسوڵەی وەرگرتنی کاڵا (GRN).",
        lassAcc6: "پاراستن و یەکلاکردنەوەی هاوسەنگی حسابی وەرگرتن (AR) و حسابی پارەدان (AP).",
        lassAcc7: "تۆمارکردنی قەیدی ڕۆژانە و دڵنیابوون لە تۆمارکردنی ورد بۆ دەفتەری گشتی.",
        lassAcc8: "چاودێریکردنی مامەڵە ژمێریارییە ڕۆژانەکان و پشتیوانی چالاکییەکانی داخستنی مانگانە.",
        dutiesWarranty: "ئەرکەکانی گەرەنتی:",
        lassWar1: "پێشکەشکردنی داواکاری گەرەنتی بەپێی ڕێکارەکانی کۆمپانیا و دابینکەر (تەلەفۆن/ئیمەیڵ).",
        lassWar2: "هەماهەنگی لەگەڵ بەشە پەیوەندیدارەکان بۆ دڵنیابوون لە پرۆسەکردنی کاتی داواکاری.",
        lassWar3: "پاراستن و نوێکردنەوەی بنکەدراوە و تۆمارەکانی گەرەنتی و چاودێریکردنی دۆخی داواکاری.",
        lassWar4: "وەڵامدانەوەی پرسیارەکانی پەیوەست بە گەرەنتی بە شێوەیەکی پیشەیی و ڕێکخستنی بەڵگەنامەکان.",
        lassWar5: "دڵنیابوون لەوەی پرۆسەکانی گەرەنتی لەگەڵ سیاسەتەکانی کۆمپانیا دەگونجێن.",
        dateMagAdmin: "تشرینی دووەم 2021 - ئازار 2025",
        roleMagAdminTitle: "ڕێکخەری کارگێڕی",
        magAdmin1: "بەڕێوەبردنی ئۆفیسی سەرەکی MAG لە هەولێر و میوانخانەکان، دڵنیابوون لە بارودۆخی سەلامەت و گونجاو.",
        magAdmin2: "نووسین/ئامادەکردنی نامە فەرمییەکان و هاوکاریکردنی بەڕێوەبەری کارگێڕی وڵات/پەیوەندییەکان.",
        magAdmin3: "دابینکردنی پشتیوانی کارگێڕی بۆ بەڕێوەبەری ئۆفیسی بەغدا (لەوانەش مۆڵەتی DNGO).",
        magAdmin4: "وەرگێڕانی بەڵگەنامە کارگێڕی و پەیوەندییەکان و پاراستنی سیستەمی ئەرشیف (ئۆنلاین/فیزیایی).",
        magAdmin5: "بەڕێوەبردنی شوێنی مانەوە، حجزکردنی هۆتێل (کۆنفرانس/ژوور)، و حجزکردنی فڕۆکەی ناوخۆیی.",
        magAdmin6: "سەرپەرشتیکردنی خزمەتگوزار، پێشوازی، و تەکنیکارانی چاککردنەوە.",
        magAdmin7: "هەماهەنگی دەرماڵەی مانگانەی پەیوەندی/تەلەفۆن و دابەشکردنی لیستی سەردانیکەران.",
        dateMagSafe: "کانوونی دووەم 2021 - تشرینی دووەم 2021",
        roleMagSafeTitle: "خاڵی پەیوەندی پاراستن",
        magSafe1: "نوێکردنەوەی کارمەندانی ئۆپەراسیۆن لەسەر نوێکارییەکانی پاراستن (Safeguarding).",
        magSafe2: "دڵنیابوون لەوەی هەموو کارمەندان لە ڕێساکانی پاراستن تێدەگەن و پابەندن پێیەوە.",
        magSafe3: "ڕاوێژکردن بە کارمەندان سەبارەت بە هەر نیگەرانییەکی پاراستن و بەرزکردنەوەی نیگەرانییەکان.",
        magSafe4: "ڕێنمایی کارمەندان بۆ بەکارهێنانی کەناڵە گونجاوەکان.",
        dateMagField: "حوزەیران 2018 - تشرینی دووەم 2021",
        roleMagFieldTitle: "ئەفسەری پشتیوانی مەیدانی",
        magField1: "وەرگێڕانی مەیدانی بە شێوەی ڕۆژانە.",
        magField2: "پێداچوونەوە و ناردنی ڕاپۆرتەکانی Survey123.",
        magField3: "تۆمارکردن و پاراستنی داتا بۆ بنکەدراوەی مانگانە.",
        magField4: "بەرهەمهێنانی نەخشەی پێشکەوتن، نەخشەی تەواوکردن و نەخشە پێویستەکانی تر.",
        magField5: "بەرهەمهێنانی ڕاپۆرتی پێشکەوتن و ڕاپۆرتی تەواوکردن.",
        magField6: "هاوکاری و پشتیوانی سەرپەرشتیاران لە پلانەکانی پاککردنەوە.",
        magField7: "ڕاهێنانی تیمەکان لەسەر سیستەمە نوێیەکان.",
        magField8: "ئامادەبوون لە کۆبوونەوە هەفتانەکان و نووسینی خاڵەکان.",
        magField9: "نوێکردنەوەی ژووری ئۆپەراسیۆن و ئەرشیفکردنی فایلەکان.",
        magField10: "پشتیوانی سەرۆک تیمەکان بە ڕاپۆرتی ڕۆژانە.",
        magField11: "نوێکردنەوەی بۆردەکانی ڕوونکردنەوە بۆ تیمەکان.",
        magField12: "کارکردن وەک نێوەندگیر لە نێوان TFM، سەرپەرشتیارانی شوێن و تیمەکانی پەیوەندی کۆمەڵایەتی.",
        magField13: "دابینکردنی پشتیوانی بۆ بەشی بەرنامە و پەیوەندی.",
        dateNirozh: "2015 - 2017",
        roleNirozhDesc: "وەک مامۆستای پۆل وانەی ڕۆژانەی ئینگلیزی، زانست و بیرکاری دەوتەوە.",
        dateMaccos: "4 خول - 2017",
        roleEslTeacher: "مامۆستای ESL",
        roleEslDesc: "وتنەوەی زمانی ئینگلیزی وەک زمانی دووەم.",
        dateKurdistan: "1 خول - 2017",
        sectionEducation: "خوێندن و ڕاهێنان",
        eduEduTitle: "خوێندن",
        eduDegree: "بەکالۆریۆس لە زمانی ئینگلیزی",
        eduUni: "زانکۆی سەڵاحەدین - کۆلێژی زمان",
        eduDate: "2014 - 2015",
        eduTrainTitle: "ڕاهێنانە بڕوانامەدارەکان",
        train1: "بنەماکانی HR لە mselect recruiter - 2025",
        train2: "وۆرک شۆپی کڕین و لۆجستیک لە MAG – 2024",
        train3: "بەڕێوەبردنی خەڵک لە MAG – 2024",
        train4: "بەڕێوەبردنی چالاکی لە mselect recruiter - 2022",
        train5: "بەڕێوەبردنی سەرچاوە مرۆییەکان (ئۆنلاین) لە Top Target Academy - 2021",
        train6: "بەڕێوەبردنی HR لە American Corner – 2021",
        train7: "بنەماکانی بەڕێوەبردنی مۆدێرن و سەرکەوتوو لە زانکۆی ستراتفۆرد (هەولێر) - 2019",
        train8: "گەشەپێدانی مرۆیی لە ڕێکخراوی گەشەپێدانی قوتابیان - 2015",
        sectionContact: "پەیوەندی",
        location: "عێراق - هەولێر",
        sectionRef: "سەرچاوەکان",
        ref1Role: "ڕێکخەری بەڕێوەبردنی زانیاری",
        ref2Role: "ڕێکخەری سەرچاوە مرۆییەکان",
        footerRights: "دروستکراوە لەلایەن DZT"
    }
};

// UI Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const themeToggle = document.getElementById('theme-toggle');
const langSelect = document.getElementById('lang-select');
const body = document.body;

// --- Helper Functions ---

function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
}

function applyLanguage(lang) {
    // 1. Update document direction
    if (lang === 'ar' || lang === 'ku') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', lang);
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    }

    // 2. Update Text Content
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Check if element has HTML content or just text
            if (translations[lang][key].includes('<')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // 3. Save Preference
    localStorage.setItem('lang', lang);
    langSelect.value = lang;
}

// --- Event Listeners ---

// Theme Toggle
themeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    applyTheme(isDark);
});

// Language Select
langSelect.addEventListener('change', (e) => {
    applyLanguage(e.target.value);
});

// Hamburger Menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Close menu on link click
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// Smooth Scrolling (Legacy Support)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {
    // Load Theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true);
    } else {
        applyTheme(false);
    }

    // Load Language
    const savedLang = localStorage.getItem('lang') || 'en';
    applyLanguage(savedLang);
});

