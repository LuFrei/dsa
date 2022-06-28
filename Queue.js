// Follow the steps to create a queue
// Queues are first in, first out - like a line at a british grocery store
// Adding or removing items from a queue should *not* require traversing the queue

// 1. Create Node class
// Node constructor takes one arg (data) and has 3 properties: this.data, this.prev, & this.next
// this.next & this.prev default to null

// 2. Create Queue Class
// Queue constructor takes no args
// Queue constructor has 3 properties: this.head = null, this.tail = null & this.length = 0

// 3. Write a method to getHead() of the queue

// 4. Write a method to getTail() of the queue

// 4. Write a method to enqueue(e) a node to the head of the queue
// enqueue() takes one argument - an instance of Node
// The new node is the tail of the queue
// Store the new tail as the old tails' .next property
// Increment the length of the queue
// Edge case - what is different if the queue is empty?

// 5. Write a method to dequeue() a node from the head the queue
// Remove the node from the head of the queue (first in first out)
// Store the old head's .next node to the new head
// Set the new head's .prev node to be null
// Decrement the length of the queue
// Edge case - what is different if the queue is now empty?
// Edge case - what is different if the queue is now length 1?

// 6. Write a method to print() the data in each node of the queue
// Traverse the queue, console.log() each node's .data property