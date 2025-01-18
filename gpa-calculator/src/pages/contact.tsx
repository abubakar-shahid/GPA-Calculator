'use client';

import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">
          Contact Me
        </h1>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 shadow-lg">
          <div className="grid gap-8">
            {/* Phone */}
            <div className="flex items-center space-x-4 group">
              <div className="flex-shrink-0">
                <div className="p-4 bg-white/10 rounded-lg group-hover:bg-[#4CCCE6]/20 transition-colors">
                  <FaPhone className="h-6 w-6 text-[#4CCCE6]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="text-gray-300">+92 321 4567890</p>
              </div>
            </div>

            {/* Email */}
            <Link
              href="mailto:abubakarshahid1309@gmail.com"
              className="flex items-center space-x-4 group"
            >
              <div className="flex-shrink-0">
                <div className="p-4 bg-white/10 rounded-lg group-hover:bg-[#4CCCE6]/20 transition-colors">
                  <FaEnvelope className="h-6 w-6 text-[#4CCCE6]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="text-gray-300">abubakarshahid1309@gmail.com</p>
              </div>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/abubakar-shahid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group"
            >
              <div className="flex-shrink-0">
                <div className="p-4 bg-white/10 rounded-lg group-hover:bg-[#4CCCE6]/20 transition-colors">
                  <FaGithub className="h-6 w-6 text-[#4CCCE6]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">GitHub</h3>
                <p className="text-gray-300">github.com/abubakar-shahid</p>
              </div>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/abubakar-shahid-9031abs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group"
            >
              <div className="flex-shrink-0">
                <div className="p-4 bg-white/10 rounded-lg group-hover:bg-[#4CCCE6]/20 transition-colors">
                  <FaLinkedin className="h-6 w-6 text-[#4CCCE6]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">LinkedIn</h3>
                <p className="text-gray-300">
                  linkedin.com/in/abubakar-shahid-9031abs
                </p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-400">
          <p>Feel free to reach out through any of these channels!</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
