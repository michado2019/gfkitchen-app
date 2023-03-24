import './App.css';
import { Footer } from './components/layouts/footer/Footer';
import Header from './components/layouts/header/Header';
import { Sidebar } from './components/layouts/sidebar/Sidebar';
import AppRouter from './components/routes';

function App() {
  return (
    <div className="App">
    <Header />
    <div className='sidebarRouter'>
      <Sidebar />
      <AppRouter />
    </div>
    <Footer />
    </div>
  );
}

export default App;
