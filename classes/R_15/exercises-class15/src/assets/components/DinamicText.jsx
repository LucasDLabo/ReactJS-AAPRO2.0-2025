import { useState } from "react";

function DinamicText(){

    const [text, setText] = useState("");

    const changeText = (text) => setText(text.target.value);

    return(
        <>
        <br />
            <input type="text" onChange={changeText} placeholder="Enter your text" />
            <p>Your text: {text}</p>
        </>
    )
}

export default DinamicText;