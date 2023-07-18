class Queue {
    constructor() {
        this.items = [];
    }

    // Add an element to the queue (enqueue)
    enqueue(item) {
        this.items.push(item);
    }

    // Remove and return the front element from the queue (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            return null; // Queue is empty
        }
        return this.items.shift();
    }

    // Get the front element of the queue without removing it
    front() {
        return this.isEmpty() ? null : this.items[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }

    // Print the queue's contents
    print() {
        console.log(this.items);
    }
}


const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

myQueue.print(); // Output: [1, 2, 3]

console.log(myQueue.front()); // Output: 1

myQueue.dequeue();
myQueue.print(); // Output: [2, 3]

console.log("size:", myQueue.size()); // Output: 2