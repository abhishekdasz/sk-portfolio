import React, { useState } from 'react'

const ImageSlider = ({slides}) => {
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
    <div>
      ImageSlider
      <br /> <br />

      <div> <img src={slides[currentIndex].url} alt="img" /> </div>
      <div>{slides[currentIndex].title}</div>
      <div>{slides[currentIndex].descr}</div>

      <button onClick={prevBtn}> PREV </button>
      <button onClick={nextBtn}> NEXT </button>
    </div>
  )
}

export default ImageSlider
