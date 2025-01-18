import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center relative">
        {/* Main Heading */}
        <div className="container mx-auto px-4 pt-8">
          <h1 className="text-4xl font-semibold text-primary flex items-center justify-center gap-2">
            GPA Calculator
          </h1>
        </div>
        <p className="mt-8 text-text-secondary text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-center">
          Get precise CGPA and SGPA calculations tailored to your institution's
          grading system.
        </p>
        <div className="mt-8 absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10 rounded-3xl"></div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/calculate-cgpa"
            className="btn btn-primary hover:scale-105 transform transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Calculate CGPA
          </Link>
          <Link
            href="/calculate-sgpa"
            className="btn btn-secondary hover:scale-105 transform transition-all duration-300 shadow-lg shadow-accent/20"
          >
            Calculate SGPA
          </Link>
        </div>
        <div className="mt-12 flex justify-center items-center gap-6 text-text-secondary">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm">Accuracy</div>
          </div>
          <div className="h-10 w-px bg-primary/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">Easy</div>
            <div className="text-sm">To Use</div>
          </div>
          <div className="h-10 w-px bg-primary/20"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-1">Fast</div>
            <div className="text-sm">Calculations</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-background to-background/50">
        <h2 className="text-3xl font-bold text-center mb-4 text-primary">
          Smart Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="card hover:scale-105 transition-transform duration-300">
            <div className="text-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">CGPA Calculator</h3>
            <p className="text-text-secondary mb-4">
              Calculate your Cumulative GPA by entering your semester results
            </p>
            <Link
              href="/calculate-cgpa"
              className="text-primary hover:text-primary/80"
            >
              Get Started →
            </Link>
          </div>

          <div className="card hover:scale-105 transition-transform duration-300">
            <div className="text-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">SGPA Calculator</h3>
            <p className="text-text-secondary mb-4">
              Calculate your Semester GPA by entering your course grades
            </p>
            <Link
              href="/calculate-sgpa"
              className="text-primary hover:text-primary/80"
            >
              Get Started →
            </Link>
          </div>

          <div className="card hover:scale-105 transition-transform duration-300">
            <div className="text-primary mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">GPA Rules</h3>
            <p className="text-text-secondary mb-4">
              Learn about the grading system and calculation methods
            </p>
            <Link
              href="/gpa-rules"
              className="text-primary hover:text-primary/80"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-primary/40">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">
                Quick Links
              </h3>
              <div className="space-y-2">
                <Link
                  href="/calculate-cgpa"
                  className="block text-text-secondary hover:text-primary"
                >
                  Calculate CGPA
                </Link>
                <Link
                  href="/calculate-sgpa"
                  className="block text-text-secondary hover:text-primary"
                >
                  Calculate SGPA
                </Link>
                <Link
                  href="/gpa-rules"
                  className="block text-text-secondary hover:text-primary"
                >
                  GPA Rules
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">
                Support
              </h3>
              <div className="space-y-2">
                <Link
                  href="/feedback"
                  className="block text-text-secondary hover:text-primary"
                >
                  Feedback
                </Link>
                <Link
                  href="/feedback"
                  className="block text-text-secondary hover:text-primary"
                >
                  FAQ
                </Link>
                <Link
                  href="/feedback"
                  className="block text-text-secondary hover:text-primary"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">About</h3>
              <p className="text-text-secondary">
                GPA Calculator helps students track and calculate their academic
                performance with ease and accuracy.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/20 text-center text-text-secondary">
            <p>
              {" "}
              {new Date().getFullYear()} GPA Calculator. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
