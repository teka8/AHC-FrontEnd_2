import React from 'react';

export default function HealthEmployment() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <section className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/health-employment-hero.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Enhancing the skilled healthcare workforce in Africa</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold">Health Employment (HEMP)</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            The Health Employment Pillar builds the capacity and skills of primary health care workers to meet growing demand and to contribute to the extension of health systems that employ and retain this primary care workforce.
          </p>
        </div>
      </section>

      {/* Impact of Employment on Africa Section */}
      <section className="py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
          <div className="md:w-1/2 p-4">
            <img src="/images/impact-of-employment.jpg" alt="Impact of Employment on Africa" className="rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="text-3xl font-bold text-ahc-blue mb-4">Impact of Employment on Africa</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Health Employment Pillar (HEMP) addresses the chronic mismatch between the demand for healthcare and the supply of a skilled health workforce in Africa, aiming to bridge this crucial gap.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the HEMP pillar, our university partners initially identify critical skills gaps within national health systems, subsequently developing and delivering bespoke academic and professional training for primary healthcare workers and health professionals.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The inclusion of community health workers in these capacity-building programs remains a key strategy for supporting improved health delivery services at all levels. A focal point of HEMP is enhancing the leadership capacities of women in the health and public health sectors, thereby addressing gender inequities in Africa’s health human resources.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The diverse array of programs collaboratively created and implemented under HEMP plays a crucial role in cultivating an empowered and proficient health workforce, pivotal for responsive and efficient health systems.
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
                Expand capacity to train primary health care workers to meet growing demand.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-ahc-green-dark mb-2">How HEMP and Partners work together</h3>
              <p className="text-gray-700 leading-relaxed">
                Under the Health Employment Pillar, Health Collaborative Partners co-create medical residencies, and academic and professional programs, leveraging a ‘Train the Trainers’ (ToT) approach to significantly expand the number of skilled primary healthcare professionals.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            <img src="/images/power-of-partnership.jpg" alt="The Power of Partnership" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Explore HEMP Activities Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-ahc-blue mb-8">Explore HEMP Activities</h2>
          {/* Programs Carousel - Placeholder */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-ahc-green-dark mb-4">Programs</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Placeholder for Programs Carousel</p>
              <a href="https://africahealthcollaborative.org/programs/?pillar=hemp&program_status=completed" className="text-ahc-blue hover:underline">View All Programs</a>
            </div>
          </div>

          {/* Research & Innovation Carousel - Placeholder */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-ahc-green-dark mb-4">Research & Innovation</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Placeholder for Research & Innovation Carousel</p>
              <a href="https://africahealthcollaborative.org/research-and-innovation/?pillar=hemp" className="text-ahc-blue hover:underline">View All Research</a>
            </div>
          </div>

          {/* News & Events Carousel - Placeholder */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-ahc-green-dark mb-4">News & Events</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600">Placeholder for News & Events Carousel</p>
              <a href="https://africahealthcollaborative.org/news-events/?pillar=hemp" className="text-ahc-blue hover:underline">View All Posts</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Person Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-ahc-blue mb-8">Want to learn more about the HEMP pillar?</h2>
          <div className="flex flex-col items-center">
            <img src="/images/jesusmiracle-chiadika.jpeg" alt="Photo of JesusMiracle Chiadika" className="w-48 h-48 rounded-full object-cover mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">JesusMiracle Chiadika, M.Ed., PhD Candidate</h3>
            <p className="text-gray-600">Regional Lead (Health Employment), International Research Officer</p>
            <a href="mailto:jesusmiracle.chiadika@utoronto.ca" className="text-ahc-blue hover:underline">jesusmiracle.chiadika@utoronto.ca</a>
          </div>
        </div>
      </section>
    </div>
  );
}