import Image from "next/image";

import Header from "./components/Header/Header";

import forma1 from "../public/forma1.png";
import forma2 from "../public/forma2.png";
import randomDog from "../public/randomDog.png";
import logo from "../public/header/logoImg.png";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <nav className={styles.nav}>
        <Image src={forma1} alt="forma1" className={styles.forma1} />
        <Header />
      </nav>
      <div className={styles.sections}>
        <section className={styles.section1}>
          <div className={styles.logo}>
            <h1>
              <Image src={logo} alt="logo adopet" />
            </h1>
          </div>
          <div className={styles.welcome}>
            <h2>Boas-vindas!</h2>
            <p>
              Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a
              gente!
            </p>
          </div>
        </section>
      </div>

      <Image className={styles.forma2} src={forma2} alt="random ilustration" />

      <Image
        className={styles.randomDog}
        src={randomDog}
        alt="random dog image"
      />
    </main>
  );
}
