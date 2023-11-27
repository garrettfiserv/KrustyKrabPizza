import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import StartOrder from "./components/order/StartOrder";
import CustomerInfo from "./components/order/CustomerInfo";
import MenuItems from "./components/order/MenuItems";
import Cart from "./components/order/Cart";
import AdminLogin from "./components/admin/AdminLogin";
import AdminHome from "./components/admin/AdminHome";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import CompleteOrder from "./components/order/CompleteOrder";
import { useUserContext } from "./context/AuthProvider";
import Products from "./components/admin/Products/Products";
import Employees from "./components/admin/Employees/Employees";
import Customers from "./components/admin/Customers/Customers";
import CustomerOrders from "./components/admin/Customers/CustomerOrders";

function App() {
  const { user, login, isLoggedIn } = useUserContext();

  const loader = async (userData) => {
    const employee = await userData;

    if (employee) {
      login(employee);
    }
  };

  console.log(user);

  return (
    <>
      {!isLoggedIn ? (
        <div>
          <Routes>
            <Route path="/" element={<Login loader={loader} />}></Route>
            {/* <Route path="/unauthorized-access" element={ErrorPage} /> */}
          </Routes>
        </div>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/new-order/start" element={<StartOrder />}></Route>
            <Route
              path="/new-order/customer-info"
              element={<CustomerInfo />}
            ></Route>
            <Route path="/new-order/menu" element={<MenuItems />}></Route>
            <Route path="/new-order/cart" element={<Cart />}></Route>
            <Route
              path="/new-order/complete-order"
              element={<CompleteOrder />}
            ></Route>

            {/* Admin */}
            <Route path="/admin/login" element={<AdminLogin />}></Route>
            <Route path="/admin/home" element={<AdminHome />}></Route>
            <Route path="/admin/products" element={<Products />}></Route>
            <Route path="/admin/employees" element={<Employees />}></Route>
            <Route path="/admin/customers" element={<Customers />}></Route>
            <Route
              path="/admin/customer-orders"
              element={<CustomerOrders />}
            ></Route>
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
