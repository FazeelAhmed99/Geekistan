import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer-main-div">
                <div className="footer-info">
                    <div className="div-1">
                        <p id="para-1">Location</p>
                        <p className="para-2 this-para">Autobhan Road,</p>
                        <p className="para-3 this-para">Hyderabad</p>
                    </div>
                    <div className="div-2">
                        <p className="bus-tag">Bussiness Hours</p>
                        <p className="para-3 this-para">Monday - Friday: 9am to 5pm</p>
                        <p className="para-4 this-para"> Saturday: 9am to 2pm</p>
                        <p className="para-5 this-para">Sunday: Closed</p>
                    </div>
                    <div className="div-3">
                        <p className="para-6 con-tag">Contact us</p>
                        <p className="para-7 this-para">afnan5sadhayo@gmail.com</p>
                        <p className="para-8 this-para">+92 332 2859605</p>
                    </div>
                    <div className="div-4">
                        <p className="para-9">Follow us</p>
                    </div>
                </div>
                <div className="copyright">
                    <p className="copy-para">© 2021 Geekistans, all rights reserved.</p>
                </div>
            </div>

        </>
    )
}

export default Footer
