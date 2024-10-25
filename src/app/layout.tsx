import "./globals.css";
import Link from 'next/link';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {/* Navbar */}
        <header className="bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-green-600">SC HOTEL</div>

            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                Home
              </Link>
              <Link href="/rooms" className="text-gray-700 hover:text-blue-600 transition">
                Rooms
              </Link>
              <Link href="/facilities" className="text-gray-700 hover:text-blue-600 transition">
                Facilities
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-200">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Us */}
              <div>
                <h3 className="text-xl font-semibold mb-4">About Us</h3>
                <p className="text-sm text-gray-400">
                  HotelName is a luxurious hotel offering the best accommodation and service for your comfort and relaxation.
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>Email: info@hotelname.com</li>
                  <li>Phone: +123 456 789</li>
                  <li>Address: 123 Hotel St, City, Country</li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>
                    <a href="#rooms" className="hover:text-blue-600 transition">
                      Rooms
                    </a>
                  </li>
                  <li>
                    <a href="/facilities" className="hover:text-blue-600 transition">
                      Facilities
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="hover:text-blue-600 transition">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-blue-600 transition">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
              &copy; 2024 HotelName. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
