import { createContext, useState } from "react";
import { menu } from "../dummyData";

const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};

  for (let i = 0; i < menu.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [itemId]: prevState[itemId] - 1,
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prevState) => ({ ...prevState, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let total = 0;

    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = menu.find((product) => product.id === Number(item));
        total += cartItems[item] * itemInfo.price;
      }
    }
    return (Math.round(total * 100) / 100).toFixed(2);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  console.log("CartProvider in context file: ", cartItems);

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
