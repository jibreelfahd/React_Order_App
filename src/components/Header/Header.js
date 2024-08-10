import styles from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <div className={styles.header}>
      <h2>ReduxCart</h2>
      <HeaderCartButton />
    </div>
  );
};

export default Header;
