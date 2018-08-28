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
    return last;
  }

  min() {
    return this.values[this.values.length - 1][1];
  }

  max() {
    return this.values[this.values.length - 1][2]
  }

  length () {
    return this.values.length
  }
}

//testing

// const stack = new Stack();
// stack.push(4);
// stack.push(3);
// stack.push(9);
// stack.push(1);
// stack.max();
// stack.min();

//Stack of Plates

// class setofStacks {
//   constructor () {
//     this.stack = [];
//   }
// }


//Queue using two stacks

class StackQueue {
  constructor () {
    this.in = new Stack();
    this.out = new Stack();
  }

  // O(1)
  enqueue (element) {
    return this.in.push(element)
  }

  // O(N) Linear time, but amortized is O(1) constant.
  dequeue () {
    if (this.out.length() === 0) {
      while (this.in.length() > 0) {
        this.out.push(this.in.pop()[0]);
      }
    }
    return this.out.pop();
  }

  min () {
    if (this.out.length() === 0) {
      console.log('out is empty')
      return this.in.min();
    } else {
      console.log(this.out.min())
      return Math.min(...[this.in.min(), this.out.min()])
    }
  }
  
  max () {
    if (this.out.length () === 0) {
      console.log('out is empty')
      return this.in.max();
    } else {
      console.log(this.out.max())
      return Math.max(...[this.in.max(), this.out.max()])
    }
  }

  length () {
    return(this.in.length() + this.out.length());
  }

}

//testing

// const stackq = new StackQueue();
// stackq.enqueue(2);
// stackq.enqueue(5);
// stackq.enqueue(6);
// stackq.enqueue(7);

// stackq.dequeue();
// stackq.dequeue();


// Sort Stack, smallest elements on the top

// function sortStack (stackA) {
//   var stackB = new Stack();
//   while (!stackA.isEmpty()) {
//     const int = stackA.pop();
//     while (!stackB.isEmpty() && stackB.peek() > int){
//       stackA.push(stackB.pop());
//     }
//     stackB.push(int);
//   }

//   while (!stackB.isEmpty()) {
//     stackA.push(stackB.pop())
//   }

// }




// Given an array, and a window size w, find the maximum max - min within a range of w elements.


// This problem sounds like we need to implement a min/max stack, with a queue of size w.  
// We can constantly push elements in and out and track the min and max of those elements.



function findMaxRange (arr, w) {
  let maxRange;
  const StackQueue1 = new StackQueue();

  for (var i = 0; i < arr.length; i++) {

    StackQueue1.enqueue(arr[i])
    const currentRange = StackQueue1.max() - StackQueue1.min();
    console.log(currentRange)
    console.log(StackQueue1)

    if (maxRange === undefined || currentRange > maxRange) {
        maxRange = currentRange;
      }

    if (StackQueue1.length() === w) {
      StackQueue1.dequeue();
    }
  }
  return maxRange;
}

//Testing

console.log(findMaxRange([1,2,25,4,5,6, 120], 3));
