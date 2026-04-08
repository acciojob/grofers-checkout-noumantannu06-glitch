const getSum = () => {
  const priceCells = document.querySelectorAll('td:nth-child(3)');  // Or '.prices'
  let totalPrice = 0;
  
  priceCells.forEach(cell => {
    cell.setAttribute('data-ns-test', 'prices');
    totalPrice += parseFloat(cell.textContent) || 0;
  });
  
  // Create new row at table end
  const table = document.querySelector('table');
  const newRow = table.insertRow();
  const totalCell = newRow.insertCell(0);
  totalCell.colSpan = 3;  // Span columns
  totalCell.setAttribute('data-ns-test', 'grandTotal');
  totalCell.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
  totalCell.style.fontWeight = 'bold';
};