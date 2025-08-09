// Compact Enhanced Mortgage Calculator Application - Fixed Version
let mortgageCalculator;

// Loan data object
const loanData = {
    housingPrice: 500000,
    loanAmount: 400000,
    loanYears: 30,
    interestRate: 6.5,
    startMonth: 0,
    startYear: 2024,
    monthlyPayment: 0,
    originalTotalInterest: 0,
    currentTotalInterest: 0,
    originalPayoffDate: null,
    currentPayoffDate: null,
    recastMonthlyPayment: 0
};

// Extra payments array
let extraPayments = [];
let monthlyPayments = [];
let recalcMode = 'reduceTerm';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing calculator...');
    initializeCalculator();
});

function initializeCalculator() {
    console.log('Initializing calculator...');
    
    // Set up form event listeners
    setupFormListeners();
    
    // Set up extra payment listeners
    setupExtraPaymentListeners();
    
    // Set up export listeners
    setupExportListeners();
    
    // Show recalc options from the start
    updateRecalcOptions();
    
    // Initial calculation
    updateLoanDataFromForm();
    calculateMortgage();
    
    console.log('Calculator initialized');
}

function setupFormListeners() {
    console.log('Setting up form listeners...');
    
    // Loan parameter inputs
    const inputs = ['housingPrice', 'loanAmount', 'loanYears', 'interestRate', 'startMonth', 'startYear'];
    inputs.forEach(inputId => {
        const element = document.getElementById(inputId);
        if (element) {
            element.addEventListener('input', function() {
                updateLoanDataFromForm();
                calculateMortgage();
            });
            element.addEventListener('change', function() {
                updateLoanDataFromForm();
                calculateMortgage();
            });
        }
    });
    
    // Calculate button
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Calculate button clicked');
            updateLoanDataFromForm();
            calculateMortgage();
        });
    }
    
    // Recalculation radio buttons - FIX: Add proper event listeners
    const recalcOptions = document.querySelectorAll('input[name="recalcOption"]');
    recalcOptions.forEach(option => {
        option.addEventListener('change', function(e) {
            if (e.target.checked) {
                const oldMode = recalcMode;
                recalcMode = e.target.value;
                console.log('Recalc mode changed from', oldMode, 'to', recalcMode);
                calculateMortgage(); // This will now use the new calculation method
            }
        });
    });
}

function setupExtraPaymentListeners() {
    console.log('Setting up extra payment listeners...');
    
    // Add extra payment button - FIX: Make sure this works
    const addBtn = document.getElementById('addExtraPayment');
    if (addBtn) {
        console.log('Add button found, attaching event listener');
        addBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Add button clicked');
            addExtraPayment();
        });
    } else {
        console.error('Add button not found!');
    }
    
    // Enter key in amount field
    const amountInput = document.getElementById('extraPaymentAmount');
    if (amountInput) {
        amountInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                addExtraPayment();
            }
        });
    }
    
    // Form submission
    const form = document.getElementById('extraPaymentForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            addExtraPayment();
        });
    }
}

function setupExportListeners() {
    const monthlyBtn = document.getElementById('exportMonthlyBtn');
    if (monthlyBtn) {
        monthlyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            exportMonthlyPaymentsToCSV();
        });
    }
    
    const extraBtn = document.getElementById('exportExtraBtn');
    if (extraBtn) {
        extraBtn.addEventListener('click', function(e) {
            e.preventDefault();
            exportExtraPaymentsToCSV();
        });
    }
}

function updateLoanDataFromForm() {
    console.log('Updating loan data from form...');
    
    loanData.housingPrice = parseFloat(document.getElementById('housingPrice').value) || 0;
    loanData.loanAmount = parseFloat(document.getElementById('loanAmount').value) || 0;
    loanData.loanYears = parseInt(document.getElementById('loanYears').value) || 0;
    loanData.interestRate = parseFloat(document.getElementById('interestRate').value) || 0;
    loanData.startMonth = parseInt(document.getElementById('startMonth').value) || 0;
    loanData.startYear = parseInt(document.getElementById('startYear').value) || 2024;
    
    // Validate loan amount doesn't exceed housing price
    if (loanData.loanAmount > loanData.housingPrice && loanData.housingPrice > 0) {
        document.getElementById('loanAmount').value = loanData.housingPrice;
        loanData.loanAmount = loanData.housingPrice;
    }
    
    console.log('Loan data updated:', loanData);
}

function calculateMonthlyPayment(principal, annualRate, years) {
    if (annualRate === 0) {
        return principal / (years * 12);
    }
    
    const monthlyRate = annualRate / 100 / 12;
    const numPayments = years * 12;
    
    return principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
           (Math.pow(1 + monthlyRate, numPayments) - 1);
}

function calculateMortgage() {
    console.log('Calculating mortgage with mode:', recalcMode);
    
    // Validate inputs
    if (loanData.loanAmount <= 0 || loanData.loanYears <= 0 || loanData.interestRate < 0) {
        clearResults();
        return;
    }
    
    // Calculate basic monthly payment (original)
    loanData.monthlyPayment = calculateMonthlyPayment(
        loanData.loanAmount,
        loanData.interestRate,
        loanData.loanYears
    );
    
    console.log('Base monthly payment:', loanData.monthlyPayment);
    
    // FIX: Generate different amortization schedules based on recalc mode
    if (extraPayments.length > 0) {
        if (recalcMode === 'reduceTerm') {
            generateAmortizationScheduleReduceTerm();
        } else {
            generateAmortizationScheduleReducePayment();
        }
    } else {
        generateAmortizationScheduleOriginal();
    }
    
    // Update UI
    updateSummaryDisplay();
    updateMonthlyPaymentsDisplay();
    updateExtraPaymentsDisplay();
    
    console.log('Mortgage calculation complete');
}

function generateAmortizationScheduleOriginal() {
    const principal = loanData.loanAmount;
    const monthlyRate = loanData.interestRate / 100 / 12;
    const monthlyPayment = loanData.monthlyPayment;
    
    let remainingBalance = principal;
    let totalInterest = 0;
    
    monthlyPayments = [];
    
    // Create start date
    const startDate = new Date(loanData.startYear, loanData.startMonth, 1);
    let paymentNumber = 1;
    let currentDate = new Date(startDate);
    
    while (remainingBalance > 0.01 && paymentNumber <= loanData.loanYears * 12) {
        const interestPayment = remainingBalance * monthlyRate;
        let principalPayment = monthlyPayment - interestPayment;
        
        // Handle final payment
        if (principalPayment > remainingBalance) {
            principalPayment = remainingBalance;
        }
        
        remainingBalance -= principalPayment;
        totalInterest += interestPayment;
        
        const payment = {
            paymentNumber,
            paymentDate: new Date(currentDate),
            monthlyPayment: principalPayment + interestPayment,
            principalPayment: principalPayment,
            interestPayment: interestPayment,
            remainingBalance: Math.max(0, remainingBalance),
            extraPayment: 0,
            hasExtraPayment: false
        };
        
        monthlyPayments.push(payment);
        
        // Break if loan is paid off
        if (remainingBalance <= 0.01) {
            break;
        }
        
        paymentNumber++;
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    
    // Update loan data
    loanData.originalTotalInterest = totalInterest;
    loanData.currentTotalInterest = totalInterest;
    loanData.originalPayoffDate = monthlyPayments.length > 0 ? 
        monthlyPayments[monthlyPayments.length - 1].paymentDate : null;
    loanData.currentPayoffDate = loanData.originalPayoffDate;
}

function generateAmortizationScheduleReduceTerm() {
    console.log('Generating schedule with reduced term (accelerated payoff)');

    // First, generate the original schedule to get the baseline
    generateAmortizationScheduleOriginal();
    loanData.originalTotalInterest = loanData.currentTotalInterest;
    loanData.originalPayoffDate = loanData.currentPayoffDate;

    const principal = loanData.loanAmount;
    const monthlyRate = loanData.interestRate / 100 / 12;
    const monthlyPayment = loanData.monthlyPayment; // Keep original payment

    let remainingBalance = principal;
    let totalInterest = 0;
    
    monthlyPayments = [];

    const startDate = new Date(loanData.startYear, loanData.startMonth, 1);
    let paymentNumber = 1;
    let currentDate = new Date(startDate);

    const sortedExtraPayments = [...extraPayments].sort((a, b) => a.paymentDate - b.paymentDate);

    while (remainingBalance > 0.01 && paymentNumber < 1000) { // Safety break
        // Check for extra payments for the current month
        const extraPaymentsThisMonth = sortedExtraPayments.filter(ep =>
            ep.paymentDate.getFullYear() === currentDate.getFullYear() &&
            ep.paymentDate.getMonth() === currentDate.getMonth()
        );

        let totalExtraThisMonth = 0;
        if (extraPaymentsThisMonth.length > 0) {
            totalExtraThisMonth = extraPaymentsThisMonth.reduce((sum, ep) => sum + ep.amount, 0);
        }

        const interestPayment = remainingBalance * monthlyRate;
        let principalPayment = monthlyPayment - interestPayment;

        // Apply extra payment to principal
        principalPayment += totalExtraThisMonth;

        if (principalPayment > remainingBalance) {
            principalPayment = remainingBalance;
        }
        
        if ((monthlyPayment + totalExtraThisMonth) > remainingBalance + interestPayment) {
            principalPayment = remainingBalance;
        }


        remainingBalance -= principalPayment;
        totalInterest += interestPayment;

        const payment = {
            paymentNumber,
            paymentDate: new Date(currentDate),
            monthlyPayment: monthlyPayment,
            principalPayment: principalPayment,
            interestPayment: interestPayment,
            remainingBalance: Math.max(0, remainingBalance),
            extraPayment: totalExtraThisMonth,
            hasExtraPayment: totalExtraThisMonth > 0
        };

        monthlyPayments.push(payment);

        if (remainingBalance <= 0.01) {
            break;
        }

        paymentNumber++;
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    loanData.currentTotalInterest = totalInterest;
    loanData.currentPayoffDate = monthlyPayments.length > 0 ?
        monthlyPayments[monthlyPayments.length - 1].paymentDate : null;
}

function generateAmortizationScheduleReducePayment() {
    console.log('Generating schedule with reduced payment (recast)');

    // First, generate the original schedule to get the baseline
    generateAmortizationScheduleOriginal();
    loanData.originalTotalInterest = loanData.currentTotalInterest;
    loanData.originalPayoffDate = loanData.currentPayoffDate;

    const principal = loanData.loanAmount;
    const monthlyRate = loanData.interestRate / 100 / 12;
    let monthlyPayment = loanData.monthlyPayment;

    let remainingBalance = principal;
    let totalInterest = 0;
    let remainingYears = loanData.loanYears;

    monthlyPayments = [];

    const startDate = new Date(loanData.startYear, loanData.startMonth, 1);
    let paymentNumber = 1;
    let currentDate = new Date(startDate);

    const sortedExtraPayments = [...extraPayments].sort((a, b) => a.paymentDate - b.paymentDate);

    while (remainingBalance > 0.01 && paymentNumber < 1000) { // Safety break
        // Check for extra payments for the current month
        const extraPaymentsThisMonth = sortedExtraPayments.filter(ep =>
            ep.paymentDate.getFullYear() === currentDate.getFullYear() &&
            ep.paymentDate.getMonth() === currentDate.getMonth()
        );

        let totalExtraThisMonth = 0;
        if (extraPaymentsThisMonth.length > 0) {
            totalExtraThisMonth = extraPaymentsThisMonth.reduce((sum, ep) => sum + ep.amount, 0);
            remainingBalance -= totalExtraThisMonth;

            // Recalculate the monthly payment for the remainder of the loan
            const remainingLoanTermInYears = (loanData.loanYears * 12 - paymentNumber) / 12;
            if (remainingLoanTermInYears > 0) {
                monthlyPayment = calculateMonthlyPayment(remainingBalance, loanData.interestRate, remainingLoanTermInYears);
                loanData.recastMonthlyPayment = monthlyPayment;
            }
        }

        const interestPayment = remainingBalance * monthlyRate;
        let principalPayment = monthlyPayment - interestPayment;

        if (principalPayment > remainingBalance || monthlyPayment > remainingBalance + interestPayment) {
            principalPayment = remainingBalance;
            monthlyPayment = remainingBalance + interestPayment;
        }
        
        remainingBalance -= principalPayment;
        totalInterest += interestPayment;

        const payment = {
            paymentNumber,
            paymentDate: new Date(currentDate),
            monthlyPayment: monthlyPayment,
            principalPayment: principalPayment,
            interestPayment: interestPayment,
            remainingBalance: Math.max(0, remainingBalance),
            extraPayment: totalExtraThisMonth,
            hasExtraPayment: totalExtraThisMonth > 0
        };

        monthlyPayments.push(payment);

        if (remainingBalance <= 0.01) {
            break;
        }

        paymentNumber++;
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    loanData.currentTotalInterest = totalInterest;
    loanData.currentPayoffDate = monthlyPayments.length > 0 ?
        monthlyPayments[monthlyPayments.length - 1].paymentDate : null;
}

function updateSummaryDisplay() {
    console.log('Updating summary display...');
    
    const totalPayments = loanData.loanAmount + loanData.currentTotalInterest;
    
    // Update summary values - show different payment amounts based on mode
    if (extraPayments.length > 0 && recalcMode === 'reducePayment' && loanData.recastMonthlyPayment > 0) {
        document.getElementById('monthlyPayment').textContent = formatCurrency(loanData.recastMonthlyPayment);
        document.getElementById('monthlyPaymentNote').textContent = `(Reduced from ${formatCurrency(loanData.monthlyPayment)})`;
        document.getElementById('monthlyPaymentNote').style.display = 'block';
    } else {
        document.getElementById('monthlyPayment').textContent = formatCurrency(loanData.monthlyPayment);
        document.getElementById('monthlyPaymentNote').style.display = 'none';
    }
    
    document.getElementById('totalInterest').textContent = formatCurrency(loanData.currentTotalInterest);
    document.getElementById('totalPayments').textContent = formatCurrency(totalPayments);
    document.getElementById('payoffDate').textContent = loanData.currentPayoffDate ? 
        formatDate(loanData.currentPayoffDate) : '-';
    
    // Show extra payment summary if there are extra payments
    const extraSummary = document.getElementById('extraPaymentSummary');
    if (extraPayments.length > 0) {
        const interestSavings = loanData.originalTotalInterest - loanData.currentTotalInterest;
        const timeSaved = calculateTimeSaved();
        
        document.getElementById('interestSavings').textContent = formatCurrency(Math.max(0, interestSavings));
        document.getElementById('timeSaved').textContent = `${timeSaved} month${timeSaved !== 1 ? 's' : ''}`;
        
        extraSummary.style.display = 'block';
    } else {
        extraSummary.style.display = 'none';
    }
}

function calculateTimeSaved() {
    // In "reducePayment" mode, there is no time saved since term length stays the same
    if (recalcMode === 'reducePayment') {
        return 0;
    }
    
    if (!loanData.originalPayoffDate || !loanData.currentPayoffDate) {
        return 0;
    }
    
    const originalMonths = (loanData.originalPayoffDate.getFullYear() - loanData.startYear) * 12 + 
                          (loanData.originalPayoffDate.getMonth() - loanData.startMonth);
    const currentMonths = (loanData.currentPayoffDate.getFullYear() - loanData.startYear) * 12 + 
                         (loanData.currentPayoffDate.getMonth() - loanData.startMonth);
    
    return Math.max(0, originalMonths - currentMonths);
}

function updateMonthlyPaymentsDisplay() {
    const tbody = document.getElementById('monthlyScheduleBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (monthlyPayments.length === 0) {
        const row = tbody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 6;
        cell.className = 'no-data';
        cell.textContent = 'Enter loan parameters and click "Calculate" to view schedule';
        return;
    }
    
    monthlyPayments.forEach(payment => {
        const row = tbody.insertRow();
        
        if (payment.hasExtraPayment) {
            row.className = 'has-extra-payment';
        }
        
        // Payment Number
        row.insertCell().textContent = payment.paymentNumber;
        
        // Date
        row.insertCell().textContent = formatDate(payment.paymentDate);
        
        // Monthly Payment (including extra if applicable)
        const monthlyPaymentCell = row.insertCell();
        if (payment.hasExtraPayment) {
            monthlyPaymentCell.innerHTML = `${formatCurrency(payment.monthlyPayment)}<br><small class="positive-impact">+${formatCurrency(payment.extraPayment)}</small>`;
        } else {
            monthlyPaymentCell.textContent = formatCurrency(payment.monthlyPayment);
        }
        
        // Principal
        row.insertCell().textContent = formatCurrency(payment.principalPayment);
        
        // Interest
        row.insertCell().textContent = formatCurrency(payment.interestPayment);
        
        // Remaining Balance
        row.insertCell().textContent = formatCurrency(payment.remainingBalance);
    });
}

function updateExtraPaymentsDisplay() {
    console.log('Updating extra payments display. Count:', extraPayments.length);
    
    const tbody = document.getElementById('extraPaymentsBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    if (extraPayments.length === 0) {
        const row = tbody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 3;
        cell.className = 'no-data';
        cell.textContent = 'No extra payments added yet';
        return;
    }
    
    // Sort extra payments by date for display but keep original indices
    const paymentsWithIndex = extraPayments.map((payment, index) => ({ ...payment, originalIndex: index }));
    const sortedPayments = paymentsWithIndex.sort((a, b) => a.paymentDate - b.paymentDate);
    
    sortedPayments.forEach((payment) => {
        const row = tbody.insertRow();
        
        // Date
        row.insertCell().textContent = formatDate(payment.paymentDate);
        
        // Extra Payment Amount
        row.insertCell().textContent = formatCurrency(payment.amount);
        
        // Actions
        const actionsCell = row.insertCell();
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.className = 'remove-payment-btn';
        removeBtn.type = 'button';
        removeBtn.title = 'Remove this extra payment';
        
        // FIX: Use the original index to ensure proper removal
        removeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Remove button clicked for index:', payment.originalIndex);
            removeExtraPayment(payment.originalIndex);
        });
        
        actionsCell.appendChild(removeBtn);
    });
}

function updateRecalcOptions() {
    // FIX: Always show recalc options so users can switch between modes
    const recalcSection = document.getElementById('recalcOptionsSection');
    if (recalcSection) {
        recalcSection.style.display = 'block';
    }
}

function addExtraPayment() {
    console.log('Adding extra payment...');
    
    const monthSelect = document.getElementById('extraPaymentMonth');
    const yearInput = document.getElementById('extraPaymentYear');
    const amountInput = document.getElementById('extraPaymentAmount');
    
    console.log('Elements found:', {
        month: !!monthSelect,
        year: !!yearInput,
        amount: !!amountInput
    });
    
    if (!monthSelect || !yearInput || !amountInput) {
        console.error('Form inputs not found');
        alert('Error: Could not find form inputs');
        return;
    }
    
    const month = parseInt(monthSelect.value);
    const year = parseInt(yearInput.value);
    const amount = parseFloat(amountInput.value);
    
    console.log('Form values:', { month, year, amount });
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid extra payment amount');
        amountInput.focus();
        return;
    }
    
    if (year < loanData.startYear || 
        (year === loanData.startYear && month < loanData.startMonth)) {
        alert('Extra payment date cannot be before the loan start date');
        return;
    }
    
    const paymentDate = new Date(year, month, 1);
    
    const extraPayment = {
        paymentDate: paymentDate,
        amount: amount
    };
    
    extraPayments.push(extraPayment);
    console.log('Extra payment added. Total count:', extraPayments.length);
    
    // Clear the form
    amountInput.value = '';
    
    // Recalculate everything
    calculateMortgage();
    
    // Focus back on amount input
    setTimeout(() => {
        amountInput.focus();
    }, 100);
}

function removeExtraPayment(index) {
    console.log('Removing extra payment at index:', index);
    
    if (index >= 0 && index < extraPayments.length) {
        if (confirm('Remove this extra payment?')) {
            extraPayments.splice(index, 1);
            console.log('Extra payment removed. Remaining count:', extraPayments.length);
            calculateMortgage(); // This will trigger recalculation and display update
        }
    } else {
        console.error('Invalid index for removing extra payment:', index);
    }
}

function exportMonthlyPaymentsToCSV() {
    if (monthlyPayments.length === 0) {
        alert('No monthly payment schedule to export. Please calculate the mortgage first.');
        return;
    }
    
    const headers = [
        'Payment Number',
        'Payment Date',
        'Monthly Payment',
        'Principal Payment',
        'Interest Payment',
        'Remaining Balance',
        'Extra Payment'
    ];
    
    let csv = headers.join(',') + '\n';
    
    monthlyPayments.forEach(payment => {
        const row = [
            payment.paymentNumber,
            `"${formatDate(payment.paymentDate)}"`,
            payment.monthlyPayment.toFixed(2),
            payment.principalPayment.toFixed(2),
            payment.interestPayment.toFixed(2),
            payment.remainingBalance.toFixed(2),
            payment.extraPayment ? payment.extraPayment.toFixed(2) : '0.00'
        ];
        csv += row.join(',') + '\n';
    });
    
    downloadCSV(csv, 'monthly_payments_schedule');
}

function exportExtraPaymentsToCSV() {
    if (extraPayments.length === 0) {
        alert('No extra payments to export.');
        return;
    }
    
    const headers = ['Payment Date', 'Extra Payment Amount'];
    let csv = headers.join(',') + '\n';
    
    extraPayments.forEach(payment => {
        const row = [
            `"${formatDate(payment.paymentDate)}"`,
            payment.amount.toFixed(2)
        ];
        csv += row.join(',') + '\n';
    });
    
    downloadCSV(csv, 'extra_payments');
}

function downloadCSV(csv, filename) {
    try {
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${filename}_${new Date().toISOString().slice(0,10)}.csv`;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        alert(`${filename.replace('_', ' ')} exported successfully!`);
    } catch (error) {
        console.error('Export error:', error);
        alert('Error exporting file. Please try again.');
    }
}

function clearResults() {
    document.getElementById('monthlyPayment').textContent = '$0.00';
    document.getElementById('totalInterest').textContent = '$0.00';
    document.getElementById('totalPayments').textContent = '$0.00';
    document.getElementById('payoffDate').textContent = '-';
    document.getElementById('extraPaymentSummary').style.display = 'none';
    
    const monthlyTbody = document.getElementById('monthlyScheduleBody');
    if (monthlyTbody) {
        monthlyTbody.innerHTML = '<tr><td colspan="6" class="no-data">Enter loan parameters and click "Calculate" to view schedule</td></tr>';
    }
    
    const extraTbody = document.getElementById('extraPaymentsBody');
    if (extraTbody) {
        extraTbody.innerHTML = '<tr><td colspan="3" class="no-data">No extra payments added yet</td></tr>';
    }
}

function formatCurrency(amount) {
    if (isNaN(amount) || amount === null || amount === undefined) {
        return '$0.00';
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function formatDate(date) {
    if (!date) return '-';
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short'
    }).format(new Date(date));
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        exportMonthlyPaymentsToCSV();
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        exportExtraPaymentsToCSV();
    }
});
