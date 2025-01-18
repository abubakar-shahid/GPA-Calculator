import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.jpg"
                alt="GPA Calculator Logo"
                width={32}
                height={32}
                className="rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-xl font-semibold text-primary">GPA Calculator</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="nav-link flex items-center gap-1 hover:text-primary"
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
              className="nav-link hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Calculate CGPA
            </Link>
            <Link 
              href="/calculate-sgpa" 
              className="nav-link hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Calculate SGPA
            </Link>
            <Link 
              href="/gpa-rules" 
              className="nav-link hover:text-primary transition-all duration-300 hover:scale-105"
            >
              GPA Rules
            </Link>
            <Link 
              href="/feedback" 
              className="nav-link hover:text-primary transition-all duration-300 hover:scale-105"
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
