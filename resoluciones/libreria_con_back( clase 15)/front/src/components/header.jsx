import React from "react";
import "../App.css";
import utn from "../assets/UTN_logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <header className="d-flex align-items-center" style={{ backgroundColor: "red", margin:0}}>
      <img src={utn} className="img-fluid" style={{ height: "130px", width: "120px" }} />
      <h2 className="ms-3" style={{ position: "relative", top: "-35px", padding: "40px", textAlign: "center" }}>
        Libreria UTN
      </h2>
    </header>
  );
};

export default Header;
