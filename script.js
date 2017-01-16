function setTime(){
  const date = new Date();
  const seconds = ((date.getSeconds()/60)*360)-90;
  const minutes = ((date.getMinutes()/60)*360)-90;
  const hours = ((date.getHours()/24)*360)-90;

  const hourHand = document.querySelector('#hours')
  const minuteHand = document.querySelector('#minutes')
  const secondHand = document.querySelector('#seconds')

  hourHand.style.transform=`rotate(${hours}deg)`;
  minuteHand.style.transform=`rotate(${minutes}deg)`;
  secondHand.style.transform=`rotate(${seconds}deg)`;

}

setInterval(setTime,1000);
