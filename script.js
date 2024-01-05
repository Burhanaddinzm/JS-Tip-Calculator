"use strict";

const tipResult = document.getElementById("tip-result");
const totalResult = document.getElementById("total-result");

const billEl = document.getElementById("bill");

const tipDecrease = document.getElementById("tip-decrease");
const tipIncrease = document.getElementById("tip-increase");
const tipEl = document.getElementById("tip");

const numDecrease = document.getElementById("num-decrease");
const numIncrease = document.getElementById("num-increase");
const numEl = document.getElementById("num");

const billInput = +prompt("Please enter your bill");

let tipPercent = 0.05;
let numberOfPeople = 1;

billEl.textContent = billInput.toString() + ".00";

const calculateTip = (bill, tipP, numP) => {
  const tip = bill * tipP;

  totalResult.textContent = `$${Math.floor((bill + tip) / numP)}.0`;
  tipResult.textContent = `$${Math.floor(tip / numP)}.0`;
  tipEl.textContent = `${Math.floor(tipP * 100)}%`;
  numEl.textContent = numP.toString();
};

tipDecrease.addEventListener("click", () => {
  if (tipPercent > 0.09 && tipPercent < 1.2)
    Math.round(parseInt((tipPercent -= 0.05).toFixed(2)));
  else tipPercent = 0;
  calculateTip(billInput, tipPercent, numberOfPeople);
});

tipIncrease.addEventListener("click", () => {
  if (tipPercent > -2 && tipPercent < 1)
    Math.round(parseInt((tipPercent += 0.05).toFixed(2)));
  else tipPercent = 1;
  calculateTip(billInput, tipPercent, numberOfPeople);
});

numDecrease.addEventListener("click", () => {
  if (numberOfPeople > 1) numberOfPeople--;
  calculateTip(billInput, tipPercent, numberOfPeople);
});

numIncrease.addEventListener("click", () => {
  numberOfPeople++;
  calculateTip(billInput, tipPercent, numberOfPeople);
});

calculateTip(billInput, tipPercent, numberOfPeople);
