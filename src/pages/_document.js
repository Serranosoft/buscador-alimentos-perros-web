import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&display=swap" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link rel="icon" href="https://buscadog.net/favicon.svg" sizes="32x32" />
                    <link rel="icon" href="https://buscadog.net/favicon.svg" sizes="192x192" />
                    <meta name="google-site-verification" content="mDr4jX4s19KzRXyYUwYi_BB1gm2cb5AziPGwHqW8yI0" />
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3963345159052388" crossOrigin="anonymous"></script>
                    <meta property="og:image" content="https://api.buscadog.net/wp-content/uploads/2023/10/buscadog-opengraph.jpg" />
                    <meta name="og:image" content="https://api.buscadog.net/wp-content/uploads/2023/10/buscadog-opengraph.jpg"></meta>
                    <meta property="og:type" content="website"></meta>
                    <meta name="twitter:card" content="summary_large_image"></meta>
                    <meta name="twitter:image" content="https://api.buscadog.net/wp-content/uploads/2023/10/buscadog-opengraph.jpg"></meta>
                    {<script dangerouslySetInnerHTML={{
                        __html: `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MLV6MC7');</script>`
                    }}></script>}
                </Head>
                <body>
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLV6MC7"
                        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument