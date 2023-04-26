import { useState, createContext, useEffect } from "react";
import "./App.css";
import { Footer } from "./components/layouts/footer/Footer";
import Header from "./components/layouts/header/Header";
import { Sidebar } from "./components/layouts/sidebar/Sidebar";
import AppRouter from "./components/routes";
import SmallScreenNav from "./components/SmallScreenNav";
import ourKitchenData from "./components/pages/ourKitchen/ourKitchenData/OurKitchenData";
import { db } from "./components/firebase";
import { getDocs, collection } from "firebase/firestore";
export const DbContext = createContext();

function App() {
  //States
  const [storage, setStorage] = useState([]);
  const [display, setDisplay] = useState(false);
  const [cartDisplay, setCartDisplay] = useState(false);
  const [input, setInput] = useState({
    price: 0,
    name: "",
    plates: 0,
    totalPrice: 0,
    dishImg: "",
    dishName: "",
    address: "",
    phone: "",
    deliveryTime: ""
  });
  const [docsLength, setDocsLength] = useState("");
  const [loading, setLoading] = useState(false);

  //useEffect
  useEffect(() => {
    const dbRef = collection(db, "dishOrders");
    async function getAllDishDocs() {
      const dishDocs = await getDocs(dbRef);
      setDocsLength(dishDocs.docs.length);
    }
    getAllDishDocs();
  }, []);
  return (
    <div className="App">
      <DbContext.Provider value={db}>
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
            docsLength={docsLength}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
        <Footer />
      </DbContext.Provider>
    </div>
  );
}
export default App;