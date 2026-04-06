const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 const prices = document.querySelectorAll('.prices');
    let total = 0;
    prices.forEach(p => total += parseFloat(p.textContent) || 0);
    
    const tbody = document.querySelector('table tbody') || document.querySelector('table');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>Total</td>
        <td id="ans" data-ns-test="grandTotal">${total}</td>  <!-- Plain '333', no ₹ -->
    `;
    tbody.appendChild(row);

getSumBtn.addEventListener("click", getSum);

