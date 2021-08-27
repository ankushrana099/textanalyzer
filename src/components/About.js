import React, {useState} from 'react'

export default function About() {

    const [myStyle] = useState({
        color: 'black',
        backgroundColor: "#80e5ff",
    })
    
    
    
    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Analyze your text
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <p>Analyze your text with our this utility, here you can count the words present in a text, number of characters in a text, along with all this you can convert your text to UpperCase, LowerCase, Copy Text and Remove Extra Spaces from the text.</p>
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to Use
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                       <p>The utilities in our app are totally free to use. Make use of it to analyze your text in best way.</p>
                    </div>
                    </div>
                </div>
                
                    </div>
               
            
            
        </div>
    )
}