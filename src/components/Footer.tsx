import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About us</h3>
            <p className="text-sm">
              Enjoy flexible payment options on your favorite products! Buy now
              and pay later with our convenient installment plans. No interest,
              no hassle - just shop til you drop!
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-yellow-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-yellow-500 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-yellow-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Product" className="text-yellow-500 transition">
                Product
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yousrakhan23"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl hover:text-stone-950" />
              </a>
              <a
                href="https://www.instagram.com/_fumodoarishika/profilecard/?igsh=MWdpazkyOGVwdnd2MA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
              <a
                href="https://www.linkedin.com/in/hafiza-yousra-khan-/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>

            <p className="text-sm">Email: yousrakhanzai@gmail.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-600 pt-6 text-center text-sm">
          <p>&copy; 2024 made by YOUSRA KHAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
