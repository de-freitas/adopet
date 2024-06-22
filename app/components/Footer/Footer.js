import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p className={styles.developedBy}>
        2024 - Developed by <code>`de-freitas`</code>
      </p>
    </div>
  );
}
