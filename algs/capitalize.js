function capitalize(input) {
    if (typeof input !== 'string' || !input) return '';
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
}

module.exports = capitalize;