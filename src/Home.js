import React from "react";
import "./Home.css";
import Product from "./Product";
import db from "./firebase";

function Home() {
  const getProducts = () => {
    console.log("get Products");
    db.collection("products").onSnapshot((snapshot) => {
      console.log(snapshot);
    });
  };
  getProducts();
  return (
    <div className="Home">
      <div className="Home-container">
        <div
          className="Home-banner"
          style={{
            backgroundImage:
              "url(https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_3000x1200_CV4_2._CB415751492_.jpg)",
          }}
        ></div>
        <div className="Home-content">
          <div className="Home-row">
            <Product />
          </div>
          <div className="Home-row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
