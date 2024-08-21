const expenseForm = document.getElementById('expense-form');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmount = document.getElementById('total-amount');
let expenses = [];

expenseForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const expense = { date, category, description, amount };
    expenses.push(expense);

    addExpenseToTable(expense);
    updateTotalAmount();

    expenseForm.reset();
});

function addExpenseToTable(expense) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${expense.date}</td>
        <td>${expense.category}</td>
        <td>${expense.description}</td>
        <td>${expense.amount.toFixed(2)}</td>
    `;

    expenseTableBody.appendChild(row);
}

function updateTotalAmount() {
    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    totalAmount.textContent = total.toFixed(2);
}
