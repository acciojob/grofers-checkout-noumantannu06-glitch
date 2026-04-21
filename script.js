document.addEventListener('DOMContentLoaded', function() {
  // Get all price cells
  const priceCells = document.querySelectorAll('[data-ns-test="prices"]');
  
  // Sum prices safely (parseFloat ignores non-numbers)
  let total = 0;
  priceCells.forEach(cell => {
    const priceText = cell.textContent.trim();
    const priceNum = parseFloat(priceText);
    if (!isNaN(priceNum)) {
      total += priceNum;
    }
  });
  
  // Create total row
  const table = document.querySelector('table'); // Assumes single table
  const tbody = table.tBodies[0] || table; // Use tbody or table directly
  
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
  totalCell.setAttribute('data-ns-test', 'grandTotal');
  totalCell.textContent = `Grand Total: ₹${total.toFixed(2)}`; // Format as needed
  totalRow.appendChild(totalCell);
  
  // Append to table body (pad with empty td if multi-col table)
  tbody.appendChild(totalRow);
});