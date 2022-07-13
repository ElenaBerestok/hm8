// Пункт 1

// const countTrue = (arr) =>{

//     let sum = 0;

//     for (let elem of arr) {

//         if (elem === true) {
//             sum += 1;
//         } 
//     }

//     return sum;
// }

// let sumArray = countTrue([true, false, false, true, false]);
// // let sumArray = countTrue([false, false, false, false]);
// // let sumArray = countTrue([]);
// console.log(`sumArray`, sumArray)

// Пункт 2

const getOccurrencesCount = (arr) => {

    let sumEntry = {}

    for (let elem of arr) {
        if (!sumEntry[elem]) {
            sumEntry[elem] = 1
        } else {
            sumEntry[elem] += 1
        }
    }

    console.log(`sumEntry`, sumEntry)

    return sumEntry;
}

// let occurrencesCount = getOccurrencesCount(["a", "v", "a", "b", "b"]);
let occurrencesCount = getOccurrencesCount([
    "apples",
    "oranges",
    "pears",
    "pears",
    "apples",
    "oranges",
    "oranges",
    "pears",
  ]);

console.log(`occurrencesCount`, occurrencesCount)