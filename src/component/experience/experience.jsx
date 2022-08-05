import React from 'react'
import './experience.css'
import {DiHtml5} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {DiCss3} from 'react-icons/di'
import {FaReact} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'

const experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <DiHtml5 />
                            <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <DiJavascript />
                            <div>
                            <h4>JavaScript</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <DiCss3 />
                            <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <FaReact />
                            <div>
                            <h4>ReactJS</h4>
                            <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/*END OF FRONTEND*/}
                
                <div className="experience__backend">
                <h3>Education</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <MdSchool />
                            <div>
                            <h4>SDN Jakasampurna XI</h4>
                            <small className='text-light'>2012-2018</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <MdSchool />
                            <div>
                            <h4>SMPN 14 Bekasi</h4>
                            <small className='text-light'>2018-2021</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <MdSchool />
                            <div>
                            <h4>SMKN 1 Bekasi</h4>
                            <small className='text-light'>2021-2022</small>
                            </div>
                        </article>
                </div>
            </div>
            </div>
        </section>
    )
}

export default experience