import { use, useState } from 'react'

function AppointmentForm( {onCreate, specialties, timetables, appoint} ){

    const [name, setName] = useState('');
    const [date, setDatetime] = useState('');
    const [time, setTime] = useState('');
    const [specialty, setSpecialty] = useState('');

    const submit = (e) => {
        e.preventDefault();

        if (!name.trim() || !date.trim() || !time.trim() || !specialty.trim()) {
            alert('Make sure all fields are completed!');
            return;
        }

        if (new Date(date).getTime() <= Date.now()){
            alert('You cannot schedule an appointment for today or a past date!')
            return;
        }

        if(appoint.some((i) => i.date == date && i.time == time && i.specialty == specialty)){
            alert('Date already appointed!');
            return;
        }

        onCreate( {name, date, time, specialty});
    }
    return(
        < >
            <h2 className='text-xl font-bold dark:text-gray-200'>Schedule a New Appointment</h2>
            <form action="" onSubmit={submit} className='flex flex-col '>

                <label htmlFor="patientName" className='dark:text-gray-300'>Patient name: </label>
                <input type="text" name="patientName" id="patientName" className="border-b-2 border-blue-800 mb-3"
                    placeholder='Enter patient name...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="selectedDate" className='dark:text-gray-300'>Select Date: </label>
                <input type="date" name="selectedDate" id="selectedDate" className="border-b-2 border-blue-800 mb-3 dark:bg-gray-800 scheme-light-dark"
                    value={date}
                    onChange={(e) => setDatetime(e.target.value)}
                />

                <label htmlFor="selectedTime" className='dark:text-gray-300'>Select a Time: </label>
                <select name="selectedTime" id="selectedTime" className='border-b-2 border-blue-800 cursor-pointer mb-3'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option hidden value="" >Choose a Time</option>
                    {
                        timetables.map( (time) => 
                            <option value={time.time} key={time.id} className='dark:bg-gray-800'>{time.time}</option>
                        )
                    }
                </select>

                <label htmlFor="selectedSpecialty" className='dark:text-gray-300'>Select Specialty: </label>
                <select name="selectedSpecialty" id="selectedSpecialty" className='border-b-2 border-blue-800 cursor-pointer mb-3'
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                >
                    <option hidden value="">Choose a Specialty</option>
                    {
                        specialties.map( (specialty) => 
                            <option value={specialty.name} key={specialty.id} className='dark:bg-gray-800'>{specialty.name}</option>
                        )
                    }
                </select>
                    
                <button type="submit" className="bg-green-500 cursor-pointer hover:bg-green-600 font-bold text-white dark:bg-green-800 dark:hover:bg-green-700 transition-colors" title='Confirm Appointment!'>Confirm Appointment!</button>
            </form>
        </>
    )
}

export default AppointmentForm