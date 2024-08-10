import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";

const App = () => {
  const toggleCart = useSelector((state) => state.toggleCart.showCart);

  return (
    <>
      <Header />
      {toggleCart && <Cart />}
      <Products />
    </>
  );
};

export default App;
