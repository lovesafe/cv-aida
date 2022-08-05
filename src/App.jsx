import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/experience'
import Portfolio from './component/portfolio/portfolio'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'


const App = () => {
    return (
        <>
          <Header />
          <Nav />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </>
    )
}

export default App