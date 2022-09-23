import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  const [count, setCount] = useState(0);

  function cartHandler() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Navbar count={count} />
      <Products cartHandler={cartHandler} />
    </div>
  );
}

export default App;
