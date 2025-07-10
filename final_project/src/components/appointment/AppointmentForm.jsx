import { useState } from 'react'

function AppointmentForm( {onCreate} ){

    const [name, setName] = useState('');
    const [datetime, setDatetime] = useState('');
    const [specialty, setSpecialty] = useState('');

    const submit = (e) => {
        e.preventDefault();
        onCreate( {name, datetime, specialty});
    }
    return(
        <>
            <h2>Create Appointment</h2>
                <form action="" onSubmit={submit}>

                    <label htmlFor="patientName">Patient name: </label>
                    <input type="text" name="patientName" id="patientName" className="bg-gray-200"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="selectedDate">Select Date and Time: </label>
                    <input type="datetime-local" name="selectedDate" id="selectedDate" className="bg-gray-200"
                        value={datetime}
                        onChange={(e) => setDatetime(e.target.value)}
                    />

                    <label htmlFor="selectedSpecialty">Select Specialty: </label>
                    <select name="selectedSpecialty" id="selectedSpecialty"
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                    >
                        <option value="Example1">Example1</option>
                        <option value="Example2">Example2</option>
                        <option value="Example3">Example3</option>
                    </select>

                    <button type="submit" className="bg-blue-300 cursor-pointer">Create</button>
                </form>
            <hr />
        </>
    )
}

export default AppointmentForm