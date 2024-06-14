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


let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  let select = dropdown.querySelector(".select");
  let caret = dropdown.querySelector(".caret");
  let menu = dropdown.querySelector(".menu-dropdown");
  let options = dropdown.querySelectorAll(".menu-dropdown li");
  let selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-dropdown-open");
  });
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-dropdown-open");

      options.forEach((option) => {
        option.classList.remove("active-dropdown");
      });
      option.classList.add("active-dropdown");
    });
  });
});
