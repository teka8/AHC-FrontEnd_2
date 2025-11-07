import React from 'react';
import { Carousel } from '../../components/ui/Carousel';
import ProgramCard from '../../components/cards/ProgramCard';
import ResearchCard from '../../components/cards/ResearchCard';
import NewsCard from '../../components/cards/NewsCard';

const programs = [
  {
    id: 1,
    title: 'IMIx Certificate of Effective Healthcare Management',
    university: 'Institute for Management & Innovation, University of Toronto, University of Toronto Mississauga',
    country: 'Canada',
    description: '',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Introduction to Africa Health Public Policy',
    university: 'Ashesi University, University of Toronto, University of Toronto Mississauga, University of Toronto Scarborough',
    country: 'Canada, Ghana',
    description: '',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Master of Biotechnology',
    university: 'Institute for Management & Innovation, Mastercard Foundation Scholars Program, University of Toronto',
    country: 'Canada',
    description: '',
    status: 'Active',
  },
];

const research = [
  {
    id: 1,
    title: 'Needs Assessment Research Study',
    countries: [],
    description: '',
    link: 'https://africahealthcollaborative.org/research/needs-assessment-research-study/',
  },
];

const news = [
  {
    id: 1,
    title: 'Building Community-Led Health Futures in Cape Town',
    slug: 'building-community-led-health-futures-in-cape-town',
    excerpt: 'Learn about how the University of Cape Town is partnering with communities in South Africa to co-create health solutions for better health outcomes',
    content: '',
  },
  {
    id: 2,
    title: '2026-2027 Graduate Scholarships Open at the University of Toronto',
    slug: '2026-2027-graduate-scholarships-open-at-the-university-of-toronto',
    excerpt: 'We are pleased to announce the start of the 2026-2027 Mastercard Foundation graduate scholarship recruitment at the University of Toronto. This scholarship opportunity is open to recent alumni and graduating students at our Africa Health Collaborative partner universities. These graduate scholarships will be awarded to those individuals who have demonstrated academic excellence in the associated health-related […]',
    content: '',
  },
  {
    id: 3,
    title: 'Candidate Nominations for the ALU Public Sector Fellowship Program',
    slug: 'candidate-nominations-for-the-alu-public-sector-fellowship-program',
    excerpt: 'African Leadership University (ALU) is thrilled to share an exceptional opportunity for public sector leaders championing sexual and reproductive health and rights (SRHR) projects. The ALU Public Sector Fellowship, now entering its third year, is a dynamic, 8-month, part-time program designed to empower leaders with essential skills to elevate service delivery and tackle Africa’s pressing […]',
    content: '',
  },
];

export default function HealthEcosystem() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/pillars/health-ecosystem-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Enabling the growth and transformation of Africa’s health sector</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold">Health Ecosystems (HECO)</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Health Ecosystems Pillar enables students and professionals to acquire advanced skills in a broad range of disciplines critical for sustainable health sector growth and transformation in Africa.
          </p>
        </div>
      </section>

      {/* Impact of Ecosystems on Africa Section */}
      <section className="py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 p-4">
            <img src="/images/pillars/impact-of-ecosystems.jpg" alt="Impact of Ecosystems on Africa" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-3xl font-bold text-ahc-blue mb-4">Impact of Ecosystems on Africa</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              To enhance the stability and growth of African health sectors, HECO focuses on increasing the number of primary healthcare workers with stable employment by assembling essential building blocks for these sectors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The purpose of the Health Ecosystems Pillar is to train and prepare a new generation of talented health professionals with the broad sets of skills required to drive equitable and inclusive growth in Africa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Health Collaborative develops these building blocks to ensure that there are always sufficient numbers of highly skilled, work-ready graduates across a spectrum of disciplines responding to Africa’s needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Programs under the Health Ecosystem Pillar are tailored to equip young leaders with the perspective, skills, training, and credentials essential for developing innovative, sustainable, and equitable health sectors.
            </p>
          </div>
        </div>
      </section>

      {/* The Power of Partnership Section */}
      <section className="py-12">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-ahc-blue mb-4">The Power of Partnership</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-ahc-green-dark mb-2">Our Goal</h3>
              <p className="text-gray-700 leading-relaxed">
                Train professionals across a broad range of disciplines critical for sustainable and equitable health-sector growth.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-ahc-green-dark mb-2">How HECO and Partners work together</h3>
              <p className="text-gray-700 leading-relaxed">
                Under the Health Ecosystems Pillar, Health Collaborative Partners work to co-create and train a new generation of talented health professionals with advanced skills required to drive equitable and inclusive growth in Africa.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="/images/pillars/power-of-partnership-heco.jpg" alt="The Power of Partnership" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Explore HECO Activities Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-ahc-blue mb-8">Explore HECO Activities</h2>

          {/* Programs Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-ahc-green-dark mb-4">Programs</h3>
            <Carousel>
              {programs.map((program) => (
                <ProgramCard key={program.id} item={program} />
              ))}
            </Carousel>
            <a href="https://africahealthcollaborative.org/programs/?pillar=heco&program_status=completed" className="text-ahc-blue hover:underline">View All Programs</a>
          </div>

          {/* Research & Innovation Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-ahc-green-dark mb-4">Research & Innovation</h3>
            <Carousel>
              {research.map((item) => (
                <ResearchCard key={item.id} item={item} />
              ))}
            </Carousel>
            <a href="https://africahealthcollaborative.org/research-and-innovation/?pillar=heco" className="text-ahc-blue hover:underline">View All Research</a>
          </div>

          {/* News & Events Carousel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-ahc-green-dark mb-4">News & Events</h3>
            <Carousel>
              {news.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </Carousel>
            <a href="https://africahealthcollaborative.org/news-events/?pillar=heco" className="text-ahc-blue hover:underline">View All Posts</a>
          </div>
        </div>
      </section>

      {/* Contact Person Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-ahc-blue mb-8">Want to learn more about the HECO pillar?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <img src="/images/pillars/tak-koguchi.jpg" alt="Photo of Tak Koguchi" className="w-48 h-48 rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Tak Koguchi</h3>
              <p className="text-gray-600">Senior Regional Lead</p>
              <a href="mailto:tak.koguchi@utoronto.ca" className="text-ahc-blue hover:underline">tak.koguchi@utoronto.ca</a>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/pillars/suying-hugh.jpg" alt="Photo of Suying Hugh" className="w-48 h-48 rounded-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Suying Hugh, EdD</h3>
              <p className="text-gray-600">Program Manager, Mastercard Foundation</p>
              <a href="mailto:suying.hugh@utoronto.ca" className="text-ahc-blue hover:underline">suying.hugh@utoronto.ca</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}