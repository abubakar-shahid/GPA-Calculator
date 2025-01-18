import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/CalculateSGPA.module.css';
import Navbar from '@/components/Navbar';

const gradePoints = {
  'A': 4.0,
  'A-': 3.67,
  'B+': 3.33,
  'B': 3.0,
  'B-': 2.67,
  'C+': 2.33,
  'C': 2.0,
  'C-': 1.67,
  'D+': 1.33,
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

  const deleteCourse = (index: number) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses.length ? updatedCourses : [{ name: '', creditHours: '', grade: '' }]);
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
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Calculate Your SGPA</h1>
        
        <div className="card max-w-2xl mx-auto mb-8">
          <button onClick={addCourse} className="btn btn-secondary w-full mb-6">
            Add Another Course
          </button>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {courses.map((course, index) => (
              <div key={index} className="form-group">
                <button
                  type="button"
                  onClick={() => deleteCourse(index)}
                  className="delete-btn"
                  aria-label="Delete course"
                >
                  ×
                </button>
                <input
                  type="text"
                  placeholder="Course Name (Optional)"
                  value={course.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                  className="input-glow w-full text-white/80"
                />
                <select
                  value={course.grade}
                  onChange={(e) => handleInputChange(index, 'grade', e.target.value)}
                  className="select-glow w-full"
                >
                  <option value="">Select Grade</option>
                  <option value="A">A (4.0)</option>
                  <option value="A-">A- (3.7)</option>
                  <option value="B+">B+ (3.3)</option>
                  <option value="B">B (3.0)</option>
                  <option value="B-">B- (2.7)</option>
                  <option value="C+">C+ (2.3)</option>
                  <option value="C">C (2.0)</option>
                  <option value="C-">C- (1.7)</option>
                  <option value="D+">D+ (1.3)</option>
                  <option value="D">D (1.0)</option>
                  <option value="F">F (0.0)</option>
                </select>
                <input
                  type="number"
                  placeholder="Credit Hours"
                  value={course.creditHours}
                  onChange={(e) => handleInputChange(index, 'creditHours', e.target.value)}
                  min="1"
                  max="4"
                  className="input-glow w-full"
                />
              </div>
            ))}

            <button 
              type="button" 
              onClick={calculateSGPA} 
              className="btn btn-primary w-full"
            >
              Calculate SGPA
            </button>

            {sgpa && (
              <div className="result-card">
                <div className="flex items-center justify-between">
                  <label className="text-lg font-semibold text-[#4f46e5]">Your SGPA:</label>
                  <input
                    type="text"
                    value={sgpa}
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

export default CalculateSGPA;
