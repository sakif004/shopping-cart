function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total
    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1229;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on subTotal Inner-text 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
};

// phone increase event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1229, true);
});
// phone decrease event
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1229, false);
});

// increase case count 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

// decrease case count 
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});



