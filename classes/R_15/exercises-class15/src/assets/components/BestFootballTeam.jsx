import { useState } from 'react'

function BestFootballTeam(){

    const [team, setTeam] = useState("");

    function chooseTeam(){

        const teams = ['Boca Juniors', 'River Plate', 'Racing Club', 'Independiente', 'San Lorenzo'];

        const teamRNG = teams[Math.floor(Math.random() * teams.length)];
        setTeam(teamRNG);
        console.log(`Argentina best football team is ${team}`)
    }

    return(
        <>
            <button onClick={chooseTeam}>Best Football team!</button>
        </>
    )
}

export default BestFootballTeam