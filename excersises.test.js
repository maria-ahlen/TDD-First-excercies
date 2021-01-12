function calculateInterest(interest, years) {
   if( (typeof interest) === 'number' && !isNaN(interest) && interest >= 1 && interest < 2 ) {

   } else {
       throw new Error('Bad vlaue for interest');
   }
}   


function test_forBadInterest_shouldThrowException() {
    let interest = 'fail';
    let years = 15;
    
    try {
        let result = calculateInterest(interest, years);
        throw new Error('Did not throw an error for bad value for interest!');
    } catch (error) {
        console.log('Test case: bad value for interest - success', error);
    }
}

test_forBadInterest_shouldThrowException();