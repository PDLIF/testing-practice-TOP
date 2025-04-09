const calc = require('../algs/calculator');

describe('Calculator', () => {
    it('should add two numbers', () => {
        expect(calc.add(1, 2)).toBe(3);
    });

    it('should substract two numbers', () => {
        expect(calc.substract(1, 2)).toBe(-1);
    });

    it('should multiply two numbers', () => {
        expect(calc.multiply(2, 2)).toBe(4);
    });

    it('should devide two numbers', () => {
        expect(calc.devide(6, 2)).toBe(3);
    });
});

describe('Calculator – Boundary cases', () => {
    it('should return number itself when adding 0', () => {
        expect(calc.add(1, 0)).toBe(1);
    });

    it('should return 0 when substractin a number from itself', () => {
        expect(calc.substract(2, 2)).toBe(0);
    });
    
    it('should return error when deviding by zero', () => {
        expect(calc.devide(5, 0)).toBe('Error: Division by zero');
    });
});

describe('Calculator – Invalid Inputs', () => {
    it('should return error for invalid inputs in addition', () => {
        expect(calc.add('a', 1)).toBe('Error: Invalid Input');
    });

    it('should return error for invalid inputs in substraction', () => {
        expect(calc.substract('a', 1)).toBe('Error: Invalid Input');
    });

    it('should return error for invalid inputs in miltiplication', () => {
        expect(calc.add('a', 1)).toBe('Error: Invalid Input');
    });

    it('should return error for invalid inputs in division', () => {
        expect(calc.devide('a', 1)).toBe('Error: Invalid Input');
    });
});