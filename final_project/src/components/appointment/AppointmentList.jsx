function AppointmentList( {id, name, date, time, specialty, onDelete} ){
    return (
        <>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{date}</li>
                <li>{time}</li>
                <li>{specialty}</li>
            </ul>
            <button className="cursor-pointer bg-red-200" onClick={() => onDelete(id)}>Delete❌</button>
            <hr />
        </>
    )
}

export default AppointmentList