import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#6C4F00] ">
              SunCart
            </h2>
            <p className="text-gray-600 mt-3 leading-7">
              Your trusted online shopping destination.
              Best deals, best products, best experience.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Contact Info
            </h3>

            <p className="text-gray-600 mb-2">📍 Dinajpur, Bangladesh</p>
            <p className="text-gray-600 mb-2">📞 +880 1XXXXXXXXX</p>
            <p className="text-gray-600">✉ support@suncart.com</p>
          </div>

          {/* Social + Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link href="/" className="text-gray-600 hover:text-[#FBBF24]">
                Home
              </Link>
              <Link href="/products" className="text-gray-600 hover:text-[#FBBF24]">
                Products
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-[#FBBF24]">
                Privacy Policy
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-xl">
              
              <a
                href="#"
                className="text-gray-600 hover:text-[#1877F2] transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-sky-500 transition"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="text-gray-600 hover:text-black transition"
              >
                <FaGithub />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} SunCart. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;