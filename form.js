function modifyRadio(custom) {
  let checked = true;
  rad.forEach(function (element) {
    if (element.classList.contains("radioChecked")) checked = false;
  });
  if (checked) custom.classList.add("radioChecked");
}

function modifyCheckbox(custom) {
  let img = custom.querySelector("img");
  // let box = custom.querySelector(".custom-checkbox");
  img.classList.toggle("hide");
  custom.classList.toggle("checkboxChecked");
}
