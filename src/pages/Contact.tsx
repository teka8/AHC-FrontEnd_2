import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/ui/SectionHeader'

export default function Contact() {
  return (
    <div className="container py-10">
      <Helmet><title>Contact – AHC</title></Helmet>
      <SectionHeader eyebrow="Get in touch" title="Contact Us" />
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-1 space-y-4">
          <div className="card p-5">
            <h3 className="font-semibold mb-1">Address</h3>
            <p className="text-sm text-slate-600">Addis Ababa University, Ethiopia</p>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold mb-1">Email</h3>
            <a className="text-sm text-ahc-green" href="mailto:info@aau.edu.et">info@aau.edu.et</a>
          </div>
          <div className="card p-5">
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-sm text-slate-600">+251 000 000 000</p>
          </div>
        </div>
        <div className="md:col-span-2">
          <form className="card p-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm mb-1">First name</label>
                <input className="w-full border rounded-md px-3 py-2" placeholder="First name" />
              </div>
              <div>
                <label className="block text-sm mb-1">Last name</label>
                <input className="w-full border rounded-md px-3 py-2" placeholder="Last name" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full border rounded-md px-3 py-2" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea className="w-full border rounded-md px-3 py-2" rows={6} placeholder="How can we help?" />
            </div>
            <button type="button" className="btn w-full md:w-auto">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
