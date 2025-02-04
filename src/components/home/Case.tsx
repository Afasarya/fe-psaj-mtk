// Case.tsx


const Case = () => {
  const steps = [
    {
      number: '01',
      title: 'Start Your Plan',
      description: 'Click "Calculate" in menu or "Start Planning" button to begin your business planning journey',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Fill Your Data',
      description: 'Input your business details, financial projections, and resource requirements in our smart form',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Get Results',
      description: 'Receive detailed analysis and recommendations for your business plan instantly',
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ]

  return (
<section className="relative py-4 pb-20 bg-white font-jakarta"> {/* Added mb-16 */}      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8"> {/* reduced from mb-12 */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform your business idea into a solid plan
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8"> {/* reduced from mb-16 */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-br from-[#dfedfa] via-[#f0f7fc] to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-blue-600 rounded-full">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Case