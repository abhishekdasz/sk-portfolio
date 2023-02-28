import { useState } from 'react'
import './Projects.css'
import { GrPrevious,GrNext } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevBtn = () =>
    {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextBtn = () =>
    {
        const isLastSlide = currentIndex === slides.length-1
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
  return (
    <>
        <div className="proj--container">
            {/* style={{ backgroundImage:`url(${slides[currentIndex].url})`}}    internal css */}
            <div className="proj-back-image">
                <img src={slides[currentIndex].url} alt="back-img" />
            </div>
            <div className="info">
                <div className="content">
                    <h1> {slides[currentIndex].title} </h1>
                    <p> {slides[currentIndex].descr} </p>
                    <p> VIEW MORE <AiOutlineArrowRight className='arrow'/> </p>
                </div>
                <div className="img">
                    <img src={slides[currentIndex].divImg} alt="" />
                </div>

            </div>
        </div>

        <div className="buttonss">
            <button onClick={prevBtn} className='slider-btns'> <GrPrevious/> </button>
            <button onClick={nextBtn} className='slider-btns'> <GrNext/> </button>
        </div>


        {/* <section className="project-container">
            <div className="proj-slider">
                <div className="slideBG" style={{ backgroundImage:`url(${slides[currentIndex].url})`}}>
                    <div className="darkBGG"></div>
                    <div className="slide">
                        <div className="content">
                            <h2>{slides[currentIndex].title}</h2>
                            <p>{slides[currentIndex].descr}</p>
                            <div><p>VIEW MORE-</p></div>
                        </div>
                        <div className="image">
                            <img src={slides[currentIndex].divImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

      {/* <div> <img src={slides[currentIndex].url} alt="img" /> </div>
      <div>{slides[currentIndex].title}</div>
      <div>{slides[currentIndex].descr}</div> */}
    </>
  )
}

export default Projects
