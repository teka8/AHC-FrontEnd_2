import { Helmet } from 'react-helmet-async';
import { Briefcase, Zap, Heart, Users, Target, ArrowRight, BookOpenCheck, Globe } from 'lucide-react';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us – Africa Health Collaborative</title>
      </Helmet>
      <div className="bg-white dark:bg-ahc-dark">

        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[calc(100dvh-3.5rem)] md:min-h-[calc(100dvh-4rem)]">
          <div className="h-full flex flex-col">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-ahc-green/15 to-transparent" />

            {/* Africa outline watermark  */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/images/africa-map.png"
                alt="Africa map"
                className="h-[110%] w-auto object-cover dark:opacity-5 opacity-10"
                style={{
                  animation: "float 8s ease-in-out infinite",
                  filter: "brightness(1.5)",
                }}
              />
            </div>

            {/* Content Section */}
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 md:pt-12 md:pb-20 grid gap-6 md:grid-cols-1 items-start flex-grow text-center">
              <div className="text-center">
                <div className="text-xs sm:text-sm tracking-wider uppercase text-ahc-green font-semibold mb-2 sm:mb-3">
                  Africa Health Collaborative
                </div>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-display text-ahc-dark dark:text-white"
                >
                  Innovate. Collaborate. Heal.
                </h1>
                <p className="mt-4 sm:mt-6 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
                  The Africa Health Collaborative is a catalyst for change, uniting passion and expertise to build a healthier, more equitable future for all Africans.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="/contact"
                    className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors"
                  >
                    Get Involved
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 bg-slate-100 dark:bg-slate-900"
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                Founded on the belief that collaborative action can solve systemic health challenges, the Africa Health Collaborative (AHC) was born from a partnership between leading health experts, technologists, and the Mastercard Foundation.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                From our inception, we have focused on identifying and scaling innovative solutions that are locally-driven and sustainable. Our journey is one of partnership, perseverance, and a relentless pursuit of a future where every African has access to quality healthcare.
              </p>
              <a href="#" className="inline-flex items-center font-semibold text-ahc-green hover:text-ahc-green-dark dark:text-ahc-green-light dark:hover:text-white transition-colors">
                Explore Our Timeline <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
            <div className="relative h-80 md:h-96">
              <img src="/public/images/africa-map.png" alt="Our collaborative network across Africa" className="rounded-lg shadow-2xl object-contain w-full h-full"/>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 md:py-24 bg-white dark:bg-ahc-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white text-center mb-12">What We Do</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-ahc-green-light dark:bg-ahc-green-dark text-ahc-green-dark dark:text-white mb-6">
                  <BookOpenCheck className="w-8 h-8" />
                </div>
                <h3 className="font-bold font-display text-xl mb-3 text-slate-900 dark:text-white">Health Innovation & Entrepreneurship</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">We foster a vibrant ecosystem for health innovation, supporting startups and entrepreneurs to develop scalable solutions for Africa's health challenges.</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-ahc-blue-light dark:bg-ahc-blue-dark text-ahc-blue-dark dark:text-white mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="font-bold font-display text-xl mb-3 text-slate-900 dark:text-white">Capacity Building & Education</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">We empower the next generation of health leaders through comprehensive training programs, mentorship, and scholarship opportunities.</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-ahc-green-light dark:bg-ahc-green-dark text-ahc-green-dark dark:text-white mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="font-bold font-display text-xl mb-3 text-slate-900 dark:text-white">Strategic Partnerships & Advocacy</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">We forge strong alliances with governments, NGOs, and private sector entities to drive policy change and amplify our collective impact across the continent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section
          className="py-16 md:py-24 bg-gradient-to-br from-ahc-blue-light to-ahc-green/20 dark:from-ahc-blue-dark dark:to-ahc-green/40 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-ahc-green-light dark:bg-ahc-green-dark">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20l9-5-9-5-9 5 9 5z" />
                    <path d="M12 12l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-ahc-dark dark:text-white">Our Mission</h3>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                To catalyze a vibrant, tech-enabled health ecosystem in Africa that fosters local innovation, empowers a new generation of health leaders, and ensures equitable access to quality care for all.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center p-3 rounded-full bg-ahc-blue-light dark:bg-ahc-blue-dark">
                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold font-display text-ahc-dark dark:text-white">Our Vision</h3>
              </div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                An Africa where innovation drives a resilient and people-centered health system, creating a healthy and prosperous future for generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section
          className="py-24 bg-slate-100 dark:bg-slate-900 text-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-12">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <Heart className="w-12 h-12 text-ahc-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ahc-dark dark:text-white">Empathy</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">We are driven by the needs of the communities we serve, ensuring our solutions are relevant and impactful.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <Zap className="w-12 h-12 text-ahc-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ahc-dark dark:text-white">Innovation</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">We champion creative and sustainable approaches to health challenges, embracing new technologies and ideas.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <Users className="w-12 h-12 text-ahc-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ahc-dark dark:text-white">Collaboration</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">We believe in the power of partnership, fostering strong relationships to amplify our collective impact.</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <Briefcase className="w-12 h-12 text-ahc-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ahc-dark dark:text-white">Integrity</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2">We operate with transparency, accountability, and ethical conduct in all our endeavors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section
          className="py-24 text-center"
        >
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-4">Meet Our Leadership</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-16">
              Our diverse team of experts brings together a wealth of experience in health, technology, and social impact, united by a shared passion for our mission. Get to know the individuals driving our vision forward.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img src="https://i.pravatar.cc/150?img=1" alt="Dr. Aisha Adebayo" className="rounded-full object-cover w-full h-full shadow-lg" />
                </div>
                <h3 className="text-xl font-bold text-ahc-dark dark:text-white">Dr. Aisha Adebayo</h3>
                <p className="text-ahc-green dark:text-ahc-green-light">Executive Director</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img src="https://i.pravatar.cc/150?img=2" alt="Kwame Nkrumah Jr." className="rounded-full object-cover w-full h-full shadow-lg" />
                </div>
                <h3 className="text-xl font-bold text-ahc-dark dark:text-white">Kwame Nkrumah Jr.</h3>
                <p className="text-ahc-green dark:text-ahc-green-light">Director of Innovation</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img src="https://i.pravatar.cc/150?img=3" alt="Nia Wanjiru" className="rounded-full object-cover w-full h-full shadow-lg" />
                </div>
                <h3 className="text-xl font-bold text-ahc-dark dark:text-white">Nia Wanjiru</h3>
                <p className="text-ahc-green dark:text-ahc-green-light">Head of Partnerships</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-1">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img src="https://i.pravatar.cc/150?img=4" alt="Femi Adeboye" className="rounded-full object-cover w-full h-full shadow-lg" />
                </div>
                <h3 className="text-xl font-bold text-ahc-dark dark:text-white">Femi Adeboye</h3>
                <p className="text-ahc-green dark:text-ahc-green-light">Technology Lead</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section
          className="py-16 md:py-24 bg-slate-100 dark:bg-slate-900"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-12">Our Impact at a Glance</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Heart className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">1M+</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Lives Impacted</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Briefcase className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">50+</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Ventures Supported</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Target className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">15</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Countries Reached</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Users className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">100+</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Partnerships Formed</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow transform hover:-translate-y-1 flex flex-col items-center justify-center">
                <Zap className="w-12 h-12 text-ahc-green-dark dark:text-white mb-4" />
                <p className="font-display text-5xl font-bold text-ahc-dark dark:text-white">20+</p>
                <p className="mt-2 text-slate-600 dark:text-slate-300">Innovations Deployed</p>
              </div>
            </div>
          </div>
        </section>


        {/* Testimonials Section */}
        <section className="py-24 bg-white dark:bg-ahc-dark">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white text-center mb-12">Voices of Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-6">
                  "The Africa Health Collaborative has been instrumental in transforming healthcare delivery in our region. Their support and innovative approach are truly commendable."
                </p>
                <div className="flex items-center">
                  <img src="https://i.pravatar.cc/150?img=5" alt="Testimonial 1" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-ahc-dark dark:text-white">Dr. Amina Yusuf</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Health Minister, Ghana</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-6">
                  "Being part of AHC's scholarship program changed my life. I'm now equipped to make a real difference in my community."
                </p>
                <div className="flex items-center">
                  <img src="https://i.pravatar.cc/150?img=6" alt="Testimonial 2" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-ahc-dark dark:text-white">Kwesi Boateng</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">AHC Scholar, Kenya</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-xl shadow-lg">
                <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-6">
                  "AHC's collaborative model is exactly what Africa needs. Their focus on local solutions is inspiring and effective."
                </p>
                <div className="flex items-center">
                  <img src="https://i.pravatar.cc/150?img=7" alt="Testimonial 3" className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold text-ahc-dark dark:text-white">Prof. Naledi Mokoena</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">University of Cape Town</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-32 text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-4">Join Our Mission</h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-8">
              Whether you are a student, an innovator, a potential partner, or simply passionate about health equity in Africa, there is a place for you at AHC.
            </p>
            <a href="/contact" className="bg-ahc-green text-white py-2 px-4 rounded-md hover:bg-ahc-green-darker transition-colors">
              Get Involved
            </a>
          </div>
        </section>

      </div>
    </>
  );
}