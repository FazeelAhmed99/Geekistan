import React from 'react'
import './Body2.css';
import loopimg from '../images/loopimg.gif'

const Body2 = () => {
    return (
        <>
            <div className="body2-div">
                <marquee>
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />
                    <img src={loopimg} alt="image not load" id="logo-img" />

                </marquee>
            </div>

        </>
    )
}

export default Body2;
