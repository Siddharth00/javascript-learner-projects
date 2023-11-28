let is12HourFormat = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  if (is12HourFormat) {
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds} ${period}`;
  } else {
    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
  }
}

function toggleFormat() {
  is12HourFormat = !is12HourFormat;
  document.getElementById('formatBtn').innerText = is12HourFormat ? '12-Hour Format' : '24-Hour Format';
  updateClock();
}

// Initial update
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
