import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from "./Components/Hero.jsx";
import Main from "./Components/Main.jsx";
import Quote from './Components/Quote.jsx';
import Call from './Components/Call.jsx';
import Footer from './Components/Footer.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="box-border">
  <nav className="bg-blue-600 text-white flex h-[70px] w-screen px-4 py-3">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">Logo</div>
      <ul className="flex space-x-6">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </nav>
</div>
   <Hero/>
   <Main/>
   <Quote/>
   <Call/>
   <Footer/>

  
    </>
  )
}

export default App
