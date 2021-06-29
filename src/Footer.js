import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <div className="footer">
            <div className="footer-body">
                <div className='about'>
                    <p>about info</p>
                </div>
                <div className='social'>
                    <ul>
                        <li>facebook</li>
                        <li>twitter</li>
                        <li>instagram</li>
                    </ul>
                </div>
                <div className='contact'>
                    <p>contact info</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;