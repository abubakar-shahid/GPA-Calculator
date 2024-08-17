import Link from 'next/link';
import Image from 'next/image';
import styles from '../../public/assets/index.module.css';
import logo from '../../public/assets/images/logo.jpg';

const HomePage: React.FC = () => {
    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <nav className={styles.navBar}>
                    <div className={styles.logoContent}>
                        <Image className={styles.logo} src={logo} alt="Logo" />
                    </div>
                    <div className={styles.navItems}>
                        <Link href="/calculate-cgpa">Calculate CGPA</Link>
                        <Link href="/calculate-sgpa">Calculate SGPA</Link>
                        <Link href="/gpa-rules">GPA Rules</Link>
                        <Link href="/feedback">Feedback</Link>
                    </div>
                </nav>
            </header>
            <main className={styles.main}>
                <section className={styles.container}>
                    <h1 className={styles.title}>GPA Calculator</h1>
                    <p className={styles.textMuted}>
                        Our GPA calculator makes it easy to calculate your CGPA and SGPA. Simply enter your course details and grades, and we'll do the rest.
                    </p>
                    <div className={styles.buttons}>
                        <Link href="/calculate-cgpa" className={styles.primary}>Calculate CGPA</Link>
                        <Link href="/calculate-sgpa" className={styles.secondary}>Calculate SGPA</Link>
                    </div>
                </section>
                <section className={styles.container}>
                    <h2 className={styles.title}>Customize the Rules</h2>
                    <p className={styles.textMuted}>
                        Unlock the power to tailor your GPA calculation! Align grade points with your institution's criteria and achieve accurate results with ease.
                    </p>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <header className={styles.cardTitle}>Calculate CGPA</header>
                            <p className={styles.cardContent}>Enter your cumulative course details and grades to calculate your CGPA.</p>
                            <Link href="/calculate-cgpa" className={styles.links}>Get Started</Link>
                        </div>
                        <div className={styles.card}>
                            <header className={styles.cardTitle}>Calculate SGPA</header>
                            <p className={styles.cardContent}>Enter details of your semester courses and grades to calculate your SGPA.</p>
                            <Link href="/calculate-sgpa" className={styles.links}>Get Started</Link>
                        </div>
                    </div>
                </section>
            </main>
            <footer className={styles.footer}>
                <p className={styles.footerContent}>© 2024 GPA Calculator. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;