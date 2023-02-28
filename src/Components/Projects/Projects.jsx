import React from 'react'
import musicApp from '../../Images/MusicAppBG.png'
import './Projects.css'
import musicPlayer from '../../Images/MusicPlayerMockup.png'
import { AiOutlineArrowRight } from "react-icons/ai";
import { GrPrevious,GrNext } from "react-icons/gr";

const Projects = (props) => {
  return (
    <div className='proj-sec'>
        <div className="projects-section">
          <div className={props.sliderBg}>
              <div className="slider-dark-bg"></div>
              <div className="inside">

                  <div className="content">
                    <h1> {props.projTitle} </h1>
                    <p>Experience the joy of music through our beautifully designed music streaming app UI. With an intuitive and user-friendly interface, you can explore endless playlists, discover new artists, and enjoy your favorite songs, all in one place</p>
                    <div><p>VIEW MORE <AiOutlineArrowRight className='arrow'/> </p></div>
                  </div>

                  <div className="image">
                    <img src={props.imgsrc} alt="" />
                  </div>
              </div>
          </div>

          <div className="slider-btn">
            <div className="btns"> <GrPrevious className='slider-btns'/> PREVIOUS </div>
            <div className="btns"> NEXT <GrNext className='slider-btns'/> </div>
          </div>
        </div>
    </div>
  )
}

export default Projects
