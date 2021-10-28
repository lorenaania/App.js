import React from "react";
import { FaChartArea } from "react-icons/fa";
import Container from "react-bootstrap/Container";

const Nav = () => {
  const stil = {
    color: "white",
    backgroundColor: "#32C787"
  };

  return (
    <div style={stil}>
      <Container>
        <h5 className="pt-3 pb-3 mb-0 d-inline-block">
          <FaChartArea /> Alegeri Europarlamentare 2019
        </h5>
      </Container>
    </div>
  );
};

export default Nav;
