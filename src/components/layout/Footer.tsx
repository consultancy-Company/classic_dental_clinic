import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Calendar, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button'

const Footer = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-color)' }}>
      {/* Call to Action Section */}
      <div
        className="w-full py-20 text-white relative"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--primary-color)/90, var(--secondary-color)/80)' }} />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Transform Your Smile Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-gray-200">
            Experience world-class dental care with our team of experts. Schedule your visit now and take the first step towards your perfect smile.
          </p>
          <button
            className="flex items-center gap-2 mx-auto px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 button-hover-effect"
            style={{
              backgroundColor: 'var(--primary-button-bg)',
              color: 'var(--button-text-color)',
              // ':hover' pseudo-class is moved to CSS
            }}
          >
            Book Appointment
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <footer style={{ backgroundColor: 'var(--secondary-color)' }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">DentalCare Plus</h3>
              <p style={{ color: 'var(--tertiary-color)' }} className="mb-6">
                Leading the way in modern dentistry with compassionate care and cutting-edge technology.
              </p>
              <div className="space-y-4">
                <a href="tel:+251911123456" className="flex items-center gap-3 hover:text-white transition-colors" style={{ color: 'var(--tertiary-color)' }}>
                  <Phone className="w-5 h-5" style={{ color: 'var(--tertiary-color)' }} />
                  +251 911 123 456
                </a>
                <a href="mailto:info@dentalcare.com" className="flex items-center gap-3 hover:text-white transition-colors" style={{ color: 'var(--tertiary-color)' }}>
                  <Mail className="w-5 h-5" style={{ color: 'var(--tertiary-color)' }} />
                  info@dentalcare.com
                </a>
                <div className="flex items-center gap-3" style={{ color: 'var(--tertiary-color)' }}>
                  <MapPin className="w-5 h-5" style={{ color: 'var(--tertiary-color)' }} />
                  Addis Ababa, Ethiopia
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {[
                  'General Dentistry',
                  'Cosmetic Dentistry',
                  'Orthodontics',
                  'Dental Implants',
                  'Teeth Whitening',
                  'Oral Surgery'
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="flex items-center gap-2 transition-colors" style={{ color: 'var(--tertiary-color)' }}>
                      <ChevronRight className="w-4 h-4" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Opening Hours</h3>
              <ul className="space-y-3">
                {[
                  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
                  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
                  { day: 'Sunday', hours: 'Closed' }
                ].map((schedule) => (
                  <li key={schedule.day} style={{ color: 'var(--tertiary-color)' }}>
                    <span className="flex justify-between">
                      <span>{schedule.day}</span>
                      <span style={{ color: 'var(--category-4-color)' }}>{schedule.hours}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
              <p style={{ color: 'var(--tertiary-color)' }} className="mb-4">
                Subscribe to our newsletter for dental health tips and updates.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none"
                  style={{
                    backgroundColor: 'var(--card-bg-color)',
                    borderColor: 'var(--tertiary-color)',
                    color: 'var(--primary-text-color)'
                  }}
                />
                <button
                  className="w-full py-2 rounded-lg transition-colors"
                  style={{
                    backgroundColor: 'var(--primary-button-bg)',
                    color: 'var(--button-text-color)',
                    ':hover': {
                      backgroundColor: 'var(--primary-button-hover-bg)'
                    }
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12 pt-8" style={{ borderTopColor: 'var(--tertiary-color)', borderTopWidth: '1px' }}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div style={{ color: 'var(--tertiary-color)' }}>
                © {new Date().getFullYear()} DentalCare Plus. All rights reserved.
              </div>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: '#' },
                  { Icon: Instagram, href: '#' },
                  { Icon: Twitter, href: '#' }
                ].map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="p-2 rounded-full transition-colors"
                    style={{
                      backgroundColor: 'var(--tertiary-color)',
                      ':hover': {
                        backgroundColor: 'var(--primary-button-bg)'
                      }
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
