const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  mahlzeit = document.getElementById('mahlzeit');

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

    // AM PM
  const amPm = hour >= 12 ? 'PM' : 'AM';



  // Output
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`
  setTimeout(showTime, 1000);

}

// ADD ZERO
function addZero (x) {
  return (parseInt(x, 10) < 10 ? '0' : '') + x;
}

// Set background
function setBG() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    document.body.style.backgroundImage = "url('./pics/wp_mstars.jpg')";
    greeting.textContent = 'guten morgen mein geliebter hase';

  } else if (hour < 18) {
    document.body.style.backgroundImage = "url('./pics/wp_town.jpg')";
    document.body.style.color = "white";
    greeting.textContent = 'mittag mit mir';

  } else {
    document.body.style.backgroundImage = "url('./pics/wp_citynite.jpg')";
    document.body.style.color = "white";
    greeting.textContent = 'sleep tight';

  }

}

//Get name
function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Run
showTime();
setBG();
getName();

console.log("test")
