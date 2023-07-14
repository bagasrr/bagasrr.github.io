const card = document.getElementsByClassName("card");
console.info(card);

const cardHover = (i) => {
  card[i - 1].classList.add("hover");
};
