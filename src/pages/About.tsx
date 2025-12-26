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
import { getImageWithFallback } from "../utils/imageUtils";

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
      <div>
        <CollaborationSection />

        <section className="py-12 md:py-16 animate-page bg-slate-50 dark:bg-slate-800">
          <div className="container">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-ahc-dark dark:text-white mb-6">
                Advancing Primary Health Care in Ethiopia & Africa
            </h2>
            <div className="grid gap-12 md:grid-cols-2 items-center">

              <div>
                  <div className="prose max-w-none dark:prose-invert">

                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                      Africa Health Collaborative (AHC) is one of the flagship programs to transform primary healthcare service in Africa, in partnership with the Mastercard Foundation. The Collaborative is designed  within the plan of “preparing diverse young people, 
                      for the meaningful work of transforming health and well-being in Africa 
                      through contextually appropriate, equitable and sustainable primary healthcare”. 
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      The AHC is a multi-stakeholder partnership dedicated to transforming primary health care (PHC) systems across Africa. It brings together eight African higher education institutions 
                      (AAU-Ethiopia; African Institute for Mathematical Sciences (AIMS)-Rwanda; African Leadership University (ALU)-Rwanda; Amref International University (AMIU)- Kenya; Ashesi University-Ghana; Kwame Nkrumah University of Science and Technology (KNUST)-Ghana; MOi University- Kenya; University of Cape Town (UCT)-South Africa); and the University of Toronto (U of T)-Canada, in partnership with the Mastercard Foundation. Through a networked, cross-border approach,
                      AHC enables collaboration across institutions and sectors
                        to collectively address the continent’s most pressing health-sector challenges.
                    </p>

                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      As part of the Collaborative, Africa Health Collaborative -Addis Ababa University (AHC-AAU) was formally launched on February 25, 
                      2025 to advance health-sector transformation in Ethiopia. The Collaborative operates with three strategic pillars: 
                      Health Employment (HEMP), Health Entrepreneurship (HENT), and Health Ecosystem (HECO).
                    </p>
                  </div>
              </div>

              <div>
                <img
                  {...getImageWithFallback('images/about/_DSC1096.jpg')}
                  alt="Our collaborative network across Africa"
                  className="rounded-lg shadow-2xl object-contain w-full h-full"
                />
              </div>
            </div>
            <div className="prose max-w-none dark:prose-invert mt-6">
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                The three pillars work to drive meaningful change in primary healthcare by creating pathways that are relevant, equitable, and sustainable for Ethiopian and African youth. 
                The Collaborative strategic objectives have been cascaded down through engagement of local implementing partners such as Wollo, Wolkite, and Debre Berhan Universities. 
                In addition, Woldia University will participate in some of the Collaborative activities, for example, through the AHC-AAU faculty Scholarship Scheme, and regional faculty exchange programs.
                </p>
            </div>
            
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                {...getImageWithFallback('images/partners/photo_2025-11-15_11-19-13.jpg')}
                alt="Our collaborative network across Africa"
                className="rounded-lg shadow-2xl object-contain w-full h-full"
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
                to="/valuesandprinciples"
                className="inline-flex items-center font-semibold text-ahc-green hover:text-ahc-green-dark dark:text-ahc-green-light dark:hover:text-white transition-colors"
              >
                Vision, Goals, Values and Principles of Partnership{" "}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-800">
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
            <div>
              <img
                {...getImageWithFallback('images/about/DSC01888 (1).jpg')}
                alt="Our collaborative network across Africa"
                className="rounded-lg shadow-2xl object-contain w-full h-full"
              />
            </div>
          </div>
        </section>
        {/* Our Values Section */}
        <section className="py-12 md:py-16 bg-white dark:bg-slate-900 text-center">
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

        {/* Our Impact at a Glance Section */}
        <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-12">
              Our Impact at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <Globe className="w-12 h-12 text-ahc-green dark:text-ahc-green-light mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-ahc-dark dark:text-white mb-2">
                  Our Reach 12+ Universities
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A growing network of institutions across Ethiopia and Africa.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <BookOpenCheck className="w-12 h-12 text-ahc-blue dark:text-ahc-blue-light mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-ahc-dark dark:text-white mb-2">
                  80 Scholars
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A comprehensive and integrated scholarship delivery model.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <Users className="w-12 h-12 text-ahc-green dark:text-ahc-green-light mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-ahc-dark dark:text-white mb-2">
                  Health Entrepreneur Community
                </h3>
                <p className="text-sm font-semibold text-ahc-green dark:text-ahc-green-light mb-2">
                  National/Regional
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  A vibrant community of health professionals, financial sector and educators.
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <Target className="w-12 h-12 text-ahc-blue dark:text-ahc-blue-light mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-ahc-dark dark:text-white mb-2">
                  Impact
                </h3>
                <p className="text-sm font-semibold text-ahc-blue dark:text-ahc-blue-light mb-2">
                  National/Pan-African
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Driving positive change in health education across the continent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-12 md:py-16 text-center bg-white dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-4">
              Join Our Mission
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-8">
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
