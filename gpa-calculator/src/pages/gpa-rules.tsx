import Navbar from '@/components/Navbar';

const GPARules = () => {
  return (
    <main className="min-h-screen bg-background text-text-primary pt-16">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">GPA Rules</h1>

        <div className="card mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Grade Point System</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-primary/30 rounded-lg">
              <thead>
                <tr className="bg-primary/10">
                  <th className="px-6 py-3 text-left border-b-2 border-primary/30">Letter Grade</th>
                  <th className="px-6 py-3 text-left border-b-2 border-primary/30">Grade Points</th>
                  <th className="px-6 py-3 text-left border-b-2 border-primary/30">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-primary/30">
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">A+</td>
                  <td className="px-6 py-4">4.00</td>
                  <td className="px-6 py-4">&ge; 89</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">A</td>
                  <td className="px-6 py-4">4.00</td>
                  <td className="px-6 py-4">86-89</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">A-</td>
                  <td className="px-6 py-4">3.67</td>
                  <td className="px-6 py-4">82-85</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">B+</td>
                  <td className="px-6 py-4">3.33</td>
                  <td className="px-6 py-4">78-81</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">B</td>
                  <td className="px-6 py-4">3.00</td>
                  <td className="px-6 py-4">74-77</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">B-</td>
                  <td className="px-6 py-4">2.67</td>
                  <td className="px-6 py-4">70-73</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">C+</td>
                  <td className="px-6 py-4">2.33</td>
                  <td className="px-6 py-4">66-69</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">C</td>
                  <td className="px-6 py-4">2.00</td>
                  <td className="px-6 py-4">62-65</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">C-</td>
                  <td className="px-6 py-4">1.67</td>
                  <td className="px-6 py-4">58-61</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">D+</td>
                  <td className="px-6 py-4">1.33</td>
                  <td className="px-6 py-4">54-57</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">D</td>
                  <td className="px-6 py-4">1.00</td>
                  <td className="px-6 py-4">50-53</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">F</td>
                  <td className="px-6 py-4">0.00</td>
                  <td className="px-6 py-4">&le; 49</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Credit Hours</h2>
          <p className="text-white/90 mb-4">
            Credit hours typically range from 1 to 3 per course, depending on:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/90">
            <li>Course complexity</li>
            <li>Contact hours per week</li>
            <li>Lab components</li>
            <li>Course requirements</li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4">Calculation Methods</h2>
          
          <div className="card bg-primary/5 mb-6">
            <h3 className="text-xl font-semibold mb-2">SGPA (Semester GPA)</h3>
            <p className="text-white/90 mb-3">
              SGPA is calculated using the following formula:
            </p>
            <div className="bg-primary/10 p-4 rounded-lg border-2 border-primary/30">
              <p className="font-mono text-white">
                SGPA = Σ(Grade Points × Credit Hours) / Σ(Credit Hours)
              </p>
            </div>
          </div>

          <div className="card bg-primary/5">
            <h3 className="text-xl font-semibold mb-2">CGPA (Cumulative GPA)</h3>
            <p className="text-white/90 mb-3">
              CGPA is calculated using one of two methods:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-white/90">
              <li>
                <span className="font-semibold">Method 1:</span> Using semester GPAs
                <div className="bg-primary/10 p-4 rounded-lg mt-2 border-2 border-primary/30">
                  <p className="font-mono text-white">
                    CGPA = Σ(SGPA × Semester Credit Hours) / Σ(Total Credit Hours)
                  </p>
                </div>
              </li>
              <li>
                <span className="font-semibold">Method 2:</span> Using all courses
                <div className="bg-primary/10 p-4 rounded-lg mt-2 border-2 border-primary/30">
                  <p className="font-mono text-white">
                    CGPA = Σ(All Course Grade Points × Credit Hours) / Σ(Total Credit Hours)
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="card">
          <h2 className="text-2xl font-semibold text-primary mb-4">Important Notes</h2>
          <ul className="list-disc list-inside space-y-3 text-white/90">
            <li>GPAs are typically calculated to two decimal places</li>
            <li>Failed courses (F grade) are included in GPA calculations</li>
            <li>Withdrawn courses are not included in GPA calculations</li>
            <li>Some institutions may have slightly different grading scales</li>
            <li>Transfer credits may be handled differently by each institution</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default GPARules;
