import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import './Scroll.css';

function Scroll() {
    const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset <= 400){
        setShowScroll(true)
    } 
    else if (showScroll && window.pageYOffset > 400){
        setShowScroll(false)
    }
  };

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)
  
    return (
            <div className={ showScroll ? 'scroll-hide' : 'scroll-active'}>
                <FaArrowAltCircleUp className="scroll-icon"
                    onClick={scrollTop}/>
            </div>
    )
}

export default Scroll;