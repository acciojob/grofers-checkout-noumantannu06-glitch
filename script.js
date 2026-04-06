const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const priceElements = document.querySelectorAll('.prices');
let total = 0;
priceElements.forEach(priceEl => {
  const price = parseFloat(priceEl.textContent);
  if (!isNaN(price)) {
    total += price;
  }
});

// Step 3 & 4: Create new row and cell
const table = document.querySelector('table'); // Use specific selector if needed
const newRow = document.createElement('tr');
const newCell = document.createElement('td');
newCell.colSpan = 2; // Adjust based on your table columns

// Step 5: Set total price text
newCell.textContent = `Total Price: ${total.toFixed(2)}`;

// Step 6: Append new row to table
newRow.appendChild(newCell);
table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

