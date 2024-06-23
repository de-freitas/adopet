import Image from "next/image";

import styles from "./styles.module.scss";

import homeImg from "../../../public/header/homeImg.png";
import messageImg from "../../../public/header/messageImg.png";
import logoImg from "../../../public/header/logoImg.svg";

import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="adopet logo" width={128} height={31} />
        </Link>
        <Link href="/" className={styles.icon}>
          <Image src={homeImg} alt="home image" width={20} height={23} />
        </Link>
        <Link href="/" className={styles.icon}>
          <Image src={messageImg} alt="message image" width={24} height={20} />
        </Link>
      </nav>
    </div>
  );
}
