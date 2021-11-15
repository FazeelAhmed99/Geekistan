import React from 'react';
import './Header.css';
// import newloop from './images/newloop.png';


function Header() {
    return (
        <>

            <div className="nav-bar">
                <div className="left-nav">
<<<<<<< HEAD
                    <img src={require('./assets/newloop.png').default } alt="image not load" />
=======
                    <img src={require('./images/newloop.png').default } alt="image not load" />
>>>>>>> 3876424699795cd4f384efe107dba781ef6a5605
                    <h4>Infinite Loopers</h4>
                </div>
                <div className="right-nav">
                    <li>HOME</li>
                    <li>BLOG</li>
                    <li>CONTACT</li>
                </div>
                
            </div>
        </>
    )
}
export default Header;
