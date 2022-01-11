// Write a program in fizzbuzz.js that prints an array of integers from 1 to 100.
// For multiples of 3, show "Fizz" instead of the number.
// For multiples of 5, show "Buzz" instead of the number.
// For multiples of 3 and 5, show "FizzBuzz" instead of the number.
// Return an array containing the results based on the rules above.

const test = () => {
    for (let i = 1; i < 101; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) { 
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0){
            console.log('Fizz');
        } else {
            console.log(i);
        }
        
    }
}

test();
// this worked!