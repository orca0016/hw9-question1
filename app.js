const sortName = document.getElementById("sort-name");
const sortRate = document.getElementById("sort-rate");
const bodyTable = document.getElementById("body-table");
const form = document.getElementById("form-add-movie");
const inputName = document.getElementById("name-input");
const inputRate = document.getElementById("rate-input");
const validError = document.getElementById("valid-error");
const submitForm = document.getElementById("submit-form");
let data = [];

inputRate.addEventListener("input", (e) => {
  const number = Number(e.target.value);
  if (number > 5 || number < 0 || !number) {
    inputRate.classList.add("error-input");
    validError.innerText = "please enter a valid number between 0 / 5";
    validError.style.color = "red";
    submitForm.setAttribute("disabled", true);
  } else {
    validError.innerText = "";
    submitForm.removeAttribute("disabled");
    inputRate.classList.remove("error-input");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  data.push({
    id: Date.now(),
    name: e.target.name.value,
    rate: e.target.rate.value,
  });
  e.target.name.value = "";
  e.target.rate.value = "";
  renderTableRow();
});

const renderTableRow = () => {
  bodyTable.innerHTML = "";
  data.forEach((item) => {
    const row = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.innerText = item.name;
    row.appendChild(tdName);

    const tdRate = document.createElement("td");
    tdRate.innerText = item.rate;
    row.appendChild(tdRate);

    const button = document.createElement("button");
    button.innerText = "Delete";
    button.classList.add("delete-button");
    button.addEventListener("click", () => {
      deleteMovieHandler(item.id);
      console.log("add event listener");
    });

    const tdAction = document.createElement("td");
    tdAction.appendChild(button);
    tdAction.classList.add("column-table-delete");
    row.appendChild(tdAction);

    bodyTable.appendChild(row);
  });
};
const deleteMovieHandler = (id) => {
  data = data.filter((item) => item.id !== id);
  renderTableRow();
};
