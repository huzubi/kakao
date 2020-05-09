const calendar = document.querySelector(".last-date");

function lastDate() {
  const date = new Date();
  const Month = date.getMonth() + 1;
  const Day = date.getDate();
  calendar.innerText = `${Month}월 ${Day}일`;
}

function init() {
  lastDate();
}

init();
