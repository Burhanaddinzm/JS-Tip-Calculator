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

let tipPercent = 5;
let numberOfPeople = 1;

billEl.textContent = billInput.toString() + ".00";

const calculateTip = (bill, tipP, numP) => {
  const tip = (bill * tipP) / 100;

  totalResult.textContent = `$${Math.floor((bill + tip) / numP)}.0`;
  tipResult.textContent = `$${Math.floor(tip / numP)}.0`;
  tipEl.textContent = `${tipP}%`;
  numEl.textContent = numP.toString();
};

tipDecrease.addEventListener("click", () => {
  if (tipPercent > 5 && tipPercent <= 100) tipPercent -= 5;
  else tipPercent = 0;
  calculateTip(billInput, tipPercent, numberOfPeople);
});

tipIncrease.addEventListener("click", () => {
  if (tipPercent >= 0 && tipPercent < 95) tipPercent += 5;
  else tipPercent = 100;
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
