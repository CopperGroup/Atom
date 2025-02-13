import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=200&width=200",
    quote: "I lost 20 pounds in 3 months with the personal training sessions!",
    rating: 5,
  },
  {
    name: "Mike Thompson",
    image: "/placeholder.svg?height=200&width=200",
    quote: "The group workouts have transformed my fitness level and social life!",
    rating: 5,
  },
  {
    name: "Emily Davis",
    image: "/placeholder.svg?height=200&width=200",
    quote: "Yoga classes at ATOM have improved my flexibility and reduced my stress.",
    rating: 4,
  },
  {
    name: "John Smith",
    image: "/placeholder.svg?height=200&width=200",
    quote:
      "The trainers at ATOM are top-notch. They've helped me achieve my fitness goals faster than I thought possible.",
    rating: 5,
  },
  {
    name: "Lisa Brown",
    image: "/placeholder.svg?height=200&width=200",
    quote: "I've tried many gyms, but ATOM's community and facilities are unmatched. It's become my second home!",
    rating: 5,
  },
  {
    name: "Alex Rodriguez",
    image: "/placeholder.svg?height=200&width=200",
    quote: "The variety of classes keeps me motivated. I've never been this consistent with my workouts before.",
    rating: 4,
  },
]

export default function Testimonials() {
  return (
    <div className="py-16 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Success <span className="text-red-600">Stories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48">
                <Image
                  src={"/hero-image.png"}
                  alt={testimonial.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">&quot;{testimonial.quote}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Decorative elements */}
    </div>
  )
}

