function Appointment( {id, name, date, specialty, onDelete} ){
    return (
        <>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{date}</li>
                <li>{specialty}</li>
            </ul>
            <button className="cursor-pointer bg-red-200" onClick={() => onDelete(id)}>Delete❌</button>
            <hr />
        </>
    )
}

export default Appointment