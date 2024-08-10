import { useDispatch } from "react-redux";

import { toggleCartAction } from "../../store/toggle-cart";
import Modal from "../UI/Modal/Overlay";
import styles from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();

  const unToggleCartHandler = () => {
    dispatch(toggleCartAction.unToggleCart());
  };

  return (
    <Modal onClick={unToggleCartHandler}>
      <section className={styles.cart}>
        <h2>Your Shopping Cart</h2>
        <div className={styles["cart--description"]}>
          <div className={styles["cart--items"]}>
            <h1>Test Item</h1>
            <div>
              <span>$18.00</span>
              <em>($6.00/item)</em>
            </div>
          </div>
          <div className={styles["cart--actions"]}>
            <h1>x3</h1>
            <span>
              <button>-</button>
              <button>+</button>
            </span>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default Cart;
