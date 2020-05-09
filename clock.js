const clock = document.querySelector(".clock");

function time() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerText = `${hours < 10 ? ` 0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
} //`${수식 ? `ture값` : false값}text${수식 ? `ture값` : false값}text${수식 ? `ture값` : false값}`
function init() {
  time();
  setInterval(time, 1000);
}

init();
