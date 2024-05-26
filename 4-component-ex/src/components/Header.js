import React from "react";

const Header = ({ title = "초기화값" }) => {
  return (
    <header>
      <h2 className="container">{title}</h2>
    </header>
  );
};

export default Header;
