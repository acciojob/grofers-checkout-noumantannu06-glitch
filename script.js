document.addEventListener('DOMContentLoaded', function() {
            // Get prices
            const priceCells = document.querySelectorAll('[data-ns-test="prices"]');
            const tbody = document.querySelector('#cart-tbody');
            
            // Sum total
            let total = 0;
            priceCells.forEach(cell => {
                const priceNum = parseFloat(cell.textContent.trim());
                if (!isNaN(priceNum)) total += priceNum;
            });
            
            // Add grand total row to table
            const totalRow = document.createElement('tr');
            const totalCell = document.createElement('td');
            totalCell.setAttribute('data-ns-test', 'grandTotal');
            totalCell.colSpan = 2;
            totalCell.innerHTML = '<strong>Grand Total: ₹' + total.toFixed(2) + '</strong>';
            totalRow.appendChild(totalCell);
            tbody.appendChild(totalRow);
            
            // Populate #ans (CRITICAL for test pass)
            document.getElementById('ans').innerHTML = '₹' + total.toFixed(2);
            
            // Button functionality
            document.getElementById('checkout-btn').addEventListener('click', function() {
                alert('Checkout successful! Total: ₹' + total.toFixed(2));
            });
            
            console.log('Grofers Checkout loaded. Total: ₹' + total.toFixed(2));
        });
