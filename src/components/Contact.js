import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <>

            <div className="contact-main-div">
                <div className="text-div">
                    <p id="p1">Get In Touch</p>
                    <p id="p2">Contact Us</p>
                    <p id="p3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, unde autem! Modi aut laudantium velit nam enim provident incidunt totam.
                    </p>
                </div>
                <div className="input-div">
                    <div className="name-email-inp">
                        <input type="name" placeholder="Name" className="name first-two"/>
                        <input type="email" placeholder="Email Address" className  className="email first-two"/>
                    </div>
                    <input type="text" placeholder="Subject" className="subj" />
                    <textarea placeholder="Message" cols="30" rows="10" className="txtarea"></textarea>
                    <div className="check">
                    <input type="checkbox" id="checkbox"/> I have read and agree to Afnan <a href="#">Terms and Conditions</a>
                    </div>
                    <button className="send-btn">SEND</button>
                </div>
            </div>

        </>
    )
}

export default Contact
