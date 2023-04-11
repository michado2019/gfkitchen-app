import { useState } from "react";
import "./App.css";
import { Footer } from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import { Sidebar } from "./components/layouts/sidebar/Sidebar";
import AppRouter from "./components/routes";
import SmallScreenNav from "./components/SmallScreenNav";
import CartAway from "./components/CartAway";

function App() {
  const [storage, setStorage] = useState({});
  const [display, setDisplay] = useState(false);
  const [cartDisplay, setCartDisplay] = useState(false);
  return (
    <div className="App">
      <Header display={display} setDisplay={setDisplay} cartDisplay={cartDisplay} setCartDisplay={setCartDisplay}/>
      <SmallScreenNav display={display} setDisplay={setDisplay} />
      <div className="appCart-away">
      <CartAway setDisplay={setDisplay} cartDisplay={cartDisplay} setCartDisplay={setCartDisplay}/>
      </div>
      <div className="sidebarRouter">
        <Sidebar />
        <AppRouter storage={storage} setStorage={setStorage} cartDisplay={cartDisplay} setCartDisplay={setCartDisplay}/>
      </div>
      <Footer />
    </div>
  );
}
export default App;