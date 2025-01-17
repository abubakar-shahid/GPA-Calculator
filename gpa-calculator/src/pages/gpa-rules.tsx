import Navbar from '@/components/Navbar';

const GPARules = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">GPA Calculation Rules</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Grade Points</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background border border-primary/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Letter Grades</h3>
                <div className="space-y-2">
                  <p className="text-text-secondary">A+ = 4.0</p>
                  <p className="text-text-secondary">A = 4.0</p>
                  <p className="text-text-secondary">A- = 3.7</p>
                  <p className="text-text-secondary">B+ = 3.3</p>
                  <p className="text-text-secondary">B = 3.0</p>
                  <p className="text-text-secondary">B- = 2.7</p>
                  <p className="text-text-secondary">C+ = 2.3</p>
                  <p className="text-text-secondary">C = 2.0</p>
                  <p className="text-text-secondary">C- = 1.7</p>
                  <p className="text-text-secondary">D+ = 1.3</p>
                  <p className="text-text-secondary">D = 1.0</p>
                  <p className="text-text-secondary">F = 0.0</p>
                </div>
              </div>

              <div className="bg-background border border-primary/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Credit Hours</h3>
                <p className="text-text-secondary mb-4">
                  Credit hours typically range from 1 to 4 per course, depending on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-text-secondary">
                  <li>Course complexity</li>
                  <li>Contact hours per week</li>
                  <li>Lab components</li>
                  <li>Course requirements</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Calculation Methods</h2>
            <div className="space-y-6">
              <div className="bg-background border border-primary/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">SGPA (Semester GPA)</h3>
                <p className="text-text-secondary mb-4">
                  SGPA is calculated using the following formula:
                </p>
                <div className="bg-primary/10 p-4 rounded-lg mb-4">
                  <p className="text-text-primary font-mono">
                    SGPA = Σ(Grade Points × Credit Hours) / Σ(Credit Hours)
                  </p>
                </div>
                <p className="text-text-secondary">
                  This calculation only includes courses taken in a specific semester.
                </p>
              </div>

              <div className="bg-background border border-primary/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">CGPA (Cumulative GPA)</h3>
                <p className="text-text-secondary mb-4">
                  CGPA is calculated using one of two methods:
                </p>
                <ol className="list-decimal list-inside space-y-4 text-text-secondary">
                  <li>
                    <span className="font-semibold">Method 1:</span> Using semester GPAs
                    <div className="bg-primary/10 p-4 rounded-lg mt-2">
                      <p className="text-text-primary font-mono">
                        CGPA = Σ(SGPA × Semester Credit Hours) / Σ(Total Credit Hours)
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className="font-semibold">Method 2:</span> Using all courses
                    <div className="bg-primary/10 p-4 rounded-lg mt-2">
                      <p className="text-text-primary font-mono">
                        CGPA = Σ(All Course Grade Points × Credit Hours) / Σ(Total Credit Hours)
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">Important Notes</h2>
            <div className="bg-background border border-primary/20 p-6 rounded-lg">
              <ul className="list-disc list-inside space-y-3 text-text-secondary">
                <li>GPAs are typically calculated to two decimal places</li>
                <li>Failed courses (F grade) are included in GPA calculations</li>
                <li>Withdrawn courses are not included in GPA calculations</li>
                <li>Some institutions may have slightly different grading scales</li>
                <li>Transfer credits may be handled differently by each institution</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GPARules;
