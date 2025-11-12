import { useParams, Link } from "react-router-dom";
import { partners } from "../data/partners";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

export function PartnerDetail() {
  const { name } = useParams<{ name: string }>();

  const partner = partners.find(
    (p: any) =>
      p.name.replace(/\s+/g, "").toLowerCase() ===
      name?.replace(/\s+/g, "").toLowerCase()
  );

  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const galleryImages = partner?.galery.filter((img: string) => img) || [];

  if (!partner) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Partner not found</h1>
        <Link to="/partners" className="text-blue-600 underline mt-4 block">
          ← Back to Partners
        </Link>
      </div>
    );
  }

  return (
    <div id="content" className="bg-yellow-50 min-h-screen py-12 px-6 md:px-16">
      
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto mb-10">
        <div className="flex-1">
          <h1 className="font-black text-4xl md:text-5xl text-gray-900 mb-6">
            {partner.name}
          </h1>
        </div>

        {/* ✅ Main Gallery Image with Logo Overlay */}
        {partner.galery?.[0] && (
          <div className="relative w-[600px]">
            <img
              src={partner.galery[0]}
              alt={`${partner.name} gallery`}
              className="rounded-xl shadow-md bg-white p-3 w-full h-[400px] object-cover"
            />
            {partner.logo && (
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="absolute bottom-4 right-4 w-28 h-20 rounded-xl shadow-lg bg-white p-2 object-contain"
              />
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        <div className="flex-1">
          {partner.description?.descriptionTitle && (
            <h3 className="font-bold text-2xl mb-4 text-gray-800">
              {partner.description.descriptionTitle}
            </h3>
          )}
          <h2 className="text-gray-700 leading-relaxed mb-8 whitespace-pre-line">
            {partner.description?.description}
          </h2>

          {/* ✅ New Gallery Slider under description and above scholars */}
          {galleryImages.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Gallery</h2>

              {/* Arrow buttons above image, aligned to right */}
              {galleryImages.length > 1 && (
                <div className="flex items-center justify-end space-x-4 mb-4 mr-6">
                  {/* Left Arrow */}
                  <button
                    onClick={() =>
                      setCurrentGalleryIndex(
                        currentGalleryIndex === 0
                          ? galleryImages.length - 1
                          : currentGalleryIndex - 1
                      )
                    }
                    aria-label="Previous image"
                    className="w-14 h-14 flex items-center justify-center bg-black rounded-full shadow-md hover:opacity-90 transition"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 5L8 12L16 19Z" />
                    </svg>
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={() =>
                      setCurrentGalleryIndex(
                        currentGalleryIndex === galleryImages.length - 1
                          ? 0
                          : currentGalleryIndex + 1
                      )
                    }
                    aria-label="Next image"
                    className="w-14 h-14 flex items-center justify-center bg-black rounded-full shadow-md hover:opacity-90 transition"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5L16 12L8 19Z" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Image */}
              <div className="relative w-full max-w-4xl mx-auto">
                <img
                  src={galleryImages[currentGalleryIndex]}
                  alt={`Gallery ${currentGalleryIndex + 1}`}
                  className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
                />
              </div>
            </div>
          )}

          {/* ✅ Scholars Section (image enlarged) */}
          {partner.scholars && partner.scholars.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Scholars
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {partner.scholars.map((sch: any, idx: number) => (
                  <div
                    key={idx}
                    className="border border-gray-200 bg-white p-4 rounded-lg shadow-sm flex gap-6 items-center"
                  >
                    {sch.image && (
                      <img
                        src={sch.image}
                        alt={sch.name}
                        className="h-40 w-40 rounded-full object-cover shadow-md"
                      />
                    )}
                    <div>
                      <p className="font-semibold text-gray-800">{sch.name}</p>
                      <p className="text-sm text-gray-600">{sch.eduLavel}</p>
                      <p className="text-sm text-gray-600">{sch.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-10 min-w-[450px] md:w-80 h-fit">
          <p className="text-gray-900 mb-1 text-3xl font-bold">
            Learn about the Partner
          </p>
          <p className="text-gray-600 mb-4 text-2xl">Stay informed</p>

          <div className="flex gap-3 mb-4">
            {partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg text-center transition"
              >
                🌐 Website
              </a>
            )}

            {partner.contact?.contactPerson?.email && (
              <a
                href={`mailto:${partner.contact.contactPerson.email}`}
                className="bg-black text-white hover:bg-gray-800 font-semibold py-2 px-4 rounded-lg text-center transition"
              >
                ✉️ Contact Us
              </a>
            )}
          </div>
          <Link to="" className="text-2xl font-bold hover:border-b-4 hover:border-black border-b-yellow-400 border-b-4">
            Submit Revisions
          </Link>
        </div>
      </div>
    </div>
  );
}
