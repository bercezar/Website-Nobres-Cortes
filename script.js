let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 3500);

function nextImage() {
  count++;
  if (count > 4) count = 1;

  document.getElementById("radio" + count).checked = true;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
