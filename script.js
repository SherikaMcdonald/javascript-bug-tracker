const bugInput = document.getElementById("bugInput");
const addBugButton = document.getElementById("addBugButton");
const bugList = document.getElementById("bugList");

let bugs = [];

function renderBugs() {
  bugList.innerHTML = "";

  bugs.forEach((bug, index) => {
    const li = document.createElement("li");

    const bugText = document.createElement("span");
    bugText.textContent = bug.description;
    bugText.className = bug.fixed ? "bug-text fixed" : "bug-text";

    const actions = document.createElement("div");
    actions.className = "actions";

    const fixButton = document.createElement("button");
    fixButton.textContent = bug.fixed ? "Unfix" : "Fix";
    fixButton.addEventListener("click", () => toggleBug(index));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteBug(index));

    actions.appendChild(fixButton);
    actions.appendChild(deleteButton);

    li.appendChild(bugText);
    li.appendChild(actions);

    bugList.appendChild(li);
  });
}

function addBug() {
  const description = bugInput.value.trim();

  if (description === "") {
    alert("Please enter a bug description.");
    return;
  }

  bugs.push({
    description: description,
    fixed: false
  });

  bugInput.value = "";
  renderBugs();
}

function toggleBug(index) {
  bugs[index].fixed = !bugs[index].fixed;
  renderBugs();
}

function deleteBug(index) {
  bugs.splice(index, 1);
  renderBugs();
}

addBugButton.addEventListener("click", addBug);

bugInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addBug();
  }
});
