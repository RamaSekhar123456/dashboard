import "./workcard.css"
import WorkCard from "../components/WorkCard"
import WorkCardData from "../components/WorkCardData"
import React from 'react'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>PROJECTS</h1>
        <div className='project-container'>
        {WorkCardData.map((val,ind) =>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imgsrc} 
                title={val.title}
                text={val.text}
                View={val.View}
                />
            );
        })}
                
        </div>
    </div>
  )
}

export default Work;