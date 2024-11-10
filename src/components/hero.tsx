import { Heart, Clock, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-purple-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Pet Care When You Need It Most
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your pets deserve the best care, even when you're away. Trust PawPals to provide loving, professional pet sitting services in the comfort of your home.
            </p>
            <a
              href="#contact"
              className="inline-block bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Schedule a Visit
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Happy dog with pet sitter"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Heart className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl text-purple-800 font-semibold mb-2">Loving Care</h3>
            <p className="text-gray-600">We treat your pets like family, providing them with the attention and affection they deserve.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl text-purple-800 font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600">Available when you need us, with convenient booking options to fit your schedule.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-10 w-10 text-purple-600 mb-4" />
            <h3 className="text-xl text-purple-800 font-semibold mb-2">Trusted Service</h3>
            <p className="text-gray-600">Licensed, bonded, and insured pet sitters with years of experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
}