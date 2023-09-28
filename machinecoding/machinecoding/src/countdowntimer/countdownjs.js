(function countDown() {
  let hour = document.querySelector(".hour");
  let minutes = document.querySelector(".minute");
  let sec = document.querySelector(".sec");

  let startBtn = document.querySelector(".start");
  let stopBtn = document.querySelector(".stop");
  let resetBtn = document.querySelector(".reset");
  let timer;

  stopBtn.style.display = 'none';

  startBtn.addEventListener("click", () => {
    stopBtn.style.display = 'block';
    startBtn.style.display = 'none';
    validateAndReassign();
    timer = setInterval(() => {
      startTimer();
    }, 1000);
  });

  stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
  })

  resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    startBtn.style.display = 'block';
    stopBtn.style.display = 'none';
    sec.value = "";
    minutes.value = "";
    hour.value = "";
  });

  function validateAndReassign() {
    if(sec.value > 59) {
      minutes.value = Number(minutes.value) + 1;
      sec.value = Number(sec.value) - 59;
    }
    if(minutes.value > 60) {
      hour.value = Number(hour.value) + 1;
      minutes.value = Number(minutes.value) - 60;
    }
  }

  function startTimer() {
    let hourVal = hour.value !== "" ? parseInt(hour.value) : "";
    let minutesVal = minutes.value !== "" ? parseInt(minutes.value) : "";
    let secVal = sec.value !== "" ? parseInt(sec.value): "";
    if (hourVal == 0 && minutesVal == 0 && secVal == 0) {
      startBtn.style.display = 'block';
      stopBtn.style.display = 'none';
      clearInterval(timer);
    } else if (secVal != 0) {
      sec.value = `${secVal <= 10 ? `0`: ""}${secVal - 1}`;
    } else if (minutesVal != 0 && secVal === 0) {
      sec.value = 59;
      minutes.value = `${minutesVal <= 10 ? `0`: ""}${minutesVal - 1}`;
    } else if (hourVal != 0 && minutesVal == 0) {
      minutes.value = 60;
      hour.value = hourVal <= 10 ? `0${hourVal - 1}` : hourVal - 1;
    }
  }
})();
