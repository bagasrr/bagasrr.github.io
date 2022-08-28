const burgerIcon = document.querySelector(".burger");

// function removeToggle() {
//   document.body.addEventListener("click", function () {
//     document.querySelector(".menu").classList.remove("menuWidth");
//   });
// }

burgerIcon.addEventListener("click", function () {
  burgerIcon.classList.toggle("change");
  document.querySelector(".menu").classList.toggle("menuWidth");
  // document.querySelector(".menu").style.width = "200px";
});

//membuat project-card responsive
// not final
const projectContainer = document.querySelector(".project-container"),
  projectCard = projectContainer.getElementsByClassName("project-card");
let pcLength = projectCard.length;

function projectJustify() {
  if (pcLength == 1) {
    projectContainer.style.justifyContent = "center";
  } else if (pcLength < 3) {
    projectContainer.style.justifyContent = "space-evenly";
  } else {
    projectContainer.style.justifyContent = "";
  }
}
projectJustify();
//projectCount
const minus = document.querySelector(".minus"),
  num = document.querySelector(".num"),
  plus = document.querySelector(".plus");

// buat num sama dengan jumlah project
let pCount = pcLength < 10 ? "0" + pcLength : pcLength;
num.innerText = pCount;

// baut listener kalo ditambah project nambah 1 dan sebaliknya

plus.addEventListener("click", () => {
  pcLength++;
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
  let newTextProjectName = document.createTextNode("Project ke " + pcLength);
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
  console.log(pcLength);
  pCount++;
  pCount = pCount < 10 ? "0" + pCount : pCount;
  num.innerText = pCount;

  projectJustify();
});

minus.addEventListener("click", () => {
  if (pCount > 0) {
    const projectCard = document.querySelector(".project-card");
    projectContainer.removeChild(projectContainer.lastElementChild);
    pcLength--;
    console.log(pcLength);

    pCount--;
    pCount = pCount < 10 ? "0" + pCount : pCount;
    num.innerText = pCount;
  }
  projectJustify();
});

projectJustify();

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
