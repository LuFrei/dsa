// Follow the steps to create a stack
// Stacks are first in, last out - like a stack of dishes
// Adding or removing items from a stack should *not* require traversing the stack

// 1. Create Node class
// Node constructor takes one arg (data) and has two properties: this.data & this.next
// this.next defaults to null

// 2. Create Stack Class
// Stack constructor takes no args
// Stack constructor has two properties: this.head = null & this.length = 0

// 3. Write a method to peek() at the top of the stack

// 4. Write a method to push() a node onto the top of the stack
// The new node is the head of the stack
// Set the old head to the .next propery of the new head
// Increment the length of the stack
// Edge case - what is different if the stack is empty

// 5. Write a method to pop() a node off of the top the stack
// Remove the node from the head of the stack (first in last out)
// Set the old head's .next node to be the new head
// Decrement the length of the stack

// 6. Write a method to print() the data in each node of the stack
// Traverse the stack, console.log() each node's .data property
