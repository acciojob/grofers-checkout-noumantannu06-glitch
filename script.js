const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 function calculateTotal() {
            const prices = document.querySelectorAll('[data-ns-test="prices"]');
            let total = 0;
            prices.forEach(el => total += parseFloat(el.textContent) || 0);
            
            const tbody = document.querySelector('tbody');
            const totalRow = document.createElement('tr');
            totalRow.innerHTML = `
                <td>Total</td>
                <td class="prices" data-ns-test="grandTotal" id="ans">₹${total}</td>
            `;
            tbody.appendChild(totalRow);
        }
        calculateTotal();  // Run immediately
};

getSumBtn.addEventListener("click", getSum);

