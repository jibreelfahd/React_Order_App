import styles from "./Products.module.css";

import Card from "../UI/Card/Card";

const Products = () => {
  return (
    <>
      <h2 className={styles.heading}>BUY YOUR FAVOURITE PRODUCTS</h2>
      <Card className={styles.products}>
        <div className={styles["product--items"]}>
          <h2>Test</h2>
          <p className={styles.pricing}>$6.00</p>
        </div>
        <p>This is a first product - amazing!</p>
        <div className={styles.actions}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </>
  );
};

export default Products;
