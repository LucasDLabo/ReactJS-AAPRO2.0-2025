function Appointment( {id, name, date, specialty} ){
    return (
        <>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{date}</li>
                <li>{specialty}</li>
            </ul>
            <hr />
        </>
    )
}

export default Appointment