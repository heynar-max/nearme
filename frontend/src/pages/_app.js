// import '@/styles/globals.css'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'


const montserrat = Montserrat({ 
    subsets: ['latin']
})

export default function App({ Component, pageProps }) {
    return (
        <>
        <Head>
            <title>NearMe</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={montserrat.className}>
        <Component {...pageProps} />
        </main>
        </>
    )
}
