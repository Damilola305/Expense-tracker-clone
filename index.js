let expenseTrack = [];
const expenseForm = document.getElementById("expenseForm");
// Function to access array of expenses
function accessArray() {
  console.log(expenseTrack);
  const table = document.getElementById("expensesTable");
  table.innerHTML = "";
  if (expenseTrack.length == 0) {
    const emptyRow = document.createElement("tr");
    emptyRow.innerHTML = `<td colspan="6" style = "text-align:center; text-weight: 500; font-size:20px;">No Available Expense</td> `;
    table.appendChild(emptyRow);
  } else {
    expenseTrack.forEach((expense) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${expense.expenseName}</td>
        <td>$${expense.amount}</td>
        <td>${expense.category}</td>
        <td>${expense.date}</td>
        <td> Edit </td>
        <td>Delete</td>
        `;
      table.appendChild(row);
    });
  }
}
accessArray();

// Getting input values
const button = document.getElementById("addExpenseBtn");
button.addEventListener("click", (e) => {
  e.preventDefault;
  const expenseName = document.getElementById("expenseName").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("newCategory").value;
  const date = document.getElementById("date").value;

  console.log(expenseName, amount, category, date);
  if ((!expenseName, !amount, !category, !date)) {
    alert("Please fill in expense details!");
    return false;
  }
  expenseTrack.push({ expenseName, amount, category, date });
  expenseForm.reset()
  accessArray();
});
