
function DifferenceInDays(){

let days = []; //an array for the days
let firstDate = new Date(); //this is today
let myDate = document.getElementById('day').value; //given date
let secondDate = new Date(myDate); //given date THIS IS NEEDED!

while (firstDate <= secondDate) {
  firstDate.setDate(firstDate.getDate() +1);  //because nro 1 is 0...
  days.push(firstDate);
}
document.getElementById('demo').innerHTML = days.length;
}


function myWeek() {
  let days = [];
  let now = new Date();
  let myDate = document.getElementById('day').value;
  let secondDate = new Date(myDate);

  let weekday = new Array(7);
  weekday[0] = "Monday";
  weekday[1] = "Tuesday";
  weekday[2] = "Wednesday";
  weekday[3] = "Thursday";
  weekday[4] = "Friday";
  weekday[5] = "Saturday";
  weekday[6] = "Sunday";

while(now <= secondDate) {
let weekName = weekday[now.getDay()];
if (weekName < 5){
  days.push(weekName);
console.log('weekName');
}
now.setDate(now.getDate() +1);
  days.push(weekName);

}
console.log(days.length);
}


//Countdown Timer:
//the date counting down to
var countDownDate = new Date("July 28, 2019 00:00:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo2").innerHTML = "SAY HAPPY BIRTHDAY!";
  }
}, 1000);
