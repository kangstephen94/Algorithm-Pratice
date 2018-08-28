// # Heaps and Heapsort

// In this project, you'll be implementing a __heap__ and __heapsort__

// ## Heap

// Start by implementing`BinaryMinHeap`.Instances of`BinaryMinHeap` will use an array to store items.
// Define a default prc for the MinHeap property.You will be able pass in a different prc that will make it behave like a MaxHeap.

// Add the`::child_indices` and`::parent_index` methods.
// The`::child_indices` method should take in a parent index and the length of an array and return only the child indices that fall within the array.
// The`::parent_index` method should take in a child index and return its parent index.

// Once you've completed these methods, it's time to tackle`::heapyify_down`.
// This method should take in an array, parent index, and a length.If the parent is greater than either of its two children, swap them.
// Continue swapping the node until it has reached the correct position(aka neither of its children are greater).

// Next, implement`::heapify_up`.
// This method will be used when adding a new element to the heap to make sure that it is in the correct position.It should take an array, a child index, and a length.
// Check the child against its parent, and swap the elements if the parent is greater.Continue until the node has reached the correct position.

// Now that you have`::heapify_up` and`::heapify_down`, 
// it's time to write `#push`, `#peek`, `#extract`, and `#count`. What is the time complexity of each of pushing and extracting from your heap? 
// Once you have all of your specs passing, it's time to sort!

// ## Heapsort

// Let's monkey patch the `Array` class with the `#heap_sort!` method. 
// This method should not create a new array. It should start by heapifying the array in place.
//  Once the items have been heapified, use the `::heapify_down` method to extract items from the heap one by one, moving them past a partition in the array. 
//  Voila! Your array has been heap sorted.


class BinaryMinHeap {
  constructor () {
    this.values = [];
  }

  childIndices (parentIndex) {
      const childIndex1 = parentIndex * 2 + 1
      const childIndex2 = parentIndex * 2 + 2

      if (childIndex1 > this.store.length) {
        return []
      } else if (childIndex2 > this.store.length) {
        return [childIndex1] 
      } else {
        return [childIndex1, childIndex2]
      }
  }

  parentIndex (childIndex) {
    return Math.floor((childIndex - 1)/2)
  }

  heapify_down (parentIndex) {
    // Compare the parent element in the values array to the smaller of the children.  If it is smaller, swap with it.  Do this until there are no more children left.

    // First we need to check to see if children exist.  If there are no children return out of the function.

    // If children exist, we need to see how many exist, and if there are 2, which of the two are smaller.
    // We need to reassign the parentIndex to be the swap child.


    const children = childIndices(parentIndex);

    // Iterate only if children exist.
    while (children.length !== 0) {
      const leftChild = children[0];
      const rightChild = children[1];
      const swapChild = null;

      // Check to see if the left Child is smaller than parent.  If it is, we can just check to see if the rightchild is defined.  If it is not defined, the swapChild can be
      // set to the left Child.  If it does exist, we have to check to see if the right child is smaller than the left.
      if (this.values[parentIndex] > this.values[leftChild]) {
        if (rightChild === undefined) {
          swapChild = leftChild
        } else if (rightChild && (this.values[rightChild] < this.values[leftChild]))  {
          swapChild = rightChild
        } else if (rightChild && (this.values[rightChild] > this.values[leftChild])) {
          swapChild = leftChild
      }
    }

      if (swapChild === null) {
        return null;
      }

      const temp = this.data[swapChild]
      this.values[swapChild] = this.values[parentIndex]
      this.values[parentIndex] = temp


      parentIndex = swapChild
    }
  }



  heapify_up (childIndex) {

    //If the childIndex is 0, itll return a parent index of 0, which would create an infinite loop.  Must return out of function if it is 0.//#endregion
    if (childIndex === 0) return null;

    // Check to see if a parent exists
    const parent =  parentIndex(childIndex)
    
    //Iterate while a parent exists
    while (parent >= 0) {
      //If a parent exists, check to see if the parent is smaller than the currentChild
      if (this.values[childIndex] < this.values[parent] ) {

        // Swap the two values.
        const temp = this.values[childIndex]
        this.values[childIndex] = this.values[parent]
        this.values[parent] = temp
      }
    }
    //Set the childIndex to its parent
    childIndex = parent
  }


  insert (el) {
    this.values.push(el)
    this.heapify_up(this.values.length-1)
  }

  remove () {
    const temp = this.values[0] 
    this.values[0] = this.values[this.values.length-1]
    this.values[this.values.length - 1] = temp
    this.heapify_down(0)
  }
}