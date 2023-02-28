import React, { useState } from 'react'
import Projects from './Projects'
import musicPlayer from '../../Images/MusicPlayerMockup.png'
import flightBooking from '../../Images/FlightBookingAppMockup.png'
import { GrPrevious,GrNext } from "react-icons/gr";

const About = () => {
  return (
    <div className='about-section'>
        <div className="proj-title">
            <h1>MY PROJECTS</h1>
            <div className="project-underline"></div>
        </div> <br />
        <Projects projTitle="MUSIC STREAMING" imgsrc={musicPlayer} sliderBg="slider-bg-1"/>
        <Projects projTitle="FLIGHT BOOKING" imgsrc={flightBooking} sliderBg="slider-bg-2"/>
    </div>
  )
}

export default About
