import { PawPrint  } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center">
              <PawPrint  className="h-8 w-8 text-purple-400" />
              <span className="ml-2 text-xl font-bold">PawPals</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Professional pet sitting services you can trust. Providing love and care when you're not there.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-purple-400">Services</Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-purple-400">About Us</Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-400 hover:text-purple-400">Testimonials</Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-purple-400">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Dog Walking</li>
              <li className="text-gray-400">Pet Sitting</li>
              <li className="text-gray-400">Overnight Care</li>
              <li className="text-gray-400">Pet Transportation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">(555) 123-4567</li>
              <li className="text-gray-400">contact@pawpals.com</li>
              <li className="text-gray-400">123 Pet Care Lane</li>
              <li className="text-gray-400">Pet City, PC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} PawPals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}