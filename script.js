var oldSeconds = 0;
var oldMinutes = 0;
var oldHours = 0;


function setTime(){
  const date = new Date();
  const seconds = ((date.getSeconds()/60)*360)-90;
  const minutes = ((date.getMinutes()/60)*360)-90;
  const hours = ((date.getHours()/24)*360)-90;

  //Define s,m,h as degrees in a circle

  const hourHand = document.querySelector('#hours')
  const minuteHand = document.querySelector('#minutes')
  const secondHand = document.querySelector('#seconds')

  //Find dom elements

  const hands = document.querySelectorAll('.hand');

  if(seconds-oldSeconds<0){
    //If about to loop, avoid glitch
    hands.forEach(hand => hand.style.transition = 'all 0.0s');

    hourHand.style.transform=`rotate(${hours}deg)`;
    minuteHand.style.transform=`rotate(${minutes}deg)`;
    secondHand.style.transform=`rotate(${seconds}deg)`;

    }
    else{

    hands.forEach(hand => hand.style.transition = 'all 0.2s');

    hourHand.style.transform=`rotate(${hours}deg)`;
    minuteHand.style.transform=`rotate(${minutes}deg)`;
    secondHand.style.transform=`rotate(${seconds}deg)`;
    }

  oldSeconds = seconds;
  oldMinutes = minutes;
  oldHours = hours;


}

setInterval(setTime,1000);
