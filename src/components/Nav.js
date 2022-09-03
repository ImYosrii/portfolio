import React, {useState} from 'react';
import { FaGripLines } from 'react-icons/fa'
export default function Nav() {
    const [scroll, setScroll] = useState(false)
    return (
        <div className="nav-container">
            <div className={`mobile-scroll-tab ${scroll?'mobile-scroll-tab-active':''}`}>
                <p className={`mobile-scroll-icon ${scroll?'mobile-icon-active':''}`} 
                   onClick={()=>setScroll(prev=>!prev)}><FaGripLines />
                </p>
                <div className={`mobile-links-container ${scroll ? 'mobile-links-active':''}`}>
                    <a href="#top">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#certificates">Certificates</a>
                </div>
            </div>
        </div>
    )
}