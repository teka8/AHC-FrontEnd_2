export type Partner = {
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
      descriptionTitle: "",
      description: `<p>Addis Ababa University stands as Ethiopia’s oldest and largest university founded in 1950 as the University College of Addis Ababa (UCAA).In 1961, the University College became Haile Selassie I University. After the Ethiopian Revolution in 1975, the name was changed to Addis Ababa University (AAU). Throughout its history, AAU has shaped Ethiopia’s academic landscape by introducing major academic programs across disciples in both undergraduate and postgraduate programs, leading national and regional research initiatives, and providing divers community services and academic innovations.</p>
<p>From the inaugural intake of 33 students in 1950, the number of students has now reached 34,286 (22,593 undergraduate, 9,660 Master’s, and 2,033 PhD students). The dramatic rise in students number led to a corresponding growth to 8,709 employees (3,110 academics, 3,673 admin support staff, and 1,253 health professionals). The University runs 66 undergraduate and 350 graduate programs (115 PhD and 180 Masters, 3 Subspecialty, and 23 Specialty certificate courses in Health Sciences) on its 14 campuses. The University now has 10 colleges, 3 institutes that run both teaching and research, and 8 research institutes that predominantly conduct research (<a href="https://www.aau.edu.et/aau-at-a-glance" target="_blank" rel="noopener noreferrer" style="color: #059669; text-decoration: underline; font-weight: 600;">https://www.aau.edu.et/aau-at-a-glance</a>).
AAU is granted institutional autonomy on August 4, 2023.</p>
<h3 style="padding-bottom: 0; margin-bottom: 0; color: #059669">Mission</h3>
<p style="padding-top: 0; margin-top: -10px">To pursue transformative education, cutting-edge research and innovation, and impactful services and engagement in advancing socio-economic, cultural, and technological needs and interests.</p>
<h3 style="padding-bottom: 0; margin-bottom: 0; color: #059669">Vision</h3>
<p style="padding-top: 0; margin-top: -10px">To become a leading research university in Africa, to advance national needs and be responsive to global development.</p>
`
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
      description: `AIMS is a pan-African network of centers of excellence dedicated to advanced training, research, and public engagement in mathematical sciences. Since 2003, AIMS has trained over 3,000 master’s graduates from 45 countries, with a strong focus on Science, Technology Engineering, Mathematics, innovation, and interdisciplinary problem-solving. With centers across Africa and a record of high-impact research, AIMS plays a pivotal role in strengthening scientific capacity on the continent.`
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
    galery: ["https://africahealthcollaborative.org/wp-content/uploads/2023/10/IMG_8926-1320x880.jpg", "https://africahealthcollaborative.org/wp-content/uploads/2023/11/Ikaze-24-edited-2048x1280.jpg"],
    website: "http://example.com",
    logo: "https://africahealthcollaborative.org/wp-content/uploads/2023/10/logo-alu.svg",
    description: {
      descriptionTitle: "Higher Education for a higher purpose: We believe that young people hold the potential to become the ethical, entrepreneurial leaders our continent and planet need.",
      description: "ALU is a visionary institution committed to developing ethical, entrepreneurial African leaders. Through its “Missions, not Majors” approach, ALU equips students to tackle real-world challenges, including health-related missions, through immersive learning, mentorship, and global internships. With over 41 nationalities represented, ALU cultivates innovative thinkers who are prepared to drive meaningful change across the continent."
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
      description: `AMIU, established in 2017, is a premier Pan-African university specializing in health sciences and grounded in Amref Health Africa’s 60 years of experience in community health. Built on decades of training health workers across Africa, AMIU focuses on developing leaders who shape health policy, regulation, and legislation. The university’s strong roots in community health make it a key contributor to strengthening Africa’s health workforce.`
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
      descriptionTitle: "Ashesi University Foundation was founded by Dr. Patrick Awuah, and spearheaded (till date) by a well-qualified Board of Trustees whose efforts are complemented by Advisory Boards located in the US and Ghana.",
      description: `Ashesi University, founded in 2002 in Ghana, is globally recognized for its commitment to ethical leadership, innovation, and problem-solving. With rigorous academic programs and a student-led honor code, Ashesi prepares students to address Africa’s complex challenges. Nearly half of its students are women or scholarship recipients, reflecting its dedication to inclusion and excellence. Ashesi is one of Africa’s most respected universities and a strong partner in advancing leadership within the health sector.`,
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
      descriptionTitle: "Kwame Nkrumah University of Science and Technology (KNUST) was established in 1951 as Kumasi College of Technology. It was officially opened on January 22, 1952 with 200 teacher training students transferred from Achimota College. In October 1952, the School of Engineering and the Department of Commerce were established.",
      description: `Established in 1951, KNUST is one of Africa’s leading centers for science, and technology education. The university has grown into a major institution offering diverse programs across engineering, health sciences, and commerce. With a strong legacy of innovation and technical training, KNUST contributes valuable expertise to strengthening health systems and workforce development.`
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
      descriptionTitle: "The Mastercard Foundation is a registered Canadian charity and one of the largest foundations in the world.",
      description: "The Mastercard Foundation is one of the world’s largest charitable organizations, committed to enabling young people in Africa and Indigenous youth in Canada to access dignified work through education and financial inclusion. With offices across Africa and a strong focus on systems change, the Foundation supports transformative initiatives like the Africa Health Collaborative, fostering innovation, leadership, and opportunity at scale."
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
      descriptionTitle: "Moi University was founded in 1984 by an act of parliament (Moi University Act, 1984) as the second public University in Kenya and is one of the top ranked public universities in Kenya.",
      description: "Founded in 1984, Moi University is one of Kenya’s top public universities, serving nearly 40,000 students across multiple campuses and programs. Its School of Public Health is known for strong academic and research capacity within the College of Health Sciences. As an Africa Health Collaborative partner institution, Moi University contributes extensive experience in public health training and multidisciplinary education."
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
      descriptionTitle: "The University of Cape Town is a community of exceptionally talented students, teachers and researchers – and a wide range of professional, administrative support and service staff – all of whom are committed to help change this world for the better.",
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
      descriptionTitle: "Founded in 1827, the University of Toronto is ranked consistently among the world’s best universities for research, teaching and innovation. The 2024 Times Higher Education World University Rankings place the University of Toronto first in Canada, 21st globally and third among North American public universities. U of T was also named the world’s most sustainable university in the 2024 QS World University Rankings.",
      description: `The University of Toronto, founded in 1827, is one of the world’s leading institutions in research, teaching, and innovation. Ranked first in Canada and among the top universities globally, U of T is also recognized as the world’s most sustainable university (QS 2024). The University of Toronto serves as the Secretariat for the Africa Health Collaborative, a network of eight African Partner Institutions, the University of Toronto and the Mastercard Foundation. `
    },
    scholars: [
      { name: "Scholar J1", description: "Expert in field J1", image: "scholar_j1.png", eduLavel: "" },
      { name: "Scholar J2", description: "Expert in field J2", image: "scholar_j2.png", eduLavel: "" },
    ],
  },
];