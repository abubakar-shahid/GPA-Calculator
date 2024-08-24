// import { useState } from 'react';
// import styles from '../../public/assets/calculateSGPA.module.css';

// const CalculateSGPA = () => {
//   const [courses, setCourses] = useState([{ course: '', creditHours: '', grade: '' }]);
//   const [sgpa, setSGPA] = useState('');

//   const addCourse = () => {
//     setCourses([...courses, { course: '', creditHours: '', grade: '' }]);
//   };

//   const calculateSGPA = () => {
//     // Your calculation logic here
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>SGPA Calculator</h1>
//       <button onClick={addCourse} className={styles.button}>Add another Course</button>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className={styles.formGroup}>
//           {courses.map((_, index) => (
//             <div key={index} className={styles.courseGroup}>
//               <input type="text" placeholder={`Course No. ${index + 1}`} className={styles.input} />
//               <select className={styles.select}>
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//               </select>
//               <select className={styles.select}>
//                 <option value="A+">A+</option>
//                 <option value="A">A</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B">B</option>
//                 <option value="B-">B-</option>
//                 <option value="C+">C+</option>
//                 <option value="C">C</option>
//                 <option value="C-">C-</option>
//                 <option value="D+">D+</option>
//                 <option value="D">D</option>
//                 <option value="F">F</option>
//               </select>
//             </div>
//           ))}
//         </div>
//         <button type="button" onClick={calculateSGPA} className={styles.button}>Calculate SGPA</button>
//         <div className={styles.result}>
//           <label>SGPA:</label>
//           <input type="text" value={sgpa} readOnly className={styles.input} />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CalculateSGPA;
