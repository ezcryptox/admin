export const handleUSDtoFIXED = ((num)=>{
    if(!Number(num)){
        return 0
    }
    else if(!num){
        return 0
    }else{
        return num.toFixed(2)
    }
})
export const handleETHtoFIXED = ((num)=>{
    if(!Number(num)){
        return 0
    }else if(!num){
        return 0
    }
    else{
        return num.toFixed(7)
    }
})

export function getFormattedDateTime(tr) {
    const now = new Date(tr);
    // Format the date
    const date = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    // Format time with leading zeros
    const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

    return `${date} ${time}`;
}
