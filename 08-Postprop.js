import React from "react"

const Postprop = (props) => {
    const studentName = props.studentName;
    const score = props.score;
    return(
        <div>
            <p>{ studentName }</p>
            <p>{ score }</p>
        </div>
    )
}

export default Postprop

