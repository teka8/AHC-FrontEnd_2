import { useParams, Link } from "react-router-dom";
import { partners } from "../data/partners";
import { localPartners } from "../data/localPartners";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useGetPublicPostsQuery } from "../features/posts/postsApi";
import dayjs from "dayjs";

export function PartnerDetail() {
  const { name } = useParams<{ name: string }>();

  // Combine partners and localPartners arrays for searching
  const allPartners = [...partners, ...localPartners];

  const partner = allPartners.find(
    (p: any) =>
      p.name.replace(/\s+/g, "").toLowerCase() ===
      name?.replace(/\s+/g, "").toLowerCase()
  );

  // Check if this is a local partner (university) that should show news
  const isLocalPartner = localPartners.some(
    (p) => p.name.replace(/\s+/g, "").toLowerCase() === name?.replace(/\s+/g, "").toLowerCase()
  );

  // Fetch news for this university if it's a local partner
  const { data: newsData, isLoading: newsLoading } = useGetPublicPostsQuery(
    isLocalPartner && partner ? { category: partner.name, perPage: 6, postType: "news" } : undefined,
    { skip: !isLocalPartner || !partner }
  );
  const universityNews = newsData?.data ?? [];

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
    <div
      id="content"
      className="bg-slate-50 dark:bg-ahc-dark min-h-screen py-12 pt-24 px-4 md:px-8 lg:px-16"
    >
      <Helmet>
        <title>{partner.name} – Africa Health Collaborative</title>
        <meta
          name="description"
          content={`Learn more about ${partner.name}, a valued partner of the Africa Health Collaborative (AHC). Discover our collaborative efforts to strengthen primary healthcare across Africa and empower youth in the health sector.`}
        />
        <meta
          name="keywords"
          content={`AHC Partner, ${partner.name}, Africa Health Collaborative Partners, Health Collaborations Africa, Addis Ababa University Partners, AHC Partnerships, African Health Collaborations`}
        />
        <meta name="author" content="Africa Health Collaborative" />
        <meta property="og:title" content={`${partner.name} – AHC Partner`} />
        <meta
          property="og:description"
          content={`Learn more about ${partner.name}, a valued partner of the Africa Health Collaborative (AHC). Discover our collaborative efforts to strengthen primary healthcare across Africa and empower youth in the health sector.`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://ahc.tewostechsolutions.com/partners/${partner.name
            .replace(/\s+/g, "")
            .toLowerCase()}`}
        />
        <meta
          property="og:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${partner.name} – AHC Partner`} />
        <meta
          name="twitter:description"
          content={`Learn more about ${partner.name}, a valued partner of the Africa Health Collaborative (AHC). Discover our collaborative efforts to strengthen primary healthcare across Africa and empower youth in the health sector.`}
        />
        <meta
          name="twitter:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
      </Helmet>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto mb-10">
        <div className="flex-1">
          <h1 className="font-black text-4xl md:text-5xl text-gray-900 mb-6">
            {partner.name}
          </h1>
        </div>

        {/* ✅ Main Gallery Image with Logo Overlay */}
        {partner.galery?.[0] && (
          <div className="relative w-full md:w-1/2 lg:w-2/3">
            <img
              src={partner.galery[0]}
              alt={`${partner.name} gallery`}
              className="rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 w-full h-[400px] object-cover"
            />
            {partner.logo && (
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="absolute bottom-4 right-4 w-28 h-20 rounded-xl shadow-xl bg-white dark:bg-slate-900 p-2 object-contain"
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

          {/* University News Section */}
          {isLocalPartner && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Latest News from {partner.name}
              </h2>
              {newsLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-ahc-green mx-auto"></div>
                  <p className="mt-2 text-gray-500">Loading news...</p>
                </div>
              ) : universityNews.length === 0 ? (
                <div className="text-center py-8 bg-gray-50 dark:bg-slate-800 rounded-lg">
                  <p className="text-gray-500 dark:text-gray-400">
                    No news available for {partner.name} at this time.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {universityNews.map((news: any) => {
                    const firstImgMatch = (news.content ?? "").match(
                      /<img[^>]+src=["']([^"']+)["']/i
                    );
                    const galleryFirst =
                      news.gallery && Array.isArray(news.gallery) && news.gallery.length > 0
                        ? news.gallery[0].original || news.gallery[0].url
                        : "";
                    const imgUrl =
                      news.featured_image ||
                      galleryFirst ||
                      (firstImgMatch ? firstImgMatch[1] : "");

                    return (
                      <Link
                        key={news.id}
                        to={`/news/${news.id}`}
                        className="group bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                      >
                        {imgUrl ? (
                          <img
                            src={imgUrl}
                            alt={news.title}
                            className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                            <span className="text-slate-400">No Image</span>
                          </div>
                        )}
                        <div className="p-4">
                          {news.published_at && (
                            <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              {dayjs(news.published_at).format("MMM DD, YYYY")}
                            </div>
                          )}
                          <h3 className="mt-2 text-lg font-bold font-display group-hover:text-ahc-green-dark transition-colors line-clamp-2">
                            {news.title}
                          </h3>
                          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                            {news.excerpt ??
                              (news.content ?? "")
                                .replace(/<[^>]+>/g, "")
                                .slice(0, 100)}
                          </p>
                          <span className="mt-3 inline-block text-sm font-medium text-ahc-green-dark group-hover:underline">
                            Read more →
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
              {universityNews.length > 0 && (
                <div className="mt-6 text-center">
                  <Link
                    to={`/news?category=${encodeURIComponent(partner.name)}`}
                    className="inline-flex items-center px-6 py-3 bg-ahc-green text-white font-semibold rounded-lg hover:bg-ahc-green-dark transition-colors"
                  >
                    View All {partner.name} News →
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-ahc-dark-secondary border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-8 md:min-w-[300px] lg:min-w-[350px] h-fit">
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
                className="bg-ahc-green text-white hover:bg-ahc-green-darker font-semibold py-2 px-4 rounded-lg text-center transition"
              >
                🌐 Website
              </a>
            )}

            {partner.contact?.contactPerson?.email && (
              <a
                href={`mailto:${partner.contact.contactPerson.email}`}
                className="bg-ahc-blue text-white hover:bg-ahc-blue-darker font-semibold py-2 px-4 rounded-lg text-center transition"
              >
                ✉️ Contact Us
              </a>
            )}
          </div>
          <Link
            to=""
            className="text-lg font-semibold text-ahc-green hover:text-ahc-green-dark dark:text-ahc-green-light dark:hover:text-white transition-colors"
          >
            Submit Revisions
          </Link>
        </div>
      </div>
    </div>
  );
}
