import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import Home from "./components/home/Home";
import StartOrder from "./components/order/StartOrder";
import CustomerInfo from "./components/order/CustomerInfo";
import Menu from "./components/order/Menu";
import Cart from "./components/order/Cart";
import AdminHome from "./components/admin/AdminHome";
import Login from "./components/admin/Login";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Layout />}></Route> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/new-order/start" element={<StartOrder />}></Route>
        <Route path="/new-order/customer" element={<CustomerInfo />}></Route>
        <Route path="/new-order/menu" element={<Menu />}></Route>
        <Route path="/new-order/cart" element={<Cart />}></Route>

        {/* Admin */}
        <Route path="/admin/login" element={<Login />}></Route>
        <Route path="/admin/home" element={<AdminHome />}></Route>
      </Routes>
    </div>
  );
}

export default App;
