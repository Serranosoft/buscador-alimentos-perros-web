import Head from 'next/head';
import Header from '../components/header';
import '../styles/css/common.css';
import styles from "../styles/css/app.css" // No quitar, por alguna razon funciona.

function MyApp({ Component, pageProps }) {
    return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;500;600;700;800;900&display=swap" rel="stylesheet" /> 
            <meta name="google-site-verification" content="mDr4jX4s19KzRXyYUwYi_BB1gm2cb5AziPGwHqW8yI0" />
        </Head>
        <Header />
        <main className="mainContainer">
            <Component {...pageProps} />
        </main>
    </>)
}

export default MyApp
