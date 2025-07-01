import React from 'react'
import Style from "../css/Navbar.module.css";

const Navbar = () => {
  const car = 'BMW'
  return (
    <div>
      <h1 className={car == "Toyota" ? Style.navbar : Style.navbar2}>Navbar</h1>
    </div>
  );
}

export default Navbar