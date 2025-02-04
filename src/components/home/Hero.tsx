// Hero.tsx
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#dfedfa] via-[#f0f7fc] to-white font-jakarta">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 top-20 w-72 h-72 bg-[#e5f1fb] rounded-full blur-3xl opacity-20" />
        <div className="absolute -left-10 top-40 w-72 h-72 bg-[#eaf4fc] rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8"> {/* reduced from pb-16 */}        {/* Main Hero Content */}
        <div className="pt-32 sm:pt-40 md:pt-48 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Plan Your Business Future
            <span className="block mt-2 text-gray-900">With Confidence</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-900 mb-10">
            Transform your business ideas into solid plans with our advanced planning tools and expert guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link
  href="/get-started"
  className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 font-medium text-lg inline-flex items-center gap-2"
>
  Start Planning Now
  <span className="bg-white p-1 rounded-full group-hover:translate-x-1 transition-transform duration-200">
    <svg
      className="w-5 h-5 text-blue-600"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  </span>
</Link>
            <Link
              href="/demo"
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200 font-medium text-lg border-2 border-gray-200"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">10k+</div>
              <div className="text-gray-900 mt-2">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">95%</div>
              <div className="text-gray-900 mt-2">Success Rate</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900">24/7</div>
              <div className="text-gray-900 mt-2">Expert Support</div>
            </div>
          </div>

          {/* Featured Brands */}
          <div className="max-w-5xl mx-auto">
            <p className="text-gray-900 mb-6">Trusted by leading companies</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-center">
                  <Image
                    src={`/brand-${i}.png`}
                    alt={`Brand ${i}`}
                    width={120}
                    height={40}
                    className="h-8 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero