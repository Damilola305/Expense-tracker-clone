let expenseTrack = [];
const expenseForm = document.getElementById("expenseForm");
function accessArray() {
  // console.log("Accessing Array:", expenseTrack);
  const table = document.getElementById("expensesTable");
  // console.log(table);
  table.innerHTML = "";

  if (expenseTrack.length === 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `<td colspan="6" style = "text-align:center; text-weight: bold;">No Expense Available</td>`;
    table.appendChild(emptyRow);
  } else {
    expenseTrack.forEach((expense, index) => {
      console.log(expense, "This is my expense");

      const row = document.createElement("tr");
      row.innerHTML = `
                 <td>${expense.expenseName}</td>
                <td>${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td><button class="edit-button" data-index=${index}><i class="fa-solid fa-pen-to-square"></i></button></td>
                <td><button class="delete-button" data-index=${index}><i class="fa-solid fa-trash"></i></button></td>
            `;
      table.appendChild(row);
    });

    document.querySelectorAll(".edit-button").forEach((editButton) => {
      editButton.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        console.log("logging index:", index);
        editExpense(index);
      });
    });
    document.querySelectorAll(".delete-button").forEach((deleteButton) => {
      deleteButton.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        deleteExpense(index);
      });
    });
  }

  function editExpense(index) {
    const expense = expenseTrack[index];
    console.log(expense);

    //Render Edit form
    const row = document.createElement("tr");
    row.innerHTML = `
<td><input type="text" id="editExpenseName" value="${expense.expenseName}"></td>
          <td><input type="number" id="editAmount" value="${expense.amount}"></td>
          <td><input type="text" id="editCategory" value="${expense.category}"></td>
          <td><input type="date" id="editDate" value="${expense.date}"></td>
          <td><button class="save-button" data-index="${index}"><i class="fa-solid fa-circle-check"></i></button></td>
          <td><button class="cancel-button" data-index="${index}"><i class="fa-solid fa-xmark"></i></button></td>
`;
    // Replace the existing row with the edit form
    const table = document.getElementById("expensesTable");
    table.replaceChild(row, table.childNodes[index]);

    // Add event listener for Save and Cancel buttons
    document
      .querySelector(`.save-button[data-index="${index}"]`)
      .addEventListener("click", function () {
        saveExpense(index);
      });

    document
      .querySelector(`.cancel-button[data-index="${index}"]`)
      .addEventListener("click", function () {
        accessArray();
      });
  }

  function saveExpense(index) {
    // Update expense data with the edited values
    expenseTrack[index].expenseName =
      document.getElementById("editExpenseName").value;
    expenseTrack[index].amount = parseFloat(
      document.getElementById("editAmount").value
    );
    expenseTrack[index].category =
      document.getElementById("editCategory").value;
    expenseTrack[index].date = document.getElementById("editDate").value;

    console.log(expenseTrack[index]);

    // Update the UI
    accessArray();
  }

  function deleteExpense(index) {
    // Remove the expense from the array
    expenseTrack.splice(index, 1);
    4;
    // Update the UI
    accessArray();
  }
}

accessArray();

const button = document.getElementById("addExpenseBtn");
button.addEventListener("click", function accessUser() {
  const expenseName = document.getElementById("expenseName").value;
  const category = document.getElementById("newCategory").value;
  const amount = document.getElementById("amount").value;
  const date = document.getElementById("date").value;

  if ((!expenseName, !category, !amount, !date)) {
    //   alert('put your name')
    return false;
  }
  expenseTrack.push({ expenseName, category, amount, date });
  expenseForm.reset();
  accessArray();

  console.log(expenseTrack);
});
