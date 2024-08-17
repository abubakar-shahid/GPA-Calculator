import '../app/globals.css'; // Import your global CSS file here
import type { AppProps } from 'next/app'; // Import type for TypeScript

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />; // Render the page component
}

export default MyApp;
