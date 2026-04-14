// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("groceryTable");
  const priceCells = document.querySelectorAll("[data-ns-test='prices']");
  let total = 0;

  // Sum all prices
  priceCells.forEach((cell) => {
    const value = parseFloat(cell.textContent) || 0;
    total += value;
  });

  // Create total row
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.setAttribute("data-ns-test", "grandTotal");
  totalCell.colSpan = 2;
  totalCell.textContent = total;

  totalRow.appendChild(totalCell);
  table.querySelector("tbody").appendChild(totalRow);
});