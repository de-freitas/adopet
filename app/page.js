import Image from "next/image";

import Header from "./components/Header/Header";

import forma1 from "../public/forma1.png";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <Image src={forma1} alt="forma1" className={styles.forma1} />
      <Header />
    </main>
  );
}
