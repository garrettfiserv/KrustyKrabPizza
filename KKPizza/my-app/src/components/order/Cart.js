import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useCartContext } from "../../context/CartProvider";
import { useUserContext } from "../../context/AuthProvider";
import axios from "axios";

export default function Cart() {
  const { cartItems, getTotalCartAmount, products, getTotalCartQuantity } =
    useCartContext();
  const { user } = useUserContext();
  const [customer, setCustomer] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const total = getTotalCartAmount();
    setTotalAmount(total);
  }, [getTotalCartAmount, products, cartItems]);

  useEffect(() => {
    const quantity = getTotalCartQuantity();
    setTotalQuantity(quantity);
  }, [getTotalCartQuantity, products, cartItems]);

  useEffect(() => {
    const customer = JSON.parse(localStorage.getItem("customer"));
    if (customer) {
      setLoading(true);
      setCustomer(customer);
    }
    setLoading(false);
  }, []);

  console.log("User: ", user.employeeID);
  console.log("Customer: ", customer.phoneNumber);
  console.log("Cart Items: ", cartItems);
  console.log("Products: ", products);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!customer) {
      console.error("Customer data is null.");
      return;
    }

    // const customerOrder = {
    //   employeeID: user.employeeID,
    //   phonenumber: customer.phoneNumber,
    //   ordertotal: 0,
    //   iscomplete: false,
    // };

    // try {
    //   // Create customerOrder
    //   const customerOrderResponse = await axios.post(
    //     "http://localhost:8080/customerOrder/add",
    //     customerOrder
    //   );

    //   const createdOrder = customerOrderResponse?.data;
    //   console.log("Customer Order Created:", createdOrder);
    try {
      const orderDetailsPOSTRequests = products.map(async (product) => {
        if (cartItems[product.productnumber] > 0) {
          const orderDetailResponse = await axios.post(
            "http://localhost:8080/orderDetail/add",
            {
              quantity: cartItems[product.productnumber],
              priceCharged: totalAmount,
              productNumber: product.productnumber,
            }
          );
          console.log("Order Detail Created:", orderDetailResponse?.data);
        }
      });
      await Promise.all(orderDetailsPOSTRequests);

      console.log("All Order Details Created");
      return navigate("/new-order/complete-order");
    } catch (error) {
      console.error("Error creating order in Cart Component:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Cart Page</h1>
      <main>
        <div>
          {products.map((product) => {
            if (cartItems[product.productnumber] !== 0) {
              return <CartItem key={product.productnumber} product={product} />;
            }
            return null;
          })}
        </div>
        <div>
          {totalAmount > 0 ? (
            <>
              <div>Quantity: {totalQuantity}</div>
              <div>Subtotal: ${totalAmount}</div>
              <button onClick={() => navigate("/new-order/menu")}>
                Add More Items
              </button>
              <button onClick={handleSubmit}>Checkout</button>
            </>
          ) : (
            <>
              <div>Cart Is Empty</div>
              <button onClick={() => navigate("/new-order/menu")}>
                Add Items
              </button>
            </>
          )}
        </div>
      </main>
    </>
  );
}
