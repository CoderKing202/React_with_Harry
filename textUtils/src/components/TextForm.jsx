import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("")
    const handleUpClick = ()=>{
      //console.log('Uppercase was clicked')
      let newText = text.toUpperCase()
      setText(newText)
    }
    const handleLoClick = ()=>{
      //console.log('Uppercase was clicked')
      let newText = text.toLowerCase()
      setText(newText)
    }
    const handleOnChange = (event)=>{
    //  console.log('OnChange')
      setText(event.target.value)
    }
    const handleClear=()=>{
      setText('')
    }
    const handleCopy = ()=>{
      const text = document.getElementById("myBox")
      text.select()
      
      navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }
    //text = "new text"// Wrong way to change the state
   // setText("new text")// Correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==="light"?"#042743":"white"}}>
      <h1>{props.heading}</h1>
<div className="mb-3" style={{color:props.mode==="light"?"#042743":"white"}}>
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
style={{backgroundColor:props.mode==="light"?"white":"grey", color:props.mode==="light"?"black":"white"}}>
</textarea>
  </div>
  <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert To Uppercase</button>
  <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert To Lowercase</button>
  <button className="btn btn-primary mx-1" onClick = {handleClear}>Clear Text</button>
  <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Handle Extra Spaces</button>
  </div>
  <div className="container my-3" style={{color:props.mode==="light"?"#042743":"white"}}>
    <h2>Your text summary</h2>
    <p>{ text.split(" ").length } words, {text.length} characters</p>
    <p>{ 0.008 * text.split(" ").length } Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length === 0?text:"Enter something in the text box above to preview it here" }</p>
  </div>
  </>
  )
}