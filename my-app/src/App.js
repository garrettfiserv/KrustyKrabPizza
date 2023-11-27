import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Home from "./components/home/Home";
import StartOrder from "./components/order/StartOrder";
import CustomerInfo from "./components/order/CustomerInfo";
import MenuItems from "./components/order/MenuItems";
import Cart from "./components/order/Cart";
import AdminHome from "./components/admin/AdminHome";
import Login from "./components/admin/Login";
import Navbar from "./components/Navbar";
import CompleteOrder from "./components/order/CompleteOrder";
import Sidebar from "./components/admin/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Layout />}></Route> */}
        <Route path="/" element={<Home />}></Route>
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
        <Route path="/admin/login" element={<Login />}></Route>
        <Route path="/admin/home" element={<AdminHome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
