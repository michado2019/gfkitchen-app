import './App.css';
import { Footer } from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';
import { Sidebar } from './components/layouts/sidebar/Sidebar';
import AppRouter from './components/routes';
import SmallScreenNav from './components/SmallScreenNav';

function App() {
  return (
    <div className="App">
    <Header />
    <SmallScreenNav />
    <div className='sidebarRouter'>
      <Sidebar />
      <AppRouter />
    </div>
    <Footer />
    </div>
  );
}

export default App;
