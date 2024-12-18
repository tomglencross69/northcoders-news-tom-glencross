export default function dateConversion (dateData) {
return new Date (dateData).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false 
})
}