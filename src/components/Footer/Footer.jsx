import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <hr />
      <p className={styles.note}>Made by Ilya Matveyenko, NUST MISIS 2026</p>
    </footer>
  );
}

export default Footer;
