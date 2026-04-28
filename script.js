
    function calculateTotal() {
      const priceCells = document.querySelectorAll(".prices");
      let totalPrice = 0;

      priceCells.forEach(cell => {
        const value = parseFloat(cell.textContent) || 0;
        totalPrice += value;
      });

      const table = document.querySelector("table");

      // Remove any existing grand total row
      const existingTotal = document.querySelector("[data-ns-test='grandTotal']");
      if (existingTotal) {
        existingTotal.closest("tr").remove();
      }

      // Add total row in table
      const totalRow = document.createElement("tr");
      const totalCell = document.createElement("td");
      totalCell.setAttribute("colspan", "2");
      totalCell.setAttribute("data-ns-test", "grandTotal");
      totalCell.textContent = totalPrice;

      totalRow.appendChild(totalCell);
      table.appendChild(totalRow);

      // Write the **same** total into #ans
      const ans = document.getElementById("ans");
      if (ans) {
        ans.textContent = totalPrice;
      }
    }

    // Run once on page load
    calculateTotal();

    // Run again when button is clicked
    document.getElementById("update-total").addEventListener("click", calculateTotal);