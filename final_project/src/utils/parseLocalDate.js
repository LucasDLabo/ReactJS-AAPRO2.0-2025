export function parseLocalDate(dateString) {
    if (!dateString) return null;
    const [year, month, day] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    date.setHours(0, 0, 0, 0);
    return date;
}