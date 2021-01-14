function boiling(number) {

    if( typeof number !== 'number' ) {
        throw new Error('The input is not a number');
    } else if (number < 100) {
        throw new Error('The temperature is not high enough');
    } 

    return number;
}

module.exports = { boiling };