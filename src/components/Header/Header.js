import { useDispatch } from "react-redux";
import styles from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";
import { toggleCartAction } from "../../store/toggle-cart";

const Header = () => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggleCartAction.toggleCarts());
  };
  return (
    <div className={styles.header}>
      <h2>ReduxCart</h2>
      <HeaderCartButton onClickBg={toggleCartHandler} />
    </div>
  );
};

export default Header;
