import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Jayesh Patil',
    role: 'CEO, Lirante',
    rating: 5.0,
    text: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.',
    image: '/api/placeholder/40/40'
  },
  {
    id: 2,
    name: 'Jayesh Patil',
    role: 'CEO, Lirante',
    rating: 5.0,
    text: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.',
    image: '/api/placeholder/40/40'
  }
]

const TestimonialsSection = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-8xl">
            Testimonials That
            <br />
            Speak to <span className="font-pxl">MY RESULTS</span>
          </h2>
          <p className="mx-auto max-w-2xl text-blue-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl bg-blue-500/30 p-8 backdrop-blur-sm"
            >
              <div className="absolute right-[10%] mb-4 text-9xl text-blue-300">
                &quot;
              </div>
              <div className="mb-4 flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-black"></div>
                <div>
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-blue-200">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-white">{testimonial.rating}</span>
              </div>
              <p className="text-blue-100">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection
