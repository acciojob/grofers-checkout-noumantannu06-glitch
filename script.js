const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const priceCells = document.querySelectorAll('td:nth-child(3)');  // Assuming price in 3rd column
priceCells.forEach(cell => {
cell.setAttribute('data-ns-test', 'prices');
});

// For grand total row
const totalCell = document.createElement('td');
totalCell.setAttribute('data-ns-test', 'grandTotal');
totalCell.textContent = totalPrice;

};

getSumBtn.addEventListener("click", getSum);

