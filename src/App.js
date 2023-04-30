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
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
export const DbContext = createContext();

function App() {
  // Navigation
  const navigate = useNavigate();

  //Reload
  const handleReload = () => {
    navigate("/");
    window.location.reload();
  };

  // ErrorBoundary
  const ErrorBoundaryComponent = ({ error }) => {
    return (
      <div role="alert" className="errorBoundary">
        <h1 className="errorBoundary-title">Something went wrong!</h1>
        <p className="errorBoundary-message">{error.message}</p>
        <button className="errorBoundary-btn" onClick={handleReload}>
          Go back home
        </button>
      </div>
    );
  };
  //States
  const [storage, setStorage] = useState([]);
  const [display, setDisplay] = useState(false);
  const [cartDisplay, setCartDisplay] = useState(false);
  const [ourKitchenDisplay, setOurKitchenDisplay] = useState(false);
  const [input, setInput] = useState({
    price: 0,
    name: "",
    plates: 0,
    totalPrice: 0,
    dishImg: "",
    dishName: "",
    address: "",
    phone: "",
    deliveryTime: "",
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
      <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
        <DbContext.Provider value={db}>
          <Header
            display={display}
            setDisplay={setDisplay}
            cartDisplay={cartDisplay}
            setCartDisplay={setCartDisplay}
            input={input}
            ourKitchenDisplay={ourKitchenDisplay}
          />
          <SmallScreenNav display={display} setDisplay={setDisplay} />
          <div className="appCart-away"></div>
          <div className="sidebarRouter">
            <Sidebar ourKitchenDisplay={ourKitchenDisplay} />
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
              setOurKitchenDisplay={setOurKitchenDisplay}
            />
          </div>
          <Footer />
        </DbContext.Provider>
      </ErrorBoundary>
    </div>
  );
}
export default App;
