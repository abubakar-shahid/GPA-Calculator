import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/CalculateCGPA.module.css';
import Navbar from '@/components/Navbar';

const CalculateCGPA = () => {
  const [semesters, setSemesters] = useState([
    { semester: '', sgpa: '', creditHours: '' },
    { semester: '', sgpa: '', creditHours: '' }
  ]);
  const [cgpa, setCGPA] = useState('');

  const addSemester = () => {
    setSemesters([...semesters, { semester: '', sgpa: '', creditHours: '' }]);
  };

  const deleteSemester = (index: number) => {
    const updatedSemesters = semesters.filter((_, i) => i !== index);
    setSemesters(updatedSemesters.length >= 2 ? updatedSemesters : [
      { semester: '', sgpa: '', creditHours: '' },
      { semester: '', sgpa: '', creditHours: '' }
    ]);
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedSemesters = semesters.map((semester, i) => {
      if (i === index) {
        return { ...semester, [field]: value };
      }
      return semester;
    });
    setSemesters(updatedSemesters);
  };

  const calculateCGPA = () => {
    let totalQualityPoints = 0;
    let totalCreditHours = 0;

    semesters.forEach(semester => {
      const sgpa = parseFloat(semester.sgpa);
      const creditHours = parseFloat(semester.creditHours);

      if (!isNaN(sgpa) && !isNaN(creditHours)) {
        totalQualityPoints += sgpa * creditHours;
        totalCreditHours += creditHours;
      }
    });

    if (totalCreditHours > 0) {
      const calculatedCGPA = (totalQualityPoints / totalCreditHours).toFixed(2);
      setCGPA(calculatedCGPA);
    } else {
      setCGPA('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className={styles.container}>
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Calculate Your CGPA</h1>
        
        <div className="card max-w-4xl mx-auto mb-8">
          <button onClick={addSemester} className="btn btn-secondary w-full mb-6">
            Add Another Semester
          </button>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {semesters.map((semester, index) => (
                <div key={index} className="form-group">
                  <button
                    type="button"
                    onClick={() => deleteSemester(index)}
                    className="delete-btn"
                    aria-label="Delete semester"
                  >
                    ×
                  </button>
                  <div className="text-lg text-primary mb-2">
                    Semester {index + 1}
                  </div>
                  <input
                    type="number"
                    placeholder="SGPA"
                    value={semester.sgpa}
                    onChange={(e) => handleInputChange(index, 'sgpa', e.target.value)}
                    min="0"
                    max="4"
                    step="0.01"
                    className="input-glow w-full"
                  />
                  <input
                    type="number"
                    placeholder="Credit Hours"
                    value={semester.creditHours}
                    onChange={(e) => handleInputChange(index, 'creditHours', e.target.value)}
                    min="1"
                    max="24"
                    className="input-glow w-full"
                  />
                </div>
              ))}
            </div>

            <button 
              type="button" 
              onClick={calculateCGPA} 
              className="btn btn-primary w-full"
            >
              Calculate CGPA
            </button>

            {cgpa && (
              <div className="result-card">
                <div className="flex items-center justify-between">
                  <label className="text-lg font-semibold text-primary">Your CGPA:</label>
                  <input
                    type="text"
                    value={cgpa}
                    readOnly
                    className="input-glow w-32 text-center text-xl font-bold text-white"
                  />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CalculateCGPA;
