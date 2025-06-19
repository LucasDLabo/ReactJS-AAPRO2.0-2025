import { useState } from "react";

function ChooseColor(){
    
    const [color, setColor] = useState("#ffffff");

    const selectColor = (color) => setColor(color.target.value);
    return( 
        <>
            <div style={{ backgroundColor: color}}>
                <select onChange={selectColor}>
                    <option value="#FFFFFF">Blanco</option>
                    <option value="#74ACDF">Celeste</option>
                    <option value="#FF0000">Rojo</option>
                    <option value="#28A745">Verde</option>
                </select>
            </div>
        </>
    )
}

export default ChooseColor;