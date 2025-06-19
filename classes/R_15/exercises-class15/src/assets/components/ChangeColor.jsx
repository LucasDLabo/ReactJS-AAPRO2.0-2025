import { useState } from 'react'

function ChangeColor(){
    
    const [color, setColor] = useState("#ffffff");

    function changeTextColor(){
        const colors = ["#74ACDF", "#FFFFFF", "#FFD700", "#28A745"];

        const colorRNG = colors[Math.floor(Math.random() * colors.length)];
        setColor(colorRNG);
    }

    return(
        <>
            <button style={{color: color}} onClick={changeTextColor}>Change Text Color!</button>
        </>
    )
}

export default ChangeColor;