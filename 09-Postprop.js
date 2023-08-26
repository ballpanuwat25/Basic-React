import React from "react"

const Postprop = (props) => {
    const myText = props.myText
    const myContent = props.children

    return (
        <div>
            <p>{myContent}</p>
        </div>
    )
}

export default Postprop