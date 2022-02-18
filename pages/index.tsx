import Head from 'next/head'
import Header from "../components/Header"
import Banner from "../components/Banner"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>MONROE AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* Header  */}
     <Header />

     <Banner />

    </div>
  )
}
