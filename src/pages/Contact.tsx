import { Helmet } from "react-helmet-async";
import SectionHeader from "../components/ui/SectionHeader";
import { useGetCompanyInfoQuery } from "../features/settings/companyInfoApi";

export default function Contact() {
  const { data: companyInfo } = useGetCompanyInfoQuery();

  return (
    <div style={{ backgroundColor: 'rgb(255, 253, 246)' }}><div className="container py-12 md:py-16">
      <Helmet>
        <title>Contact – AHC</title>
        <meta
          name="description"
          content="Get in touch with the Africa Health Collaborative (AHC) at Addis Ababa University. We're here to answer your questions and provide support for our health initiatives across Africa."
        />
        <meta
          name="keywords"
          content="Contact AHC, Africa Health Collaborative Contact, AHC Support, Health Initiatives Africa, Addis Ababa University Contact"
        />
        <meta name="author" content="Africa Health Collaborative" />
        <meta
          property="og:title"
          content="Contact AHC – Africa Health Collaborative"
        />
        <meta
          property="og:description"
          content="Get in touch with the Africa Health Collaborative (AHC) at Addis Ababa University. We're here to answer your questions and provide support for our health initiatives across Africa."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ahc.tewostechsolutions.com/contact"
        />
        <meta
          property="og:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact AHC – Africa Health Collaborative"
        />
        <meta
          name="twitter:description"
          content="Get in touch with the Africa Health Collaborative (AHC) at Addis Ababa University. We're here to answer your questions and provide support for our health initiatives across Africa."
        />
        <meta
          name="twitter:image"
          content="https://ahc.tewostechsolutions.com/images/logo_dark.png"
        />
      </Helmet>
      <SectionHeader eyebrow="Get in touch" title="Contact Us" />
      <div className="grid gap-12 md:grid-cols-3 items-start">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="font-display text-xl font-bold mb-2">Address</h3>
            <p className="text-slate-600 dark:text-slate-300">
              {companyInfo?.company_address || 'Addis Ababa University, Ethiopia'}
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="font-display text-xl font-bold mb-2">Email</h3>
            <a
              className="text-ahc-green-dark hover:underline"
              href={`mailto:${companyInfo?.company_email || 'info@aau.edu.et'}`}
            >
              {companyInfo?.company_email || 'info@aau.edu.et'}
            </a>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="font-display text-xl font-bold mb-2">Phone</h3>
            <p className="text-slate-600 dark:text-slate-300">
              {companyInfo?.company_phone || '+251 000 000 000'}
            </p>
          </div>
        </div>
        <div className="md:col-span-2">
          <form className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-slate-300">
                  First name
                </label>
                <input
                  className="w-full border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-md px-4 py-3 focus:ring-ahc-green focus:border-ahc-green transition-colors"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 dark:text-slate-300">
                  Last name
                </label>
                <input
                  className="w-full border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-md px-4 py-3 focus:ring-ahc-green focus:border-ahc-green transition-colors"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                className="w-full border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-md px-4 py-3 focus:ring-ahc-green focus:border-ahc-green transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-slate-300">
                Message
              </label>
              <textarea
                className="w-full border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-md px-4 py-3"
                rows={6}
                placeholder="How can we help?"
              />
            </div>
            <button
              type="button"
              className="btn bg-ahc-green hover:bg-ahc-green-dark text-white font-semibold rounded-full px-8 py-3 transition-colors w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
