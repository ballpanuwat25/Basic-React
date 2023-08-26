import React from "react"
import Postprop from './08-Postprop'

// Prop คือ Property ที่เราสามารถ่านค่าไปยัง Component

const App = () => {
    return (
        <div className="ui container comments">
            <Postprop studentName="Sunisa" score="95"/>
            <Postprop studentName="Phanwadee" score="75"/>
        </div>
    )
}

export default App