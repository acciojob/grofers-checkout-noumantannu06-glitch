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

// Check if cell with id 'ans' exists
let ansCell = document.querySelector('#ans');

if (!ansCell) {
  // Create new row and cell with id 'ans'
  const table = document.querySelector('table');
  const newRow = document.createElement('tr');
  ansCell = document.createElement('td');
  ansCell.id = 'ans';
  ansCell.colSpan = 2; // adjust as needed
  newRow.appendChild(ansCell);
  table.appendChild(newRow);
}

// Update the content of ansCell
ansCell.textContent = total;

getSumBtn.addEventListener("click", getSum);

