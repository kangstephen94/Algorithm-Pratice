// Use a single array to implement three stacks

// Stack Min 

class Stack {
  constructor() {
    this.values = [];
  }

  push (element) {
   if (this.values.length === 0) {
     this.values.push([element, element, element]);
   } else {
     const current_min = this.min();
     const current_max = this.max();
     const new_min = Math.min(...[current_min, element])
     const new_max = Math.max(...[current_max, element])
     this.values.push([element, new_min, new_max])
   }
  }

  pop () {
    const last = this.values.pop();
    return last[0];
  }

  min() {
    return this.values[this.values.length - 1][1];
  }

  max() {
    return this.values[this.values.length-1][2]
  }

}

//testing

// const stack = new Stack();
// stack.push(4);
// stack.push(3);
// stack.push(9);
// stack.push(1);
// stack.max();
// Stack.min();

//Stack of Plates

// class setofStacks {
//   constructor () {
//     this.stack = [];
//   }
// }


//Queue using two stacks

class StackQueue {
  constructor () {
    this.in = Stack.new ();
    this.out = Stack.new ();
  }

  enqueue (element) {
   return this.in.push(element)
  }

  dequeue () {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.pop());
      }
    }
    return this.out.pop();
  }
}

//testing

const stackq = new StackQueue();
stackq.enqueue(2);
stackq.enqueue(5);
stackq.enqueue(6);
stackq.enqueue(7);

stackq.dequeue();
stackq.dequeue();


// Sort Stack, smallest elements on the top

function sortStack (stackA) {
  var stackB = new Stack();
  while (!stackA.isEmpty()) {
    const int = stackA.pop();
    while (!stackB.isEmpty() && stackB.peek() > int){
      stackA.push(stackB.pop());
    }
    stackB.push(int);
  }

  while (!stackB.isEmpty()) {
    stackA.push(stackB.pop())
  }
}