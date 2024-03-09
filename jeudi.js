export const counter = () => {
  const btn = document.querySelector(".btn");
  const plus = document.createElement("button");
  const moin = document.createElement("button");
  const number = document.createElement("p");

  plus.textContent = "+";
  number.textContent = 0;
  moin.textContent = "-";

  btn.appendChild(plus);
  btn.appendChild(number);
  btn.appendChild(moin);

  let count = 0;
  plus.addEventListener("click", (e) => {
    count++;
    number.textContent = count;
  });
  moin.addEventListener("click", (e) => {
    count--;
    number.textContent = count;
  });
};




