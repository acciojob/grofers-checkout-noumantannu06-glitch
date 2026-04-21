 document.addEventListener('DOMContentLoaded', function() {
            const priceCells = document.querySelectorAll('[data-ns-test="prices"]');
            const tbody = document.querySelector('#cart-tbody');
            const checkoutBtn = document.getElementById('checkout-btn');
            
            // Calculate total
            let total = 0;
            priceCells.forEach(cell => {
                const priceNum = parseFloat(cell.textContent.trim());
                if (!isNaN(priceNum)) total += priceNum;
            });
            
            // Add grand total row
            const totalRow = document.createElement('tr');
            totalRow.className = 'grand-total-row';
            const totalCell = document.createElement('td');
            totalCell.setAttribute('data-ns-test', 'grandTotal');
            totalCell.colSpan = 2;
            totalCell.textContent = `Grand Total: ₹${total.toFixed(2)}`;
            totalRow.appendChild(totalCell);
            tbody.appendChild(totalRow);
            
            // Checkout functionality (for button interaction)
            checkoutBtn.addEventListener('click', function() {
                document.getElementById('total-display').textContent = `₹${total.toFixed(2)}`;
                checkoutBtn.style.display = 'none';
                document.getElementById('checkout-complete').style.display = 'block';
            });
            
            console.log(`Grofers Checkout ready. Total: ₹${total.toFixed(2)}`);
        });