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
console.log(pCount);

// baut listener kalo ditambah project nambah 1 dan sebaliknya

plus.addEventListener("click", () => {
  const newProjectCard = document.createElement("li");
  newProjectCard.className = "project-card";

  const newThumb = document.createElement("img");
  newThumb.src = "images/sample.jpg";
  newThumb.className = "img-thumb";

  const newProjectInfo = document.createElement("div");
  newProjectInfo.className = "project-info";

  const newProjectName = document.createElement("h2");
  newProjectName.className = "project-name";
  const newLink = document.createElement("a");
  let newTextProjectName = document.createTextNode("Project Name");
  newLink.appendChild(newTextProjectName);
  newProjectName.appendChild(newLink);
  console.log(newProjectName);

  const newProjectDesc = document.createElement("p");
  newProjectDesc.className = "project-desc";
  const newTextProjectDesc = document.createTextNode(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dolore nam, veniam, tempora placeat aliquam impedit quam tempore harum minus vero alias nemo debitis nostrum cupiditate dolores provident a excepturi!"
  );
  newProjectDesc.appendChild(newTextProjectDesc);

  // memasukkan child ke parent project info
  newProjectInfo.appendChild(newProjectName);
  newProjectInfo.appendChild(newProjectDesc);

  // memasukkan parent (project info) ke parent Project Card
  newProjectCard.appendChild(newThumb);
  newProjectCard.appendChild(newProjectInfo);

  // memasukkan project card ke project container
  projectContainer.appendChild(newProjectCard);

  // itemBaru.appendChild(isiItem);
  // itemContainer.appendChild(itemBaru);
  console.log(pCount);
  pCount++;
  pCount = pCount < 10 ? "0" + pCount : pCount;
  num.innerText = pCount;
});

minus.addEventListener("click", () => {
  if (pCount > 0) {
    const projectCard1 = (document.querySelector = ".project-card");
    projectContainer.removeChild(projectCard1);

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
