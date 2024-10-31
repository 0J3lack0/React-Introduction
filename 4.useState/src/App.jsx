import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // string tckn = "12341510598"
  // string first name = "çağlar"
  // useState : hooks
  // useState : Bir state'in değerini set modu kullanarak değiştirildiğinde component yeniden render edilir.
  const [firstName, setFirstName] = useState("Çağlar");
  const [names, setNames] = useState(["çağlar", "onur", "raheem"]);
  const [userInfo, setUserInfo] = useState({
    username: "Çağlar",
    password: "198748",
  });
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(1);

  const handleChange = () => {
    setFirstName("ICARDI");
  };

  const arttir = () => {
    setCount(count + 1);
    setRenderCount(renderCount + 1);
  };

  const azalt = () => {
    setCount(count - 1);
    setRenderCount(renderCount + 1);
  };

  console.log("component", renderCount, " kez render edildi");
  return (
    <div>
      <div>{firstName}</div>
      <div>
        <button onClick={handleChange}>İsim Değiştir</button>
        <div>
          {names.map((name, index) => (
            <div key={index}>{name}</div>
          ))}
        </div>
        <div>
          {show ? (
            <div>
              {userInfo.username} {userInfo.password}
            </div>
          ) : (
            <div> bilgiler gösterilemiyor</div>
          )}
        </div>
      </div>
      <div>
        <h2>Count</h2>
        <div>{count}</div>
        <div>
          <button onClick={arttir}>Arttır</button>
        </div>
        <div>
          <button onClick={azalt}>Azalt</button>
        </div>
      </div>
    </div>
  );
}

export default App;
