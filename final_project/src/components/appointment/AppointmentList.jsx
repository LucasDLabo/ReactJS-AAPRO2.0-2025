function AppointmentList( {id, name, date, time, specialty, onDelete} ){

    const createdDate = new Date(`${date}T00:00:00-04:00`);

    const formatedDate = createdDate.toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return (
        <>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{formatedDate}</li>
                <li>{time}</li>
                <li>{specialty}</li>
            </ul>
            <button className="cursor-pointer bg-red-200" onClick={() => onDelete(id)}>Delete❌</button>
            <hr />
        </>
    )
}

export default AppointmentList