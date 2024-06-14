let count = 1;
document.getElementById("radio1").checked = true;
let intervalId = setInterval(nextImage, 3500);

function nextImage() {
  count++;
  if (count > 4) count = 1;

  document.getElementById("radio" + count).checked = true;
}

function acao(x) {
  count = x;
  resetInterval();
}

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 3500);
}
