import { Helmet } from 'react-helmet-async'
import { Users, Target, Heart, Globe, Award, TrendingUp } from 'lucide-react'

export default function HIAbout() {
  const teamMembers = [
    { name: 'Dr. Sarah Johnson', role: 'Founder & CEO', description: '20+ years in healthcare innovation' },
    { name: 'Michael Chen', role: 'Chief Investment Officer', description: 'Former VP at leading health fund' },
    { name: 'Dr. Emily Rodriguez', role: 'Head of Programs', description: 'PhD in Public Health' },
    { name: 'David Kim', role: 'Director of Operations', description: 'Healthcare consultant' },
  ]

  const values = [
    { icon: <Heart className="h-12 w-12 text-ahc-green" />, title: 'Patient-Centered', description: 'Every innovation must improve patient outcomes' },
    { icon: <Globe className="h-12 w-12 text-ahc-green" />, title: 'Global Impact', description: 'Healthcare solutions that transcend borders' },
    { icon: <Award className="h-12 w-12 text-ahc-green" />, title: 'Excellence', description: 'Supporting only the highest quality ventures' },
    { icon: <Users className="h-12 w-12 text-ahc-green" />, title: 'Collaboration', description: 'Building a supportive ecosystem together' },
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Health Innovation & Entrepreneurship</title>
        <meta name="description" content="Learn about our mission to empower health innovation" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-ahc-green to-green-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About HealthVentures</h1>
              <p className="text-xl opacity-90">
                Pioneering the future of healthcare through strategic investment, 
                innovation support, and ecosystem development since 2015.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-ahc-green" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  To accelerate breakthrough healthcare innovations that address the world's 
                  most pressing health challenges by providing capital, expertise, and a 
                  supportive ecosystem for visionary entrepreneurs.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-8 w-8 text-ahc-green" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  A world where every promising healthcare innovation has the resources and 
                  support needed to reach patients, creating a healthier, more equitable 
                  future for all communities globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-ahc-green transition p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-ahc-green transition">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ahc-green to-green-600 mx-auto mb-4"></div>
                  <h3 className="text-lg font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-ahc-green text-center mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-gradient-to-r from-ahc-green to-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: '9+', label: 'Years of Impact' },
                { value: '150+', label: 'Ventures Supported' },
                { value: '$50M+', label: 'Capital Deployed' },
                { value: '45+', label: 'Countries Reached' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
