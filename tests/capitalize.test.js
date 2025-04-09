const capitalize = require('../algs/capitalize');

describe('capitilize', () => {

    // Triangulation
    it('capitilizes one-letter string', () => {
        expect( capitalize('a') ).toBe('A');
    });

    it('capitalizes first letter and lowercases the rest', () => {
        expect(capitalize('ab')).toBe('Ab');
    });

    it('works with longer words', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    // Edge case
    it('returns empty string if input is empty', () => {
        expect(capitalize('')).toBe('');
    });

    // Invalid input
    it('returns empty string if input is invalid', () => {
        expect(capitalize(null)).toBe('');
    });
})