import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/product/getAll").then((response) => {
      setProducts(response?.data);
    });
  }, []);

  useEffect(() => {
    const getDefaultCart = () => {
      let cart = {};

      for (let i = 1; i < products.length + 1; i++) {
        cart[i] = 0;
      }
      return cart;
    };

    setCartItems(getDefaultCart());
  }, [products]);

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
        let itemInfo = products.find(
          (product) => product.productnumber === Number(item)
        );
        total += cartItems[item] * itemInfo.price;
      }
    }
    return (Math.round(total * 100) / 100).toFixed(2);
  };

  const getTotalCartQuantity = () => {
    let total = 0;

    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        total += Number(cartItems[item]);
      }
    }
    return total;
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotalCartQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
