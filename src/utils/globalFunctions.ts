export function getProfilePic(userId: string): string {
    return `https://robohash.org/${userId}`;
}

export function getBeautifylDate(date: Date):string{

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[date.getDay()];

    let hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = date.getMinutes();

    const formattedDate = `${day}, ${hours}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;

   return formattedDate;

}