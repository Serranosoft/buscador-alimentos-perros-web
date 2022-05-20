import Head from 'next/head';
import Header from '../components/header';
import '../styles/css/common.css';

function MyApp({ Component, pageProps }) {
    return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;500;600;700&display=swap" rel="stylesheet" /> 
        </Head>
        <Header />
        <Component {...pageProps} />
    </>)
}

export default MyApp
