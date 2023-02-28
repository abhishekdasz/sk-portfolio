import React from 'react'
import ProjectCard from './ProjectCard'
import './ProjectSlider.css'

const ProjectSlider = () => {
    let box = document.querySelector('.project-container')
    const btnPrev = () =>
    {
        let width = box.clientWidth; //here box is project-container
        box.scrollLeft = box.scrollLeft - width;
    }
    const btnNext = () =>
    {
        let width = box.clientWidth; //here box is project-container
        box.scrollLeft = box.scrollLeft + width;
    }
  return (
    <div className='ProjectSlider'>

        <div className="project-container">
            <ProjectCard cardno='1'/>
            <ProjectCard cardno='2'/>
            <ProjectCard cardno='3'/>
            <ProjectCard cardno='4'/>
        </div>


        <button onClick={btnPrev}><p>&lt;</p></button>
        <button onClick={btnNext}><p>&gt;</p></button>
    </div>
  )
}

export default ProjectSlider
