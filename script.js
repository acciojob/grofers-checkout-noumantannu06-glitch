const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
function showTotal() {
            // Get all price elements using class selector
            const priceElements = document.querySelectorAll('.prices');
            
            let total = 0;
            priceElements.forEach(element => {
                const price = parseFloat(element.textContent.trim());
                if (!isNaN(price)) {
                    total += price;
                }
            });
            
            // Create total row
            const table = document.querySelector('table');
            const tbody = table.querySelector('tbody');
            
            // Remove existing total row
            const existingTotal = tbody.querySelector('tr:last-child td:nth-child(2)');
            if (existingTotal && existingTotal.textContent.includes('Total')) {
                tbody.deleteRow(-1);
            }
            
            // Add new total row
            const totalRow = document.createElement('tr');
            const totalCell1 = document.createElement('td');
            const totalCell2 = document.createElement('td');
            
            totalCell1.textContent = 'Total';
            totalCell2.className = 'prices';
            totalCell2.textContent = '₹' + total.toLocaleString();
            
            totalRow.appendChild(totalCell1);
            totalRow.appendChild(totalCell2);
            tbody.appendChild(totalRow);
        }
        
        // Run on page load
        document.addEventListener('DOMContentLoaded', showTotal);

};

getSumBtn.addEventListener("click", getSum);

