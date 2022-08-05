import Head from 'next/head';
import Header from '../components/header';
import '../styles/css/Globals.css';
import '../styles/css/variables.css';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
    return (
    <>
        <Head>
            <meta name="google-site-verification" content="mDr4jX4s19KzRXyYUwYi_BB1gm2cb5AziPGwHqW8yI0" />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3963345159052388" crossOrigin="anonymous"></script>
            <link rel="icon" href="/img/huella.svg" />
        </Head>
        <Header />
        <main>
            <Component {...pageProps} />
        </main>
        <Footer />
    </>)
}

export default MyApp
