import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={styles["header--cart"]}>
      <span className={styles.cart}>My Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default HeaderCartButton;
