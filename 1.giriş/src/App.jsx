// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //jsx: {}
  //javascript kodları yazılır

  let a = 15;
  const firstName = "Çağlar";
  let vize1 = 60;
  let vize2 = 80;
  let result = true;

  let names = ["Recep", "Emine", "Abuzer", "Haydar"];
  return (
    <div>
      <h1>Name : {firstName}</h1>
      <p>age: {a}</p>
      <p>
        Mean Score :{(vize1 + vize2) / 2}
        {(vize1 + vize2) / 2 >= 55 ? (result = true) : (result = false)}
      </p>
      {result ? <p>Pass</p> : <p>did not Pass</p>}

      {names.map((isim, index) => (
        <div
          style={{ backgroundColor: "orange", border: "1px solid black" }}
          key={index}
        >
          {isim}
        </div>
      ))}
    </div>
  );
}

export default App;
