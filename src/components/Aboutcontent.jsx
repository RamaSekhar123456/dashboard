import { Link } from "react-router-dom"
import "./aboutcontent.css"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.jpg"


import React from 'react'

const Aboutcontent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react font-end developer. I create responsive secure website for  my  client.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="true"/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent