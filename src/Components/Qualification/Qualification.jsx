import React from 'react'
import './Qualification.css'
import ux from '../../Images/ux.png'

const Qualification = () => {
  return (
    <>
        <div className="about-sec">
            <div className="about-tile">
                <h1>ABOUT ME</h1> 
                <div className="underline-div"></div>
            </div>
            <div className="about-content">

            <div className="qualification_content">
                {/* Qualification 1 */}
                <div className="qualification_data">
                    <div className='left'>
                        <h1 className="qual-title">COLLEGE</h1>
                        <h3 className="qual-details">C.V. Raman Global <br /> University</h3>
                    </div>
                    <div className="middle">
                        <span className="qual-round"></span>
                        <span className="qual-round-2"></span>
                        <span className="qual-round-3"></span>
                        <span className="qual-line"></span>
                    </div>
                    <div className="right">
                        <h1>2020-2024</h1>
                    </div>
                </div>

                {/* Qualification 2 */}
                <div className="qualification_data">
                    <div className='left'>
                        <h1 className="qual-title">INTERMEDIATE</h1>
                        <h3 className="qual-details">STEWART SCIENCE <br /> COLLEGE</h3>
                    </div>
                    <div className="middle">
                        <span className="qual-round"></span>
                        <span className="qual-round-2"></span>
                        <span className="qual-round-3"></span>
                        <span className="qual-line"></span>
                    </div>
                    <div className="right">
                        <h1>2017-2019</h1>
                    </div>
                </div>

                {/* Qualification 3 */}
                <div className="qualification_data">
                    <div className='left'>
                        <h1 className="qual-title">SCHOOLING</h1>
                        <h3 className="qual-details">VENKATESWAR ENGLISH <br /> MEDIUM SCHOOL</h3>
                    </div>
                    <div className="middle">
                        <span className="qual-round"></span>
                        <span className="qual-round-2"></span>
                        <span className="qual-round-3"></span>
                        <span className="qual-line"></span>
                    </div>
                    <div className="right">
                        <h1>2005-2017</h1>
                    </div>
                </div>

                {/* Qualification 4 */}
                <div className="qualification_data">
                    <div className='left'>
                        <h1 className="qual-title">DATE OF BIRTH</h1>
                        <h3 className="qual-details"></h3>
                    </div>
                    <div className="middle">
                        <span className="qual-round"></span>
                        <span className="qual-round-2"></span>
                        <span className="qual-round-3"></span>
                        <span className="qual-line"></span>
                    </div>
                    <div className="right">
                        <h1>14 SEPTEMBER 2001</h1>
                    </div>
                </div>
            </div>



            {/* cards section */}
            <div className="skills-sec">
                <div className="left-card">
                    <div className="card actives top-2">
                        <div className="card-img"><img src={ux} alt="ux-img" /></div>
                        <div className="card-title">UI Designing</div>
                        <ul>
                            <li>Wireframing</li>
                            <li>Design Process</li>
                            <li>Prototyping in Figma</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={ux} alt="ux-img" /></div>
                        <div className="card-title">JAVA <br /> DEVELOPMENT</div>
                        <ul>
                            <li>Strong foundation in programming principles.</li>
                            {/* <li>Design Process</li>
                            <li>Prototyping in Figma</li> */}
                        </ul>
                    </div>
                </div>

                <div className="right-card">
                    <div className="card top-2">
                        <div className="card-img"><img src={ux} alt="ux-img" /></div>
                        <div className="card-title">FRONT END WEB <br /> DEVELOPMENT</div>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-img"><img src={ux} alt="ux-img" /></div>
                        <div className="card-title">FLUTTER <br /> DEVELOPMENT</div>
                        <ul>
                            <li>DEVELOPING HYBRID APPLICATIONS IN FLUTTER </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    </>
  )
}

export default Qualification;
