function addFunction() {
  const inputContent = document.querySelector(".task-adder-input").value;
  if (inputContent === "") {
    alert("You can not add an empty input! ");
  } else {
    const node = document.createElement("LI");
    node.className = "checked";
    node.innerText = inputContent;
    console.log("node:", node);
    document.querySelector(".tasks").appendChild(node);
    document.querySelector(".task-adder-input").value = "";
  }
}

// Add a "checked" symbol when clicking on a list item

var list = document.querySelector(".tasks");

list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
