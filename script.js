const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
        const prices = document.querySelectorAll('[data-ns-test="prices"]');
        let total = 0;
        prices.forEach(p => total += parseFloat(p.textContent) || 0);
        
        // Create total row
        const tbody = document.querySelector('tbody') || document.querySelector('table');
        const row = document.createElement('tr');
        row.innerHTML = `<td>Total</td><td data-ns-test="grandTotal" id="ans">${total}</td>`;
        tbody.appendChild(row);

};

getSumBtn.addEventListener("click", getSum);

