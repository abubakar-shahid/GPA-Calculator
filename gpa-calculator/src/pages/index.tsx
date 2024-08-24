import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <MountainIcon className="h-6 w-6 text-primary" />
            <span>GPA Calculator</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              Calculate CGPA
            </Link>
            <Link
              href="#"
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              Calculate SGPA
            </Link>
            <Link
              href="#"
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              GPA Rules
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-1 overflow-auto">
        <section className="container mx-auto py-12 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">GPA Calculator</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Easily calculate your CGPA and SGPA with our user-friendly interface.
            </p>
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Calculate CGPA
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Calculate SGPA
              </Link>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-12 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it Works</h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Our GPA calculator makes it easy to calculate your CGPA and SGPA. Simply enter your course details and
              grades, and we'll do the rest.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">Calculate CGPA</h3>
                <p className="mt-2 text-muted-foreground">
                  Enter your cumulative course details and grades to calculate your CGPA.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-xl font-bold">Calculate SGPA</h3>
                <p className="mt-2 text-muted-foreground">
                  Enter your semester course details and grades to calculate your SGPA.
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-12 md:py-24">
          <div className="mx-auto max-w-3xl space-y-6 px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">GPA Calculation Rules</h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Learn more about the GPA calculation process and how it works.
            </p>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Rules
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-muted/40 py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:gap-0">
          <p className="text-sm text-muted-foreground">&copy; 2024 GPA Calculator. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              Feedback
            </Link>
            <Link
              href="#"
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground"
              prefetch={false}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}






// import Link from 'next/link';
// import Image from 'next/image';
// import styles from '../../public/assets/index.module.css';
// import logo from '../../public/assets/images/logo.jpg';

// const HomePage: React.FC = () => {
//     return (
//         <div className={styles.body}>
//             <header className={styles.header}>
//                 <nav className={styles.navBar}>
//                     <div className={styles.logoContent}>
//                         <Image className={styles.logo} src={logo} alt="Logo" />
//                     </div>
//                     <div className={styles.navItems}>
//                         <Link href="/calculate-cgpa">Calculate CGPA</Link>
//                         <Link href="/calculate-sgpa">Calculate SGPA</Link>
//                         <Link href="/gpa-rules">GPA Rules</Link>
//                         <Link href="/feedback">Feedback</Link>
//                     </div>
//                 </nav>
//             </header>
//             <main className={styles.main}>
//                 <section className={styles.container}>
//                     <h1 className={styles.title}>GPA Calculator</h1>
//                     <p className={styles.textMuted}>
//                         Our GPA calculator makes it easy to calculate your CGPA and SGPA. Simply enter your course details and grades, and we'll do the rest.
//                     </p>
//                     <div className={styles.buttons}>
//                         <Link href="/calculate-cgpa" className={styles.primary}>Calculate CGPA</Link>
//                         <Link href="/calculate-sgpa" className={styles.secondary}>Calculate SGPA</Link>
//                     </div>
//                 </section>
//                 <section className={styles.container}>
//                     <h2 className={styles.title}>Customize the Rules</h2>
//                     <p className={styles.textMuted}>
//                         Unlock the power to tailor your GPA calculation! Align grade points with your institution's criteria and achieve accurate results with ease.
//                     </p>
//                     <div className={styles.cards}>
//                         <div className={styles.card}>
//                             <header className={styles.cardTitle}>Calculate CGPA</header>
//                             <p className={styles.cardContent}>Enter your cumulative course details and grades to calculate your CGPA.</p>
//                             <Link href="/calculate-cgpa" className={styles.links}>Get Started</Link>
//                         </div>
//                         <div className={styles.card}>
//                             <header className={styles.cardTitle}>Calculate SGPA</header>
//                             <p className={styles.cardContent}>Enter details of your semester courses and grades to calculate your SGPA.</p>
//                             <Link href="/calculate-sgpa" className={styles.links}>Get Started</Link>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <footer className={styles.footer}>
//                 <p className={styles.footerContent}>© 2024 GPA Calculator. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// };

// export default HomePage;