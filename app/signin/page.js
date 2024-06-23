import Image from "next/image";

import Header from "../components/Header/Header.js";

import forma1 from "../../public/forma1.png";
import forma3 from "../../public/forma3.png";
import blueLogo from "../../public/blueLogo.svg";
import paws from "../../public/paws.png";

import styles from "./styles.module.scss";

export default function Signin() {
  return (
    <div className={styles.container}>
      <Image src={forma1} alt="forma1" className={styles.forma1} />
      <Header />
      <Image src={forma3} alt="forma3" className={styles.forma3} />
      <Image src={paws} alt="paws" className={styles.paws} />

      <section className={styles.section}>
        <div className={styles.content}>
          <h1>
            <Image src={blueLogo} alt="logo adopet" />
          </h1>

          <div className={styles.textContent}>
            <p>Já tem uma conta? Faça seu login:</p>
          </div>
        </div>

        <form className={styles.form}>
          <label>Email</label>
          <input placeholder="Escolha seu melhor email"></input>

          <label>Senha</label>
          <input placeholder="Crie uma senha"></input>
        </form>
      </section>
    </div>
  );
}
