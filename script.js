// Inicialização de variáveis e configuração inicial
let count = 1;
document.getElementById("radio1").checked = true;
let intervalId = setInterval(nextImage, 3500);

// Função para avançar para a próxima imagem
function nextImage() {
  count++;
  if (count > 4) count = 1;
  document.getElementById("radio" + count).checked = true;
}

// Função para executar ação ao clicar em um item
function acao(x) {
  count = x;
  resetInterval();
}

// Função para resetar o intervalo do slideshow
function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 3500);
}

// Gerenciamento de acordeões
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Fecha os acordeões não selecionados
    for (let j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.maxHeight = null;
      }
    }

    // Alterna o estado do acordeão selecionado
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Gerenciamento de descrições
let desc = document.querySelector(".desc.bovino");

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

// Gerenciamento de seleções de rádio customizadas
let rad = document.querySelectorAll(".custom-radio");

function modifyRadio(custom) {
  rad.forEach(function (element) {
    element.classList.remove("radioChecked");
  });
  custom.classList.add("radioChecked");
}

// Gerenciamento de checkboxes customizadas
function modifyCheckbox(custom) {
  let img = custom.querySelector("img");
  img.classList.toggle("hide");
  custom.classList.toggle("checkboxChecked");
}

// Gerenciamento de dropdowns
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

// Gerenciamento de botões de curtir
let likebuttons = document.querySelectorAll(".card_btn");

likebuttons.forEach((likebutton) => {
  likebutton.addEventListener("click", () => {
    likebutton.classList.toggle("card_btn--");
  });
});
