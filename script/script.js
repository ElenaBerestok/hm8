// Пункт 1

const countTrue = (arr) =>{

    let sum = 0;

    for (let elem of arr) {

        if (elem === true) {
            sum += 1;
        } 
    }

    return sum;
}

let sumArray = countTrue([true, false, false, true, false]);
// let sumArray = countTrue([false, false, false, false]);
// let sumArray = countTrue([]);
console.log(`sumArray`, sumArray)