import React from 'react';
import './Programs.css';
import { programsData } from '../../data/programsData';
import Right_Arrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
        <div className="program-categories">
            {
                programsData.map(({image, heading, details}) => (
                    <div className='category'>
                        {image}
                        <span>{heading}</span>
                        <span>{details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={Right_Arrow} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Programs;