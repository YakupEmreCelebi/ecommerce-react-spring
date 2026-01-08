
import './App.css'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>

      <div className='min-h-[85vh]'>
        <Outlet/>
      </div>
      
      <Footer/>
    </>
  );
}

export default App
