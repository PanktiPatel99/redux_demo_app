import React from "react";

const Home = (props) => {
  console.log("Home", props.data);

  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://torontopubliclibrary.typepad.com/.a/6a00e5509ea6a188340240a4e973c4200d-pi"
            alt="phone"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "i phone 11" })
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
