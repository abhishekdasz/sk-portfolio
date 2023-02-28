import React from 'react'
import './Proj.css'
import musicPlayer from '../../Images/MusicPlayerMockup.png'

const Proj = () => {
  return (
    <>
    <div class="bg-image">
		<div class="content">
			<h1>Welcome to My Page</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae mauris ac justo porta tincidunt. Sed congue mauris eu pulvinar efficitur. Duis bibendum, augue quis vulputate fermentum, ex massa bibendum ipsum, vitae convallis orci dolor nec quam. Ut sit amet sagittis magna. Aliquam nec consequat ante, in euismod nisi.</p>
		</div>
		<div class="image">
			<img src={musicPlayer} alt="Example Image"/>
		</div>
	</div>
    </>
  )
}

export default Proj
