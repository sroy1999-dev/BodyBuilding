import React from 'react';
import './Reasons.css';
import IMAGE1 from '../../assets/image1.png';
import IMAGE2 from '../../assets/image2.png';
import IMAGE3 from '../../assets/image3.png';
import IMAGE4 from '../../assets/image4.png';
import NB from '../../assets/nb.png';
import ADIDAS from '../../assets/adidas.png';
import NIKE from '../../assets/nike.png';
import TICK from '../../assets/tick.png';

const Reasons = () => {
    return (
        <div className='reasons' id='reasons'>
            <div className="left-r">
                <img src={IMAGE1} alt="" />
                <img src={IMAGE2} alt="" />
                <img src={IMAGE3} alt="" />
                <img src={IMAGE4} alt="" />
            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div>
                    <span className='stroke-text'>why </span>
                    <span>choose us?</span>
                </div>
                <div className='details-r'>
                    <div>
                        <img src={TICK} alt="" />
                        <span>over 140+ expert coaches</span>
                    </div>
                    <div>
                        <img src={TICK} alt="" />
                        <span>train smarter and faster than before</span>
                    </div>
                    <div>
                        <img src={TICK} alt="" />
                        <span>1 free program for new member</span>
                    </div>
                    <div>
                        <img src={TICK} alt="" />
                        <span>reliable partners</span>
                    </div>
                </div>
                <span>our partners</span>
                <div className="partners">
                    <img src={NB} alt="" />
                    <img src={ADIDAS} alt="" />
                    <img src={NIKE} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons;