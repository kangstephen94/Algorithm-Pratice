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