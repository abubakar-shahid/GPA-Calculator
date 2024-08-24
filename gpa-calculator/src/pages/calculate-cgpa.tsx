// import { useState } from 'react';
// import styles from '../../public/assets/calculateCGPA.module.css';

// const CalculateCGPA = () => {
//   const [semesters, setSemesters] = useState([{ semester: '', creditHours: '' }]);
//   const [cgpa, setCGPA] = useState('');

//   const addSemester = () => {
//     setSemesters([...semesters, { semester: '', creditHours: '' }]);
//   };

//   const calculateCGPA = () => {
//     // Your calculation logic here
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>CGPA Calculator</h1>
//       <button onClick={addSemester} className={styles.button}>Add another Semester</button>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div className={styles.formGroup}>
//           {semesters.map((_, index) => (
//             <div key={index} className={styles.semesterGroup}>
//               <input type="text" placeholder={`Semester ${index + 1}`} className={styles.input} />
//               <input type="number" min="1" max="18" step="1" className={styles.input} />
//             </div>
//           ))}
//         </div>
//         <button type="button" onClick={calculateCGPA} className={styles.button}>Calculate CGPA</button>
//         <div className={styles.result}>
//           <label>CGPA:</label>
//           <input type="text" value={cgpa} readOnly className={styles.input} />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CalculateCGPA;
