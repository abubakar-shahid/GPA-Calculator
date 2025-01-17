import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">GPA Calculator</h1>
        <p className="text-text-secondary max-w-2xl mx-auto mb-8">
          Our GPA calculator makes it easy to calculate your CGPA and SGPA. Simply
          enter your course details and grades, and we'll do the rest.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/calculate-cgpa" className="btn btn-primary">
            Calculate CGPA
          </Link>
          <Link href="/calculate-sgpa" className="btn btn-primary">
            Calculate SGPA
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">Customize the Rules</h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Unlock the power to tailor your GPA calculation! Align grade points with your
          institution's criteria and achieve accurate results with ease.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Calculate CGPA</h3>
            <p className="text-text-secondary mb-4">
              Enter your cumulative course details and grades to calculate your CGPA.
            </p>
            <Link href="/calculate-cgpa" className="text-primary hover:text-primary/80">
              Get Started →
            </Link>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Calculate SGPA</h3>
            <p className="text-text-secondary mb-4">
              Enter details of your semester courses and grades to calculate your SGPA.
            </p>
            <Link href="/calculate-sgpa" className="text-primary hover:text-primary/80">
              Get Started →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-text-secondary">
        <p className="mb-2"> {new Date().getFullYear()} GPA Calculator. All rights reserved</p>
        <div className="flex justify-center gap-4">
          <Link href="/feedback" className="nav-link">Feedback</Link>
          <Link href="/privacy-policy" className="nav-link">Privacy Policy</Link>
          <Link href="/terms-of-service" className="nav-link">Terms of Service</Link>
        </div>
      </footer>
    </main>
  );
}
