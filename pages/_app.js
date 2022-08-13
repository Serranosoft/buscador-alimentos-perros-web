import Head from 'next/head';
import Header from '../components/header';
import '../styles/css/Globals.css';
import '../styles/css/variables.css';
import Footer from '../components/footer';
import Script from "next/script";


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="google-site-verification" content="mDr4jX4s19KzRXyYUwYi_BB1gm2cb5AziPGwHqW8yI0" />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3963345159052388" crossOrigin="anonymous"></script>
                <link rel="icon" href="/img/favicon.svg" />
                <meta property="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg" />
                <meta name="og:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>
                <meta property="og:type" content="website"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:image" content="https://buscadog.manu-scholz.com/wp-content/uploads/2022/05/test2.jpg"></meta>


                <script async src="https://www.googletagmanager.com/gtag/js?id=G-MBSP7PJK4H"></script>
                <Script strategy="lazyOnload">
                    {
                        `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                                        
                            gtag('config', 'G-MBSP7PJK4H');
                        `
                    }
                </Script>


            </Head>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>)
}

export default MyApp
