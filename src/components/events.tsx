export default function Services() {
    const services = [
      {
        title: "Daily Dog Walking",
        price: "$25",
        duration: "30 minutes",
        features: [
          "Personalized walking routes",
          "Waste cleanup",
          "Fresh water refill",
          "Basic training reinforcement",
          "Daily report card"
        ]
      },
      {
        title: "In-Home Pet Sitting",
        price: "$75",
        duration: "per day",
        features: [
          "Feeding and water maintenance",
          "Medication administration",
          "Playtime and exercise",
          "Home security check",
          "Daily updates with photos"
        ]
      },
      {
        title: "Overnight Care",
        price: "$120",
        duration: "per night",
        features: [
          "12-hour overnight stay",
          "Evening and morning walks",
          "Feeding and medications",
          "Constant companionship",
          "House sitting included"
        ]
      }
    ];
  
    return (
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional pet care services, tailored to meet your pet's needs
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-purple-600">{service.price}</span>
                    <span className="text-gray-600">/{service.duration}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }