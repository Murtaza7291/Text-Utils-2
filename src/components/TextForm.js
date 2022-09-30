import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,changeText] = useState("");
    const onChangeHandler = (event)=>{
        changeText(event.target.value);
    }
    const UpperCase = ()=>{
        changeText(text.toUpperCase());
    }
    const LowerCase = ()=>{
        changeText(text.toLowerCase());
    }
    const ClearAll = ()=>{
        changeText("");
    }
    const copyText = ()=>{
        let copy = document.getElementById("exampleFormControlTextarea1");
        copy.select();
        navigator.clipboard.writeText(copy.value);

    }
  return (
    <>
    <div className="container">
        <h1 style={{color : props.mode === "light"? "black":"white"}}>Analyze your text here</h1>
        <div className="input-group ">
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Enter your text here' style={{width : 1000,color : props.mode === "light"? "black":"white",backgroundColor : props.mode === "light"? "white":"black"}} value={text} onChange={onChangeHandler}></textarea>
                <button className="btn btn-primary my-3" onClick={UpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={LowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={ClearAll}>Clear Text Area</button>
                <button className="btn btn-primary my-3 mx-3" onClick={copyText}>Copy Text</button>
            </div>
        </div>
    </div>
    </>
  )
}
