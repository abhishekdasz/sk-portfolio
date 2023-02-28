
import musicApp from '../../Images/MusicAppBG.png'
import musicPlayer from '../../Images/MusicPlayerMockup.png'
import './Project.css'
import React, { useState } from 'react';
import { GrPrevious,GrNext } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";

const divs = [
  <div className='proj-sec' key="1">
  <div className="proj-title">
    <h1>MY PROJECTS</h1>
    <div className="project-underline"></div>
  </div>
      <div className="projects-section">
        <div className="proj-slider">
            <div className="slider-dark-bg"></div>
            <div className="inside">

                <div className="content">
                  <h1>MUSIC STREAMING APP UI</h1>
                  <p>Experience the joy of music through our beautifully designed music streaming app UI. With an intuitive and user-friendly interface, you can explore endless playlists, discover new artists, and enjoy your favorite songs, all in one place</p>
                  <div><p>VIEW MORE <AiOutlineArrowRight className='arrow'/> </p></div>
                </div>

                <div className="image">
                  <img src={musicPlayer} alt="" />
                </div>
            </div>
        </div>

        <div className="slider-btn">
          <div className="btns"> <GrPrevious className='slider-btns'/> PREVIOUS </div>
          <div className="btns"> NEXT <GrNext className='slider-btns'/> </div>
        </div>
      </div>
  </div>,
    <div className='proj-sec' key="2">
    <div className="proj-title">
      <h1>MY PROJECTS</h1>
      <div className="project-underline"></div>
    </div>
        <div className="projects-section">
          <div className="proj-sliderssss">
              <div className="slider-dark-bg"></div>
              <div className="inside">
  
                  <div className="content">
                    <h1>MUSIC STREAMING APP UI</h1>
                    <p>Experience the joy of music through our beautifully designed music streaming app UI. With an intuitive and user-friendly interface, you can explore endless playlists, discover new artists, and enjoy your favorite songs, all in one place</p>
                    <div><p>VIEW MORE <AiOutlineArrowRight className='arrow'/> </p></div>
                  </div>
  
                  <div className="image">
                    <img src={musicPlayer} alt="" />
                  </div>
              </div>
          </div>
  
          <div className="slider-btn">
            <div className="btns"> <GrPrevious className='slider-btns'/> PREVIOUS </div>
            <div className="btns"> NEXT <GrNext className='slider-btns'/> </div>
          </div>
        </div>
    </div>,



  <div className='proj-sec' key="3">
  <div className="proj-title">
    <h1>MY PROJECTS</h1>
    <div className="project-underline"></div>
  </div>
      <div className="projects-section">
        <div className="proj-sliderss">
            <div className="slider-dark-bg"></div>
            <div className="inside">

                <div className="content">
                  <h1>MUSIC STREAMING APP UI</h1>
                  <p>Experience the joy of music through our beautifully designed music streaming app UI. With an intuitive and user-friendly interface, you can explore endless playlists, discover new artists, and enjoy your favorite songs, all in one place</p>
                  <div><p>VIEW MORE <AiOutlineArrowRight className='arrow'/> </p></div>
                </div>

                <div className="image">
                  <img src={musicPlayer} alt="" />
                </div>
            </div>
        </div>

        <div className="slider-btn">
          <div className="btns"> <GrPrevious className='slider-btns'/> PREVIOUS </div>
          <div className="btns"> NEXT <GrNext className='slider-btns'/> </div>
        </div>
      </div>
  </div>,
];

function DivSlider() {
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentDivIndex((prevIndex) => (prevIndex === 0 ? divs.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentDivIndex((prevIndex) => (prevIndex === divs.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      {divs[currentDivIndex]}
      <button className="btns" onClick={handlePrevClick}><GrPrevious className='slider-btns'/></button>
      <button className="btns" onClick={handleNextClick}>Next</button>
    </div>
  );
}

export default DivSlider;
