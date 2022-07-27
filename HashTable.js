// Create a class HashTable

// Add a constructor method 
// Add two instance properties:
// table is an empty array with a prime number length (eg 127)
// & size is an int with the value 0

// Create a method hash that takes in a string (key) and returns a int (hash)
// hash must always be a number between 0 and the length of the table
// that way we can use it to index an element of the array, allowing for instant access
// hashes must be meaningful - the same key should always return the same hash
// hashes should have low collisions (different keys should rarely create the same hash)

// create a counter for the total
// loop through each character in the key
// map letters a-z to numbers 1-26
// add a small prime number to each character value
// total up all numbers
// what happens if the total of these character values is higher than 127?
// we go out of bounds of the array.  to fix this:
// return total % this.table.length (this is the hash value)

// ex: key is cat
// total starts at zero
// prime is 3
// c == 6 (3+3)
// a == 4 (1+3)
// t = 23 (20+3)
// total is 33

// ex: key is zzzzzz
// total starts at zero
// prime is 3
// z == 29 (26+3)
// z == 29 (26+3)
// z == 29 (26+3)
// z == 29 (26+3)
// z == 29 (26+3)
// z == 29 (26+3)
// total is 174


// next steps:
// setter method that adds a key/value pair to table array
// getter method that returns the hash for a given key

//next next steps:
//what if we have collisions (multiple keys with the same hash)?
