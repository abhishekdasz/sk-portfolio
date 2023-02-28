import React from 'react'
import ch1 from '../../Images/Signup.png'
import './Box.css'

const Box = (props) => {
  return (
    <>
        <div className="box">
            <div className="box-img">
                <img src={props.img} alt="ch1" />
            </div>
            <div className="box-title">
                <p> {props.title} </p>
            </div>
        </div>
    </>
  )
}

export default Box
