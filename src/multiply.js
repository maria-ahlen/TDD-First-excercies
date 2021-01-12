function multiply(a, b) {
    if(b === undefined) {
        throw new Error('You are missing a number');
    }

    if( typeof a !== 'number') {
        throw new Error('First parameter must be a number!')
    } else if( typeof b !== 'number') {
        throw new Error('Second parameter must be a number!')
    }

    return a * b
}

module.exports = {multiply};