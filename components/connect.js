import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Card } from '@/components/ui/card'

const ContactForm = () => {
  return (
    <div className="min-h-screen py-16 pt-2 text-center xl:text-start">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Connect With Us
          </h1>
          <p className="max-w-2xl text-blue-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

        <Card className="rounded-[32px] border-0 bg-blue-500/20 p-12 backdrop-blur-sm">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-medium text-white">
                Contact Information
              </h2>

              <div className="mb-12 space-y-6">
                <p className="text-blue-100">contact@sanatcreatives.com</p>
                <p className="text-blue-100">
                  6B Tulwari Tower 3rd Floor, Central Avenue,
                  <br />
                  GandhiPatla, tiwari, Nagpur 440002,
                  <br />
                  India.
                </p>
              </div>

              <div className="flex gap-6">
                <FaTwitter className="h-6 w-6 cursor-pointer text-blue-100 hover:text-white" />
                <FaInstagram className="h-6 w-6 cursor-pointer text-blue-100 hover:text-white" />
                <FaLinkedin className="h-6 w-6 cursor-pointer text-blue-100 hover:text-white" />
              </div>
            </div>

            <form className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border-b border-blue-200 bg-transparent py-2 text-white placeholder-blue-200 transition-colors focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border-b border-blue-200 bg-transparent py-2 text-white placeholder-blue-200 transition-colors focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-blue-200 bg-transparent py-2 text-white placeholder-blue-200 transition-colors focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border-b border-blue-200 bg-transparent py-2 text-white placeholder-blue-200 transition-colors focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  'Consultation',
                  'Join theCommunity',
                  'Promotion',
                  'Invitation'
                ].map((option) => (
                  <label
                    key={option}
                    className="inline-flex items-center text-blue-100"
                  >
                    <input
                      type="radio"
                      name="subject"
                      value={option}
                      className="mr-2 text-white focus:ring-white"
                    />
                    {option}
                  </label>
                ))}
              </div>

              <div>
                <textarea
                  placeholder="Write your message.."
                  rows={4}
                  className="w-full resize-none border-b border-blue-200 bg-transparent py-2 text-white placeholder-blue-200 transition-colors focus:border-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-8 py-3 text-white transition-colors hover:bg-blue-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default ContactForm
