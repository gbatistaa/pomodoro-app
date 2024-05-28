import { useContext } from "react";
import close from "../../../assets/./images/icon-close.svg";
import styles from "../css/header.module.css";
import { DisplayContext } from "./PomoConfig";

export default function Header() {
  const { displayConfig, setDisplayConfig } = useContext(DisplayContext);

  const handleDisplayConfig = () => {
    setDisplayConfig(!displayConfig);
  };

  return (
    <header className={styles.settingsHeader}>
      <h1 className={styles.settingsTitle}>Settings</h1>
      <button
        type="button"
        className={styles.closeButton}
        onClick={() => handleDisplayConfig()}
      >
        <img src={close} alt="close" />
      </button>
    </header>
  );
}
