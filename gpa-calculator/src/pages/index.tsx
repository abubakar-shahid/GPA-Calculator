import Link from 'next/link';
import styles from '../../public/assets/index.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>Welcome to GPA Calculator!</h1>
      </header>
      <section className={styles.buttons}>
        <Link href="/calculate-sgpa">
          <a className={styles.button}>Calculate SGPA</a>
        </Link>
        <Link href="/calculate-cgpa">
          <a className={styles.button}>Calculate CGPA</a>
        </Link>
      </section>
      <footer className={styles.footer}>
        <p>Web App Designed by ABS Developers.</p>
      </footer>
    </div>
  );
};

export default HomePage;
