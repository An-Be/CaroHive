import React from "react";
import ShopProducts from "../products/ShopProducts";
import "./Sidebar.scss";

const CATEGORIES = [
  "T-shirts",
  "Sleeveless Shirts",
  "Graphic T-shirt",
  "Jeans",
  "Joggers",
];

const Sidebar = () => {
  return (
    <div className="ShopSideBar SideBar drawer-side ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <div className="menu p-4 w-80 bg-base-800">
        <h1 className="text text-lg">Filters</h1>
        <h2>Categories</h2>
        {CATEGORIES.map((category, key) => (
          <div className="form-control" key={key}>
            <label className="label cursor-pointer">
              <span className="label-text">{category}</span>
              <input type="checkbox" className="checkbox" />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
