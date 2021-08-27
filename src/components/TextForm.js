import React, { useState } from 'react';


export default function TextForm(props) {
    
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        
        
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        
    }
     
    const handleClearClick =()=>{
        let newText = ("");
        setText(newText);
        
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
    }
    const handleCopyClick = () => {
        var text = document.getElementById("form");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        }
        
       
    const [text, setText] = useState("");
    return (
        <>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
           <div className="form-group">
    <label htmlFor="form"></label>
    <textarea className="form-control" placeholder="Enter the text here...."  value= {text} onChange={handleOnChange} id="form" rows="4"></textarea>
    </div>
   <button type="button" onClick={handleUpClick} className="btn btn-primary mx-1 my-2">Convert to UpperCase</button>
   <button type="button" onClick={handleLoClick} className="btn btn-primary mx-2 my-2">Convert to LowerCase</button>
   <button type="button" onClick={handleClearClick} className="btn btn-primary mx-1 my-2">Clear Text</button>
   <button type="button" onClick={handleCopyClick} className="btn btn-primary mx-1 my-2">Copy Text</button>
   <button type="button" onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-2">Remove extra spaces</button></div> 
   <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
       <h2>Your Text Summary:-</h2>
       <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p><br/>
       <h2>Preview</h2>
       <p>{text}</p>
   </div>
        </>
    )
}
