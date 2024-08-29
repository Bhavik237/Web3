const crypto = require('crypto');

const input = "Test"

console.log(crypto.createHash('sha256').update(input).digest('hex'))



// Assignment 1
//Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?


function findPrefixWithZero(){
    let prefix = '0000';
    let num = 0;
    while(true){
        let input = num.toString();
        let hash = crypto.createHash('sha256').update(input).digest('hex');
        if(hash.startsWith(prefix)){
            return {input : input , hash : hash};
        }
        num++;
    }
}

var Assignment = console.log(findPrefixWithZero());

//Assignment 2
//What if I ask you that the input string should start with 100xdevs ? How would the code change?

function findPrefixWithZeroAnd100xDev(){
    let prefix = '0000';
    let num = 0;
    while(true){
        let input = '100xdevs'+num.toString();
        let hash = crypto.createHash('sha256').update(input).digest('hex');
        if(hash.startsWith(prefix)){
            return {input : input , hash : hash};
        }
        num++;
    }
}

var Assignment = console.log(findPrefixWithZeroAnd100xDev());

//Assignment 3
//What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

