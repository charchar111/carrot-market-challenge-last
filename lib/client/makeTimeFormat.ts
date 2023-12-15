export default function makeTimeFormat(time: string) {
  const timeFormat = {
    second: 1000,
    minute: 60000,
    hour: 3600000,
    day: 86400000,
  };
  if (!Date.parse(time)) return;
  const timeDifference = Date.now() - Date.parse(time);
  let format;
  if (timeDifference < timeFormat.minute) format = "just now";

  if (timeFormat.minute <= timeDifference && timeDifference < timeFormat.hour)
    format = `${Math.floor(timeDifference / timeFormat.minute)} minutes ago`;

  if (timeFormat.hour <= timeDifference && timeDifference < timeFormat.day)
    format = `${Math.floor(timeDifference / timeFormat.hour)} hours ago`;

  if (timeFormat.day <= timeDifference && timeDifference / timeFormat.day < 2)
    format = `a day ago`;

  if (timeDifference / timeFormat.day >= 2)
    format = new Date(time).toDateString().substring(3);

  return format;
}
