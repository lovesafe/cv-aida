import React, {useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/experience'
import Portfolio from './component/portfolio/portfolio'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer';

const App = () => {
const [apa, setApa] = useState('Halloooo!')
const [salam, setSalam] = useState('')
const [job, setJob] = useState('')

const datas = {
  apa, setApa, salam, setSalam, job, setJob
}

    return (
      <Router>
        <>
          <Nav/>
          <Routes >
            <Route exact path='/' element={<Header datas={datas}/>} />
            <Route exact path='/about' element={<About/>} /> 
            <Route exact path='/experience' element={<Experience/>} />
            <Route exact path='/portfolio' element={<Portfolio/>} />
            <Route exact path='/contact' element={<Contact/>} />
          </Routes>
          <Footer/>
        </>
      </Router>
    )
}

export default App