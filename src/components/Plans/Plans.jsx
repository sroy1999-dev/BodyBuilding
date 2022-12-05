import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import WHITE_TICK from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className='plans-container'>
        <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>ready to start</span>
            <span>your journey</span>
            <span className='stroke-text'>now with us</span>
        </div>
        <div className="plans">
            {
                plansData.map(({icon, name, price, features}, index) => (
                    <div key={index} className="plan">
                        {icon}
                        <span>{name}</span>
                        <span>$ {price}</span>
                        <div className="features">
                            {
                                features.map((feature, index) => (
                                    <div className="feature">
                                        <img src={WHITE_TICK} alt="" />
                                        <span key={index}>{feature}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            <span>See more benefits `{'->'}`</span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Plans;