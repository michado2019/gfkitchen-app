import { useState } from 'react';
import './App.css';
import { Footer } from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';
import { Sidebar } from './components/layouts/sidebar/Sidebar';
import AppRouter from './components/routes';
import SmallScreenNav from './components/SmallScreenNav';

function App() {

  const [display, setDisplay] = useState(false)
  return (
    <div className="App">
    <Header display={display} setDisplay={setDisplay}/>
    <SmallScreenNav display={display} setDisplay={setDisplay}/>
    <div className='sidebarRouter'>
      <Sidebar />
      <AppRouter />
    </div>
    <Footer />
    </div>
  );
}

export default App;
