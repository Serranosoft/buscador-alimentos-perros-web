import Head from 'next/head';
import Header from '../components/header';
import '../styles/css/common.css';
import '../styles/css/variables.css';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
    return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />             <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&display=swap" rel="stylesheet" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <meta name="google-site-verification" content="mDr4jX4s19KzRXyYUwYi_BB1gm2cb5AziPGwHqW8yI0" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3963345159052388" crossOrigin="anonymous"></script>
            <link rel="icon" href="/img/huella.svg" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>)
}

export default MyApp
