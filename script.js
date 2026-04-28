function calculateTotal() {
    // 1. Select all elements containing prices using the data attribute
    const priceElements = document.querySelectorAll('[data-ns-test="price"]');
    let total = 0;

    // 2. Iterate through elements and sum the values
    priceElements.forEach((element) => {
        const price = parseFloat(element.innerText);
        if (!isNaN(price)) {
            total += price;
        }
    });

    // 3. Update the #ans element with the final sum
    const ansElement = document.getElementById("ans");
    ansElement.innerText = total;
}

// 4. Call the function (ensure this runs after DOM is loaded or items are added)
calculateTotal();
