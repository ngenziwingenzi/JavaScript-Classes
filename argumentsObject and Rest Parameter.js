//Showcasing the use Arguments object

const summ = function() {
    let sum = 0
    for(let argument of arguments){
        sum += argument
    }
    return sum
}

console.log(summ(1,2,3,4,5,6,7,8,9,10))

//Another Aproach of adding by rest parameter

const add = (...nums) => {
    let total = 0
    for(let num of nums){
        total += num
    }
    return total
}

console.log(add(1,2,3,4,5,6,7,8,9,10))