import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">

        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-3 text-white font-semibold text-lg">
            <img src="/images/logo.png" width={40} height={40} />
            Lakshya Goyal
          </div>

          <p className="text-sm leading-relaxed max-w-xs">
            Building scalable web and mobile applications with modern
            architectures and AI-driven intelligence.
          </p>

          <div className="flex gap-5 text-lg">
            <FaGithub className="hover:text-white cursor-pointer transition duration-300"/>
            <FaLinkedin className="hover:text-white cursor-pointer transition duration-300"/>
            <FaTwitter className="hover:text-white cursor-pointer transition duration-300"/>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-5">Company</h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Careers</li>
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-5">Services</h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer transition">Web Development</li>
            <li className="hover:text-white cursor-pointer transition">Mobile Apps</li>
            <li className="hover:text-white cursor-pointer transition">Cloud Architecture</li>
            <li className="hover:text-white cursor-pointer transition">AI Integration</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-5">Resources</h3>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer transition">Documentation</li>
            <li className="hover:text-white cursor-pointer transition">Support</li>
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition">Terms</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FunctionX. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;