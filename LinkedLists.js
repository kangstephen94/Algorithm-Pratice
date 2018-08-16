// Write code to remove duplicates from an unsorted linked list
// Assume hashMap, node and linkedList classes are already defined.

function removeDup (linkedList) {
  const hashMap = new hashMap();
  linkedList.each ( node => {
    if (hashMap[node.value]) {
      node.delete()
    }
    hashMap[node.value] = true
  })
}

// Implement an algorithm to find the kth to last element of a single linked list

function kthElement (linkedList, k) {
  var currentNode1 = linkedList.head
  var currentNode2 = linkedList.head

  for (var i = 0; i < k; i++) {
    currentNode1 = currentNode1.next
  }

  while (currentNode1 !== null) {
    currentNode1 = currentNode1.next 
    currentNode2 = currentNode2.next
  }

  return currentNode2
}