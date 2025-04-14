// DOM Elements
const modal = document.getElementById('registration-modal');
const userForm = document.getElementById('user-details-form');
const schemesDashboard = document.getElementById('schemes-dashboard');
const schemesContainer = document.getElementById('schemes-container');
const categoryFilter = document.getElementById('category-filter');
const searchInput = document.getElementById('search-schemes');

// Authentication related DOM elements
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const authButtons = document.getElementById('auth-buttons');
const userProfile = document.getElementById('user-profile');
const profileLink = document.getElementById('profile-link');

// Sample schemes data with translations
const schemes = [
    {
        id: 1,
        translations: {
            en: {
                title: "PM Kisan Samman Nidhi",
                description: "Financial benefit of Rs. 6000 per year for farmer families",
                eligibility: "Small and marginal farmers",
                benefits: "Direct cash transfer of ₹6000 per year in three installments"
            },
            hi: {
                title: "पीएम किसान सम्मान निधि",
                description: "किसान परिवारों के लिए ₹6000 प्रति वर्ष की वित्तीय सहायता",
                eligibility: "छोटे और सीमांत किसान",
                benefits: "तीन किस्तों में ₹6000 प्रति वर्ष का सीधा नकद हस्तांतरण"
            },
            gu: {
                title: "પીએમ કિસાન સન્માન નિધિ",
                description: "ખેડૂત પરિવારો માટે વાર્ષિક ₹6000ની નાણાકીય સહાય",
                eligibility: "નાના અને સીમાંત ખેડૂતો",
                benefits: "ત્રણ હપ્તામાં વાર્ષિક ₹6000ની સીધી રોકડ સહાય"
            },
            te: {
                title: "పీఎం కిసాన్ సమ్మాన్ నిధి",
                description: "రైతు కుటుంబాలకు సంవత్సరానికి రూ.6000 ఆర్థిక సహాయం",
                eligibility: "చిన్న మరియు సన్నకారు రైతులు",
                benefits: "మూడు విడతల్లో సంవత్సరానికి రూ.6000 నేరుగా బ్యాంకు ఖాతాలో జమ"
            },
            ta: {
                title: "பிஎம் கிசான் சம்மான் நிதி",
                description: "விவசாய குடும்பங்களுக்கு ஆண்டுக்கு ரூ.6000 நிதி உதவி",
                eligibility: "சிறு மற்றும் குறு விவசாயிகள்",
                benefits: "மூன்று தவணைகளில் ஆண்டுக்கு ரூ.6000 நேரடி பண பரிமாற்றம்"
            }
        },
        category: "agriculture",
        deadline: "2024-12-31",
        applicationLink: "#"
    },
    {
        id: 2,
        translations: {
            en: {
                title: "National Scholarship Portal",
                description: "Various scholarships for students pursuing higher education in India",
                eligibility: "Students with family income below 8 lakh per annum",
                benefits: "Financial assistance ranging from ₹5,000 to ₹2 lakh per year for education expenses"
            },
            hi: {
                title: "राष्ट्रीय छात्रवृत्ति पोर्टल",
                description: "छात्रों के लिए विभिन्न छात्रवृत्तियां",
                eligibility: "8 लाख प्रति वर्ष से कम पारिवारिक आय वाले छात्र",
                benefits: "शिक्षा खर्च के लिए ₹5,000 से ₹2 लाख तक की वित्तीय सहायता"
            },
            gu: {
                title: "રાષ્ટ્રીય શિષ્યવૃત્તિ પોર્ટલ",
                description: "વિદ્યાર્થીઓ માટે વિવિધ શિષ્યવૃત્તિઓ",
                eligibility: "8 લાખ પ્રતિ વર્ષથી ઓછી કૌટુંબિક આવક ધરાવતા વિદ્યાર્થીઓ",
                benefits: "શિક્ષણ ખર્ચ માટે ₹5,000 થી ₹2 લાખ સુધીની નાણાકીય સહાય"
            },
            te: {
                title: "జాతీయ విద్యార్థి వేతన పోర్టల్",
                description: "విద్యార్థులకు వివిధ రకాల స్కాలర్షిప్లు",
                eligibility: "కుటుంబ వార్షిక ఆదాయం 8 లక్షల కంటే తక్కువ ఉన్న విద్యార్థులు",
                benefits: "విద్య ఖర్చుల కోసం సంవత్సరానికి ₹5,000 నుండి ₹2 లక్షల వరకు ఆర్థిక సహాయం"
            },
            ta: {
                title: "தேசிய கல்வி உதவித்தொகை போர்டல்",
                description: "மாணவர்களுக்கான பல்வேறு கல்வி உதவித்தொகைகள்",
                eligibility: "குடும்ப வருடாந்திர வருமானம் ₹8 லட்சத்திற்கும் குறைவாக உள்ள மாணவர்கள்",
                benefits: "கல்விச் செலவுகளுக்கு ஆண்டுக்கு ₹5,000 முதல் ₹2 லட்சம் வரை நிதி உதவி"
            }
        },
        category: "education",
        deadline: "2024-06-30",
        applicationLink: "#"
    },
    {
        id: 3,
        translations: {
            en: {
                title: "Ayushman Bharat Yojana",
                description: "Comprehensive health insurance coverage for eligible families",
                eligibility: "Economically weak families as per SECC database",
                benefits: "Health insurance coverage of ₹5 lakh per family per year"
            },
            hi: {
                title: "आयुष्मान भारत योजना",
                description: "पात्र परिवारों के लिए व्यापक स्वास्थ्य बीमा कवरेज",
                eligibility: "SECC डेटाबेस के अनुसार आर्थिक रूप से कमजोर परिवार",
                benefits: "प्रति परिवार प्रति वर्ष ₹5 लाख का स्वास्थ्य बीमा कवरेज"
            },
            gu: {
                title: "આયુષ્માન ભારત યોજના",
                description: "પાત્ર પરિવારો માટે વ્યાપક આરોગ્ય વીમા કવरેજ",
                eligibility: "SECC ડેટાબેઝ મુજબ આર્થિક રીતે નબળા પરિવારો",
                benefits: "પ્રતિ પરિવાર પ્રતિ વર્ષ ₹5 લાખનું આરોગ્ય વીમા કવरેજ"
            },
            te: {
                title: "ఆయుష్మాన్ భారత్ యోజన",
                description: "అర్హత కలిగిన కుటుంబాలకు సమగ్ర ఆరోగ్య బీమా",
                eligibility: "SECC డేటాబేస్ ప్రకారం ఆర్థికంగా బలహీన కుటుంబాలు",
                benefits: "ప్రతి కుటుంబానికి సంవత్సరానికి ₹5 లక్షల ఆరోగ్య బీమా"
            },
            ta: {
                title: "ஆயுஷ்மான் பாரத் திட்டம்",
                description: "தகுதியான குடும்பங்களுக்கு விரிவான சுகாதார காப்பீடு",
                eligibility: "SECC தரவுத்தளத்தின்படி பொருளாதார ரீதியாக பலவீனமான குடும்பங்கள்",
                benefits: "ஒரு குடும்பத்திற்கு ஆண்டுக்கு ₹5 லட்சம் சுகாதார காப்பீடு"
            }
        },
        category: "healthcare",
        deadline: "Open throughout the year",
        applicationLink: "#"
    },
    {
        id: 4,
        translations: {
            en: {
                title: "PM Rozgar Yojana",
                description: "Employment generation program for youth with focus on skill development",
                eligibility: "Unemployed youth aged 18-35 years",
                benefits: "Financial assistance up to ₹25 lakh and comprehensive training for self-employment"
            },
            hi: {
                title: "पीएम रोजगार योजना",
                description: "कौशल विकास पर ध्यान देने के साथ युवाओं के लिए रोजगार सृजन कार्यक्रम",
                eligibility: "18-35 वर्ष के बेरोजगार युवा",
                benefits: "स्वरोजगार के लिए ₹25 लाख तक की वित्तीय सहायता और व्यापक प्रशिक्षण"
            },
            gu: {
                title: "પીએમ રોજગાર યોજના",
                description: "કૌશલ્ય વિકાસ પર ધ્યાન કેન્દ્ને યુવાનો માટે રોજગાર સર્જન કાર્યક્રમ",
                eligibility: "18-35 વર્ષના બેરોજગાર યુવાનો",
                benefits: "સ્વરોજગાર માટે ₹25 લાખ સુધીની નાણાકીય સહાય અને વ્યાપક તાલીમ"
            },
            te: {
                title: "పీఎం రోజ్గార్ యోజన",
                description: "నైపుణ్య అభివృద్ధిపై దృష్టి సారించి యువతకు ఉపాధి కల్పన కార్యక్రమం",
                eligibility: "18-35 సంవత్సరాల నిరుద్యోగ యువత",
                benefits: "స్వయం ఉపాధి కోసం ₹25 లక్షల వరకు ఆర్థిక సహాయం మరియు సమగ్ర శిక్షణ"
            },
            ta: {
                title: "பிஎம் ரோஜ்கார் யோஜனா",
                description: "திறன் மேம்பாட்டில் கவனம் செலுத்தி இளைஞர்களுக்கான வேலைவாய்ப்பு உருவாக்கத் திட்டம்",
                eligibility: "18-35 வயதுக்குட்பட்ட வேலையில்லாத இளைஞர்கள்",
                benefits: "சுய தொழிலுக்கு ₹25 லட்சம் வரை நிதி உதவி மற்றும் விரிவான பயிற்சி"
            }
        },
        title: "PM Rozgar Yojana",
        category: "employment",
        description: "Employment generation program for youth",
        eligibility: "Unemployed youth aged 18-35",
        deadline: "2024-09-30",
        applicationLink: "#",
        benefits: "Financial assistance and training for self-employment"
    },
    {
        id: 5,
        translations: {
            en: {
                title: "PM Awas Yojana",
                description: "Housing for All scheme providing affordable housing to urban and rural poor",
                eligibility: "Economically weaker sections and low income groups with annual income up to ₹3 lakh",
                benefits: "Financial assistance up to ₹2.67 lakh for house construction and interest subsidy on home loans"
            },
            hi: {
                title: "पीएम आवास योजना",
                description: "शहरी और ग्रामीण गरीबों को किफायती आवास प्रदान करने वाली आवास योजना",
                eligibility: "आर्थिक रूप से कमजोर वर्ग और ₹3 लाख तक की वार्षिक आय वाले निम्न आय वर्ग",
                benefits: "मकान निर्माण के लिए ₹2.67 लाख तक की वित्तीय सहायता और होम लोन पर ब्याज सब्सिडी"
            },
            gu: {
                title: "પીએમ આવાસ યોજના",
                description: "શહેરી અને ગ્રામીણ ગરીબોને પરવડે તેવા આવાસ પૂરા પાડતી આવાસ યોજના",
                eligibility: "આર્થિક રીતે નબળા વર્ગો અને ₹3 લાખ સુધીની વાર્ષિક આવક ધરાવતા નીચા આવક જૂથો",
                benefits: "મકાન બાંધકામ માટે ₹2.67 લાખ સુધીની નાણાકીય સહાય અને હોમ લોન પર વ્યાજ સબસિડી"
            },
            te: {
                title: "పీఎం ఆవాస్ యోజన",
                description: "పట్టణ మరియు గ్రామీణ పేదలకు సరసమైన గృహాలను అందించే గృహ నిర్మాణ పథకం",
                eligibility: "ఆర్థికంగా బలహీన వర్గాలు మరియు ₹3 లక్షల వరకు వార్షిక ఆదాయం ఉన్న తక్కువ ఆదాయ వర్గాలు",
                benefits: "ఇంటి నిర్మాణానికి ₹2.67 లక్షల వరకు ఆర్థిక సహాయం మరియు హోమ్ లోన్లపై వడ్డీ రాయితీ"
            },
            ta: {
                title: "பிஎம் ஆவாஸ் யோஜனா",
                description: "நகர்ப்புற மற்றும் கிராமப்புற ஏழைகளுக்கு மலிவு விலை வீடுகளை வழங்கும் திட்டம்",
                eligibility: "பொருளாதார ரீதியாக நலிவடைந்த பிரிவினர் மற்றும் ₹3 லட்சம் வரை ஆண்டு வருமானம் உள்ள குறைந்த வருமானக் குழுக்கள்",
                benefits: "வீடு கட்டுமானத்திற்கு ₹2.67 லட்சம் வரை நிதி உதவி மற்றும் வீட்டுக் கடன்களுக்கான வட்டி மானியம்"
            }
        },
        category: "housing",
        deadline: "2024-12-31",
        applicationLink: "#"
    },
    {
        id: 6,
        translations: {
            en: {
                title: "Skill India Mission",
                description: "Comprehensive skill development and training program for youth",
                eligibility: "Youth aged 15-45 years looking for skill development",
                benefits: "Free training, certification, and placement assistance in various trades"
            },
            hi: {
                title: "कौशल भारत मिशन",
                description: "युवाओं के लिए व्यापक कौशल विकास और प्रशिक्षण कार्यक्रम",
                eligibility: "कौशल विकास की तलाश में 15-45 वर्ष के युवा",
                benefits: "विभिन्न व्यवसायों में नि:शुल्क प्रशिक्षण, प्रमाणन और प्लेसमेंट सहायता"
            },
            gu: {
                title: "સ્કિલ ઈન્ડિયા મિશન",
                description: "યુવાનો માટે વ્યાપક કૌશલ્ય વિકાસ અને તાલીમ કાર્યક્રમ",
                eligibility: "કૌશલ્ય વિકાસ માટે 15-45 વર્ષના યુવાનો",
                benefits: "વિવિધ વ્યવસાયોમાં મફત તાલીમ, પ્રમાણપત્ર અને પ્લેસમેન્ટ સહાય"
            },
            te: {
                title: "స్కిల్ ఇండియా మిషన్",
                description: "యువతకు సమగ్ర నైపుణ్య అభివృద్ధి మరియు శిక్షణా కార్యక్రమం",
                eligibility: "నైపుణ్య అభివృద్ధి కోసం చూస్తున్న 15-45 సంవత్సరాల యువత",
                benefits: "వివిధ వృత్తులలో ఉచిత శిక్షణ, సర్టిఫికేషన్ మరియు ప్లేస్మెంట్ సహాయం"
            },
            ta: {
                title: "திறன் இந்தியா திட்டம்",
                description: "இளைஞர்களுக்கான விரிவான திறன் மேம்பாடு மற்றும் பயிற்சித் திட்டம்",
                eligibility: "திறன் மேம்பாட்டைத் தேடும் 15-45 வயது இளைஞர்கள்",
                benefits: "பல்வேறு தொழில்களில் இலவச பயிற்சி, சான்றிதழ் மற்றும் வேலைவாய்ப்பு உதவி"
            }
        },
        category: "education",
        deadline: "Rolling admissions",
        applicationLink: "#"
    },
    {
        id: 7,
        translations: {
            en: {
                title: "PM Fasal Bima Yojana",
                description: "Comprehensive crop insurance scheme to protect farmers from crop losses",
                eligibility: "All farmers including sharecroppers and tenant farmers growing notified crops",
                benefits: "Insurance coverage for crop losses due to natural calamities, pests & diseases"
            },
            hi: {
                title: "पीएम फसल बीमा योजना",
                description: "किसानों को फसल के नुकसान से बचाने के लिए व्यापक फसल बीमा योजना",
                eligibility: "अधिसूचित फसलें उगाने वाले सभी किसान, बटाईदार और किरायेदार किसान सहित",
                benefits: "प्राकृतिक आपदाओं, कीट और बीमारियों के कारण फसल के नुकसान के लिए बीमा कवरेज"
            },
            gu: {
                title: "પીએમ ફસલ બીમા યોજના",
                description: "ખેડૂતોને પાક નુકસાનથી બચાવવા માટે વ્યાપક પાક વીમા યોજના",
                eligibility: "જાહેર કરેલા પાકો ઉગાડતા તમામ ખેડૂતો, ભાગીદાર અને ભાડૂઆત ખેડૂતો સહિત",
                benefits: "કુદરતી આફતો, જીવાતો અને રોગોના કારણે થતા પાક નુકસાન માટે વીમા કવરેજ"
            },
            te: {
                title: "పీఎం ఫసల్ బీమా యోజన",
                description: "రైతులను పంట నష్టాల నుండి రక్షించడానికి సమగ్ర పంట బీమా పథకం",
                eligibility: "ప్రకటించిన పంటలను పండించే అన్ని రకాల రైతులు, వ్యవసాయ కౌలుదారులు మరియు కౌలు రైతులతో సహా",
                benefits: "సహజ విపత్తులు, పురుగులు & వ్యాధుల వలన కలిగే పంట నష్టాలకు బీమా కవరేజీ"
            },
            ta: {
                title: "பிஎம் பசல் பீமா யோஜனா",
                description: "விவசாயிகளை பயிர் இழப்புகளில் இருந்து பாதுகாக்க விரிவான பயிர் காப்பீட்டுத் திட்டம்",
                eligibility: "அறிவிக்கப்பட்ட பயிர்களை பயிரிடும் அனைத்து விவசாயிகள், பங்குதாரர்கள் மற்றும் குத்தகை விவசாயிகள் உட்பட",
                benefits: "இயற்கை பேரிடர்கள், பூச்சிகள் & நோய்களால் ஏற்படும் பயிர் இழப்புகளுக்கான காப்பீடு"
            }
        },
        category: "agriculture",
        deadline: "Seasonal deadlines",
        applicationLink: "#"
    },
    {
        id: 8,
        translations: {
            en: {
                title: "Sukanya Samriddhi Yojana",
                description: "Government savings scheme for girl child education and marriage expenses",
                eligibility: "Parents of girl child below 10 years of age",
                benefits: "High interest rate of 8.1% and tax benefits under Section 80C"
            },
            hi: {
                title: "सुकन्या समृद्धि योजना",
                description: "बालिका की शिक्षा और विवाह खर्च के लिए सरकारी बचत योजना",
                eligibility: "10 वर्ष से कम आयु की बालिका के माता-पिता",
                benefits: "8.1% की उच्च ब्याज दर और धारा 80C के तहत कर लाभ"
            },
            gu: {
                title: "સુકન્યા સમૃદ્ધિ યોજના",
                description: "બાળકીની શિક્ષણ અને લગ્ન ખર્ચ માટે સરકારી બચત યોજના",
                eligibility: "10 વર્ષથી નીચેની બાળકીના માતા-પિતા",
                benefits: "8.1%ના ઉચ્ચ વ્યાજ દર અને કલમ 80C હેઠળ કર લાભો"
            },
            te: {
                title: "సుకన్య సమృద్ధి యోజన",
                description: "బాలిక విద్య మరియు వివాహ ఖర్చుల కోసం ప్రభుత్వ పొదుపు పథకం",
                eligibility: "10 సంవత్సరాల లోపు బాలికల తల్లిదండ్రులు",
                benefits: "8.1% అధిక వడ్డీ రేటు మరియు సెక్షన్ 80C కింద పన్ను ప్రయోజనాలు"
            },
            ta: {
                title: "சுகன்யா சம்ரித்தி யோஜனா",
                description: "பெண் குழந்தைகளின் கல்வி மற்றும் திருமண செலவுகளுக்கான அரசு சேமிப்புத் திட்டம்",
                eligibility: "10 வயதுக்குட்பட்ட பெண் குழந்தைகளின் பெற்றோர்கள்",
                benefits: "8.1% உயர் வட்டி விகிதம் மற்றும் பிரிவு 80C கீழ் வரிச் சலுகைகள்"
            }
        },
        category: "finance",
        deadline: "Open throughout the year",
        applicationLink: "#"
    },
    {
        id: 9,
        title: "National Pension Scheme",
        category: "finance",
        description: "Government-sponsored pension scheme",
        eligibility: "All Indian citizens aged 18-65",
        deadline: "Open throughout the year",
        applicationLink: "#",
        benefits: "Tax benefits and regulated pension returns"
    },
    {
        id: 10,
        title: "PM Jan Arogya Yojana",
        category: "healthcare",
        description: "Healthcare benefits for poor families",
        eligibility: "Poor and vulnerable families",
        deadline: "Open throughout the year",
        applicationLink: "#",
        benefits: "Free healthcare services up to ₹5 lakh per family per year"
    },
    {
        id: 11,
        translations: {
            en: {
                title: "PM Vishwakarma Scheme",
                description: "Support for traditional artisans and craftspeople",
                eligibility: "Traditional artisans and craftspeople",
                benefits: "Financial assistance up to ₹3 lakh and skill training"
            }
        },
        category: "employment",
        deadline: "2024-12-31",
        applicationLink: "#"
    },
    {
        id: 12,
        translations: {
            en: {
                title: "Digital India Internship Scheme",
                description: "Internship opportunities in digital technology",
                eligibility: "Students pursuing graduation/post-graduation in technology",
                benefits: "Monthly stipend of ₹10,000 and certification"
            }
        },
        category: "education",
        deadline: "2024-06-30",
        applicationLink: "#"
    },
    {
        id: 13,
        translations: {
            en: {
                title: "PM Garib Kalyan Anna Yojana",
                description: "Free food grains to poor families",
                eligibility: "Below Poverty Line (BPL) card holders",
                benefits: "5 kg free food grains per person per month"
            }
        },
        category: "finance",
        deadline: "2024-12-31",
        applicationLink: "#"
    },
    {
        id: 14,
        translations: {
            en: {
                title: "Solar Rooftop Subsidy Scheme",
                description: "Subsidy for installing solar panels",
                eligibility: "Residential building owners",
                benefits: "Up to 40% subsidy on solar panel installation"
            }
        },
        category: "housing",
        deadline: "2024-09-30",
        applicationLink: "#"
    },
    {
        id: 15,
        translations: {
            en: {
                title: "National Rural Health Mission",
                description: "Healthcare services in rural areas",
                eligibility: "Rural residents",
                benefits: "Free healthcare services and medical camps"
            }
        },
        category: "healthcare",
        deadline: "Ongoing",
        applicationLink: "#"
    },
    {
        id: 16,
        translations: {
            en: {
                title: "PM YUVA Mentorship Scheme",
                description: "Mentorship for young authors",
                eligibility: "Authors aged below 30 years",
                benefits: "Monthly scholarship of ₹50,000 for six months"
            }
        },
        category: "education",
        deadline: "2024-08-31",
        applicationLink: "#"
    },
    {
        id: 17,
        translations: {
            en: {
                title: "Soil Health Card Scheme",
                description: "Soil testing and recommendations",
                eligibility: "All farmers",
                benefits: "Free soil testing and fertilizer recommendations"
            }
        },
        category: "agriculture",
        deadline: "Ongoing",
        applicationLink: "#"
    },
    {
        id: 18,
        translations: {
            en: {
                title: "PM Street Vendor's AtmaNirbhar Nidhi",
                description: "Working capital loan for street vendors",
                eligibility: "Street vendors",
                benefits: "Collateral-free working capital loan of ₹10,000"
            }
        },
        category: "finance",
        deadline: "2024-12-31",
        applicationLink: "#"
    },
    {
        id: 19,
        translations: {
            en: {
                title: "National Urban Livelihoods Mission",
                description: "Employment opportunities in urban areas",
                eligibility: "Urban poor and unemployed",
                benefits: "Skill training and subsidy for setting up micro-enterprises"
            }
        },
        category: "employment",
        deadline: "2024-12-31",
        applicationLink: "#"
    },
    {
        id: 20,
        translations: {
            en: {
                title: "Janani Suraksha Yojana",
                description: "Safe motherhood intervention",
                eligibility: "Pregnant women from BPL families",
                benefits: "Cash assistance for institutional delivery"
            }
        },
        category: "healthcare",
        deadline: "Ongoing",
        applicationLink: "#"
    },
    {
        id: 21,
        translations: {
            en: {
                title: "Credit Linked Capital Subsidy Scheme",
                description: "Technology upgrade for small enterprises",
                eligibility: "Small scale industries",
                benefits: "15% capital subsidy on institutional finance"
            }
        },
        category: "finance",
        deadline: "2024-12-31",
        applicationLink: "#"
    },
    {
        id: 22,
        translations: {
            en: {
                title: "National Apprenticeship Promotion Scheme",
                description: "Promotion of apprenticeship training",
                eligibility: "ITI graduates and diploma holders",
                benefits: "Stipend support and basic training cost"
            }
        },
        category: "employment",
        deadline: "2024-12-31",
        applicationLink: "#"
    },
    {
        id: 23,
        translations: {
            en: {
                title: "PM Research Fellowship",
                description: "Fellowship for doctoral studies",
                eligibility: "Students pursuing PhD in IITs/IISc",
                benefits: "Fellowship of ₹70,000 per month plus research grant"
            }
        },
        category: "education",
        deadline: "2024-06-30",
        applicationLink: "#"
    },
    {
        id: 24,
        translations: {
            en: {
                title: "Green Home Loan Subsidy",
                description: "Subsidy for eco-friendly homes",
                eligibility: "First-time home buyers building green homes",
                benefits: "Interest subsidy up to 3% on home loans"
            }
        },
        category: "housing",
        deadline: "2024-12-31",
        applicationLink: "#"
    },
    {
        id: 25,
        translations: {
            en: {
                title: "Startup India Seed Fund",
                description: "Financial assistance for startups",
                eligibility: "Early-stage startups",
                benefits: "Seed funding up to ₹50 lakhs"
            }
        },
        category: "finance",
        deadline: "2024-09-30",
        applicationLink: "#"
    }
];

// Language translations
const translations = {
    en: {
        // Header
        citizenScheme: "CitizenScheme",
        home: "Home",
        schemes: "Schemes",
        notifications: "Notifications",
        
        // Auth
        login: "Login",
        register: "Register",
        findSchemes: "Find Government Schemes Just for You",
        discover: "Discover personalized recommendations for government schemes, scholarships, and welfare programs.",
        getStarted: "Get Started",
        fullName: "Full Name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        createAccount: "Create Account",
        forgotPassword: "Forgot Password?",
        alreadyHaveAccount: "Already have an account?",
        dontHaveAccount: "Don't have an account?",
        agreeToTerms: "I agree to the Terms & Conditions and Privacy Policy",
        or: "OR",
        continueWithGoogle: "Continue with Google",
        continueWithFacebook: "Continue with Facebook",
        
        // Profile
        myProfile: "My Profile",
        savedSchemes: "Saved Schemes",
        myApplications: "My Applications",
        settings: "Settings",
        logout: "Logout",
        
        // Registration Form
        personalDetails: "Personal Details",
        age: "Age",
        occupation: "Occupation",
        selectOccupation: "Select Occupation",
        student: "Student",
        farmer: "Farmer",
        employed: "Employed",
        unemployed: "Unemployed",
        seniorCitizen: "Senior Citizen",
        annualIncome: "Annual Income",
        region: "Region",
        selectRegion: "Select Region",
        urban: "Urban",
        rural: "Rural",
        findSchemeButton: "Find Schemes",
        
        // Schemes Dashboard
        filterSchemes: "Filter Schemes",
        allCategories: "All Categories",
        education: "Education",
        agriculture: "Agriculture",
        healthcare: "Healthcare",
        employment: "Employment",
        housing: "Housing",
        finance: "Finance",
        searchSchemes: "Search schemes...",
        applyNow: "Apply Now",
        viewDetails: "View Details",
        schemes: "Schemes",
        eligibility: "Eligibility:",
        deadline: "Deadline:",
        benefits: "Benefits:",
        
        // Footer
        aboutUs: "About Us",
        aboutUsText: "Connecting citizens with government welfare schemes and opportunities.",
        quickLinks: "Quick Links",
        helpSupport: "Help & Support",
        faq: "FAQ",
        contactUs: "Contact Us",
        connectWithUs: "Connect With Us"
    },
    hi: {
        // Header
        citizenScheme: "नागरिक योजना",
        home: "होम",
        schemes: "योजनाएं",
        notifications: "सूचनाएं",
        
        // Auth
        login: "लॉग इन",
        register: "रजिस्टर",
        findSchemes: "आपके लिए सरकारी योजनाएं खोजें",
        discover: "सरकारी योजनाओं, छात्रवृत्ति और कल्याण कार्यक्रमों के लिए व्यक्तिगत सिफारिशें प्राप्त करें।",
        getStarted: "शुरू करें",
        fullName: "पूरा नाम",
        email: "ईमेल",
        password: "पासवर्ड",
        confirmPassword: "पासवर्ड की पुष्टि करें",
        createAccount: "खाता बनाएं",
        forgotPassword: "पासवर्ड भूल गए?",
        alreadyHaveAccount: "पहले से खाता है?",
        dontHaveAccount: "खाता नहीं है?",
        agreeToTerms: "मैं नियम और शर्तों और गोपनीयता नीति से सहमत हूं",
        or: "या",
        continueWithGoogle: "Google के साथ जारी रखें",
        continueWithFacebook: "Facebook के साथ जारी रखें",
        
        // Profile
        myProfile: "मेरी प्रोफाइल",
        savedSchemes: "सहेजी गई योजनाएं",
        myApplications: "मेरे आवेदन",
        settings: "सेटिंग्स",
        logout: "लॉग आउट",
        
        // Registration Form
        personalDetails: "व्यक्तिगत विवरण",
        age: "आयु",
        occupation: "व्यवसाय",
        selectOccupation: "व्यवसाय चुनें",
        student: "छात्र",
        farmer: "किसान",
        employed: "नौकरी",
        unemployed: "बेरोजगार",
        seniorCitizen: "वरिष्ठ नागरिक",
        annualIncome: "वार्षिक आय",
        region: "क्षेत्र",
        selectRegion: "क्षेत्र चुनें",
        urban: "शहरी",
        rural: "ग्रामीण",
        findSchemeButton: "योजनाएं खोजें",
        
        // Schemes Dashboard
        filterSchemes: "योजनाएं फ़िल्टर करें",
        allCategories: "सभी श्रेणियां",
        education: "शिक्षा",
        agriculture: "कृषि",
        healthcare: "स्वास्थ्य",
        employment: "रोजगार",
        housing: "आवास",
        finance: "वित्त",
        searchSchemes: "योजनाएं खोजें...",
        applyNow: "अभी आवेदन करें",
        viewDetails: "विवरण देखें",
        schemes: "योजनाएं",
        eligibility: "पात्रता:",
        deadline: "अंतिम तिथि:",
        benefits: "लाभ:",
        
        // Footer
        aboutUs: "हमारे बारे में",
        aboutUsText: "नागरिकों को सरकारी कल्याण योजनाओं और अवसरों से जोड़ना।",
        quickLinks: "त्वरित लिंक",
        helpSupport: "सहायता और समर्थन",
        faq: "सामान्य प्रश्न",
        contactUs: "संपर्क करें",
        connectWithUs: "हमसे जुड़ें"
    },
    gu: {
        // Header
        citizenScheme: "નાગરિક યોજના",
        home: "હોમ",
        schemes: "યોજનાઓ",
        notifications: "સૂચનાઓ",
        
        // Auth
        login: "લૉગિન",
        register: "રજિસ્ટર",
        findSchemes: "તમારા માટે સરકારી યોજનાઓ શોધો",
        discover: "સરકારી યોજનાઓ, સ્કોલરશિપ અને કલ્યાણ કાર્યક્રમો માટે વ્યક્તિગત ભલામણો મેળવો.",
        getStarted: "શરૂ કરો",
        fullName: "પૂરుં નામ",
        email: "ઈમેઈલ",
        password: "પાસવર્ડ",
        confirmPassword: "પાસવર્ડની પુષ્ટિ કરો",
        createAccount: "એકાઉન્ટ બનાવો",
        forgotPassword: "પાસવર્ડ ભૂલી ગયા?",
        alreadyHaveAccount: "પહેલેથી એકાઉન્ટ છે?",
        dontHaveAccount: "એકાઉન્ટ નથી?",
        agreeToTerms: "હું નિયમો અને శరతો అనే గోపనీయతా నియమానికి అంగీకరిస్తున్నాను",
        or: "અથવા",
        continueWithGoogle: "Google સાથે ચાલુ રાખો",
        continueWithFacebook: "Facebook સાથે ચાલુ રાખો",
        
        // Profile
        myProfile: "મારી પ્રોફાઇલ",
        savedSchemes: "સાચવેલી યોજનાઓ",
        myApplications: "મારી અરજીઓ",
        settings: "સેટિંગ્સ",
        logout: "લૉગ્આઉટ",
        
        // Registration Form
        personalDetails: "વ્યક્તિગત વિગતો",
        age: "ઉંમર",
        occupation: "વ્યવસાય",
        selectOccupation: "વ્યવસાય પસંદ કરો",
        student: "વિદ્યાર્થી",
        farmer: "ખેડૂત",
        employed: "નોકરી",
        unemployed: "બેરોજગાર",
        seniorCitizen: "વરિષ્ઠ નાગરિક",
        annualIncome: "વાર્ષિક આવક",
        region: "વિસ્તાર",
        selectRegion: "વિસ્તાર પસંદ કરો",
        urban: "શહેરી",
        rural: "ગ્રામીણ",
        findSchemeButton: "યોજનાઓ શોધો",
        
        // Schemes Dashboard
        filterSchemes: "યોજનાઓ ફિલ્ટર કરો",
        allCategories: "બધી શ્રેણીઓ",
        education: "શિક્ષણ",
        agriculture: "કૃષિ",
        healthcare: "આરોગ્ય",
        employment: "રોજગાર",
        housing: "આવાસ",
        finance: "નાણાં",
        searchSchemes: "યોજનાઓ શોધો...",
        applyNow: "અરજી કરો",
        viewDetails: "વિગતો જુઓ",
        schemes: "યોજનાઓ",
        eligibility: "પાત્રતા:",
        deadline: "છેલ્લી તારીખ:",
        benefits: "લાભો:",
        
        // Footer
        aboutUs: "અમારા વિશે",
        aboutUsText: "નાગરિકોને સરકારી કલ્યાણ યોજનાઓ અને તકો સાથે જોડવા.",
        quickLinks: "ઝડપી લિંક્સ",
        helpSupport: "મદદ અને સમર્થન",
        faq: "FAQ",
        contactUs: "સંપર્ક કરો",
        connectWithUs: "અમારી સાથે જોડાઓ"
    },
    te: {
        // Header
        citizenScheme: "పౌర పథకం",
        home: "హోమ్",
        schemes: "పథకాలు",
        notifications: "నోటిఫికేషన్లు",
        
        // Auth
        login: "లాగిన్",
        register: "రిజిస్టర్",
        findSchemes: "మీ కోసం ప్రభుత్వ పథకాలను కనుగొనండి",
        discover: "ప్రభుత్వ పథకాలు, స్కాలర్షిప్లు మరియు సంక్షేమ కార్యక్రమాల కోసం వ్యక్తిగత సిఫార్సులను పొందండి.",
        getStarted: "ప్రారంభించండి",
        fullName: "పూర్తి పేరు",
        email: "ఇమ૆యిల్",
        password: "పాస్వర్డ్",
        confirmPassword: "పాస్వర్డ్ నిర్ధారించండి",
        createAccount: "ఖాతా సృష్టించండి",
        forgotPassword: "పాస్వర్డ్ మర్చిపోయారా?",
        alreadyHaveAccount: "ఇప్పటికే ఖాతా ఉందా?",
        dontHaveAccount: "ఖాతా లేదా?",
        agreeToTerms: "నేను నిబంధనలు మరియు షరతులు మరియు గోప్యతా విధానానికి అంగీకరిస్తున్నాను",
        or: "లేదా",
        continueWithGoogle: "Google తో కొనసాగించండి",
        continueWithFacebook: "Facebook తో కొనసాగించండి",
        
        // Profile
        myProfile: "నా ప్రొఫైల్",
        savedSchemes: "సేమిత్త పథకాలు",
        myApplications: "నా దరఖాస్తులు",
        settings: "సెట్టింగ్స్",
        logout: "లాగ్అవుట్",
        
        // Registration Form
        personalDetails: "వ్యక్తిగత వివరాలు",
        age: "వయస్సు",
        occupation: "వృత్తి",
        selectOccupation: "వృత్తిని ఎంచుకోండి",
        student: "విద్యార్థి",
        farmer: "రైతు",
        employed: "ఉద్యోగి",
        unemployed: "నిరుద్యోగి",
        seniorCitizen: "వృద్ధ పౌరుడు",
        annualIncome: "వార్షిక ఆదాయం",
        region: "ప్రాంతం",
        selectRegion: "ప్రాంతాన్ని ఎంచుకోండి",
        urban: "పట్టణ",
        rural: "గ్రామీణ",
        findSchemeButton: "పథకాలను కనుగొనండి",
        
        // Schemes Dashboard
        filterSchemes: "పథకాలను ఫిల్టర్ చేయండి",
        allCategories: "అన్ని వర్గాలు",
        education: "విద్య",
        agriculture: "వ్యవసాయం",
        healthcare: "ఆరోగ్య సంరక్షణ",
        employment: "ఉపాధి",
        housing: "గృహ నిర్మాణం",
        finance: "ఆర్థిక",
        searchSchemes: "పథకాలను శోధించండి...",
        applyNow: "ఇప్పుడే దరఖాస్తు చేయండి",
        viewDetails: "వివరాలను చూడండి",
        schemes: "పథకాలు",
        eligibility: "అర్హత:",
        deadline: "గడువు:",
        benefits: "ప్రయోజనాలు:",
        
        // Footer
        aboutUs: "మా గురించి",
        aboutUsText: "పౌరులను ప్రభుత్వ సంక్షేమ పథకాలు మరియు అవకాశాలతో అనుసంధానించడం.",
        quickLinks: "త్వరిత లింక్స్",
        helpSupport: "సహాయం & మద్దతు",
        faq: "తరచుగా అడిగే ప్రశ్నలు",
        contactUs: "మమ్మల్ని సంప్రదించండి",
        connectWithUs: "మాతో కనెక్ట్ అవ్వండి"
    },
    ta: {
        // Header
        citizenScheme: "குடிமக்கள் திட்டம்",
        home: "முகப்பு",
        schemes: "திட்டங்கள்",
        notifications: "அறிவிப்புகள்",
        
        // Auth
        login: "உள்நுழைய",
        register: "பதிவு செய்ய",
        findSchemes: "உங்களுக்கான அரசு திட்டங்களைக் கண்டறியவும்",
        discover: "அரசு திட்டங்கள், கல்வி உதவித்தொகை மற்றும் நல திட்டங்களுக்கான தனிப்பட்ட பரிந்துரைகளைப் பெறுங்கள்.",
        getStarted: "தொடங்குங்கள்",
        fullName: "முழு பெயர்",
        email: "மின்னஞ்சல்",
        password: "கடவுச்சொல்",
        confirmPassword: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
        createAccount: "கணக்கை உருவாக்கு",
        forgotPassword: "கடவுச்சொல் மறந்துவிட்டதா?",
        alreadyHaveAccount: "ஏற்கனவே கணக்கு உள்ளதா?",
        dontHaveAccount: "கணக்கு இல்லையா?",
        agreeToTerms: "விதிமுறைகள் மற்றும் தனியுரிமைக் கொள்கையை ஏற்கிறேன்",
        or: "அல்லது",
        continueWithGoogle: "Google மூலம் தொடரவும்",
        continueWithFacebook: "Facebook மூலம் தொடரவும்",
        
        // Profile
        myProfile: "என் சுயவிவரம்",
        savedSchemes: "சேமித்த திட்டங்கள்",
        myApplications: "என் விண்ணப்பங்கள்",
        settings: "அமைப்புகள்",
        logout: "வெளியேறு",
        
        // Registration Form
        personalDetails: "தனிப்பட்ட விவரங்கள்",
        age: "வயது",
        occupation: "தொழில்",
        selectOccupation: "தொழிலைத் தேர்ந்தெடுக்கவும்",
        student: "மாணவர்",
        farmer: "விவசாயி",
        employed: "வேலை செய்பவர்",
        unemployed: "வேலையில்லாதவர்",
        seniorCitizen: "மூத்த குடிமகன்",
        annualIncome: "ஆண்டு வருமானம்",
        region: "பகுதி",
        selectRegion: "பகுதியைத் தேர்ந்தெடுக்கவும்",
        urban: "நகர்ப்புறம்",
        rural: "கிராமப்புறம்",
        findSchemeButton: "திட்டங்களைக் கண்டறியவும்",
        
        // Schemes Dashboard
        filterSchemes: "திட்டங்களை வடிகட்டவும்",
        allCategories: "அனைத்து வகைகள்",
        education: "கல்வி",
        agriculture: "விவசாயம்",
        healthcare: "சுகாதாரம்",
        employment: "வேலைவாய்ப்பு",
        housing: "வீட்டுவசதி",
        finance: "நிதி",
        searchSchemes: "திட்டங்களைத் தேடுங்கள்...",
        applyNow: "இப்போதே விண்ணப்பிக்கவும்",
        viewDetails: "விவரங்களைக் காண",
        schemes: "திட்டங்கள்",
        eligibility: "தகுதி:",
        deadline: "காலக்கெடு:",
        benefits: "பலன்கள்:",
        
        // Footer
        aboutUs: "எங்களைப் பற்றி",
        aboutUsText: "குடிமக்களை அரசு நல திட்டங்கள் மற்றும் வாய்ப்புகளுடன் இணைத்தல்.",
        quickLinks: "விரைவு இணைப்புகள்",
        helpSupport: "உதவி & ஆதரவு",
        faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        contactUs: "எங்களை தொடர்பு கொள்ள",
        connectWithUs: "எங்களுடன் இணைய"
    }
};

// Current language
let currentLang = 'en';

// Language selector event listener
document.getElementById('language-selector').addEventListener('change', function(e) {
    currentLang = e.target.value;
    updateLanguage();
});

// Update language throughout the page
function updateLanguage() {
    // Update static elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translations[currentLang][key];
            } else if (element.tagName === 'INPUT' && element.hasAttribute('data-placeholder')) {
                element.placeholder = translations[currentLang][key];
            } else if (element.tagName === 'OPTION') {
                element.text = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });

    // Update dynamic scheme cards if they exist
    if (schemesDashboard && !schemesDashboard.classList.contains('hidden')) {
        displaySchemes(schemes);
    }
}

// Show registration modal
function showRegistration() {
    modal.style.display = 'block';
    
    // If schemes are already displayed, keep them visible
    if (schemesDashboard.classList.contains('hidden')) {
        document.querySelector('.hero').style.display = 'flex';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal('registration-modal');
    } else if (event.target.classList.contains('scheme-details-modal')) {
        event.target.remove();
    }
}

// Handle form submission
userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        occupation: document.getElementById('occupation').value,
        income: document.getElementById('income').value,
        region: document.getElementById('region').value
    };

    // Hide modal and hero section
    modal.style.display = 'none';
    document.querySelector('.hero').style.display = 'none';
    
    // Show dashboard
    schemesDashboard.classList.remove('hidden');

    // Load recommended schemes
    loadRecommendedSchemes(formData);
    
    // Scroll to schemes dashboard
    schemesDashboard.scrollIntoView({ behavior: 'smooth' });
});

// Load schemes based on user profile
function loadRecommendedSchemes(userProfile) {
    // In production, this would use an algorithm to match schemes to user profile
    displaySchemes(schemes);
}

// Group schemes by category
function groupSchemesByCategory(schemesToGroup) {
    const categories = {};
    schemesToGroup.forEach(scheme => {
        if (!categories[scheme.category]) {
            categories[scheme.category] = [];
        }
        categories[scheme.category].push(scheme);
    });
    return categories;
}

// Display schemes in the dashboard
function displaySchemes(schemesToShow) {
    console.log('Displaying schemes:', schemesToShow.length);
    
    if (!schemesContainer) {
        console.error('Schemes container not found');
        return;
    }
    
    // Clear existing content
    schemesContainer.innerHTML = '';
    
    if (!schemesToShow || schemesToShow.length === 0) {
        schemesContainer.innerHTML = '<div class="no-schemes">No schemes found</div>';
        return;
    }
    
    // Group schemes by category
    const groupedSchemes = groupSchemesByCategory(schemesToShow);
    
    Object.entries(groupedSchemes).forEach(([category, categorySchemes]) => {
        console.log(`Creating category section: ${category} with ${categorySchemes.length} schemes`);
        
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        categorySection.setAttribute('data-category', category);
        
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header';
        categoryHeader.innerHTML = `
            <div class="category-header-content">
                <h2 class="category-title">${translations[currentLang][category] || formatCategoryName(category)}</h2>
                <div class="category-count">${categorySchemes.length} ${translations[currentLang].schemes || 'Schemes'}</div>
            </div>
            <button class="category-toggle" onclick="toggleCategory('${category}')">
                <i class="fas fa-chevron-down"></i>
            </button>
        `;
        
        const categorySchemesList = document.createElement('div');
        categorySchemesList.className = 'category-schemes';
        categorySchemesList.id = `category-${category}-schemes`;
        
        categorySchemes.forEach(scheme => {
            const schemeCard = createSchemeCard(scheme, category);
            categorySchemesList.appendChild(schemeCard);
        });
        
        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(categorySchemesList);
        schemesContainer.appendChild(categorySection);
    });
}

// Helper function to create scheme card
function createSchemeCard(scheme, category) {
    const schemeCard = document.createElement('div');
    schemeCard.className = 'scheme-card';
    schemeCard.setAttribute('data-category', category);
    
    // Get translated content or fall back to English
    const schemeContent = scheme.translations?.[currentLang] || scheme.translations?.['en'] || {
        title: scheme.title,
        description: scheme.description,
        eligibility: scheme.eligibility,
        benefits: scheme.benefits
    };
    
    schemeCard.innerHTML = `
        <div class="scheme-card-inner">
            <div class="scheme-category-tag" style="background-color: ${getCategoryColor(category)}">
                ${translations[currentLang][category] || formatCategoryName(category)}
            </div>
            <h3 class="scheme-title">${schemeContent.title}</h3>
            <p class="scheme-description">${schemeContent.description}</p>
            <div class="scheme-details">
                <div class="scheme-info">
                    <span class="info-label">${translations[currentLang].eligibility || 'Eligibility'}:</span>
                    <span class="info-value">${schemeContent.eligibility}</span>
                </div>
                <div class="scheme-info">
                    <span class="info-label">${translations[currentLang].deadline || 'Deadline'}:</span>
                    <span class="info-value">${scheme.deadline}</span>
                </div>
                <div class="scheme-info">
                    <span class="info-label">${translations[currentLang].benefits || 'Benefits'}:</span>
                    <span class="info-value">${schemeContent.benefits}</span>
                </div>
            </div>
            <div class="scheme-actions">
                <a href="${scheme.applicationLink}" class="apply-button" data-category="${category}">
                    ${translations[currentLang].applyNow || 'Apply Now'}
                </a>
                <button class="details-button" onclick="showSchemeDetails(${scheme.id})" data-category="${category}">
                    ${translations[currentLang].viewDetails || 'View Details'}
                </button>
            </div>
        </div>
    `;
    
    return schemeCard;
}

// Get category-specific color
function getCategoryColor(category) {
    const colors = {
        education: '#3498db',
        agriculture: '#27ae60',
        healthcare: '#e74c3c',
        employment: '#f39c12',
        housing: '#9b59b6',
        finance: '#34495e'
    };
    return colors[category] || '#2c3e50';
}

// Toggle category visibility
function toggleCategory(category) {
    const categorySchemes = document.getElementById(`category-${category}-schemes`);
    const categorySection = categorySchemes.parentElement;
    const toggleButton = categorySection.querySelector('.category-toggle i');
    
    if (categorySchemes.style.display === 'none') {
        categorySchemes.style.display = 'grid';
        toggleButton.className = 'fas fa-chevron-down';
        categorySection.classList.remove('collapsed');
    } else {
        categorySchemes.style.display = 'none';
        toggleButton.className = 'fas fa-chevron-right';
        categorySection.classList.add('collapsed');
    }
}

// Filter schemes by category
function filterSchemesByCategory(category) {
    if (category === 'all') {
        displaySchemes(schemes);
    } else {
        const filteredSchemes = schemes.filter(scheme => scheme.category === category);
        displaySchemes(filteredSchemes);
    }
}

// Search schemes
function searchSchemes(searchTerm) {
    if (!searchTerm) {
        displaySchemes(schemes);
        return;
    }
    
    const filteredSchemes = schemes.filter(scheme => {
        const content = scheme.translations?.[currentLang] || scheme.translations?.['en'] || scheme;
        return (
            content.title.toLowerCase().includes(searchTerm) ||
            content.description.toLowerCase().includes(searchTerm) ||
            content.eligibility.toLowerCase().includes(searchTerm)
        );
    });
    displaySchemes(filteredSchemes);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    
    // Initialize schemes link click handler
    const schemesLink = document.querySelector('#schemes-link');
    if (schemesLink) {
        schemesLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Schemes link clicked');
            showAllSchemes();
        });
    }
    
    // Initialize category filter
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function(e) {
            const selectedCategory = e.target.value;
            filterSchemesByCategory(selectedCategory);
        });
    }
    
    // Initialize search input
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            searchSchemes(searchTerm);
        });
    }
    
    // Check URL hash for direct navigation
    if (window.location.hash === '#schemes') {
        showAllSchemes();
    }
    
    // Update language
    updateLanguage();
});

// Show all schemes when clicking the Schemes link
function showAllSchemes() {
    console.log('Showing all schemes...');
    
    // Hide hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.display = 'none';
    }
    
    // Show dashboard and ensure it's visible
    schemesDashboard.classList.remove('hidden');
    schemesDashboard.style.display = 'block';
    
    // Hide registration modal if it's open
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Reset category filter to show all categories
    if (categoryFilter) {
        categoryFilter.value = 'all';
    }
    
    // Clear any existing schemes
    if (schemesContainer) {
        schemesContainer.innerHTML = '';
        console.log('Cleared existing schemes');
    }
    
    // Display all schemes
    console.log('Displaying schemes:', schemes.length);
    displaySchemes(schemes);
    
    // Scroll to schemes dashboard
    schemesDashboard.scrollIntoView({ behavior: 'smooth' });
    
    // Update active navigation
    updateActiveNavigation('schemes-link');
}

// Close modal function
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Update active navigation
function updateActiveNavigation(activeId) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    document.getElementById(activeId)?.classList.add('active');
}

// Add home link functionality
document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.hero').style.display = 'flex';
    schemesDashboard.classList.add('hidden');
    updateActiveNavigation('home');
});

// Show login modal
function showLoginModal() {
    loginModal.style.display = 'block';
    document.querySelector('#login-modal h2').setAttribute('data-translate', 'login');
    document.querySelector('#login-modal label[for="login-email"]').setAttribute('data-translate', 'email');
    document.querySelector('#login-modal label[for="login-password"]').setAttribute('data-translate', 'password');
    document.querySelector('#login-modal .forgot-password').setAttribute('data-translate', 'forgotPassword');
    document.querySelector('#login-modal .submit-button').setAttribute('data-translate', 'login');
    document.querySelector('#login-modal .auth-separator span').setAttribute('data-translate', 'or');
    updateLanguage();
}

// Show registration modal
function showRegisterModal() {
    registerModal.style.display = 'block';
    document.querySelector('#register-modal h2').setAttribute('data-translate', 'createAccount');
    document.querySelector('#register-modal label[for="register-name"]').setAttribute('data-translate', 'fullName');
    document.querySelector('#register-modal label[for="register-email"]').setAttribute('data-translate', 'email');
    document.querySelector('#register-modal label[for="register-password"]').setAttribute('data-translate', 'password');
    document.querySelector('#register-modal label[for="register-confirm-password"]').setAttribute('data-translate', 'confirmPassword');
    document.querySelector('#register-modal .submit-button').setAttribute('data-translate', 'createAccount');
    document.querySelector('#register-modal .auth-separator span').setAttribute('data-translate', 'or');
    updateLanguage();
}

// Switch between login and register modals
function switchToRegister() {
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
}

function switchToLogin() {
    registerModal.style.display = 'none';
    loginModal.style.display = 'block';
}

// Handle login form submission
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Here you would typically make an API call to verify credentials
    // For demo purposes, we'll simulate a successful login
    handleSuccessfulLogin({
        name: 'John Doe',
        email: email,
        profilePic: 'https://via.placeholder.com/32'
    });
});

// Handle registration form submission
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you would typically make an API call to create the account
    // For demo purposes, we'll simulate a successful registration
    handleSuccessfulLogin({
        name: name,
        email: email,
        profilePic: 'https://via.placeholder.com/32'
    });
});

// Handle successful login
function handleSuccessfulLogin(user) {
    // Store user data (in production, you'd use proper session management)
    localStorage.setItem('user', JSON.stringify(user));

    // Update UI
    updateUIForLoggedInUser(user);

    // Close modals
    closeModal('login-modal');
    closeModal('register-modal');
}

// Update UI for logged-in user
function updateUIForLoggedInUser(user) {
    // Hide auth buttons and show profile
    authButtons.classList.add('hidden');
    userProfile.classList.remove('hidden');
    profileLink.classList.remove('hidden');
    document.querySelector('a[href="#notifications"]').classList.remove('hidden');

    // Update profile picture
    document.querySelector('.profile-pic').src = user.profilePic;
}

// Handle logout
function logout() {
    // Clear user data
    localStorage.removeItem('user');

    // Update UI
    authButtons.classList.remove('hidden');
    userProfile.classList.add('hidden');
    profileLink.classList.add('hidden');
    document.querySelector('a[href="#notifications"]').classList.add('hidden');
}

// Show scheme details
function showSchemeDetails(schemeId) {
    const scheme = schemes.find(s => s.id === schemeId);
    if (!scheme) return;

    // Get translated content or fall back to English
    const schemeContent = scheme.translations[currentLang] || scheme.translations.en;

    const detailsModal = document.createElement('div');
    detailsModal.className = 'modal scheme-details-modal';
    detailsModal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2>${schemeContent.title}</h2>
            <div class="scheme-full-details">
                <p class="scheme-description">${schemeContent.description}</p>
                <h3>${translations[currentLang].benefits}</h3>
                <p>${schemeContent.benefits}</p>
                <h3>${translations[currentLang].eligibility}</h3>
                <p>${schemeContent.eligibility}</p>
                <h3>${translations[currentLang].deadline}</h3>
                <p>${scheme.deadline}</p>
                <div class="modal-actions">
                    <a href="${scheme.applicationLink}" class="apply-button">${translations[currentLang].applyNow}</a>
                    <button class="download-button">${translations[currentLang].downloadGuidelines || 'Download Guidelines'}</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(detailsModal);
    detailsModal.style.display = 'block';

    const closeButton = detailsModal.querySelector('.close-button');
    closeButton.onclick = function() {
        detailsModal.remove();
    }

    window.onclick = function(event) {
        if (event.target === detailsModal) {
            detailsModal.remove();
        }
    }
}

// Format category name for display
function formatCategoryName(category) {
    return category.charAt(0).toUpperCase() + category.slice(1);
}

// Add responsive styles
const responsiveStyles = document.createElement('style');
responsiveStyles.textContent = `
    /* Base styles */
    .schemes-dashboard {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .category-schemes {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        padding: 20px 0;
    }

    .scheme-card {
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: transform 0.2s;
        height: 100%;
    }

    /* Responsive styles for different screen sizes */
    @media screen and (max-width: 768px) {
        .category-schemes {
            grid-template-columns: 1fr;
            padding: 10px;
        }

        .scheme-card {
            margin-bottom: 15px;
        }

        .scheme-actions {
            flex-direction: column;
            gap: 10px;
        }

        .apply-button, .details-button {
            width: 100%;
        }

        .category-header {
            flex-direction: column;
            align-items: flex-start;
        }

        .scheme-details-modal .modal-content {
            width: 90%;
            margin: 20px auto;
            padding: 15px;
        }
    }

    @media screen and (max-width: 480px) {
        .schemes-dashboard {
            padding: 10px;
        }

        .scheme-title {
            font-size: 1.1rem;
        }

        .scheme-description {
            font-size: 0.9rem;
        }

        .scheme-info {
            font-size: 0.85rem;
        }

        .category-title {
            font-size: 1.2rem;
        }

        .modal-content {
            padding: 10px;
        }
    }

    /* Navigation responsive styles */
    @media screen and (max-width: 768px) {
        .nav-links {
            display: none;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background: #fff;
            padding: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .nav-links.active {
            display: flex;
            flex-direction: column;
        }

        .nav-links a {
            padding: 10px;
            width: 100%;
            text-align: left;
        }

        .mobile-menu-button {
            display: block;
        }
    }

    /* Form responsive styles */
    @media screen and (max-width: 768px) {
        .registration-form {
            padding: 15px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-row {
            flex-direction: column;
        }

        .form-group {
            width: 100%;
        }
    }

    /* Modal responsive styles */
    @media screen and (max-width: 768px) {
        .modal-content {
            width: 95%;
            margin: 20px auto;
        }

        .scheme-details-modal .modal-actions {
            flex-direction: column;
        }
    }
`;

document.head.appendChild(responsiveStyles);

// Add mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuButton.style.display = 'none';

    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelector('nav').insertBefore(mobileMenuButton, navLinks);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-button')) {
            navLinks.classList.remove('active');
        }
    });
}

// Initialize mobile menu on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    // ... existing DOMContentLoaded code ...
});

// Update createSchemeCard function to be more responsive
function createSchemeCard(scheme, category) {
    const schemeCard = document.createElement('div');
    schemeCard.className = 'scheme-card';
    schemeCard.setAttribute('data-category', category);
    
    const schemeContent = scheme.translations?.[currentLang] || scheme.translations?.['en'] || {
        title: scheme.title,
        description: scheme.description,
        eligibility: scheme.eligibility,
        benefits: scheme.benefits
    };
    
    schemeCard.innerHTML = `
        <div class="scheme-card-inner">
            <div class="scheme-category-tag" style="background-color: ${getCategoryColor(category)}">
                ${translations[currentLang][category] || formatCategoryName(category)}
            </div>
            <div class="scheme-content">
                <h3 class="scheme-title">${schemeContent.title}</h3>
                <p class="scheme-description">${schemeContent.description}</p>
                <div class="scheme-details">
                    <div class="scheme-info">
                        <span class="info-label">${translations[currentLang].eligibility || 'Eligibility'}:</span>
                        <span class="info-value">${schemeContent.eligibility}</span>
                    </div>
                    <div class="scheme-info">
                        <span class="info-label">${translations[currentLang].deadline || 'Deadline'}:</span>
                        <span class="info-value">${scheme.deadline}</span>
                    </div>
                    <div class="scheme-info">
                        <span class="info-label">${translations[currentLang].benefits || 'Benefits'}:</span>
                        <span class="info-value">${schemeContent.benefits}</span>
                    </div>
                </div>
            </div>
            <div class="scheme-actions">
                <a href="${scheme.applicationLink}" class="apply-button" data-category="${category}">
                    ${translations[currentLang].applyNow || 'Apply Now'}
                </a>
                <button class="details-button" onclick="showSchemeDetails(${scheme.id})" data-category="${category}">
                    ${translations[currentLang].viewDetails || 'View Details'}
                </button>
            </div>
        </div>
    `;
    
    return schemeCard;
}

// Add comprehensive responsive styles
const additionalResponsiveStyles = document.createElement('style');
additionalResponsiveStyles.textContent = `
    /* Header and Navigation */
    @media screen and (max-width: 768px) {
        header {
            padding: 10px;
        }

        .logo {
            font-size: 1.2rem;
        }

        .mobile-menu-button {
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #333;
            padding: 5px;
            cursor: pointer;
        }

        .nav-links {
            position: fixed;
            top: 60px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 60px);
            background: #fff;
            transition: 0.3s;
            z-index: 1000;
        }

        .nav-links.active {
            left: 0;
        }

        .nav-links a {
            display: block;
            padding: 15px 20px;
            border-bottom: 1px solid #eee;
        }

        .auth-buttons {
            flex-direction: column;
            width: 100%;
            gap: 10px;
        }

        .auth-buttons button {
            width: 100%;
        }

        .user-profile {
            position: static;
            width: 100%;
        }

        .profile-dropdown {
            position: static;
            width: 100%;
            box-shadow: none;
            margin-top: 10px;
        }
    }

    /* Hero Section */
    @media screen and (max-width: 768px) {
        .hero {
            padding: 20px;
            text-align: center;
        }

        .hero h1 {
            font-size: 1.8rem;
            line-height: 1.3;
        }

        .hero p {
            font-size: 1rem;
        }

        .hero-buttons {
            flex-direction: column;
            gap: 10px;
        }

        .hero-buttons button {
            width: 100%;
        }
    }

    /* Forms and Modals */
    @media screen and (max-width: 768px) {
        .modal-content {
            width: 95%;
            margin: 10px;
            padding: 15px;
        }

        .form-row {
            flex-direction: column;
        }

        .form-group {
            width: 100%;
            margin-bottom: 15px;
        }

        .social-login-buttons {
            flex-direction: column;
        }

        .social-login-button {
            width: 100%;
            margin: 5px 0;
        }
    }

    /* Scheme Cards and Details */
    @media screen and (max-width: 480px) {
        .scheme-card-inner {
            padding: 12px;
        }

        .scheme-category-tag {
            font-size: 0.8rem;
            padding: 4px 8px;
        }

        .scheme-content {
            margin: 10px 0;
        }

        .scheme-details {
            margin-top: 10px;
        }

        .scheme-info {
            margin: 5px 0;
        }

        .scheme-actions {
            padding-top: 10px;
        }
    }

    /* Search and Filter */
    @media screen and (max-width: 768px) {
        .search-filter-container {
            flex-direction: column;
            gap: 10px;
            padding: 10px;
        }

        .search-input {
            width: 100%;
        }

        .category-filter {
            width: 100%;
        }
    }

    /* Language Selector */
    @media screen and (max-width: 768px) {
        .language-selector {
            position: static;
            width: 100%;
            margin: 10px 0;
        }

        #language-selector {
            width: 100%;
            padding: 10px;
        }
    }

    /* Footer */
    @media screen and (max-width: 768px) {
        footer {
            padding: 20px;
        }

        .footer-content {
            flex-direction: column;
            text-align: center;
        }

        .footer-section {
            width: 100%;
            margin: 10px 0;
        }

        .footer-links {
            flex-direction: column;
            gap: 10px;
        }
    }

    /* Animations and Transitions */
    @media (prefers-reduced-motion: reduce) {
        * {
            animation: none !important;
            transition: none !important;
        }
    }

    /* Print Styles */
    @media print {
        .scheme-card {
            break-inside: avoid;
            page-break-inside: avoid;
        }

        .scheme-actions {
            display: none;
        }

        .nav-links, .auth-buttons, .search-filter-container {
            display: none;
        }
    }
`;

document.head.appendChild(additionalResponsiveStyles);

// Update mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';

    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    
    mobileMenuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('active');
        mobileMenuButton.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    header.insertBefore(mobileMenuButton, navLinks);

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-button')) {
            navLinks.classList.remove('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// Initialize mobile menu on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeMobileMenu();
    // ... existing DOMContentLoaded code ...
});

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});

// Contact Form Submission
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;
    
    // Here you would typically send this data to your backend
    console.log('Contact form submitted:', { name, email, subject, message });
    
    // Show success message (you can customize this)
    alert('Thank you for your message. We will get back to you soon!');
    
    // Reset form
    this.reset();
});

// Support Center Functions
function startLiveChat() {
    // Create chat modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="closeLiveChat()">&times;</span>
            <h2>Live Chat Support</h2>
            <div id="chat-container">
                <div id="chat-messages">
                    <p class="system-message">Welcome to CitizenScheme Support! An agent will be with you shortly.</p>
                </div>
                <div class="chat-input">
                    <input type="text" id="chat-message" placeholder="Type your message...">
                    <button onclick="sendMessage()">Send</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

function closeLiveChat() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

function sendMessage() {
    const input = document.getElementById('chat-message');
    const message = input.value.trim();
    if (message) {
        const messagesContainer = document.getElementById('chat-messages');
        const messageElement = document.createElement('p');
        messageElement.className = 'user-message';
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
        input.value = '';

        // Simulate agent response
        setTimeout(() => {
            const agentMessage = document.createElement('p');
            agentMessage.className = 'agent-message';
            agentMessage.textContent = "Thank you for your message. An agent will respond shortly.";
            messagesContainer.appendChild(agentMessage);
        }, 1000);
    }
}

// Add event listeners for support center interactions
document.addEventListener('DOMContentLoaded', function() {
    // Quick help card clicks
    const quickHelpCards = document.querySelectorAll('.quick-help-card');
    quickHelpCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(section);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Support buttons
    const supportButtons = document.querySelectorAll('.support-btn');
    supportButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.textContent.toLowerCase();
            switch(action) {
                case 'reset password':
                    window.location.href = '/reset-password';
                    break;
                case 'resend verification':
                    window.location.href = '/resend-verification';
                    break;
                case 'edit profile':
                    window.location.href = '/profile/edit';
                    break;
                case 'document guide':
                    window.location.href = '/document-guide';
                    break;
                case 'check status':
                    window.location.href = '/application/status';
                    break;
                case 'troubleshoot':
                    window.location.href = '/troubleshooting';
                    break;
                default:
                    console.log('Action not implemented:', action);
            }
        });
    });
});

// Add styles for chat functionality
const style = document.createElement('style');
style.textContent = `
    #chat-container {
        margin-top: 1.5rem;
    }

    #chat-messages {
        height: 300px;
        overflow-y: auto;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .chat-input {
        display: flex;
        gap: 0.5rem;
    }

    .chat-input input {
        flex: 1;
        padding: 0.8rem;
        border: 2px solid #e2e8f0;
        border-radius: 8px;
        font-size: 1rem;
    }

    .chat-input button {
        padding: 0.8rem 1.5rem;
        background: #0984e3;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .chat-input button:hover {
        background: #0773c5;
    }

    .system-message {
        color: #666;
        font-style: italic;
        margin-bottom: 0.8rem;
    }

    .user-message {
        background: #0984e3;
        color: #fff;
        padding: 0.8rem;
        border-radius: 8px;
        margin-bottom: 0.8rem;
        margin-left: auto;
        max-width: 80%;
        width: fit-content;
    }

    .agent-message {
        background: #f8f9fa;
        color: #2d3436;
        padding: 0.8rem;
        border-radius: 8px;
        margin-bottom: 0.8rem;
        margin-right: auto;
        max-width: 80%;
        width: fit-content;
    }
`;
document.head.appendChild(style);

// Support Center Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Handle support center navigation
    const supportCenterLink = document.querySelector('a[href="support-center.html"]');
    if (supportCenterLink) {
        supportCenterLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'support-center.html';
        });
    }

    // Handle quick help navigation
    const quickHelpLinks = document.querySelectorAll('.quick-help-card');
    if (quickHelpLinks) {
        quickHelpLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    // Handle support buttons
    const supportButtons = document.querySelectorAll('.support-btn');
    if (supportButtons) {
        supportButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const action = this.textContent.trim().toLowerCase();
                handleSupportAction(action);
            });
        });
    }
});

function handleSupportAction(action) {
    switch(action) {
        case 'reset password':
            // Show password reset modal or navigate to reset page
            window.location.href = 'reset-password.html';
            break;
        case 'resend verification':
            // Handle verification email resend
            window.location.href = 'resend-verification.html';
            break;
        case 'edit profile':
            // Navigate to profile edit page
            window.location.href = 'profile-edit.html';
            break;
        case 'document guide':
            // Show document guide
            window.location.href = 'document-guide.html';
            break;
        case 'check status':
            // Navigate to application status page
            window.location.href = 'application-status.html';
            break;
        case 'troubleshoot':
            // Show troubleshooting guide
            window.location.href = 'troubleshooting.html';
            break;
        default:
            console.log('Action not implemented:', action);
    }
}

// Live Chat Functions
function startLiveChat() {
    const chatModal = document.createElement('div');
    chatModal.className = 'modal';
    chatModal.innerHTML = `
        <div class="modal-content">
            <span class="close-button" onclick="closeLiveChat()">&times;</span>
            <h2>Live Chat Support</h2>
            <div id="chat-container">
                <div id="chat-messages">
                    <p class="system-message">Welcome to CitizenScheme Support! An agent will be with you shortly.</p>
                </div>
                <div class="chat-input">
                    <input type="text" id="chat-message" placeholder="Type your message...">
                    <button onclick="sendMessage()">Send</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(chatModal);
    
    // Add modal styles if not already present
    if (!document.querySelector('#modal-styles')) {
        const modalStyles = document.createElement('style');
        modalStyles.id = 'modal-styles';
        modalStyles.textContent = `
            .modal {
                display: block;
                position: fixed;
                z-index: 1000;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.5);
            }
            
            .modal-content {
                background-color: #fff;
                margin: 10% auto;
                padding: 2rem;
                border-radius: 12px;
                width: 90%;
                max-width: 600px;
                position: relative;
            }
            
            .close-button {
                position: absolute;
                right: 1rem;
                top: 1rem;
                font-size: 1.5rem;
                cursor: pointer;
            }
            
            .close-button:hover {
                color: #0984e3;
            }
        `;
        document.head.appendChild(modalStyles);
    }
}

// Secure Authentication Functions
function switchAuthTab(tab) {
    // Remove active class from all tabs and contents
    document.querySelectorAll('.auth-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    document.querySelector(`.auth-tab-btn[onclick*="${tab}"]`).classList.add('active');
    document.getElementById(`${tab}-auth`).classList.add('active');
}

function selectAuthMethod(method) {
    // Remove selected class from all method cards
    document.querySelectorAll('.auth-method-card').forEach(card => card.classList.remove('selected'));
    
    // Add selected class to clicked card
    event.currentTarget.classList.add('selected');
    
    // Hide all method forms
    document.querySelectorAll('.auth-method-form').forEach(form => {
        form.classList.remove('active');
        form.classList.add('hidden');
    });
    
    // Show selected method form
    const selectedForm = document.getElementById(`${method}-form`);
    selectedForm.classList.remove('hidden');
    selectedForm.classList.add('active');
}

// OTP Input Handling
document.addEventListener('DOMContentLoaded', function() {
    const otpInputs = document.querySelectorAll('.otp-input');
    
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (e.target.value.length === 1) {
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            }
        });
        
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });
    
    // Handle Send OTP button
    const sendOtpBtn = document.querySelector('.send-otp');
    if (sendOtpBtn) {
        sendOtpBtn.addEventListener('click', function() {
            const mobileNumber = document.getElementById('mobile-number').value;
            if (mobileNumber.length === 10) {
                // Show OTP input group
                document.querySelector('.otp-input-group').classList.remove('hidden');
                // Start countdown for resend
                startResendTimer();
                // Simulate OTP sent
                showToast('OTP sent successfully!');
            } else {
                showToast('Please enter a valid mobile number');
            }
        });
    }
    
    // Handle Verify OTP button
    const verifyOtpBtn = document.querySelector('.verify-otp');
    if (verifyOtpBtn) {
        verifyOtpBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const otp = Array.from(otpInputs).map(input => input.value).join('');
            if (otp.length === 6) {
                // Simulate OTP verification
                showToast('Verifying OTP...');
                setTimeout(() => {
                    showToast('Login successful!');
                    closeModal('login-modal');
                    // Handle successful login
                    handleSuccessfulLogin();
                }, 1500);
            } else {
                showToast('Please enter a valid OTP');
            }
        });
    }
});

function startResendTimer() {
    const resendBtn = document.querySelector('.resend-otp');
    let timeLeft = 30;
    
    resendBtn.disabled = true;
    resendBtn.textContent = `Resend OTP in ${timeLeft}s`;
    
    const timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            resendBtn.disabled = false;
            resendBtn.textContent = 'Resend OTP';
        } else {
            resendBtn.textContent = `Resend OTP in ${timeLeft}s`;
        }
    }, 1000);
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast styles
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 0.9rem;
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s ease;
    }
    
    .toast.show {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
`;
document.head.appendChild(toastStyles);

// Toggle Secure Authentication Section
function toggleSecureAuth() {
    const secureAuthSection = document.getElementById('secure-auth');
    secureAuthSection.classList.toggle('active');
    
    // Add close button if not already present
    if (secureAuthSection.classList.contains('active') && !document.querySelector('.secure-auth-close')) {
        const closeButton = document.createElement('button');
        closeButton.className = 'secure-auth-close';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = toggleSecureAuth;
        secureAuthSection.querySelector('.container').prepend(closeButton);
    }

    // Prevent body scrolling when secure auth is open
    document.body.style.overflow = secureAuthSection.classList.contains('active') ? 'hidden' : '';
}

// Close secure auth when clicking outside
document.addEventListener('click', (e) => {
    const secureAuthSection = document.getElementById('secure-auth');
    const floatingBtn = document.getElementById('secure-auth-btn');
    
    if (secureAuthSection.classList.contains('active') && 
        !secureAuthSection.querySelector('.container').contains(e.target) && 
        e.target !== floatingBtn && 
        !floatingBtn.contains(e.target)) {
        toggleSecureAuth();
    }
});

// Prevent clicks inside secure auth from closing it
document.querySelector('#secure-auth .container').addEventListener('click', (e) => {
    e.stopPropagation();
});

// Toggle Schemes Dashboard
function toggleSchemes(event) {
    event.preventDefault();
    const schemesSection = document.getElementById('schemes-dashboard');
    const heroSection = document.querySelector('.hero');
    const schemeLink = event.target;
    const allNavLinks = document.querySelectorAll('.nav-links a');
    
    // Remove active class from all nav links
    allNavLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to schemes link
    schemeLink.classList.add('active');
    
    // Show schemes section and hide hero section
    schemesSection.classList.remove('hidden');
    heroSection.classList.add('hidden');
    
    // Smooth scroll to schemes section
    schemesSection.scrollIntoView({ behavior: 'smooth' });
}

// Add click handler for home link to show hero section
document.querySelector('.nav-links a[href="#home"]').addEventListener('click', function(event) {
    event.preventDefault();
    const schemesSection = document.getElementById('schemes-dashboard');
    const heroSection = document.querySelector('.hero');
    const allNavLinks = document.querySelectorAll('.nav-links a');
    
    // Remove active class from all nav links
    allNavLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to home link
    this.classList.add('active');
    
    // Hide schemes section and show hero section
    schemesSection.classList.add('hidden');
    heroSection.classList.remove('hidden');
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});