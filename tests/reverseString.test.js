const reverseString = require('../algs/reverseString');

describe('reverseString', () => {
    it('returns same letter for one-char string', () => {
        expect(reverseString('a')).toBe('a');
    });

    it('reverses two letters', () => {
        expect(reverseString('ab')).toBe('ba');
    });

    it('returns empty string if input is empty', () => {
        expect(reverseString('')).toBe('');
    });

    it('return emty string if input is invalid', () => {
        expect(reverseString(null)).toBe('');
    });
});