type Partner = {     
  name: string;     
  contact: {         
    website: string;         
    contactPerson: { 
      name: string; 
      description: string; 
      email: string 
    };     
  };     
  galery: string[];     
  website: string;     
  logo: string;     
  description: { 
    descriptionTitle?: string; 
    description: string 
  };     
  scholars?: {         
    name: string;         
    description: string;         
    image: string;         
    eduLavel: string;     
  }[]; 
};  

export const partners: Partner[] = [     
  {         
    name: "Addis Ababa University",         
    contact: {             
      website: "",             
      contactPerson: { 
        name: "Dr. Dawit Wondimagegn", 
        description: "Associate Professor, Addis Ababa University Consultant Psychiatrist, Tikur Anbessa Hospital Associate Professor, Addis Ababa University, Co-chair and Director, Toronto Addis Ababa Academic Collaboration (TAAAC), National Lead, African Health Observatory Platform - Ethiopia National Centre", 
        email: "dawit.wondimagegn@aau.edu.et" 
      },         
    },         
    galery: [
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/AAU-University-Gate.jpg", 
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/AAU-Yellow-Movements-Inspire-Talk.jpg",
      ""
    ],         
    website: "https://partnera.com",         
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-aau.png",         
    description: {             
  descriptionTitle: "Addis Ababa University (AAU), which was established in 1950 as the University College of Addis Ababa (UCAA), is the oldest and the largest higher learning and research institution in Ethiopia.",             
  description: `Since its inception, the University has been the leading center in teaching-learning, research and community services.

Beginning with enrollment capacity of 33 students in 1950, AAU now has 47,610 students and 8,709 staff. In its 14 campuses, the University runs 70 undergraduate and 293 graduate programs, and various specializations in Health Sciences. Over 222,000 students have graduated from AAU since its establishment.

Addis Ababa University’s mission is to produce competent graduates, provide need-based community service and produce problem-solving research outputs through innovative and creative education, research and consultancy service to foster social and economic development of the country. The University is proud to be included as one of 9 partner institutions in the Africa Health Collaborative.`
},

    scholars: [             
      {                 
        name: "Bethlehem Addisu Demissie",                 
        description: "Addis Ababa University,University of Toronto",                 
        image: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Betty-Demissie-1056x1320.jpg",             
        eduLavel: "Master Scolar",             
      },             
      {                 
        name: "Bethlehem(Betty) Sisay Tefera",                 
        description: "Addis Ababa University,University of Toronto",                 
        image: "https://africahealthcollaborative.org/wp-content/uploads/2023/11/Betty-Tefera-1-1056x1320.jpg",                 
        eduLavel: "Master Scolar",             
      },         
    ],     
  },     

  {     
    name: "African Institute for Mathematical Sciences",     
    contact: {       
      website: "https://example.com",       
      contactPerson: { 
        name: "", 
        description: "Director", 
        email: "info@ashesi.edu.gh" 
      },     
    },     
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/Photo-class-in-session-1320x880.jpg",
       "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Photo-AIMS-Students-life.jpg",
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/AIMS-Cameroon-2022-graduands-photo-2-2048x1365.jpg",
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/AIMS-Rwanda-2022-graduands-photo-2048x1318.jpg"],     
    website: "http://example.com",     
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-aims.png",     
    description: {         
      descriptionTitle: "African Institute for Mathematical Sciences",         
      description: `The African Institute for Mathematical Sciences (AIMS) is a pan-African network of centers of excellence for training, research, and public engagement in mathematical sciences. Established in 2003 in South Africa, AIMS has grown to six centers in Senegal, Ghana, Cameroon, and Rwanda. The institute is committed to educating and guiding the upcoming generation of African mathematicians, scientists, and researchers. AIMS programs emphasize the importance of cross-disciplinary teamwork and using mathematical sciences to tackle practical, real-world issues.

AIMS offers advanced training in mathematical sciences through its master’s, PhD, and postdoctoral programs to students from across Africa. The institute is dedicated to nurturing scientific talent, encouraging global collaboration, and advancing STEM (Science, Technology, Engineering, and Mathematics), making it an essential player in Africa’s academic and scientific spheres. So far, AIMS has educated over 3,000 master’s graduates (34% women) from 45 African countries. More than 70% of these graduates have stayed in Africa, contributing to the continent’s education, research, and entrepreneurship growth.

AIMS ranks among the top 20 African academic institutions for influential research, as recognized by the Nature Index list. The network, comprising over 100 researchers, is instrumental in producing high-caliber research addressing developmental challenges in Africa. Each AIMS center is involved in significant, interdisciplinary research initiatives led by renowned Research Chairs. The institute boasts an impressive record of over 600 publications in leading academic journals, marking one of Africa’s highest research outputs per capita. AIMS researchers have explored over 1200 research subjects and filed 210 patent applications. Additionally, AIMS is a key member of the Africa Health Collaborative, an initiative hosted by the University of Toronto and funded by the Mastercard Foundation, collaborating with seven other African Partner Institutions.`
  },     
    scholars: [       
      { 
        name: "Paul Agbekpornu", 
        description: "African Institute for Mathematical Sciences", 
        image: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Paul-Agbekpornu-1056x1320.jpg", 
        eduLavel: "Master Scholar" 
      },       
      { 
        name: "Seidu Tahiru", 
        description: "African Institute for Mathematical Sciences", 
        image: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Seidu-Tahiru-1056x1320.jpg", 
        eduLavel: "Master Scholar" 
      },     
    ],   
  }, 

  {
    name: "African Leadership University",
    contact: {
      website: "https://example.com",
      contactPerson: { name: "", description: "Admissions Officer", email: "info@ashesi.edu.gh" },
    },
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/IMG_8926-1320x880.jpg", ""],
    website: "http://example.com",
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-alu.svg",
    description: {
      descriptionTitle:"Higher Education for a higher purpose: We believe that young people hold the potential to become the ethical, entrepreneurial leaders our continent and planet need.",
      description:"Our role is to unlock that potential through a one-of-a-kind learning experience that gives students the foundation for a lifetime of leading positive change. ALU approaches education through “Missions, not Majors”: with a keen focus on the Global Challenges – especially health-related Missions (in the entrepreneurial and ecosystems). Guided by learning coaches, visiting faculty, experts in residence and mentors, students undertake an immersive learning journey close to the problems they will need to solve as leaders and the communities they will serve. Learners get to identify a mission based on challenges or opportunities they have identified (or have lived with), and, they are given the foundational skills to lead themselves through (for example) an in-depth exploration of Values, Vision and Virtue. Through international internships and networking opportunities, learners also have access to significant resources (across the African Leadership Group and its partners) to research, prototype, conduct market assessment and scale their solutions in and outside of their communities. Over 41 nationalities are currently represented in ALU – on our main campus, and multiple hubs spread across different parts of the world and growing. We run undergraduate programs in Software Engineering and Entrepreneurial Leadership, an Executive MBA and other leadership programs. ALU, Doing Hard Things!"
    },
    scholars: [
      { name: "Diana Kaliza", description: "African Leadership University", image: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Diana-Kaliza-1056x1320.jpg", eduLavel: "Master Scholar" },
    ],
  },

  {
    name: "Amref International University (Amref Health Africa)",
    contact: {
      website: "https://example.com",
      contactPerson: { name: "", description: "", email: "" },
    },
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/DSC05170-1320x881.jpg",
       "https://africahealthcollaborative.org/wp-content/uploads/2023/10/DSC03118-2048x1366.jpg",
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/DSC_1774-MacBook-Pro-2048x1367.jpg"],
    website: "http://example.com",
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-amref.png",
    description: {
      descriptionTitle: "Amref International University (AMIU) was established in 2017 as a Premier Pan African University of health sciences fully owned by Amref health Africa. AMIU is founded on the experience and intellect of Amref Health Africa, which is reputed with over 60 years of quality and innovative public and community health interventions in over 30 countries in Africa.",
      description: `With this work, the need to train health workers in communities was evident and the response was short tenure training courses by the Amref Training Centre (AITC) and later the Directorate of Capacity Building (DCB), the predecessor of AMIU. These Amref training programmes, run for over 40 years, have produced alumni spread throughout the world who have created the name recognition, reputation, and brand that Amref is today. It was then evident that there was a need to train people who would occupy higher levels and thus influence health policy, regulation, and legislation. The University was thus established.

AMIU’s focus is on training, research, and extension in health sciences with emphasis on promotive, preventive, rehabilitative, and palliative health. Its commitment is to progressively develop innovative programmes catering to the present as well as future Africa and global health needs.

The University offers postgraduate, undergraduate, higher diploma, diploma, certificate programmes as well as Continuing Professional Development (CPD) courses that prepare human resources for health to serve throughout the health system. AMIU seeks to train transformation leaders who will Inspire Lasting Change.`
},
    scholars: [
      { name: "Asmaa Balagha", description: "Amref International University ", image: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Asmaa-Balagha-1056x1320.jpg", eduLavel: "Master Scholar" },
      { name: "Harriet-Baraka", description: "Amref International University ", image: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Harriet-Baraka-1056x1320.jpg", eduLavel: "Master Scholar" },
    ],
  },

  {
    name: "Ashesi University",
    contact: {
      website: "https://example.com",
      contactPerson: { name: "", description: "", email: "info@ashesi.edu.gh" },
    },
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/Ashesi_Aerial_Shot-1-1320x712.jpg",
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/DSC05170-2048x1366.jpg",
       "https://africahealthcollaborative.org/wp-content/uploads/2023/10/DSC03118-2048x1366.jpg",
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/DSC_1774-MacBook-Pro-2048x1367.jpg"],
    website: "http://example.com",
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-ashesi-university.png",
    description: {
      descriptionTitle:"Ashesi University Foundation was founded by Dr. Patrick Awuah, and spearheaded (till date) by a well-qualified Board of Trustees whose efforts are complemented by Advisory Boards located in the US and Ghana.",
      description: `In 2002, Ashesi University officially launched its liberal-arts style of higher education as a private, not-for-profit, non-sectarian institution suited to Africa’s context and enrolled its pioneering class of 30 students. Ashesi University’s mission is to propel an African renaissance by educating ethical, entrepreneurial leaders. Located in Berekuso, Ghana, this private, non-profit university combines a rigorous multidisciplinary core as part of its four-year undergraduate program with major studies in Computer Science, Management Information Systems, Engineering, and Business Administration, as well as graduate programs in Mechatronics Engineering. A student-led honour code, integrated community service, diverse internships, and real-world projects prepare Ashesi students to develop innovative solutions for the challenges facing their communities, countries, and the continent at large. As of January 2023, Ashesi University had an undergraduate student population of 1,418 and 40 postgraduate students, of which 47% are women and 46% are on scholarships.

Ashesi is now recognized as one of the finest universities in Africa, with a proven track record in fostering ethical leadership, critical thinking, an entrepreneurial mindset, and the ability to solve complex problems. In 2018, the President of Ghana granted Ashesi a Charter to operate as a fully autonomous institution, no longer supervised by a public university under Ghana’s accreditation system. Ashesi is the youngest university to have achieved such recognition and is one of five private universities in Ghana to hold a Charter.`
},
    scholars: [
      { name: "Cajetan Songwae", description: "Ashesi University", image: "https://africahealthcollaborative.org/wp-content/uploads/2025/01/Cajetan-Songwae-1320x891.jpg", eduLavel: "Master Scholar,Founder of Light Farms and Innovations" },
      { name: "Marian Bernice Kafui Adzoa Haligah", description: "Ashesi University,University of Toronto", image: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Marian-Haligah-1056x1320.jpg", eduLavel: "Master Scholar" },
    ],
  },

  {
    name: "Kwame Nkrumah University of Science and Technology",
    contact: {
      website: "https://example.com",
      contactPerson: { name: "", description: "", email: "info@ashesi.edu.gh" },
    },
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/impactbuilding-1320x879.jpg",
       "https://africahealthcollaborative.org/wp-content/uploads/2023/10/123312133_10160458674488625_1329695422147338240_n-1320x880.jpg",
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/176787150_10160960515228625_1466511705865091339_n-1320x880.jpg",
    "https://africahealthcollaborative.org/wp-content/uploads/2023/10/309109902_10162114948553625_6511214865913380270_n-1320x878.jpg",
  "https://africahealthcollaborative.org/wp-content/uploads/2023/10/309214349_10162114949433625_6860004334840175248_n-1320x878.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/309283817_10162114949413625_6322344023637675287_n-1320x878.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/309307483_10162114949638625_5580029981373281777_n-1320x878.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/323459883_1155054525154575_4594232452941221372_n-1320x880.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/330268481_1206234323585724_8070333163147160384_n-1320x888.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/347408359_782753043298437_1109642650327586383_n-1320x898.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/bruneicomplex-1320x815.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/building1-1320x841.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/KEEP-BUILDING-COMMISSIONED-3-1320x880.jpg"],
    website: "http://example.com",
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-knust.png",
    description: {
      descriptionTitle:"Kwame Nkrumah University of Science and Technology (KNUST) was established in 1951 as Kumasi College of Technology. It was officially opened on January 22, 1952 with 200 teacher training students transferred from Achimota College. In October 1952, the School of Engineering and the Department of Commerce were established.",
     description: `In 1953, a Pharmacy Department was established, and a Department of Agriculture was opened to provide courses for the Ministry of Agriculture. A Department of General Studies was also instituted to prepare students for Higher School Certificate Examinations.

In 1957, the School of Architecture, Town Planning and Building was inaugurated, and its first students were admitted in January 1958. As the college expanded, it was decided to make KNUST a purely science and technology institution. In pursuit of this policy, the Teacher Training College was transferred to Winneba Training College and the Commerce Department was transferred to Achimota.

KNUST is now a leading university in Ghana and offers a wide range of courses in science, technology, engineering, and the humanities. It is a major contributor to the economic and social development of Ghana.`
},
    scholars: [
      { name: "Scholar F1", description: "Expert in field F1", image: "scholar_f1.png", eduLavel: "" },
      { name: "Scholar F2", description: "Expert in field F2", image: "scholar_f2.png", eduLavel: "" },
    ],
  },

  {
    name: "Mastercard Foundation",
    contact: {
      website: "https://example.com",
      contactPerson: { name: "", description: "President & CEO", email: "info@ashesi.edu.gh" },
    },
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/RS11507_MCF_Youth_Think_Tank_Uganda_Rwanda_2016_2751-lpr_1440x545_acf_cropped-1.jpeg", ""],
    website: "http://example.com",
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-mastercard.svg",
    description: {
      descriptionTitle:"The Mastercard Foundation is a registered Canadian charity and one of the largest foundations in the world.",
      description:"It works with visionary organizations to advance education and financial inclusion to enable young people in Africa and Indigenous youth in Canada to access dignified and fulfilling work. Established in 2006 through the generosity of Mastercard when it became a public company, the Foundation is an independent organization separate from the company, with offices in Toronto, Kigali, Accra, Nairobi, Kampala, Lagos, Dakar, and Addis Ababa. Its policies, operations, and program decisions are determined by the Foundation’s Board of Directors and leadership."
    },
    scholars: [
      { name: "Solomon Makuza,BSc(Hons);MPH", description: "Mastercard Foundation Doctoral Scholar", image: "https://africahealthcollaborative.org/wp-content/uploads/2024/12/Solomon-Makuza_-Head-Shot-V1-1320x1185.jpg", eduLavel: "Dall Lana School of Public Health,Mastercard Foundation Scholars Program,University of Toronto" },
      { name: "Naomi Teshome Assegied,MD", description: "Mastercard Foundation Doctoral Scholar", image: "https://africahealthcollaborative.org/wp-content/uploads/2024/12/Naomi-Headshot-only-min-921x1320.jpg", eduLavel: "Dalla Lana school of Public Health" },
    ],
  },

  {
    name: "Moi University",
    contact: {
      website: "https://example.com",
      contactPerson: { name: "", description: "", email: "info@ashesi.edu.gh" },
    },
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/Moi-University-1320x871.jpg", ""],
    website: "http://example.com",
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-moi-university.png",
    description: {
      descriptionTitle:"Moi University was founded in 1984 by an act of parliament (Moi University Act, 1984) as the second public University in Kenya and is one of the top ranked public universities in Kenya.",
      description:"It is located Uasin Gishu county, Kesses, 35 kilometers from Eldoret town, 310 kilometers Northwest of Nairobi the capital city of Kenya. Since its inception, the University has experienced phenomenal growth leading to establishment of several constituent colleges most of which have since grown into fully fledged universities namely: Maseno University, Masinde Muliro University of Science & Technology (MMUST), Maasai Mara University (Mmaarau), University of Kabianga (UoK), University of Eldoret (UoE), Karatina University, Rongo University, Garissa University and Alupe University. Moi University currently has four campuses: Main Campus (Kesses), Nairobi Campus, Coast Campus and Eldoret Town campus. It also has one constituent college; Bomet University College. Moi University serves a student population of 39,786 undergraduate and postgraduate through onsite and offsite 233-degree programs across the fifteen schools of the institution. It has a staff component of 3,000 of both faculty and administrative staff. The school of Public Health is situated in the Eldoret Town campus; College of Health Sciences. Moi University serves as one of the 8 African Partner institutions for the Africa Health Collaborative."
    },
    scholars: [
      { name: "Kuol Maper Alier", description: "Master Scholar", image: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Kuol-Maper-1056x1320.jpg", eduLavel: "Moi University,University of Toronto" },
      { name: "Kennedy Owino Ojowi", description: "Master Scholar", image: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/Kennedy-Ojowi-1056x1320.jpg", eduLavel: "Moi University,University of Toronto" },
    ],
  },
 {
    name: "University of Cape Town",
    contact: {
      website: "https://example.com",
      contactPerson: { name: "", description: "", email: "info@ashesi.edu.gh" },
    },
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/1600px-UCT_cropped.jpg",
       "https://africahealthcollaborative.org/wp-content/uploads/2023/10/IMG-20231019-WA0029.jpg",
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/IMG-20231019-WA0040.jpg"],
    website: "http://example.com",
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-uct.png",
    description: {
      descriptionTitle:"The University of Cape Town is a community of exceptionally talented students, teachers and researchers – and a wide range of professional, administrative support and service staff – all of whom are committed to help change this world for the better.",
      description: `We encourage one another to work hard, not only to earn degrees or public recognition, but also to be leaders in this increasingly changing world.

Our vision is to be an inclusive, research-intensive African university that addresses the challenges of our time with cutting-edge teaching, research, and facilities. As a university, we are committed to promoting transformation, to working tirelessly to guarantee the sustainability of our institution, and to ensuring excellence in all we do.

UCT has a proud tradition of academic excellence and is currently the top-rated university in Africa and one of the top-rated universities in the world.

Our researchers continue to help with the creation of African-based solutions to global problems, including issues relating to climate change, urbanization, safety and security, education, and health, to name just a few. Many UCT researchers are recognized world leaders in their respective fields.

The UCT Faculty of Health Sciences is the most research-intensive faculty in the university, with postgraduate students outnumbering undergraduates, and a world rating among the top 50 health sciences faculties worldwide (by Times Higher Education). The Faculty has 13 academic departments, over twenty multi-disciplinary research groupings, and more than 4,000 students.

The AfreHE-HCo@UCT programme will be hosted within the Faculty of Health Sciences, by the Department of Family, Community and Emergency Care, abbreviated to ‘FaCE’. It consists of five divisions: Family Medicine, Primary Health Care, Emergency Medicine, Integrated Palliative Care and Medicine, and Sports and Exercise Medicine.

The massive transformative purpose of FaCE is “to build inclusive communities of care together”, referring not only to external geographic communities and partners in Cape Town and the Western Cape province, but also to communities of staff and students internal to UCT, as well as international partners. This is the connection between the Higher Education Health Collaborative and the aspirations and goals of the University of Cape Town.`
},
  },

  {
    name: "University of Toronto",
    contact: {
      website: "http://example.com",
      contactPerson: { name: "Meric Gertler", description: "President", email: "info@ashesi.edu.gh" },
    },
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/Screen-Shot-2023-12-15-at-11.12.19-AM-copy-1320x743.jpg",
       "https://africahealthcollaborative.org/wp-content/uploads/2023/10/53280631297_b42fa2212a_c.jpg",
      "https://africahealthcollaborative.org/wp-content/uploads/2023/10/53280631927_63c404eb21_c.jpg",
    "https://africahealthcollaborative.org/wp-content/uploads/2023/10/53280635947_7cff168611_c.jpg",
  "https://africahealthcollaborative.org/wp-content/uploads/2023/10/53280639182_11f2a62b2e_c.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/53280639722_acddcb2c13_c-1.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/53280639872_f9b9abc936_c.jpg",
"https://africahealthcollaborative.org/wp-content/uploads/2023/10/53280641332_26d33b74c0_c-1.jpg"],
    website: "http://example.com",
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-uoft.svg",
    description: {
      descriptionTitle:"Founded in 1827, the University of Toronto is ranked consistently among the world’s best universities for research, teaching and innovation. The 2024 Times Higher Education World University Rankings place the University of Toronto first in Canada, 21st globally and third among North American public universities. U of T was also named the world’s most sustainable university in the 2024 QS World University Rankings.",
      description: `With campuses in Mississauga, Scarborough, and Toronto, U of T has more than 90,000 students and 16,000 faculty. U of T has remarkable strengths in disciplines that span the humanities, social sciences, sciences, and the professions and offers more than 700 academic programs at the undergraduate level. The university is also a powerhouse for innovation, with 11 accelerators and incubators. A recent benchmark study by UBI Global placed U of T among the world’s top five university-managed business incubators.

The University of Toronto serves as the Secretariat for the Africa Health Collaborative, a network of eight African Partner Institutions, the University of Toronto, and the Mastercard Foundation.`
},
    scholars: [
      { name: "Scholar J1", description: "Expert in field J1", image: "scholar_j1.png", eduLavel: "" },
      { name: "Scholar J2", description: "Expert in field J2", image: "scholar_j2.png", eduLavel: "" },
    ],
  },
];