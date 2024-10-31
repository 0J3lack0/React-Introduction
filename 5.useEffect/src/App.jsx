import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("her zaman çalışır");
  });

  useEffect(() => {
    console.log("Component ilk render edildiğinde çalışır");
  }, []);

  useEffect(() => {
    console.log(
      "Component ilk render edildiğinde ve FIRSTNAME state değeri değiştiğinde çalışır!"
    );
  }, [firstName]);

  useEffect(() => {
    console.log(
      "Component ilk render edildiğinde ve LASTNAME state değeri değiştiğinde çalışır!"
    );
  }, [lastName]);

  return (
    <div>
      <div>Use Effect</div>
      <div>
        <button onClick={() => setFirstName("Çağlar")}>
          Change First Name
        </button>
      </div>
      <div>
        <button onClick={() => setLastName("Çoban")}>Change Last Name</button>
      </div>
    </div>
  );
}

export default App;
