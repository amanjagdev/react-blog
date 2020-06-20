import React from 'react';
import styled from 'styled-components';

import { buttonBackgroundColor, buttonTextColor } from '../../context/theme';

import "./Footer.css"

const Footer = (props) => {

    const Button = styled.button`
        background: ${buttonBackgroundColor};
        border: none;
        border-radius: 0.3em;
        box-shadow: none;
        color: ${buttonTextColor};
        cursor: pointer;
        font-size: 1em;
        padding: 0.5em 1em;
        `;
    return (
        <div className="Footer">
            <h4>
                <div className="main-text">
                    Made with <i className="fas fa-heart"></i> by </div>
                <div className="green">
                    <a href="https://amankrjagdev.web.app">Aman Kumar Jagdev</a>
                </div>
            </h4>
            <a href="https://github.com/amanjagdev/react-blog" ><Button>Fork me on <i class="fab fa-github"></i></Button></a>
        </div>
    )
}

export default Footer;