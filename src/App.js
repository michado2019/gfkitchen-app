import { useState } from "react";
import "./App.css";
import { Footer } from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import { Sidebar } from "./components/layouts/sidebar/Sidebar";
import AppRouter from "./components/routes";
import SmallScreenNav from "./components/SmallScreenNav";
import ourKitchenData from "./components/pages/ourKitchen/ourKitchenData/OurKitchenData";

function App() {
  //States
  const [storage, setStorage] = useState({});
  const [display, setDisplay] = useState(false);
  const [cartDisplay, setCartDisplay] = useState(false);
  const [input, setInput] = useState({
    price: JSON.parse(localStorage.getItem("price")),
    name: "",
    plates: 0,
    totalPrice: 0,
  });
  
  return (
    <div className="App">
      <Header
        display={display}
        setDisplay={setDisplay}
        cartDisplay={cartDisplay}
        setCartDisplay={setCartDisplay}
        input={input}
      />
      <SmallScreenNav display={display} setDisplay={setDisplay} />
      <div className="appCart-away"></div>
      <div className="sidebarRouter">
        <Sidebar />
        <AppRouter
          ourKitchenDishes={ourKitchenData}
          storage={storage}
          setStorage={setStorage}
          cartDisplay={cartDisplay}
          setCartDisplay={setCartDisplay}
          input={input}
          setInput={setInput}
        />
      </div>
      <Footer />
    </div>
  );
}
export default App;
