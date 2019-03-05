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

//************square numbers*********
function squaresVille(flats) {
    let bigs = flats.map((val, i, flats) => {
        return val * val;
    });
    console.log(bigs);
}

squaresVille([2, 5, 6, 7, 99]);    






