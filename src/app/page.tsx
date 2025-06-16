import Classes from "@/components/page/landing/Classes";
import Features from "@/components/page/landing/Features";
import Landing from "@/components/page/landing/Landing";
import Register from "@/components/page/landing/Register";
import './globals.css';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>home</title>
        <meta name="description" content="This is an awesome page." />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Landing />
      <Features />
      <Classes />
      <Register />
     
    </>

  );
}
