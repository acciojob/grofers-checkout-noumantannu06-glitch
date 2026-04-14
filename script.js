/ Select all price cells
const priceElements = document.querySelectorAll('#grocery-table .prices');

// Calculate total price
let total = 0;
priceElements.forEach(priceEl => {
  total += Number(priceEl.textContent);
});

// Create new row for total
const table = document.getElementById('grocery-table');
const newRow = document.createElement('tr');
const newCell = document.createElement('td');

// Set colspan to span both columns (Item and Price)
newCell.colSpan = 2;
newCell.textContent = `Total Price: ${total}`;

// Append new cell to row, then row to table
newRow.appendChild(newCell);
table.appendChild(newRow);