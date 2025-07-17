import { use, useState } from 'react'
import parseLocalDate from '../../utils/parseLocaldate'

function AppointmentForm( {onCreate, specialties, timetables, appoint} ){

    const [name, setName] = useState('');
    const [date, setDatetime] = useState('');
    const [time, setTime] = useState('');
    const [specialty, setSpecialty] = useState('');

    const submit = (e) => {
        e.preventDefault();

        if (!name.trim() || !date.trim() || !time.trim() || !specialty.trim()) {
            alert("❌ Appointment Scheduling Failed\n Please complete all required fields before submitting.");
            return;
        }

        const today = new Date();

        const selectedDate = parseLocalDate(date);

        if (selectedDate.getTime() <= today.getTime()) {
            alert("❌ Appointment Scheduling Failed\n You cannot schedule an appointment for today or a past date!");
            return;
        }

        if(appoint.some((i) => i.date == date && i.time == time && i.specialty == specialty)){
            alert("❌ Appointment Scheduling Failed\n Date already taken.");
            return;
        }

        onCreate( {name, date, time, specialty});
    }
    return(
        < >
            <h2 className='text-xl font-bold dark:text-gray-200'>Schedule a New Appointment</h2>
            <form action="" onSubmit={submit} className='flex flex-col '>

                <label htmlFor="patientName" className='dark:text-gray-300'>Patient name: </label>
                <input type="text" name="patientName" id="patientName" className="mb-3 border-b-2 border-blue-800"
                    placeholder='Enter patient name...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="selectedDate" className='dark:text-gray-300'>Select Date: </label>
                <input type="date" name="selectedDate" id="selectedDate" className="mb-3 border-b-2 border-blue-800 dark:scheme-light-dark dark:bg-gray-800"
                    value={date}
                    onChange={(e) => setDatetime(e.target.value)}
                />

                <label htmlFor="selectedTime" className='dark:text-gray-300'>Select a Time: </label>
                <select name="selectedTime" id="selectedTime" className='mb-3 cursor-pointer border-b-2 border-blue-800'
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
                <select name="selectedSpecialty" id="selectedSpecialty" className='mb-3 cursor-pointer border-b-2 border-blue-800'
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
                    
                <button type="submit" className="cursor-pointer bg-green-500 font-bold text-white transition-colors hover:bg-green-600 dark:bg-green-800 dark:hover:bg-green-700" title='Confirm Appointment!'>Confirm Appointment!</button>
            </form>
        </>
    )
}

export default AppointmentForm