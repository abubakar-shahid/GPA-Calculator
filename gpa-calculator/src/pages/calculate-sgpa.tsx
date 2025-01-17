import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/CalculateSGPA.module.css';
import Navbar from '@/components/Navbar';

const gradePoints = {
  'A+': 4.0,
  'A': 4.0,
  'A-': 3.7,
  'B+': 3.3,
  'B': 3.0,
  'B-': 2.7,
  'C+': 2.3,
  'C': 2.0,
  'C-': 1.7,
  'D+': 1.3,
  'D': 1.0,
  'F': 0.0,
};

const CalculateSGPA = () => {
  const [courses, setCourses] = useState([
    { name: '', creditHours: '', grade: '' }
  ]);
  const [sgpa, setSGPA] = useState('');

  const addCourse = () => {
    setCourses([...courses, { name: '', creditHours: '', grade: '' }]);
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    const updatedCourses = courses.map((course, i) => {
      if (i === index) {
        return { ...course, [field]: value };
      }
      return course;
    });
    setCourses(updatedCourses);
  };

  const calculateSGPA = () => {
    let totalQualityPoints = 0;
    let totalCreditHours = 0;

    courses.forEach(course => {
      const creditHours = parseFloat(course.creditHours);
      const grade = course.grade as keyof typeof gradePoints;

      if (!isNaN(creditHours) && grade in gradePoints) {
        totalQualityPoints += gradePoints[grade] * creditHours;
        totalCreditHours += creditHours;
      }
    });

    if (totalCreditHours > 0) {
      const calculatedSGPA = (totalQualityPoints / totalCreditHours).toFixed(2);
      setSGPA(calculatedSGPA);
    } else {
      setSGPA('');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className={styles.container}>
        <h1 className={styles.title}>Calculate Your SGPA</h1>
        
        <button onClick={addCourse} className={styles.addButton}>
          Add Another Course
        </button>

        <form onSubmit={(e) => e.preventDefault()} className={styles.formGroup}>
          {courses.map((course, index) => (
            <div key={index} className={styles.courseGroup}>
              <input
                type="text"
                placeholder={`Course ${index + 1}`}
                value={course.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                className={styles.input}
              />
              <div className={styles.selectWrapper}>
                <select
                  value={course.creditHours}
                  onChange={(e) => handleInputChange(index, 'creditHours', e.target.value)}
                  className={styles.select}
                >
                  <option value="">Credit Hours</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className={styles.selectWrapper}>
                <select
                  value={course.grade}
                  onChange={(e) => handleInputChange(index, 'grade', e.target.value)}
                  className={styles.select}
                >
                  <option value="">Grade</option>
                  {Object.keys(gradePoints).map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          <button type="button" onClick={calculateSGPA} className={styles.button}>
            Calculate SGPA
          </button>

          {sgpa && (
            <div className={styles.result}>
              <label>Your SGPA:</label>
              <input
                type="text"
                value={sgpa}
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

export default CalculateSGPA;
