import React from "react";
import classes from './MyButton.module.css'

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
            {/* {props.children - можно получить текст, который поместили в тег}  */}

        </button>
    )
}

export default MyButton;