import { use, useState } from 'react'

function AppointmentForm( {onCreate, specialties} ){

    const [name, setName] = useState('');
    const [date, setDatetime] = useState('');
    const [time, setTime] = useState('');
    const [specialty, setSpecialty] = useState('');

    const submit = (e) => {
        e.preventDefault();
        onCreate( {name, date, time, specialty});
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

                    <label htmlFor="selectedDate">Select Date: </label>
                    <input type="date" name="selectedDate" id="selectedDate" className="bg-gray-200"
                        value={date}
                        onChange={(e) => setDatetime(e.target.value)}
                    />

                    <label htmlFor="selectedTime">Select Time: </label>
                    <select name="selectedTime" id="selectedTime"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="10">10:00</option>
                        <option value="1030">10:30</option>
                        <option value="11">11:00</option>
                    </select>

                    <label htmlFor="selectedSpecialty">Select Specialty: </label>
                    <select 
                        name="selectedSpecialty" 
                        id="selectedSpecialty"
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                    >
                        <option hidden value="">Choose an specialty</option>
                        {
                            specialties.map( (specialty) => 
                                <option value={specialty.name} key={specialty.id}>{specialty.name}</option>
                            )
                        }
                    </select>

                    <button type="submit" className="bg-blue-300 cursor-pointer">Create</button>
                </form>
            <hr />
        </>
    )
}

export default AppointmentForm