// Write a node program that takes in an unlimited number 
// of command line arguments, goes through each and prints out the sum of them. 
// If any argument is not a whole number, skip it. Do support negative numbers though.

// create function
// name

let myArgs = process.argv.slice(2)

// slice first 2 indeces
// console.log(myArgs)

// grab data type
// add the numbers

//  c style for loop - access to index
//  for of loop - acces to index

// for(let i = 0: )
let sumCount = 0
for (let item of myArgs){
    // converted to int
    let convertedNum = parseInt(item)
    // console.log(convertedNum)
    sumCount += convertedNum
    // console.log(typeof Number(item))
}

console.log(sumCount)

// reduce

// parse Int

