function isWaterBoiling(degreesCelcius) {

    if( typeof degreesCelcius !== 'number' ) {
        throw new Error('The input is not a number');
    } else if ( degreesCelcius === undefined ) {
        throw new Error('You are missing the temperature')
    }
    
    if (degreesCelcius === 100) {
        return true
    } else {
        return false;
    }
}

module.exports = { isWaterBoiling };