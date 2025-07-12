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
                <li><i>Order number #{id}</i></li>
                <li>Patient name: {name}</li>
                <li>Date: {formatedDate} at {time}hs</li>
                <li>Medical field: {specialty}</li>
            </ul>
            <button title="Cancel Appointment" className="cursor-pointer bg-red-200" onClick={() => onDelete(id)}>Cancel</button>
            <hr />
        </>
    )
}

export default AppointmentList