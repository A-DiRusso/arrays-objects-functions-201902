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

//*************cities #1**************
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

let coolCity = cities.filter(val => {
    return val.temperature < 70;
})
console.log(coolCity);

// function coldTimeInTheCity(cities) {
//     let niceAndCold = cities.filter(val => {
//         return val < 70;
//     });
//     console.log(niceAndCold);
// }
// coldTimeInTheCity(cities, "temperature");


//**************cities #2 *****************

let cityGuide = cities.filter(val => {
    return val.name;
});
console.log(cityGuide);
// function whosTownIsThis(cities) {
//     let notMyTown = citites.filter(val => {
//         return val;
//     })
//     console.log(notMyTown);
// }

// whosTownIsThis(['cities']);

//*************good job*********

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

people.forEach(function(people) {
    console.log(`Good Job, ${people}!!!`);
});


//*************3 times************

function call3Times(fun) {
    fun();
    fun();
    fun();
}
function fun() {
    console.log("Hello World");
}
call3Times(fun);

// ************N times*************

function callNTimes(x, hello) {
    let supDawg = [];
    for (let i = 0; i < x; i++) {
       supDawg.push(hello);
    }
    console.log(supDawg);
}

callNTimes(5, 'hello world');

// **************** Str Multiply ************

str = 'who run the world? Girls!';

function beyonce(str, x) {
    let arr = [];
    for (let i = 0; i <= x; i++) {
        arr.push(str);
        
    }
    console.log(arr);
    return arr;
    
}


beyonce(str, 5);

// ****************sort an Array********************
people.sort();
console.log(people);


// *****************sort by Length************

let longName = people.sort(function(a, b){
    return b.length - a.length;
});

console.log(longName);

// ********************sort by price**********************

var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
  ];

let highDollar = products.sort(function(a, b){
    return b.price - a.price;
});

console.log(highDollar);



