import { parseLocalDate } from "./parseLocalDate";

export default function dateFormatter(dateString){

    const selectedDate = parseLocalDate(dateString);

    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return formattedDate;
}