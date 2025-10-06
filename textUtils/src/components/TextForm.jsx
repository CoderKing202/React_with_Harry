import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter text here2")
    const handleUpClick = ()=>{
      //console.log('Uppercase was clicked')
      let newText = text.toUpperCase()
      setText(newText)
    }
    const handleOnChange = (event)=>{
    //  console.log('OnChange')
      setText(event.target.value)
    }
    //text = "new text"// Wrong way to change the state
   // setText("new text")// Correct way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8">

</textarea>
  </div>
  <button className="btn btn-primary" onClick = {handleUpClick}>Convert To Uppercase</button>
  </div>
  )
}