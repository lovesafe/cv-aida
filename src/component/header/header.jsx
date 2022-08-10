import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'

const header = ({ datas }) => { 
    const { apa, setApa } = datas
    const { job, setJob } = datas
    const { salam, setSalam } = datas
  
  function halo(){
    setSalam ("Hello Saya");
  }
  
  function orang(){
    setApa ("Aida Rahma");
  }
  
  function kerja(){
    setJob ("SOFTWARE ENGINER");
  }
    return (
      <header>
        <div className="container header__container">
          <div className='title'>
          <h4>{salam}</h4>
          <h1>{apa}</h1>
          <h3>{job}</h3>
          </div>
          <button className='btn btn-primary' onClick={() => {orang(); kerja(); halo();}}><i><b>Klik ini!</b></i></button>
          <CTA />
          <HeaderSocials />
  
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
      </header>
    )
  }

export default header