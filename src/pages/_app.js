import '@/styles/globals.scss';
import '@/styles/aos/aos.scss';
import Head from 'next/head';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { Oxygen } from 'next/font/google'

const font = Oxygen({ subsets: ['latin'], weight: ["400", "700"] })

export default function App({ Component, pageProps }) {
    return (
        <section className={font.className}>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </section>
    )
}