let daysEl = document.getElementById("days")
let hoursEl = document.getElementById("hours")
let minsEl = document.getElementById("mins")
let secondsEl = document.getElementById("seconds")
function countdown() {
  const currentDate = new Date();
  const newYears = `1 Jan ${currentDate.getFullYear() + 1}`;
  const newYearsDate = new Date(newYears);

  const diff = (newYearsDate - currentDate)/1000;

  const days = Math.floor(diff/3600/24)
  const hours = Math.floor(diff/3600)%24
  const mins = Math.floor(diff/60)%60
  const seconds = Math.floor(diff)%60
  daysEl.innerHTML=days
  hoursEl.innerHTML=formatTime(hours)
  minsEl.innerHTML=formatTime(mins)
  secondsEl.innerHTML=formatTime(seconds)
}
function formatTime(time){
    return time<10? (`0${time}`):time;
}

//initial call
countdown();
setInterval(countdown, 1000);
