    function calculateTotal() {
      // 1. Get all prices (must have class="prices")
      const priceCells = document.querySelectorAll(".prices");
      let totalPrice = 0;

      priceCells.forEach(cell => {
        const value = parseFloat(cell.textContent) || 0;
        totalPrice += value;
      });

      // 2. Update table with grand total row
      const table = document.querySelector("table");

      // Remove any existing grand total row
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

      // 3. Write the same total into #ans so tests can read it
      const ans = document.getElementById("ans");
      if (ans) {
        ans.textContent = totalPrice;
      }
    }

    // Run once on page load (very important for test)
    calculateTotal();

    // Also run when button is clicked
    document.getElementById("update-total").addEventListener("click", calculateTotal);
