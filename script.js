  document.addEventListener('DOMContentLoaded', function() {
            // Step 1: Get all price cells using class selector
            const priceCells = document.querySelectorAll('.prices');
            
            // Step 2: Sum prices safely (parseFloat handles decimals/currency symbols)
            let total = 0;
            priceCells.forEach(cell => {
                const priceText = cell.textContent.trim();
                const priceNum = parseFloat(priceText);
                if (!isNaN(priceNum)) {
                    total += priceNum;
                }
            });
            
            // Step 3: Find table body
            const table = document.querySelector('table');
            const tbody = table.tBodies[0] || table;
            
            // Step 4: Create total row with data-ns-test for Cypress
            const totalRow = document.createElement('tr');
            const totalCell = document.createElement('td');
            totalCell.setAttribute('data-ns-test', 'grandTotal');
            totalCell.colSpan = 2; // Span both columns
            totalCell.textContent = `Grand Total: ₹${total.toFixed(2)}`;
            totalRow.appendChild(totalCell);
            
            // Step 5: Append to table body
            tbody.appendChild(totalRow);
            
            console.log(`Total calculated: ₹${total.toFixed(2)}`); // Debug log
        });