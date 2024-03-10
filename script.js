const countdownElement = document.getElementById("countdown");
const finalMessageElement = document.getElementById("final-message");
const targetDate = new Date("April 19, 2024").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(updateInterval);
    countdownElement.style.display = "none";
    finalMessageElement.classList.remove("hidden");
  } else {
    document.getElementById("days").innerText = days + " Días";
    document.getElementById("hours").innerText = hours + " Horas";
    document.getElementById("minutes").innerText = minutes + " Minutos";
    document.getElementById("seconds").innerText = seconds + " Segundos";
  }
}

let updateInterval = setInterval(updateCountdown, 1000);
updateCountdown();
