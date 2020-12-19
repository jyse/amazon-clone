import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <div className="Header-logo">
          <img
            src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
            alt="amazonLogo"
          />
        </div>
      </Link>
      <div className="Header-optionAddress">
        <div className="Header-option">
          <span className="Header-optionLineOne"> Hello,</span>
          <span className="Header-optionLineTwo"> Select your address</span>
        </div>
      </div>
      <div className="Header-search">
        <input className="Header-searchInput" type="text" />
        <div className="Header-searchIconContainer">
          <SearchIcon />
        </div>
      </div>
      <div className="Header-navItems">
        <div className="Header-option">
          <span className="Header-optionLineOne">Hello, Nazariy</span>
          <span className="Header-optionLineTwo">Account & Lists</span>
        </div>
        <div className="Header-option">
          <span className="Header-optionLineOne">Returns</span>
          <span className="Header-optionLineTwo">& Orders</span>
        </div>
        <Link to="/cart">
          <div className="Header-optionCart">
            <ShoppingBasketIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
