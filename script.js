let count = 1;
let interval;

document.getElementById("radio1").checked = true;

function startInterval() {
  interval = setInterval(function () {
    nextImage();
  }, 4000);
}

function resetInterval() {
  clearInterval(interval);
  startInterval();
}

function nextImage() {
  count++;
  if (count > 5) count = 1;
  document.getElementById("radio" + count).checked = true;
}

document.querySelectorAll('input[name="radio-button"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    count = parseInt(this.id.replace("radio", ""));
    resetInterval();
  });
});

startInterval();
