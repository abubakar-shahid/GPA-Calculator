'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary/30 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="nav-link flex items-center space-x-2 group">
              <Image
                src="/logo.jpg"
                alt="GPA Calculator Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className={`nav-link flex items-center ${pathname === '/' ? 'active' : ''}`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
                />
              </svg>
              <span>Home</span>
            </Link>
            <Link 
              href="/calculate-cgpa" 
              className={`nav-link flex items-center ${pathname === '/calculate-cgpa' ? 'active' : ''}`}
            >
              Calculate CGPA
            </Link>
            <Link 
              href="/calculate-sgpa" 
              className={`nav-link flex items-center ${pathname === '/calculate-sgpa' ? 'active' : ''}`}
            >
              Calculate SGPA
            </Link>
            <Link 
              href="/gpa-rules" 
              className={`nav-link flex items-center ${pathname === '/gpa-rules' ? 'active' : ''}`}
            >
              GPA Rules
            </Link>
            <Link 
              href="/feedback" 
              className={`nav-link flex items-center ${pathname === '/feedback' ? 'active' : ''}`}
            >
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
