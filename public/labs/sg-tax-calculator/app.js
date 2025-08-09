document.addEventListener('DOMContentLoaded', () => {

  const annualIncomeInput = document.getElementById('annualIncome');
  const charityDonationsInput = document.getElementById('charityDonations');
  const srsContributionsInput = document.getElementById('srsContributions');
  const cpfTopUpInput = document.getElementById('cpfTopUp');

  const displayIncome = document.getElementById('displayIncome');
  const displayDeductions = document.getElementById('displayDeductions');
  const displayTaxableIncome = document.getElementById('displayTaxableIncome');
  const taxBreakdown = document.getElementById('taxBreakdown');
  const displayGrossTax = document.getElementById('displayGrossTax');
  const displayRebate = document.getElementById('displayRebate');
  const displayFinalTax = document.getElementById('displayFinalTax');

  const taxBrackets = [
    { limit: 20000, rate: 0 },
    { limit: 30000, rate: 0.02 },
    { limit: 40000, rate: 0.035 },
    { limit: 80000, rate: 0.07 },
    { limit: 120000, rate: 0.115 },
    { limit: 160000, rate: 0.15 },
    { limit: 200000, rate: 0.18 },
    { limit: 240000, rate: 0.19 },
    { limit: 280000, rate: 0.195 },
    { limit: 320000, rate: 0.20 },
    { limit: 500000, rate: 0.22 },
    { limit: 1000000, rate: 0.23 },
    { limit: Infinity, rate: 0.24 },
  ];

  function formatCurrency(amount) {
    return new Intl.NumberFormat('en-SG', {
      style: 'currency',
      currency: 'SGD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  }

  function calculateTax() {
    const annualIncome = parseFloat(annualIncomeInput.value) || 0;
    const charityDonations = parseFloat(charityDonationsInput.value) || 0;
    const srsContributions = parseFloat(srsContributionsInput.value) || 0;
    const cpfTopUp = parseFloat(cpfTopUpInput.value) || 0;

    const charityDeduction = charityDonations * 2.5;
    const totalDeductions = charityDeduction + srsContributions + cpfTopUp;
    const taxableIncome = Math.max(0, annualIncome - totalDeductions);

    let grossTax = 0;
    let remainingIncome = taxableIncome;
    let previousLimit = 0;

    taxBreakdown.innerHTML = '';

    for (const bracket of taxBrackets) {
      if (remainingIncome <= 0) {
        break;
      }

      const taxableAtThisBracket = Math.min(remainingIncome, bracket.limit - previousLimit);
      const taxAtThisBracket = taxableAtThisBracket * bracket.rate;
      grossTax += taxAtThisBracket;

      const bracketDiv = document.createElement('div');
      bracketDiv.classList.add('tax-bracket');
      if (taxAtThisBracket === 0) {
        bracketDiv.classList.add('tax-bracket--zero');
      }

      bracketDiv.innerHTML = `
                <div class="tax-bracket__description">
                    ${formatCurrency(taxableAtThisBracket)} at ${bracket.rate * 100}%
                </div>
                <div class="tax-bracket__amount">
                    ${formatCurrency(taxAtThisBracket)}
                </div>
            `;
      taxBreakdown.appendChild(bracketDiv);

      remainingIncome -= taxableAtThisBracket;
      previousLimit = bracket.limit;
    }

    const rebate = Math.min(200, grossTax * 0.6);
    const finalTax = Math.max(0, grossTax - rebate);

    displayIncome.textContent = formatCurrency(annualIncome);
    displayDeductions.textContent = formatCurrency(totalDeductions);
    displayTaxableIncome.textContent = formatCurrency(taxableIncome);
    displayGrossTax.textContent = formatCurrency(grossTax);
    displayRebate.textContent = `-${formatCurrency(rebate)}`;
    displayFinalTax.textContent = formatCurrency(finalTax);
  }

  [annualIncomeInput, charityDonationsInput, srsContributionsInput, cpfTopUpInput].forEach(input => {
    input.addEventListener('input', calculateTax);
  });

  calculateTax();
});
