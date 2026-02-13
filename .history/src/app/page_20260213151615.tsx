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
        <title>Pithonkids - Learn Coding, Maths & Web Development</title>
        <meta name="description" content="Join our Python programming and website development classes. Focused sessions tailored to your learning pace, guided by expert tutors dedicated to your success." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <Features />
      <Classes />
      <Register />
     
    </>

  );
}
