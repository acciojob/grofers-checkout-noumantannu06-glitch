// Step 1: Get all price elements
const priceElements = document.querySelectorAll('.prices');

// Step 2: Calculate total price
let total = 0;
priceElements.forEach(priceEl => {
  // Convert price text to number and add to total
  total += Number(priceEl.textContent);
});

// Step 3: Create a new table row and cell
const table = document.querySelector('table'); // assuming there is only one table
const newRow = document.createElement('tr');
const newCell = document.createElement('td');

// Step 4: Set the total price in the cell
newCell.textContent = `Total Price: ${total}`;
newCell.colSpan = /* set this based on your table columns */;

// Step 5: Append the cell to the row, and the row to the table
newRow.appendChild(newCell);
table.appendChild(newRow);