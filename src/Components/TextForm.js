// for state expalnation
import React ,{useState} from 'react'




export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log(" Uppercase was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText)
        props.showAlert("converted to upper case", "success");
    }
    const handleLoClick = ()=>{
        //console.log(" Lowercase was clicked" + text);
        let newText = text.toLowerCase(); 
        setText(newText)
        props.showAlert("converted to lower case", "success");
    }    
    // const activateLasers = ()=>{
    //     console.log("i am laser");
    //     //var text =  document.getElementById("myText");
        
        
    // }
    // const handleCopy = () => {
        
    //     var text = document.getElementById("myText");
    //     text.select();
    //     navigator.clipboard.writeText(text.value);
    // }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("extra space removed", "success");
    }
    const handleOnChange = (event)=>{
        //console.log("On change");
        
       setText(event.target.value);
    }
    const [text, setText] = useState("Enter Something in the text box above to Preview is here");
    //text = "textafrea"; //wrong way to set text
    //setText("text"); //correct way to set text
    return (
        
    <>
        <div className="container"  style = {{color: props.mode==='dark'? 'white':'#132e48'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            
            <textarea className="form-control"  value={text} style = {{background: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'#132e48'}}
            onChange={handleOnChange} id="MyText" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            {/* <button  className="btn btn-outline-danger mx-2"onClick={activateLasers}> Activate Lasers </button> */}
           {/* <button className="btn btn-primary mx-2" onClick={handleCopy}> Copy </button> */}
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
           
        </div>
        <div className="container my-2" style = {{color: props.mode==='dark'? 'white':'#132e48'}}>
            <h2> Your Text Summary</h2>
            <p> {text.split(" ").length} Words and {text.length}</p>
            <p> {0.008 * text.split(" ").length} Words per minute</p>
            <h2>Preview</h2>
            <p> {text.length>0?text:"Enter Something in the text box above to Preview is here"}</p>
        </div>
    </>    

)
}
