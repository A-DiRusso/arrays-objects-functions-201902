// add your solutions here

//********postive numbers ********
function noNegitive(numbArrs) {
    let greaterThan = numbArrs.filter(val => {
        return val > 0;
    });
    console.log(greaterThan);
}

noNegitive([1, -2, 3, -5, 9]);




//**********even numbers *********
function noOdds(arr) {
    let even = arr.filter(val => {
        return val % 2 === 0;
    });
    console.log(even);
}

noOdds([1, 2, 3, 4, 5, 6, 7, 8])






