import { Link } from 'react-router-dom'
import { Activity, Mail, MapPin, Phone } from 'lucide-react'

export default function HIFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-slate-700 dark:border-slate-800 mt-20 overflow-hidden">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 via-green-400 to-teal-500"></div>
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large AHC Symbol - Left */}
        <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-64 h-64 opacity-5">
          <img 
            src="/images/ahc-health-symbol.png" 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Large AHC Symbol - Right */}
        <div className="absolute -right-24 bottom-0 w-72 h-72 opacity-5">
          <img 
            src="/images/ahc-health-symbol.png" 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Decorative Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Section with Symbol */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              {/* AHC Symbol Logo */}
              <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-2xl border border-white/20">
                  <img 
                    src="/images/ahc-health-symbol.png" 
                    alt="AHC Health Symbol" 
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>
              
              <div>
                <Link to="/health-pillars/health-entrepreneurship" className="flex items-center space-x-2 text-white font-bold text-2xl group">
                    <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">HealthVentures</span>
                </Link>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                  Empowering health innovation and entrepreneurship across Africa through collaborative partnerships.
                </p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@healthventures.africa" className="hover:underline">info@healthventures.africa</a>
              </div>
              <div className="flex items-center gap-3 hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group" aria-label="Twitter">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.7.4-1.6.8-2.5 1-1.4-1.5-3.8-1.5-5.2 0-1 1-1.3 2.4-.9 3.7-3-.1-5.7-1.6-7.5-3.9-1 1.9-.5 4.2 1.2 5.5-.6 0-1.2-.2-1.7-.5 0 2.1 1.5 3.9 3.5 4.3-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.2-1.6 1.3-3.6 2-5.7 2-.4 0-.8 0-1.2-.1 2 1.3 4.5 2 7.1 2 8.5 0 13.2-7.2 13.2-13.5v-.6c.9-.7 1.6-1.4 2.1-2.3z"/></svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group" aria-label="Facebook">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.1C22 6.6 17.5 2.2 12 2.2S2 6.6 2 12.1c0 5 3.7 9.1 8.5 9.8v-6.9H8V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12H16l-.4 3H13.7v6.9c4.8-.7 8.5-4.8 8.5-9.8z"/></svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group" aria-label="LinkedIn">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.6 4.06 5.5 3 5.5S1.02 4.6 1.02 3.5 1.94 1.5 3 1.5s1.98.9 1.98 2zM1.5 8.5h3V22h-3V8.5zM8.5 8.5h2.9v1.8h.1c.4-.7 1.4-1.8 3.1-1.8 3.3 0 3.9 2.2 3.9 5V22h-3v-5.3c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V22h-3V8.5z"/></svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-teal-500/20 hover:border-teal-500/50 transition-all duration-300 group" aria-label="Instagram">
                <svg className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2m-.2 2C5.6 4 4 5.6 4 7.6v8.8C4 18.4 5.6 20 7.6 20h8.8c2 0 3.6-1.6 3.6-3.6V7.6C20 5.6 18.4 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 011.25 1.25A1.25 1.25 0 0117.25 8 1.25 1.25 0 0116 6.75a1.25 1.25 0 011.25-1.25M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5m0 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3z"/></svg>
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg relative inline-block">
              Programs
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-green-400"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/health-pillars/health-entrepreneurship/programs" className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center group">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Our Programs
              </Link></li>
              <li><Link to="/health-pillars/health-entrepreneurship/ventures" className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center group">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Venture Showcase
              </Link></li>
              {/* <li><Link to="/health-pillars/health-entrepreneurship/updates" className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center group">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Progress Updates
              </Link></li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-green-400"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/health-pillars/health-entrepreneurship/services" className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center group">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Open Innovation
              </Link></li>
              <li><Link to="/health-pillars/health-entrepreneurship/services" className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center group">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Accelerators
              </Link></li>
              <li><Link to="/health-pillars/health-entrepreneurship/services" className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center group">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Consulting
              </Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-green-400"></span>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/health-pillars/health-entrepreneurship/about" className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center group">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </Link></li>
              <li><Link to="/health-pillars/health-entrepreneurship/blog" className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center group">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Blog
              </Link></li>
              <li><Link to="/health-pillars/health-entrepreneurship/contact" className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center group">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Africa Health Collaborative.</p>
            <span className="hidden sm:inline">•</span>
            <p className="hidden sm:inline">All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/health-pillars/health-entrepreneurship/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/health-pillars/health-entrepreneurship/terms" className="hover:text-teal-400 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
