import React from 'react'
import './Hero.css'
import insta from '../../Images/insta.png'
import linkedin from '../../Images/linkedin.png'
import behance from '../../Images/behance.png'
import Qualification from '../Qualification/Qualification'
import About from '../About/About'
import Challenge from '../UIChallengle/Challenge'
const Hero = () => {
  return (
    <>
        <div className='hero'>
            <div className="blur-bg"></div>
            <div className="name">
                <div className='hello'>Hello, I am</div>
                <div className='sk'>SK SHAHID ALI</div>
                <div className='des'>UI designer</div>
            </div>
            <div className="about">
                A designer who loves to make an impact. I'm a self-taught designer , who is passionate about design and loves to create solutions for complex problems through user-centric design.
            </div>
            <div className="buttons">
                <button className='con hero-btn'>Contact Me</button>
                <button className='download hero-btn'>Download CV</button>
            </div>
            <div className="social-icons">
                <h1>FIND ME ON </h1>
                <img src={insta} alt="insta" />
                <img src={linkedin} alt="linkedin" />
                <img src={behance} alt="behance" />
            </div>
        </div>

        <Qualification/>
        {/* <Projects/> */}
        {/* <Project/> */}
        {/* <Proj/> */}
        {/* <DivSlider/> */}
        {/* <About/> */}
        {/* <Slider/> */}
        {/* <ProjectSlider/> */}
        {/* <ProjectData/> */}
        <About/>
        <Challenge/>
    </>
  )
}

export default Hero
