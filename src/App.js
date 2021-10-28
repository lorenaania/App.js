import React from "react";
import "./styles.css";
import Nav from "./nav";
import Card from "./uncard";
import Container from "react-bootstrap/Container";

export default function App() {
  const dublareCarduri = (numar) => {
    const sirAjutator = [...Array(numar)];
    return sirAjutator.map((element, indicele) => <Card key={indicele} />);
  };

  return (
    <div>
      <Nav />
      <Container style={{ marginTop: "30px" }}>{dublareCarduri(3)}</Container>
    </div>
  );
}
