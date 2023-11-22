import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { menu } from "../../dummyData";
import CartContext from "../../context/CartProvider";
import CartItem from "./CartItem";

export default function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(CartContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <>
      <h1>Cart Page</h1>
      <main>
        <div>
          {menu.map((item) => {
            if (cartItems[item.id] !== 0) {
              return <CartItem data={item} />;
            }
          })}
        </div>

        <div>
          <button onClick={() => navigate("/new-order/menu")}>Add Items</button>
          {totalAmount > 0 ? (
            <>
              <div>Subtotal: ${totalAmount}</div>
              <button onClick={() => navigate("/new-order/complete-order")}>
                Checkout
              </button>
            </>
          ) : (
            <div>Cart Is Empty</div>
          )}
        </div>
      </main>
    </>
  );
}
