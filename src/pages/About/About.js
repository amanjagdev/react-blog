import React from 'react'
import "./About.css"


const About = () => {
    return (
        <div className="About">
            <div className="about-me">
                <div className="left">
                    <img src="https://avatars2.githubusercontent.com/u/34389172?s=460&u=be5a1c2e6df7ee4f36733f6b34cb300b8436fcb6&v=4" alt="" />
                </div>
                <div className="right">
                    <div className="desc">
                        <h3>Aman Jagdev</h3>
                        <p>I am a passionate Full stack Developer. I like to tinker with the technology. I usually work upon the MERN stack and i am familiar with Cloud too 😁</p></div>
                    <div className="links">
                        <a href="https://instagram.com/amankrjagdev" className="link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com/amanjagdev" className="link">
                        <i class="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/amanjagdev" className="link">
                        <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="welcome">
                <h4>Welcome Everyone 👋</h4>
                <p>This is where i post interesting tech stories , tutorials and intersting stories from my life. In some stories i might go with the flow but still hope that you like it.</p>
            </div>
        </div>
    )
}

export default About
