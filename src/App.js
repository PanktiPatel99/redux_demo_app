import React from "react";
import "./App.css";

import HomeContainer from "./Containers/HomeContainer";
import HeaderContainer from "./Containers/HeaderContainer";

const App = () => {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
};

export default App;
