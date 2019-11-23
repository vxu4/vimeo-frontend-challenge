import React from "react";

const paragraph = {
    margin: "0px"
}

const title = {
    fontSize: "20px",
    margin: "0px 0px 10px", 
}

export const TextBlurb = ({ ...props }) => (
    <div>
        <h1 style={title}> {props.title} </h1>
        <p style={paragraph}> {props.text} </p>
    </div>
)

export default TextBlurb;