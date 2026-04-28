function calculateTotal() {
      const priceCells = document.querySelectorAll(".prices");   // this is what the test wants
      let totalPrice = 0;

      priceCells.forEach(cell => {
        const value = parseFloat(cell.textContent) || 0;
        totalPrice += value;
      });

      const table = document.querySelector("table");
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

      // Update #ans so the test can read the total
      const ans = document.getElementById("ans");
      if (ans) {
        ans.textContent = totalPrice;
      }
    }

    // Run once on load
    calculateTotal();

    // Also run when button is clicked
    document.getElementById("update-total").addEventListener("click", calculateTotal);
