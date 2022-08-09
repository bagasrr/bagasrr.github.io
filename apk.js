const burgerIcon = document.querySelector(".burger");

burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle("change");
});

//membuat project-card responsive
// not final
const projectContainer = document.querySelector(".project-container"),
  projectCard = projectContainer.getElementsByClassName("project-card");
let pcLength = projectCard.length;
if (pcLength == 1) {
  projectContainer.style.justifyContent = "center";
} else if (pcLength < 3) {
  projectContainer.style.justifyContent = "space-evenly";
}

//projectCount
const minus = document.querySelector(".minus"),
  num = document.querySelector(".num"),
  plus = document.querySelector(".plus");

let pCount = pcLength;

// buat num sama dengan jumlah project
pCount = pCount < 10 ? "0" + pCount : pCount;
num.innerText = pCount;

// baut listener kalo ditambah project nambah 1 dan sebaliknya
plus.addEventListener("click", () => {
  pCount++;
  pCount = pCount < 10 ? "0" + pCount : pCount;
  num.innerText = pCount;
  // pcLength.append = projectCard;
  // console.log(pcLength);
});
minus.addEventListener("click", () => {
  if (pCount > 0) {
    pCount--;
    pCount = pCount < 10 ? "0" + pCount : pCount;
    num.innerText = pCount;
  }
});

//adivice

const textArea = document.getElementById("advice");

textArea.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "rgba(225, 255, 255, 1)";
  },
  true
);

textArea.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true
);
