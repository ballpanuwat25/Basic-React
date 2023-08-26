import React from 'react'
import './App.css'

function App() {
  const randomMath = Math.random()

  return (
    <div className="App">
      {
        randomMath > 10 ?
        <div>More than 10</div> : <div>Less than 10</div>
      }
    </div>
  )
  
}

export default App