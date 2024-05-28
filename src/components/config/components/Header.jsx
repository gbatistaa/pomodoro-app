import close from "../../../assets/./images/icon-close.svg";
import styles from "../css/header.module.css";

export default function Header() {
  return (
    <header className={styles.settingsHeader}>
      <h1 className={styles.settingsTitle}>Settings</h1>
      <button type="button" className={styles.closeButton}>
        <img src={close} alt="close" />
      </button>
    </header>
  );
}
