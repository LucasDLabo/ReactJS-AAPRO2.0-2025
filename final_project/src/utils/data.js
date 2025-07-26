const today = new Date();
// Date, Month Date, Year
function LocaleDate(date){
    return date.toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

// YYYY-MM-DD
function IsoDate(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function relativeDate(daysToCalc){
    const date = new Date();
    date.setDate(date.getDate() + daysToCalc);
    return date;
}

function thisMonth(daysToCalc) {
    const thisMonth = new Date(today.getFullYear(), today.getMonth() + 1, daysToCalc);
    return thisMonth;
}

function nextMonth(whatDay) {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, whatDay);
    return nextMonth;
}

export default[
    {
        id: 18,
        name: 'Martina Acosta',
        date: IsoDate(today),
        time: '8:00',
        specialty: 'Cardiology',
        formatted_date: LocaleDate(today),
    },
    {
        id: 17,
        name: 'Franco Benítez',
        date: IsoDate(today),
        time: '8:30',
        specialty: 'Pediatrics',
        formatted_date: LocaleDate(today),
    },
    {
        id: 16,
        name: 'Valentina Suárez',
        date: IsoDate(today),
        time: '9:00',
        specialty: 'Ophthalmology',
        formatted_date: LocaleDate(today),
    },
    {
        id: 15,
        name: 'Nicolás Ruiz',
        date: IsoDate(relativeDate(1)),
        time: '9:30',
        specialty: 'Medical Consultation',
        formatted_date: LocaleDate(relativeDate(1)),
    },
    {
        id: 14,
        name: 'Agustina Romero',
        date: IsoDate(relativeDate(1)),
        time: '8:00',
        specialty: 'Dentistry',
        formatted_date: LocaleDate(relativeDate(1)),
    },
    {
        id: 13,
        name: 'Benjamín Díaz',
        date: IsoDate(relativeDate(1)),
        time: '9:30',
        specialty: 'Pediatrics',
        formatted_date: LocaleDate(relativeDate(1))
    },
    {
        id: 12,
        name: 'Facundo Emanuel',
        date: IsoDate(relativeDate(2)),
        time: '10:00',
        specialty: 'Ophthalmology',
        formatted_date: LocaleDate(relativeDate(2))
    },
    {
        id: 11,
        name: 'Tomás Diaz',
        date: IsoDate(relativeDate(3)),
        time: '9:30',
        specialty: 'Medical Consultation',
        formatted_date: LocaleDate(relativeDate(3))
    },
    {
        id: 10,
        name: 'Abril Ortega',
        date: IsoDate(relativeDate(4)),
        time: '8:30',
        specialty: 'Cardiology',
        formatted_date: LocaleDate(relativeDate(4))
    },
    {
        id: 9,
        name: 'Estefani Rodriguez',
        date: IsoDate(thisMonth(-2)),
        time: '8:00',
        specialty: 'Cardiology',
        formatted_date: LocaleDate(thisMonth(-2))
    },
    {
        id: 8,
        name: 'Cesar Arturo',
        date: IsoDate(thisMonth(-1)),
        time: '9:00',
        specialty: 'Medical Consultation',
        formatted_date: LocaleDate(thisMonth(-1))
    },
    {
        id: 7,
        name: 'Angel Agerro',
        date: IsoDate(thisMonth(0)),
        time: '9:00',
        specialty: 'Ophthalmology',
        formatted_date: LocaleDate(thisMonth(0))
    },
    {
        id: 6,
        name: 'Estefani Gomez',
        date: IsoDate(nextMonth(1)),
        time: '10:00',
        specialty: 'Medical Consultation',
        formatted_date: LocaleDate(nextMonth(1))
    },
    {
        id: 5,
        name: 'Sofia Lazio',
        date: IsoDate(nextMonth(2)),
        time: '8:00',
        specialty: 'Cardiology',
        formatted_date: LocaleDate(nextMonth(2))
    },
    {
        id: 4,
        name: 'Esteban Guemes',
        date: IsoDate(nextMonth(3)),
        time: '9:00',
        specialty: 'Dentistry',
        formatted_date: LocaleDate(nextMonth(3))
    },
    {
        id: 3,
        name: 'Matias Rojas',
        date: IsoDate(relativeDate(-1)),
        time: '9:00',
        specialty: 'Dentistry',
        formatted_date: LocaleDate(relativeDate(-1)),
    },
    {
        id: 2,
        name: 'Esteban Gomez',
        date: IsoDate(relativeDate(-2)),
        time: '9:00',
        specialty: 'Ophthalmology',
        formatted_date: LocaleDate(relativeDate(-2)),
    },
    {
        id: 1,
        name: 'Jorge Miguel',
        date: IsoDate(relativeDate(-3)),
        time: '10:00',
        specialty: 'Ophthalmology',
        formatted_date: LocaleDate(relativeDate(-3)),
    }
]