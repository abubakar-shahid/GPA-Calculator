import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/CalculateCGPA.module.css';
import Navbar from '@/components/Navbar';

const CalculateCGPA = () => {
  const [semesters, setSemesters] = useState([
    { semester: '', sgpa: '', creditHours: '' }
  ]);
  const [cgpa, setCGPA] = useState('');

  const addSemester = () => {
    setSemesters([...semesters, { semester: '', sgpa: '', creditHours: '' }]);
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
        <h1 className={styles.title}>Calculate Your CGPA</h1>
        
        <button onClick={addSemester} className={styles.addButton}>
          Add Another Semester
        </button>

        <form onSubmit={(e) => e.preventDefault()} className={styles.formGroup}>
          {semesters.map((semester, index) => (
            <div key={index} className={styles.semesterGroup}>
              <input
                type="text"
                placeholder={`Semester ${index + 1}`}
                value={semester.semester}
                onChange={(e) => handleInputChange(index, 'semester', e.target.value)}
                className={styles.input}
              />
              <input
                type="number"
                placeholder="SGPA"
                value={semester.sgpa}
                onChange={(e) => handleInputChange(index, 'sgpa', e.target.value)}
                min="0"
                max="4"
                step="0.01"
                className={styles.input}
              />
              <input
                type="number"
                placeholder="Credit Hours"
                value={semester.creditHours}
                onChange={(e) => handleInputChange(index, 'creditHours', e.target.value)}
                min="1"
                max="24"
                className={styles.input}
              />
            </div>
          ))}

          <button type="button" onClick={calculateCGPA} className={styles.button}>
            Calculate CGPA
          </button>

          {cgpa && (
            <div className={styles.result}>
              <label>Your CGPA:</label>
              <input
                type="text"
                value={cgpa}
                readOnly
                className={styles.input}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CalculateCGPA;
