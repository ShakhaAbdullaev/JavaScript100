const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthObj = new Date();
let dayObj = new Date();
let dateObj = new Date();
let yearObj = new Date();
let currentTimeObj = new Date();

let month = document.getElementById("month");
let day = document.getElementById('day');
let date = document.getElementById('date');
let year = document.getElementById('year');

month.innerHTML = months[currentTimeObj.getMonth()];
day.innerHTML = days[currentTimeObj.getDay()];
date.innerHTML = dateObj.getDate();
year.innerHTML = currentTimeObj.getFullYear();




