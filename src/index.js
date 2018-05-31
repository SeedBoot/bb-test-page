import Flickity from 'flickity';

const carousel = document.querySelector(".carousel");

// Initialise the carousel
const flicky = new Flickity(".carousel", {
  cellAlign: 'left',
  contain: true
});

// Controlling the menu
const menu = document.getElementById("menu");

menu.addEventListener("click", function() {
  this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.display = null;
      panel.style.maxHeight = null;
    } else {
      panel.style.display = "block";
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
});

// Controlling the accordion elements
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.margin = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.margin = "10px 0";
    } 
  });
}

// vars for comolr select buttons 
const btnAqua = document.getElementsByClassName("aqua")[0];
const btnYellow = document.getElementsByClassName("yellow")[0];
const btnRed = document.getElementsByClassName("red")[0];

// Default variable Aqua, ready to change with data attr below
let colorChoice = "Aqua";

btnAqua.addEventListener("click", function(e) {
  e.preventDefault();
  colorChoice = this.dataset.color;
  console.log(colorChoice);
  console.log(e);
});

btnYellow.addEventListener("click", function(e) {
  e.preventDefault();
  colorChoice = this.dataset.color;
  console.log(colorChoice);
});

btnRed.addEventListener("click", function(e) {
  e.preventDefault();
  colorChoice = this.dataset.color;
  console.log(colorChoice);
});

// vars for buttons and number input
const reduce = document.getElementById("reduce");
const increase = document.getElementById("increase");
const prodCount = document.getElementById("product-count");

// Set initial input value
// Assign it to input onload below
let quantityValue = 1;

// listeners for product count
reduce.addEventListener("click", (e) => {
  e.preventDefault();
    quantityValue--;
    prodCount.value = quantityValue;
});
increase.addEventListener("click", (e) => {
  e.preventDefault();
    quantityValue++;
    prodCount.value = quantityValue;
});

const selectItem = document.getElementById("select-item");

selectItem.onsubmit = (e) => {
  e.preventDefault();
  let count = prodCount.value;
  window.alert(`Congratulations!! You've selected ${count} of ${colorChoice}`);

  // return false;
}

window.onload = () => {
  btnAqua.classList.add("active");
  prodCount.value = quantityValue;
};
