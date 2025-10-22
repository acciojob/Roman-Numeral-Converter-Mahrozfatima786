function convertToRoman(num) {
    if (num === 0) return 'N'; // Optional: Represent 0 as N (nulla) in Roman numerals

    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';

    for (let [symbol, value] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// DOM interaction
const convertBtn = document.getElementById('convertBtn');
const numberInput = document.getElementById('numberInput');
const romanOutput = document.getElementById('romanOutput');

convertBtn.addEventListener('click', () => {
    const num = parseInt(numberInput.value);
    if (isNaN(num) || num < 0 || num > 100000) {
        alert('Please enter a number between 0 and 100000');
        return;
    }
    romanOutput.textContent = convertToRoman(num);
});

// Export for testing (Node.js / Cypress)
if (typeof module !== 'undefined') {
    module.exports = convertToRoman;
}
