import React from 'react'
import Box from './Box'
import Boxdata from './BoxData'
import './Challenge.css'

const Challenge = () => {

    function cardFunc(val)
    {
        return(
            <Box img={val.img} title={val.title}  />
        )
    }

  return (
    <>
        <div className="Chal-sec">
            <div className="chal-title">
                <h1>100 DAYS OF UI CHALLENGE</h1>
                <div className="underline"></div>
            </div>

            <div className="chal-box">
                {/* Method1 */}
                {/* <Box img={Boxdata[0].img} title={Boxdata[0].title}  /> */}

                {/* Method2 */}
                {/* {Boxdata.map(cardFunc)} */}

                {/* Method3 */}
                {/* Inline call the function */}
                {Boxdata.map(function cardFun(val, index){
                    return(
                        <Box img={val.img} title={val.title} />
                    )
                })}
            </div>
            
            <div className="chal-btn">
                <button className='chal-btnn'>VIEW MORE</button>
            </div>
        </div>
    </>
  )
}

export default Challenge
