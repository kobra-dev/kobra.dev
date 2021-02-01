import Head from "next/head";

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
        <h1>Welcome to Kobra!</h1>
      </main>

      <footer>
        <a
          href="https://github.com/kobra-dev/kobra.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by @kobra-dev
        </a>
      </footer>
    </div>
  );
}
