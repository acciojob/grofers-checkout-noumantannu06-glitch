 // get all price cells
    const priceCells = document.querySelectorAll(".prices");

    let totalPrice = 0;

    // sum all prices
    priceCells.forEach(cell => {
      const value = parseFloat(cell.textContent) || 0;
      totalPrice += value;
    });

    // get the table
    const table = document.querySelector("table");

    // create total row
    const totalRow = document.createElement("tr");
    const totalCell = document.createElement("td");

    // single cell spanning both columns
    totalCell.setAttribute("colspan", "2");
    totalCell.setAttribute("data-ns-test", "grandTotal");
    totalCell.textContent = totalPrice;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);