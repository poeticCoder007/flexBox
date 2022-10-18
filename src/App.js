import React from 'react'
import Nav from "./components/Nav.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Service from "./components/Service.jsx"
import Help from "./components/Help.jsx"
import Footer from "./components/Footer.jsx"



const App = () => {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Service />
      <Help />
      <Footer />
    </div>
  )
}

export default App
