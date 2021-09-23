import React from 'react';
import { TiSocialFacebookCircular, TiSocialLinkedinCircular, TiSocialInstagramCircular, TiSocialGithubCircular } from 'react-icons/ti';
import './Footer.css';

function Footer() {
    return(
        <div className="footer">
            <div className="footer-body">
                <div className='about'>
                    <p>Hungry Secrets is an app built using React technologies and the Edamam API; you can view recipes as inspiration for your next meal!</p>
                </div>
                <div className='social'>
                    <ul>
                        <li><TiSocialFacebookCircular /></li>
                        <li><TiSocialLinkedinCircular /></li>
                        <li><TiSocialInstagramCircular /></li>
                        <li><TiSocialGithubCircular /></li>
                    </ul>
                </div>
                <div className='contact'>
                    <p>Get In Touch:</p>
                    <p className="contact-email">info@hungrysecrets.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;