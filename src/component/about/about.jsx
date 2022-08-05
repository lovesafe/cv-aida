import React from 'react'
import './about.css'
import ME from '../../assets/mee.jpg'
import {FaBirthdayCake} from 'react-icons/fa'
import {FaSchool} from 'react-icons/fa'
import {CgGenderMale} from 'react-icons/cg'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
       <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt='about image' />
        </div>
      </div>

      <div className="about__content">
        <div className='about__cards'>
          <article className='about__card'>
            <FaBirthdayCake className="about__icon" />
            <h5>Date of Birth</h5>
            <small>09 october 2006</small>
          </article>

          <article className='about__card'>
            <FaSchool className="about__icon" />
            <h5>Education</h5>
            <small>SMKN 1 KOTA BEKASI</small>
          </article>

          <article className='about__card'>
            <CgGenderMale className="about__icon" />
            <h5>Gender</h5>
            <small>Famele</small>
          </article>
          </div>
          
        <p>
        Halo, saya adalah seorang siswa dari program studi Rekayasa Perangkat lunak.
        Memiliki ketertarikan terhadap dunia internet terutama tentang pemrograman.
        </p>

        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
      </div>
      </div>
    </section>
  )
}
export default about