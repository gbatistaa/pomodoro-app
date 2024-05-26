import close from "../../assets/icon-close.svg";

export default function Header(styles) {
  return (
    <header className={styles}>
      <h1 className={styles}>Settings</h1>
      <button type="button" className={styles.closeButton}>
        <img src={close} alt="close" />
      </button>
    </header>
  );
}
