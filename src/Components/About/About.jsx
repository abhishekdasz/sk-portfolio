import React from 'react'
import Projects from './Projects'
import './About.css'


const About = () => {
  const slides = [
    { 
      url: require("../../Images/FlightBookingBG.png"), 
      title: 'FLIGHT BOOKING APP', 
      descr:'Experience the convenience of travel with our flight ticket app UI. From searching for the perfect flight to booking and checking in, our app provides a seamless and user-friendly experience. With an intuitive interface and personalized options.',
      divImg:  require("../../Images/FlightBookingAppMockup.png")
    },
    { 
      url: require("../../Images/MusicAppBG.png") , 
      title: 'MUSIC STREAM APP', 
      descr:'Experience the joy of music through our beautifully designed music streaming app UI. With an intuitive and user-friendly interface, you can explore endless playlists, discover new artists, and enjoy your favorite songs, all in one place.',
      divImg:  require("../../Images/MusicPlayerMockup.png")
    },
    { 
      url: require("../../Images/SmartHomeBG.png"), 
      title: 'SMART HOME APP UI', 
      descr:'Discover the world through our National Geographic website concept UI. Immerse yourself in stunning photography and captivating stories, and explore the wonders of nature and the human experience with our visually rich.',
      divImg:  require("../../Images/SmartHomeMockup.png")
    }, 
  ]
  return (
    <>
      <div className='proj-about-sec'> 
          <div className="about-sec-tile">
              <h1>MY PROJECTS</h1> 
              <div className="underlines-div"></div>
          </div>
        {/* <h1 className='proj'> MY PROJECTS </h1> <br /> */}

        <div> <Projects slides={slides}/> </div>

      </div>
    </>
  )
}

export default About
