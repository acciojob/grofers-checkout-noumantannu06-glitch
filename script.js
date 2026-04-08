const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
       function computeTotal() {
  const priceCells = document.querySelectorAll('[data-ns-test="prices"]');
  let sum = 0;

  for (let cell of priceCells) {
    sum += Number(cell.textContent.trim());
  }

  // If test expects <td id="ans">
  const totalCell = document.getElementById("ans");
  if (totalCell) {
    totalCell.textContent = sum;
  }

  // If test expects <td data-ns-test="grandTotal">
  // const grandTotalCell = document.querySelector('[data-ns-test="grandTotal"]');
  // if (grandTotalCell) {
  //   grandTotalCell.textContent = sum;
  // }
}

};

getSumBtn.addEventListener("click", getSum);

