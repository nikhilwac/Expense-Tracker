document.addEventListener("DOMContentLoaded", function () {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    expenseForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const expenseName = document.getElementById("expense-name").value;
        const expenseAmount = document.getElementById("expense-amount").value;

        if (expenseName.trim() === "" || expenseAmount <= 0) {
            alert("Please enter valid expense details.");
            return;
        }

        const listItem = document.createElement("li");
        listItem.classList.add("expense-item");
        listItem.innerHTML = `
                <span>${expenseName}</span>
                <span>₹${expenseAmount}</span>
            `;

        expenseList.appendChild(listItem);

        // Clear input fields
        document.getElementById("expense-name").value = "";
        document.getElementById("expense-amount").value = "";
    });
})