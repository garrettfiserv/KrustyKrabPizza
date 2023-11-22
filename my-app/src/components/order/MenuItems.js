import { Link } from "react-router-dom";
import { menu } from "../../dummyData.js";
import MenuItem from "./MenuItem.js";

export default function MenuItems() {
  return (
    <>
      <h1>Menu Page</h1>
      <main>
        <Link to="/new-order/customer-info">Return</Link>
        <div className="products">
          {menu.map((menuItem) => (
            <MenuItem data={menuItem} />
          ))}
        </div>
      </main>
    </>
  );
}
