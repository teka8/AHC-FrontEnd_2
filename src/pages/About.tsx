import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Zap,
  Heart,
  Users,
  Target,
  ArrowRight,
  BookOpenCheck,
  Globe,
} from "lucide-react";
import React from "react";
import CollaborationSection from "../components/CollaborationSection";
import Hero from "../components/about/Hero";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us – Africa Health Collaborative</title>
        <meta
          name="description"
          content="Learn more about the Africa Health Collaborative (AHC), our mission to strengthen primary healthcare across Africa by empowering youth, and our partnership with Addis Ababa University in Ethiopia."
        />
        <meta
          name="keywords"
          content="Africa Health Collaborative, AHC, primary healthcare, youth empowerment, Addis Ababa University, Ethiopia, health transformation, collaboration, health systems, Africa health initiatives, health ecosystem, health inovation, health employment"
        />
        <meta name="author" content="Africa Health Collaborative" />
        <link rel="canonical" href="https://ahc.tewostechsolutions.com/about" />
        <meta
          property="og:title"
          content="About Us – Africa Health Collaborative"
        />
        <meta
          property="og:description"
          content="Learn more about the Africa Health Collaborative (AHC), our mission to strengthen primary healthcare across Africa by empowering youth, and our partnership with Addis Ababa University in Ethiopia."
        />
        <meta
          property="og:url"
          content="https://ahc.tewostechsolutions.com/about"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us – Africa Health Collaborative"
        />
        <meta
          name="twitter:description"
          content="Learn more about the Africa Health Collaborative (AHC), our mission to strengthen primary healthcare across Africa by empowering youth, and our partnership with Addis Ababa University in Ethiopia."
        />
        <meta
          name="twitter:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
      </Helmet>
      <Hero />
      <div className="bg-white dark:bg-ahc-dark">
        <CollaborationSection />

        <section className="py-12 md:py-16 bg-[#FFF9E9] dark:bg-ahc-dark">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-6">
                Driven by Collaboration, Focused on Health Transformation
              </h2>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ahc-dark dark:text-white mb-6">
                Transforming Primary Healthcare in Africa
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                The Africa Health Collaborative (AHC) is a transformative
                initiative launched in partnership with Mastercard Foundation to
                reimagine and strengthen Primary Health Care systems across. The
                Collaborative works to build equitable, contextually relevant,
                and sustainable health systems inspired by a unified commitment
                to develop a new generation of diverse youth capable of
                advancing health and well-being throughout Africa.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                The Africa Health Collaborative – Addis Ababa University
                (AHC–AAU) serves as Ethiopia’s hub within collaboration of nine
                universities. It engages a constellation of local implementing
                partners Wollo University, Debre Berhan University, and Wolkite
                University. Together, these institutions are working to equip
                youth, particularly women, with the skills, resources, and
                innovative mindset needed to transform Ethiopia’s health sector
                from the ground up.
              </p>
              {/* <p className="text-slate-600 dark:text-slate-300 mb-6">
                The Africa Health Collaborative features a networked approach
                that allows the partners to reach across borders and sectoral
                divisions to collectively address health sector challenges in
                the African context. We leverage the power of institutions as
                sites of knowledge exchange, community collaboration, and
                nexuses for cross-sector partnerships.
              </p> */}
            </div>
            <div className="relative h-80 md:h-96">
              <img
                src="/images/collaborative-network.jpg"
                alt="Our collaborative network across Africa"
                className="rounded-lg shadow-2xl object-fill w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 md:py-16 dark:bg-slate-900" style={{backgroundColor: 'rgb(255, 253, 246)'}}>
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 md:h-96">
              <img
                src="/images/partners/photo_2025-11-15_11-19-13.jpg"
                alt="Our collaborative network across Africa"
                className="rounded-lg shadow-2xl object-fill w-full h-full"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ahc-dark dark:text-white mb-6">
                Our Value of <span className="text-ahc-green">Partnership</span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                Together, through core partners and strategic alliances of
                ecosystem partners (corporations, government ministries,
                industry, NGOs, and healthcare providers), we amplify our
                potential and transform healthcare landscapes.
              </p>
              <Link
                to="/vision-goals-values"
                className="inline-flex items-center font-semibold text-ahc-green hover:text-ahc-green-dark dark:text-ahc-green-light dark:hover:text-white transition-colors"
              >
                Vision, Goals, Values and Principles of Partnership{" "}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[#FFF9E9] dark:bg-ahc-dark">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ahc-dark dark:text-white mb-6">
                Goals and Methods
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                Born from a commitment to fostering inclusive, sustainable, and
                impactful health-focused initiatives, the Health Collaborative
                represents a fusion of bright minds and leading institutions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                With over 80 comprehensive training programs for healthcare
                professionals, our collaborative efforts extend to
                groundbreaking research and cultivating a vibrant network of
                emerging young professionals. We champion local, indigenous
                solutions to confronting Africa’s primary health care and global
                health challenges. Our vision is bold, our programs are diverse
                but united to foster transformative change in health systems in
                Africa.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Together, we are committed to and partnership invested in
                co-creating diverse programs and initiatives paving the way
                designed to foster innovative and sustainable health solutions
                and growth in Africa’s health sector.
              </p>
            </div>
            <div className="relative h-80 md:h-96">
              <img
                src="/images/partners/photo_2025-11-15_11-31-55.jpg"
                alt="Our collaborative network across Africa"
                className="rounded-lg shadow-2xl object-fill w-full h-full"
              />
            </div>
          </div>
        </section>
        <section></section>
        
        {/* Our Values Section */}
        <section className="py-12 md:py-16 dark:bg-ahc-dark text-center" style={{backgroundColor: 'rgb(255, 253, 246)'}}>
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-12">
              Our Core Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <Heart className="w-12 h-12 text-ahc-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ahc-dark dark:text-white">
                  Empathy
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  We are driven by the needs of the communities we serve,
                  ensuring our solutions are relevant and impactful.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <Zap className="w-12 h-12 text-ahc-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ahc-dark dark:text-white">
                  Innovation
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  We champion creative and sustainable approaches to health
                  challenges, embracing new technologies and ideas.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <Users className="w-12 h-12 text-ahc-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ahc-dark dark:text-white">
                  Collaboration
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  We believe in the power of partnership, fostering strong
                  relationships to amplify our collective impact.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <Briefcase className="w-12 h-12 text-ahc-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ahc-dark dark:text-white">
                  Integrity
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  We operate with transparency, accountability, and ethical
                  conduct in all our endeavors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        {/* <section className="py-24 text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-4">
              Meet Our Leadership
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-16">
              Our diverse team of experts brings together a wealth of experience
              in health, technology, and social impact, united by a shared
              passion for our mission. Get to know the individuals driving our
              vision forward.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Dr. Aisha Adebayo"
                    className="rounded-full object-cover w-full h-full shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-ahc-dark dark:text-white">
                  Dr. Aisha Adebayo
                </h3>
                <p className="text-ahc-green dark:text-ahc-green-light">
                  Executive Director
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=2"
                    alt="Kwame Nkrumah Jr."
                    className="rounded-full object-cover w-full h-full shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-ahc-dark dark:text-white">
                  Kwame Nkrumah Jr.
                </h3>
                <p className="text-ahc-green dark:text-ahc-green-light">
                  Director of Innovation
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Nia Wanjiru"
                    className="rounded-full object-cover w-full h-full shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-ahc-dark dark:text-white">
                  Nia Wanjiru
                </h3>
                <p className="text-ahc-green dark:text-ahc-green-light">
                  Head of Partnerships
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src="https://i.pravatar.cc/150?img=4"
                    alt="Femi Adeboye"
                    className="rounded-full object-cover w-full h-full shadow-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-ahc-dark dark:text-white">
                  Femi Adeboye
                </h3>
                <p className="text-ahc-green dark:text-ahc-green-light">
                  Technology Lead
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Impact Section */}
        <section className="py-12 md:py-16 dark:bg-slate-900" style={{backgroundColor: 'rgb(255, 253, 246)'}}>
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-12">
              Our Impact at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Heart className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">
                  1M+
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Lives Impacted
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Briefcase className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">
                  50+
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Ventures Supported
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Target className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">
                  15
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Countries Reached
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Users className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">
                  100+
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Partnerships Formed
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Zap className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">
                  20+
                </p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Innovations Deployed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-12 md:py-16 text-center bg-[#FFF9E9]">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-4">
              Join Our Mission
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-8">
              Whether you are a student, an innovator, a potential partner, or
              simply passionate about health equity in Africa, there is a place
              for you at AHC.
            </p>
            <a
              href="/contact"
              className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors"
            >
              Get Involved
            </a>
          </div>
        </section>

        {/* <section className="py-16 md:py-24 bg-white dark:bg-ahc-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-12">
              Governance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <h3 className="font-bold font-display text-xl mb-3 text-slate-900 dark:text-white">
                  Pillar Advisory Committee (PAC)
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our governance structure is strengthened by an Executive
                  Steering Committee, supported by dedicated Advisory Committees
                  for each of our three core program pillars.
                </p>
                <a
                  href="https://africahealthcollaborative.org/about-us/ahehc-pillar-advisory-committee-pac/"
                  className="inline-flex items-center font-semibold text-ahc-green hover:text-ahc-green-dark dark:text-ahc-green-light dark:hover:text-white transition-colors mt-4"
                >
                  Learn more about PAC <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <h3 className="font-bold font-display text-xl mb-3 text-slate-900 dark:text-white">
                  Governance – Executive Steering Committee (ESC)
                </h3>
                <a
                  href="https://africahealthcollaborative.org/about-us/executive-steering-committee-esc/"
                  className="inline-flex items-center font-semibold text-ahc-green hover:text-ahc-green-dark dark:text-ahc-green-light dark:hover:text-white transition-colors mt-4"
                >
                  Learn more about ESC <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
