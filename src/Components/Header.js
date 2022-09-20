import React from "react";

const Header = (props) => {
  console.log("Header", props.data);

  return (
    <div>
      <div className="add-to-cart">
        <span className="card-count">{props.data.length}</span>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUO7WZsrUlz6XT-6-e07YnghUoF6r-9w_0tQ&usqp=CAU"
          alt="cart icon"
        />
      </div>
    </div>
  );
};

export default Header;
