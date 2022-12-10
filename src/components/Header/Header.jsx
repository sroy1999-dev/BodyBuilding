import { React, useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import BARS from '../../assets/bars.png';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='header'>
      <img src={Logo} alt="The Fit Club" />
      {
        (menuOpen === false && mobile === true) ? (
          <div style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}} onClick={
            () => setMenuOpen(true)
          }>
            <img src={BARS} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
          </div>
        ) : (
          <ul className='header-menu'>
            <li><a onClick={() => setMenuOpen(false)} smooth={true} activeClass='active' href="#home">Home</a></li>
            <li><a onClick={() => setMenuOpen(false)} smooth={true} href="#programs">Programs</a></li>
            <li><a onClick={() => setMenuOpen(false)} smooth={true} href="#reasons">Why us</a></li>
            <li><a onClick={() => setMenuOpen(false)} smooth={true} href="#plans">Plans</a></li>
            <li><a onClick={() => setMenuOpen(false)} smooth={true} href="#testimonials">Testimonials</a></li>
          </ul>
        )
      }
    </div>
  )
}

export default Header;
