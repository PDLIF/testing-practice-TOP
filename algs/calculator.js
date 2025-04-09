const calculator = (() => {
    return {
        add: (a, b) => {
            if (typeof a !== 'number' || typeof b !== 'number') return 'Error: Invalid Input';
            return a + b;
        },
        substract: (a, b) => {
            if (typeof a !== 'number' || typeof b !== 'number') return 'Error: Invalid Input';
            return a - b;
        },
        multiply: (a, b) => {
            if (typeof a !== 'number' || typeof b !== 'number') return 'Error: Invalid Input';
            return a * b;
        },
        devide: (a, b) => {
            if (typeof a !== 'number' || typeof b !== 'number') return 'Error: Invalid Input';
            return b !== 0 ? a / b : 'Error: Division by zero';
        },
    }
})();

module.exports = calculator;