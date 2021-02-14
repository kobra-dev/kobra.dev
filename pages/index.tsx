import Head from "next/head";
import NavBar from "../components/NavBar";
import Demo from "../components/Demo";
import Reviews from "../components/Reviews";

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
        <div style={{ paddingTop: "100vh", background: "#007B36" }} />
        {
          // Temporary
        }
        <Reviews />
        <Demo />
      </main>
    </div>
  );
}
