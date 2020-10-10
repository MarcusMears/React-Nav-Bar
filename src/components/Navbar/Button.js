import React from 'react';
import "./Button.css";
// Standard Imports

const STYLES = [
    'btn--primary',
    'btn--outline'
]
//Method to implement CSS rules for Btn

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (<button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
    </button>
    )
}

/*
1.) Arrow function which takes in children, type, onClick, etc.
2.) Tern. ops. determine what style the button ought to be
3.) Template string is used to apply styles
*/