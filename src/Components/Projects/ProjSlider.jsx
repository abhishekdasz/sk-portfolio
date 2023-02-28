import React, { useState } from 'react'

const ProjSlider = ({projData}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
        ProjSlider
      {/* <div style={{backgroundImage: `url(${projData[currentIndex].url})`}}></div> */}
    </div>
  )
}

export default ProjSlider
