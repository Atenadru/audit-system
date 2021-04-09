import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as FaIcons from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <h1>
        este es el contenido <FaIcons.FaAngellist />
      </h1>
    </div>
  );
}
