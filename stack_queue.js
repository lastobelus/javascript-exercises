// Stack: Data structure that behaves like a physical pile of items.
//        Each new item is placed on top of the previous one.
//        Often referred to as LIFO objects (Last In First Out).
//          ie. the last item placed on the stack is the first one removed.
//
// Queue: Data structure that mimics a line-up of items. Each new item in
//        the queue is placed behind the previous item. They are often referred
//        to as FIFO objects (First In First Out).
//          ie. the first object in the queue will be the first object that may
//              be removed.



class Stack {
  constructor() {
    this.data = [];
  }
  add(item){
    this.data.push(item);
    return item;
  }
  remove() {
    return this.data.pop();
  }
}

class Queue {
  constructor() {
    this.data = [];
  }
  add(item){
    this.data.push(item);
    return item;
  }
  remove() {
    return this.data.shift();
  }
}

s = new Stack();
q = new Queue();


console.log("Added to stack: ", s.add(1) );
console.log("Added to stack: ", s.add(2) );
console.log("Added to stack: ", s.add(3) );
console.log("Stack contents: ", s );
console.log("Removed from stack: ", s.remove());
console.log("Removed from stack: ", s.remove());
console.log("Stack contents: ", s );

console.log("\n\n\n");

console.log("Added to queue: ", q.add(1) );
console.log("Added to queue: ", q.add(2) );
console.log("Added to queue: ", q.add(3) );
console.log("Queue contents: ", q );
console.log("Removed from queue: ", q.remove());
console.log("Removed from queue: ", q.remove());
console.log("Queue contents: ", q );



////
