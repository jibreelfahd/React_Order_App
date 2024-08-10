import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClickBg }) => {
  return (
    <button className={styles["header--cart"]} onClick={onClickBg}>
      <span className={styles.cart}>My Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default HeaderCartButton;
