import close from "../../assets/icon-close.svg";

export default function Header(styles) {
  return (
    <header className={styles.settingsHeader}>
      <h1 className={styles.settingsTitle}>Settings</h1>
      <button type="button" className={styles.closeButton}>
        <img src={close} alt="close" />
      </button>
    </header>
  );
}
