// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
    } else {
        body.setAttribute('data-theme', 'dark');
    }
});

// Singapore Income Tax Calculator 2025
class TaxCalculator {
    constructor() {
        // Tax brackets for 2025 (Singapore Residents)
        this.taxBrackets = [
            {"min": 0, "max": 20000, "rate": 0, "cumulative": 0},
            {"min": 20000, "max": 30000, "rate": 0.02, "cumulative": 0},
            {"min": 30000, "max": 40000, "rate": 0.035, "cumulative": 200},
            {"min": 40000, "max": 80000, "rate": 0.07, "cumulative": 550},
            {"min": 80000, "max": 120000, "rate": 0.115, "cumulative": 3350},
            {"min": 120000, "max": 160000, "rate": 0.15, "cumulative": 7950},
            {"min": 160000, "max": 200000, "rate": 0.18, "cumulative": 13950},
            {"min": 200000, "max": 240000, "rate": 0.19, "cumulative": 21150},
            {"min": 240000, "max": 280000, "rate": 0.195, "cumulative": 28750},
            {"min": 280000, "max": 320000, "rate": 0.20, "cumulative": 36550},
            {"min": 320000, "max": 500000, "rate": 0.22, "cumulative": 44550},
            {"min": 500000, "max": 1000000, "rate": 0.23, "cumulative": 84150},
            {"min": 1000000, "max": 999999999, "rate": 0.24, "cumulative": 199150}
        ];

        this.deductionInfo = {
            charitableDonations: { multiplier: 2.5 },
            srsContributions: { limitCitizen: 15300 },
            cpfTopUp: { limit: 16000 },
            reliefCap: 80000
        };

        this.taxRebate = { rate: 0.6, cap: 200 };

        this.initializeElements();
        this.bindEvents();
        this.calculate(); // Initial calculation
    }

    initializeElements() {
        this.elements = {
            annualIncome: document.getElementById('annualIncome'),
            charityDonations: document.getElementById('charityDonations'),
            srsContributions: document.getElementById('srsContributions'),
            cpfTopUp: document.getElementById('cpfTopUp'),
            displayIncome: document.getElementById('displayIncome'),
            displayDeductions: document.getElementById('displayDeductions'),
            displayTaxableIncome: document.getElementById('displayTaxableIncome'),
            displayGrossTax: document.getElementById('displayGrossTax'),
            displayRebate: document.getElementById('displayRebate'),
            displayFinalTax: document.getElementById('displayFinalTax'),
            taxBreakdown: document.getElementById('taxBreakdown')
        };
    }

    bindEvents() {
        // Add event listeners for real-time calculation
        Object.keys(this.elements).forEach(key => {
            if (this.elements[key] && this.elements[key].addEventListener) {
                this.elements[key].addEventListener('input', () => this.calculate());
            }
        });
    }

    getInputValue(elementId) {
        const element = this.elements[elementId];
        const value = parseFloat(element.value) || 0;
        return Math.max(0, value); // Ensure no negative values
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-SG', {
            style: 'currency',
            currency: 'SGD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(Math.round(amount));
    }

    calculateDeductions() {
        const charityDonations = this.getInputValue('charityDonations');
        const srsContributions = Math.min(this.getInputValue('srsContributions'), this.deductionInfo.srsContributions.limitCitizen);
        const cpfTopUp = Math.min(this.getInputValue('cpfTopUp'), this.deductionInfo.cpfTopUp.limit);

        // Charitable donations get 250% deduction
        const charityDeduction = charityDonations * this.deductionInfo.charitableDonations.multiplier;
        
        // Total deductions capped at $80,000
        const totalDeductions = Math.min(charityDeduction + srsContributions + cpfTopUp, this.deductionInfo.reliefCap);

        return {
            charity: charityDeduction,
            srs: srsContributions,
            cpf: cpfTopUp,
            total: totalDeductions
        };
    }

    calculateTaxByBrackets(taxableIncome) {
        if (taxableIncome <= 0) {
            return { total: 0, breakdown: [] };
        }

        let remainingIncome = taxableIncome;
        let totalTax = 0;
        const breakdown = [];

        for (const bracket of this.taxBrackets) {
            if (remainingIncome <= 0) break;

            const bracketMin = bracket.min;
            const bracketMax = bracket.max;
            const rate = bracket.rate;

            // Calculate taxable amount in this bracket
            const bracketSize = bracketMax - bracketMin;
            const taxableInThisBracket = Math.min(remainingIncome, bracketSize);

            if (taxableInThisBracket > 0) {
                const taxInBracket = taxableInThisBracket * rate;
                totalTax += taxInBracket;

                breakdown.push({
                    min: bracketMin,
                    max: bracketMax === 999999999 ? null : bracketMax,
                    rate: rate,
                    taxableAmount: taxableInThisBracket,
                    tax: taxInBracket
                });

                remainingIncome -= taxableInThisBracket;
            }
        }

        return { total: totalTax, breakdown };
    }

    renderTaxBreakdown(breakdown) {
        if (!breakdown || breakdown.length === 0) {
            this.elements.taxBreakdown.innerHTML = '<p class="tax-bracket tax-bracket--zero">No tax due</p>';
            return;
        }

        const html = breakdown.map(bracket => {
            const rangeText = bracket.max 
                ? `$${bracket.min.toLocaleString()} - $${bracket.max.toLocaleString()}`
                : `Above $${bracket.min.toLocaleString()}`;
            
            const rateText = `${(bracket.rate * 100).toFixed(bracket.rate < 0.1 ? 1 : 0)}%`;
            const isZero = bracket.tax === 0;
            
            return `
                <div class="tax-bracket ${isZero ? 'tax-bracket--zero' : ''}">
                    <div class="tax-bracket__description">
                        ${rangeText} @ ${rateText}
                        ${bracket.taxableAmount < (bracket.max - bracket.min) ? ` (on $${bracket.taxableAmount.toLocaleString()})` : ''}
                    </div>
                    <div class="tax-bracket__amount">${this.formatCurrency(bracket.tax)}</div>
                </div>
            `;
        }).join('');

        this.elements.taxBreakdown.innerHTML = html;
    }

    calculate() {
        // Get input values
        const annualIncome = this.getInputValue('annualIncome');
        const deductions = this.calculateDeductions();
        
        // Calculate taxable income
        const taxableIncome = Math.max(0, annualIncome - deductions.total);
        
        // Calculate tax by brackets
        const taxCalculation = this.calculateTaxByBrackets(taxableIncome);
        const grossTax = taxCalculation.total;
        
        // Apply tax rebate (60% capped at $200)
        const rebateAmount = Math.min(grossTax * this.taxRebate.rate, this.taxRebate.cap);
        const finalTax = Math.max(0, grossTax - rebateAmount);

        // Update display
        this.elements.displayIncome.textContent = this.formatCurrency(annualIncome);
        this.elements.displayDeductions.textContent = this.formatCurrency(deductions.total);
        this.elements.displayTaxableIncome.textContent = this.formatCurrency(taxableIncome);
        this.elements.displayGrossTax.textContent = this.formatCurrency(grossTax);
        this.elements.displayRebate.textContent = '-' + this.formatCurrency(rebateAmount);
        this.elements.displayFinalTax.textContent = this.formatCurrency(finalTax);

        // Render tax breakdown
        this.renderTaxBreakdown(taxCalculation.breakdown);

        // Update input validations
        this.updateInputValidations(deductions);
    }

    updateInputValidations(deductions) {
        // Update SRS max value display
        const srsInput = this.elements.srsContributions;
        const srsMax = this.deductionInfo.srsContributions.limitCitizen;
        if (this.getInputValue('srsContributions') > srsMax) {
            srsInput.style.borderColor = 'var(--color-warning)';
        } else {
            srsInput.style.borderColor = '';
        }

        // Update CPF max value display
        const cpfInput = this.elements.cpfTopUp;
        const cpfMax = this.deductionInfo.cpfTopUp.limit;
        if (this.getInputValue('cpfTopUp') > cpfMax) {
            cpfInput.style.borderColor = 'var(--color-warning)';
        } else {
            cpfInput.style.borderColor = '';
        }

        // Show warning if total deductions exceed cap
        if (deductions.charity + deductions.srs + deductions.cpf > this.deductionInfo.reliefCap) {
            // Could add a warning message here
        }
    }
}

// Utility functions for enhanced UX
function addThousandsSeparator(input) {
    input.addEventListener('input', function(e) {
        let value = e.target.value.replace(/,/g, '');
        if (!isNaN(value) && value !== '') {
            e.target.value = Number(value).toLocaleString();
        }
    });

    input.addEventListener('focus', function(e) {
        e.target.value = e.target.value.replace(/,/g, '');
    });

    input.addEventListener('blur', function(e) {
        let value = e.target.value.replace(/,/g, '');
        if (!isNaN(value) && value !== '') {
            e.target.value = Number(value).toLocaleString();
        }
    });
}

// Initialize the calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the tax calculator
    new TaxCalculator();

    // Add tooltips functionality
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function(e) {
            const title = e.target.getAttribute('title');
            if (title) {
                // Create and show tooltip (basic implementation)
                e.target.setAttribute('data-original-title', title);
                e.target.removeAttribute('title');
            }
        });

        tooltip.addEventListener('mouseleave', function(e) {
            const originalTitle = e.target.getAttribute('data-original-title');
            if (originalTitle) {
                e.target.setAttribute('title', originalTitle);
                e.target.removeAttribute('data-original-title');
            }
        });
    });

    // Add smooth scrolling for mobile
    if (window.innerWidth <= 768) {
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            });
        });
    }
});

// Export for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TaxCalculator;
}