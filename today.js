const day = document.querySelector(".date");

function today() {
  const date = new Date();
  const Month = date.getMonth() + 1;
  const Day = date.getDate();
  const Year = date.getFullYear();
  day.innerText = `${Year}년 ${Month}월 ${Day}일`;
}

function init() {
  today();
}

init();
