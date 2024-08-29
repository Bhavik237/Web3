const crypto = require('crypto');

const input = "Test"

console.log(crypto.createHash('sha256').update(input).digest('hex'))


// Assignment 1
//Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?





//Assignment 2
//What if I ask you that the input string should start with 100xdevs ? How would the code change?


//Assignment 3
//What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

