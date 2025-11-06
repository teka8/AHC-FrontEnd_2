
import React from 'react';

interface Partner {
  name: string;
  logo: string;
  url?: string;
}

const partners: Partner[] = [
    {
      name: "Addis Ababa University",
      logo: "/images/partners/addis-ababa-university.png",
      url: "https://africahealthcollaborative.org/partner/addis-ababa-university/",
    },
    {
      name: "AIMS",
      logo: "/images/partners/aims.png",
    },
    {
      name: "African Leadership University",
      logo: "/images/partners/alu.png",
      url: "https://africahealthcollaborative.org/partner/african-leadership-university/",
    },
    {
      name: "Amref International University / Amref Health Africa",
      logo: "/images/partners/amref.png",
      url: "https://africahealthcollaborative.org/partner/amref-international-university-amref-heath-africa/",
    },
    {
      name: "Ashesi University",
      logo: "/images/partners/ashesi-university.png",
      url: "https://africahealthcollaborative.org/partner/ashesi-university/",
    },
    {
      name: "Kwame Nkrumah University of Science and Technology",
      logo: "/images/partners/knust.png",
      url: "https://africahealthcollaborative.org/partner/kwame-nkrumah-university-of-science-and-technology/",
    },
    {
      name: "Mastercard Foundation",
      logo: "/images/partners/mastercard-foundation.png",
      url: "https://africahealthcollaborative.org/partner/mastercard-foundation/",
    },
    {
      name: "Moi University",
      logo: "/images/partners/moi-university.png",
      url: "https://africahealthcollaborative.org/partner/moi-university/",
    },
    {
      name: "University of Cape Town",
      logo: "/images/partners/uct.png",
      url: "https://africahealthcollaborative.org/partner/university-of-cape-town/",
    },
    {
      name: "University of Toronto",
      logo: "/images/partners/utoronto.png",
      url: "https://africahealthcollaborative.org/partner/university-of-toronto/",
    }
  ];

const CollaborationSection: React.FC = () => {
  const renderPartnerLogo = (partner: Partner) => {
    const image = (
      <img
        src={partner.logo}
        alt={partner.name}
        className="h-16 object-contain transition duration-300 ease-in-out transform group-hover:scale-110"
      />
    );

    return (
      <a href={partner.url} key={partner.name} className="group block p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        {image}
      </a>
    );
  };

  return (
    <section className="py-24 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-ahc-dark-secondary rounded-xl shadow-2xl p-8 md:p-12 lg:p-16">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ahc-dark dark:text-white mb-4">Driven by Collaboration, Focused on Health Transformation</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              The Health Collaborative is a transformative network of 9 higher education institutions and the Mastercard Foundation. We value and invite like-minded partners who share the same mission.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {partners.map(partner => (
                 <div key={partner.name} className="flex justify-center">
                    <img src={partner.logo} alt={partner.name} className="h-12 md:h-16 object-contain" />
                 </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
