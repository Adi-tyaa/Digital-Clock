
function updateDate(){
  let date = document.querySelector('#date');
  let dat = new Date();
  let d = dat.getDate();
  let mn = dat.getMonth()+1;
  let year = dat.getFullYear().toString().slice(-2);
  
  date.innerHTML = d +" - "+(mn<10?"0":"")+mn+ " - "+year;
}
date.classList.add('date')

setInterval(updateDate, 1000);

function updateTime(){
  let time = document.querySelector('#time');
  let dat = new Date();
  let h = dat.getHours();
  let m = dat.getMinutes();
  let s = dat.getSeconds();
  
  time.innerHTML = (h<10?"0":"")+h +" : "+m+" : "+(s<10?"0":"")+s;
}
date.classList.add('time')
setInterval(updateTime, 1000);


function updateDay() {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let now = new Date();
  let dayOfWeek = days[now.getDay()];
  
  let radioElement = document.querySelector(`#day input[value="${dayOfWeek}"]`);

  if (radioElement) {
    radioElement.checked = true;
  }
}

setInterval(updateDay, 1);

const apiKey = '43030f263aa4df63961fd8e035d77413';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=noida'

async function checkWeather(){
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  document.querySelector('#temp').innerHTML = data.main.temp;
}
setInterval(checkWeather, 1000);