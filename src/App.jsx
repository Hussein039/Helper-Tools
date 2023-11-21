import { useState } from 'react'
import './App.css'
import Header from './component/navigation/Header'
import Footer from './component/navigation/Footer'
import Hero from './component/Hero'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import ImageUpload from './component/products/ImageUpload'
import About from './component/pages/About'
import Cards from './component/Cards'

function Home() {
  return (
    <>
      <Hero />
      <Cards />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      {/* <Dropdown /> */}
      <section className=''>    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/ImageUpload.jsx' element={<ImageUpload />} />
          <Route path='/pages/About.jsx' element={<About />} />
        </Routes>
      </section>
      <Footer />
    </Router>
  )
}

export default App;
