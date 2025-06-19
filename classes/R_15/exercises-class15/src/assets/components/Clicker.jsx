import { useState } from "react";

function Clicker(){

    const [number, setNumber] = useState(0);

    function add(){
        setNumber((count) => count + 1);
    }

    function reset(){
        setNumber(0);
    }

    return(
        <>
            <button onClick={add}>+1</button>
            <button onClick={reset}>Resetear</button>
            <p>Clicks: {number}</p>
        </>
    )
}

export default Clicker;