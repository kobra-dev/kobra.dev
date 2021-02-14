import Head from "next/head";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import Reviews from "../components/Reviews";
import Masthead from "../components/Masthead";

// TODO: Fix favicon

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Kobra | A visual programming language for machine learning
        </title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <Masthead
          heading="Kobra"
          subheading="A visual programming language for machine learning"
          imageSrc="https://picsum.photos/800/600"
          ctaLink="https://studio.kobra.dev"
          ctaText="Try now"
          subtext="No signup required"
        />
        <Reviews />
        <Demo />
      </main>
    </div>
  );
}
