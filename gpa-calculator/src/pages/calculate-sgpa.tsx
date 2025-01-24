import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/CalculateSGPA.module.css';
import Navbar from '@/components/Navbar';

// Define grade type
type Grade = 'A' | 'A-' | 'B+' | 'B' | 'B-' | 'C+' | 'C' | 'C-' | 'D+' | 'D' | 'F';

// Define course type
interface Course {
  name: string;
  creditHours: string;
  grade: Grade;
}

const gradePoints: Record<Grade, number> = {
  A: 4.0,
  "A-": 3.67,
  "B+": 3.33,
  B: 3.0,
  "B-": 2.67,
  "C+": 2.33,
  C: 2.0,
  "C-": 1.67,
  "D+": 1.33,
  D: 1.0,
  F: 0.0,
};

const CalculateSGPA = () => {
  const [courses, setCourses] = useState<Course[]>([
    { name: '', creditHours: '', grade: 'A' },
    { name: '', creditHours: '', grade: 'A' }
  ]);
  const [sgpa, setSGPA] = useState('');
  const [totalCreditHours, setTotalCreditHours] = useState(0);
  const [validCoursesCount, setValidCoursesCount] = useState(0);

  const addCourse = () => {
    setCourses([...courses, { name: '', creditHours: '', grade: 'A' }]);
  };

  const deleteCourse = (index: number) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses.length >= 2 ? updatedCourses : [
      { name: '', creditHours: '', grade: 'A' },
      { name: '', creditHours: '', grade: 'A' }
    ]);
  };

  const handleInputChange = (index: number, field: keyof Course, value: string) => {
    const updatedCourses = [...courses];
    if (field === 'grade') {
      updatedCourses[index][field] = value as Grade;
    } else {
      updatedCourses[index][field] = value;
    }
    setCourses(updatedCourses);
  };

  const calculateSGPA = () => {
    let totalCreditHours = 0;
    let totalGradePoints = 0;
    let validCourses = 0;

    courses.forEach(course => {
      const gradePoint = gradePoints[course.grade];
      const creditHours = parseFloat(course.creditHours);

      if (!isNaN(creditHours)) {
        totalGradePoints += gradePoint * creditHours;
        totalCreditHours += creditHours;
        validCourses++;
      }
    });

    if (totalCreditHours === 0) {
      setSGPA('');
      setTotalCreditHours(0);
      setValidCoursesCount(0);
      return;
    }
    
    const calculatedSGPA = (totalGradePoints / totalCreditHours).toFixed(2);
    setSGPA(calculatedSGPA);
    setTotalCreditHours(totalCreditHours);
    setValidCoursesCount(validCourses);
  };

  return (
    <main className="min-h-screen bg-background text-text-primary pt-16">
      <Navbar />

      <div className={styles.container}>
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Calculate Your SGPA</h1>
        
        <div className="card max-w-4xl mx-auto mb-8">
          <button onClick={addCourse} className="btn btn-secondary w-full mb-6">
            Add Another Course
          </button>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <option value="A-">A- (3.67)</option>
                    <option value="B+">B+ (3.33)</option>
                    <option value="B">B (3.0)</option>
                    <option value="B-">B- (2.67)</option>
                    <option value="C+">C+ (2.33)</option>
                    <option value="C">C (2.0)</option>
                    <option value="C-">C- (1.67)</option>
                    <option value="D+">D+ (1.33)</option>
                    <option value="D">D (1.0)</option>
                    <option value="F">F (0.0)</option>
                  </select>
                  <input
                    type="number"
                    placeholder="Credit Hours"
                    value={course.creditHours}
                    onChange={(e) => handleInputChange(index, 'creditHours', e.target.value)}
                    min="1"
                    max="3"
                    className="input-glow w-full"
                  />
                </div>
              ))}
            </div>

            <button 
              type="button" 
              onClick={calculateSGPA} 
              className="btn btn-primary w-full"
            >
              Calculate SGPA
            </button>

            {sgpa && (
              <div className="result-card space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-lg font-semibold text-primary">Your SGPA:</label>
                  <input
                    type="text"
                    value={sgpa}
                    readOnly
                    className="input-glow w-32 text-center text-xl font-bold text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2 border-t-2 border-[#4f46e5]/30">
                  <div>
                    <label className="text-sm text-white/70">Total Courses:</label>
                    <div className="text-lg font-semibold text-white">{validCoursesCount}</div>
                  </div>
                  <div>
                    <label className="text-sm text-white/70">Total Credit Hours:</label>
                    <div className="text-lg font-semibold text-white">{totalCreditHours}</div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default CalculateSGPA;
