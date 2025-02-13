import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Users, Zap, Dumbbell, Users2, SpaceIcon as Yoga, Bike, Droplet } from "lucide-react"
import InfiniteScroll from "@/components/landing/InfiniteScroll"
import Testimonials from "@/components/landing/Testimonials"
import CallToAction from "@/components/landing/CallToAction"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-black">
            <span className="text-red-600">A</span>TOM
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#classes" className="text-gray-600 hover:text-black transition-colors">
              Classes
            </Link>
            <Link href="#trainers" className="text-gray-600 hover:text-black transition-colors">
              Trainers
            </Link>
            <Link href="#membership" className="text-gray-600 hover:text-black transition-colors">
              Membership
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">
              Contact
            </Link>
          </nav>
          <Link
            href="#join-now"
            className="hidden md:inline-flex items-center justify-center bg-red-600 text-white font-bold py-2 px-4 rounded-full text-sm transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Join Now
          </Link>
          {/* Mobile menu button (you'd need to implement the mobile menu functionality) */}
          <button className="md:hidden text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      <div className=""> 
      {/* Hero Section */}
      <div className="h-screen flex-grow flex items-center relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left side content */}
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter">
                <span className="text-red-600 text-[1.5em] leading-none">A</span>
                <span className="text-black">TOM</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0">Elevate Your Fitness Journey</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="#join-now"
                  className="inline-flex items-center justify-center bg-red-600 text-white font-bold py-2 px-5 rounded-full text-base transition-all hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring:red-500 focus:ring-opacity-50"
                >
                  Join Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#learn-more"
                  className="inline-flex items-center justify-center bg-white text-black font-bold py-2 px-5 rounded-full text-base border-2 border-black transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right side image */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                <Image
                  src="/hero-image.png"
                  alt="Athlete in action"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Decorative elements for hero section */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Partners Infinite Scroll */}
      <div className="bg-black py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <InfiniteScroll />
        </div>
        {/* Decorative elements for partners section */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bounce animation-delay-500"></div>
      </div>

      {/* About Us / Our Mission */}
      <div className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl font-bold text-black">
                About Us / <span className="text-red-600">Our Mission</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-red-100 rounded-full">
                      <Target className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our History</h3>
                    <p className="text-gray-600">
                      Founded in 2010, ATOM Gym has been at the forefront of fitness innovation for over a decade. Our
                      state-of-the-art facilities and expert trainers are dedicated to helping you achieve your fitness
                      goals, whatever they may be.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-red-100 rounded-full">
                      <Zap className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What Sets Us Apart</h3>
                    <p className="text-gray-600">
                      What sets us apart is our commitment to personalized training programs, cutting-edge equipment,
                      and a strong sense of community. At ATOM, you're not just a member – you're part of a family
                      dedicated to health and wellness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-red-100 rounded-full">
                      <Users className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      Our mission is simple: to empower individuals to transform their lives through fitness, fostering
                      a community of strength, health, and positivity. We believe in the power of consistent effort,
                      supportive relationships, and innovative training methods to help you become the best version of
                      yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/hero-image.png"
                  alt="ATOM Gym Interior"
                  width={400}
                  height={400}
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services / Offerings */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="text-red-600">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dumbbell,
                title: "Personal Training",
                description: "One-on-one sessions tailored to your specific fitness goals and needs.",
              },
              {
                icon: Users2,
                title: "Group Workouts",
                description: "High-energy classes that combine strength training and cardio for maximum results.",
              },
              {
                icon: Yoga,
                title: "Yoga Classes",
                description: "Find balance and flexibility with our range of yoga styles for all levels.",
              },
              {
                icon: Bike,
                title: "Cardio Equipment",
                description: "State-of-the-art machines to boost your endurance and heart health.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="#membership"
              className="inline-flex items-center justify-center bg-red-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-all hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              View Membership Options
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-8 h-8 bg-red-400 rounded-full mix-blend-multiply filter blur-sm opacity-50 animate-ping"></div>
        <div className="absolute bottom-1/4 right-10 w-8 h-8 bg-red-400 rounded-full mix-blend-multiply filter blur-sm opacity-50 animate-ping animation-delay-700"></div>
      </div>

      {/* Success Stories / Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      </div>
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ATOM Gym</h3>
              <p className="mb-4">Elevate your fitness journey with us.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Classes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Trainers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic">
                <p>123 Fitness Street</p>
                <p>Muscle City, ST 12345</p>
                <p className="mt-2">Phone: (123) 456-7890</p>
                <p>Email: info@atomgym.com</p>
              </address>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2025 ATOM Gym. All rights reserved.</p>
          </div>
        </div>
        {/* Decorative elements for footer */}
        <div className="absolute top-0 left-1/4 w-12 h-12 text-red-600 opacity-10">
          <Droplet className="w-full h-full" />
        </div>
        <div className="absolute bottom-0 right-1/4 w-12 h-12 text-red-600 opacity-10">
          <Dumbbell className="w-full h-full" />
        </div>
      </footer>
    </div>
  )
}

