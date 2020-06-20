import React from 'react';
import { withRouter } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';

import { textColor, buttonBackgroundColor, buttonTextColor } from '../../context/theme';
import { useTheme } from '../../context/ThemeProvider';

import "./Navigation.css"

const Navigation = (props) => {

    const themeToggle = useTheme();

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
        <div className="Nav">
            <nav>
                <a className="link logo" onClick={() => props.history.push('/')}>Aman Jagdev</a>
                <div className="links">
                    <a className="link" onClick={() => props.history.push('/')}>Home</a>
                    <a className="link" onClick={() => props.history.push('/blog')}>Blog</a>
                    <Button onClick={() => themeToggle.toggle()}>Theme</Button>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(withTheme(Navigation));
