export default function dateFormatter(dateString){

    const formattedDate = new Date(dateString + 'T00:00:00-04:00').toLocaleDateString('en-US', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    return formattedDate;
}