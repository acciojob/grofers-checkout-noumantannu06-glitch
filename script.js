 // function to calculate total and add row
    function calculateTotal() {
      const priceCells = document.querySelectorAll(".prices");
      let totalPrice = 0;

      priceCells.forEach(cell => {
        const value = parseFloat(cell.textContent) || 0;
        totalPrice += value;
      });

      const table = document.querySelector("table");
      // remove any existing total row first (optional, to avoid duplicates)
      const existingTotal = document.querySelector("[data-ns-test='grandTotal']");
      if (existingTotal) {
        existingTotal.closest("tr").remove();
      }

      const totalRow = document.createElement("tr");
      const totalCell = document.createElement("td");
      totalCell.setAttribute("colspan", "2");
      totalCell.setAttribute("data-ns-test", "grandTotal");
      totalCell.textContent = totalPrice;

      totalRow.appendChild(totalCell);
      table.appendChild(totalRow);
    }

    // run once on load
    calculateTotal();

    // optional: run again when button is clicked
    document.getElementById("update-total").addEventListener("click", calculateTotal);