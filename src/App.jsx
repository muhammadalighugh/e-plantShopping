import React, { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="background-image"></div>
          <div className="content">
            <div className="landing-content">
              <h1>Welcome to Paradise Nursery</h1>
              <div className="divider"></div>
              <p>Where Green Meets Serenity</p>
              <button className="get-started-button" onClick={() => setShowProductList(true)}>
                Get Started
              </button>
            </div>
            <div className="about-us-container">
              <AboutUs />
            </div>
          </div>
        </div>
      ) : (
        <ProductList onBack={() => setShowProductList(false)} />
      )}
    </div>
  );
}

export default App;
