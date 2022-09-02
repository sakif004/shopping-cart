function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
};

// increase case count 
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
});

// decrease case count 
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
});



