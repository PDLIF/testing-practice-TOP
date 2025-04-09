function reverseString(str) {
    if (typeof str !== 'string' || !str) return '';
    return str.split('').reverse().join('');
}

module.exports = reverseString;