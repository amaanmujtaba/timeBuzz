const date = new Date();


const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

document.getElementById("time").innerHTML =    `<p> Current Time: ${hour}:${min}:${sec} </p>`

console.log(hour);