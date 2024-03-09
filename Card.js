export const Card = (question) => {
  const container = document.querySelector(".container");
  const card = document.createElement("div");
  card.textContent = question.question;
  card.style.cssText = `display: flex; justify-content: space-between; align-items: center; border: 2px solid #ccc; height:100px; width:200px `;
  container.appendChild(card);
};
