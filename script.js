function calculateTotal() {
            // Get all price elements using class selector (dynamic for changes)
            const priceElements = document.querySelectorAll('.prices');
            
            let total = 0;
            priceElements.forEach(cell => {
                const priceText = cell.textContent.trim();
                const price = parseFloat(priceText);
                if (!isNaN(price)) {
                    total += price;
                }
            });
            
            // Create new total row
            const table = document.querySelector('table');
            const tbody = table.querySelector('tbody');
            const totalRow = document.createElement('tr');
            const totalCell = document.createElement('td');
            
            // Span across both columns, add required class/attributes for tests
            totalCell.colSpan = 2;
            totalCell.className = 'total';
            totalCell.textContent = `Total: ₹${total.toFixed(2)}`;
            
            // Append total row (remove existing if any for re-runs)
            const existingTotal = tbody.querySelector('.total');
            if (existingTotal) {
                existingTotal.parentElement.remove();
            }
            totalRow.appendChild(totalCell);
            tbody.appendChild(totalRow);
        }
        
        // Run on page load
        document.addEventListener('DOMContentLoaded', calculateTotal);