import Head from "next/head";
import styles from "../styles/Home.module.css";

// TODO: Fix favicon

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Kobra | A visual programming language for machine learning
        </title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Kobra!</h1>
      </main>

      <footer className={styles.footer}>
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
