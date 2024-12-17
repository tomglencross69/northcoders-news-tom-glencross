export default function calculateDaysAgo (dateString) {
    const pastDate = new Date(dateString)
    const currentDate = new Date()
    const differenceInMilliseconds = currentDate - pastDate
    const differenceInDays = Math.floor(differenceInMilliseconds/ (1000*60*60*24))
    return differenceInDays
}