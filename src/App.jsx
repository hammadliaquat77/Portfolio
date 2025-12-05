import { Toaster } from 'react-hot-toast';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Experiance from './components/Experiance';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Porttfolio from './components/Porttfolio';

import { DarkModeProvider } from './context/DarkModeContext';

function App() {


  return (
  <>
  <DarkModeProvider>

  <div>
  <Navbar/>
  <Home/>
  <About/>
  <Porttfolio/>
  <Experiance/>
  <Contact/>
  <Footer/>
  </div>
  <Toaster/>
  </DarkModeProvider>

</>
  )
}

export default App
