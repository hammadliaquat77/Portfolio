import { Toaster } from 'react-hot-toast';
import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Experiance from './components/Experiance';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Porttfolio from './components/Porttfolio';

function App() {

  return (
  <>
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

</>
  )
}

export default App
