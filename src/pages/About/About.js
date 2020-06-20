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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum voluptatum quas eaque voluptate voluptatem ratione itaque pariatur fuga harum?</p></div>
                    <div className="links">
                        <a href="https://instagram.com" className="link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com" className="link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" className="link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="welcome">
                <h4>Welcome to my Blog Site </h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nemo vero voluptas error voluptatibus delectus, qui excepturi a harum ad odit, repellat similique placeat temporibus iure quam cupiditate consequuntur natus?</p>
            </div>
        </div>
    )
}

export default About
