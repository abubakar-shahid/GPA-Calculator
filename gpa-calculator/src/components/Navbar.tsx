import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="GPA Calculator Logo"
              width={22}
              height={22}
            />
            <span className="text-xl font-semibold text-primary">GPA Calculator</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link href="/calculate-cgpa" className="nav-link">
              Calculate CGPA
            </Link>
            <Link href="/calculate-sgpa" className="nav-link">
              Calculate SGPA
            </Link>
            <Link href="/gpa-rules" className="nav-link">
              GPA Rules
            </Link>
            <Link href="/feedback" className="nav-link">
              Feedback
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
