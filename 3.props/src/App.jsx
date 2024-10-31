import { useState } from "react";
import Product from "./Product";
import Container from "./Container";
import "./App.css";

function App() {
  return (
    <div>
      <Container>
        <Product productName="Ayakkabı" price={3200} />
        <Product productName="Cüzdan" price={300} />
      </Container>
    </div>
  );
}

export default App;
