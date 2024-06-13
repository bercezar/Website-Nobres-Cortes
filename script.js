let count = 1;
document.getElementById("radio1").checked = true;
let desc = document.querySelector(".desc.bovino");
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

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.maxHeight = null;
      }
    }

    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function mostrar_desc(type) {
  if (desc) {
    desc.classList.remove("active-content");
    desc.classList.add("inactive");
  }

  let nova_desc = document.querySelector(`.desc.${type}`);
  nova_desc.classList.remove("inactive");
  nova_desc.classList.add("active-content");
  desc = nova_desc;
}

let rad = document.querySelectorAll(".custom-radio");

function modifyRadio(custom) {
  let checked = true;
  rad.forEach(function (element) {
    if (element.classList.contains("radioChecked")) checked = false;
  });
  if (checked) custom.classList.add("radioChecked");
}

let boxcheck = document.querySelectorAll(".custom-radio");

function modifyCheckbox(custom) {}
