var resetButton = document.getElementById('reset');
var startButton = document.getElementById('start');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var hoursRemaining =  document.getElementById('hours-remaining');
var minutesRemaining =  document.getElementById('minutes-remaining');
var secondsRemaining =  document.getElementById('seconds-remaining');

var timer = document.getElementById('timer');

var buzz = new Audio('buzz.mp3')

resetButton.addEventListener('click',function(){
    clearInterval(countDown);
    hoursRemaining.textContent = 0;
    minutesRemaining.textContent = 0;
    secondsRemaining.textContent = 0;
})


startButton.addEventListener('click',function(){
    var hour = hours.value;
    var minute = minutes.value;
    var second = seconds.value;

    //alert(`${hour}:${minute}:${second}`);
    timer.style.opacity = 1
    hoursRemaining.textContent = hour;
    minutesRemaining.textContent = minute;
    secondsRemaining.textContent = second;

    var timeRemaining = (hour*60*60*1000) + (minute*60*1000) + (second*1000)

    
    const countDown =setInterval(function(){
        var milliseconds = Math.floor((timeRemaining % 1000) / 100),
            seconds = Math.floor((timeRemaining / 1000) % 60),
            minutes = Math.floor((timeRemaining / (1000 * 60)) % 60),
            hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        hoursRemaining.textContent = hours;
        minutesRemaining.textContent = minutes;
        secondsRemaining.textContent = seconds;


        if(timeRemaining <= 0){
            secondsRemaining.textContent = '00';
            clearInterval(countDown);
            buzz.play();
        }
        else{

            
            timeRemaining = timeRemaining-1000
        }
            
        },1000);
    //alert(`total milliseconds: ${timeRemaining}`);
})


var timeRemaining = hour*60*60*1000 + minute*60*1000+ second*1000

while(timeRemaining>=0){
    setTimeout(()=>{
        timeRemaining = timeRemaining-1000;
        secondsRemaining.textContent = Number(secondsRemaining.textContent)-1;
    }, 1000);
}



console.log("yayyy")
//alert(`total milliseconds: ${timeRemaining}`);

const date = new Date();


const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

document.getElementById("time").innerHTML =    `<p> Current Time: ${hour}:${min}:${sec} </p>`

console.log(hour);