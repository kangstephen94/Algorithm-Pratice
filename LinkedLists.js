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

function deleteMiddle (node) {
  node.prev.next = node.next
  node.next.prev = node.prev
}

//Sum Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
//  */
var addTwoNumbers = function (l1, l2) {

  var result = new ListNode();
  var current = result;
  var carry = 0;

  while (l1 !== null || l2 !== null) {

    if (current === null) {
      current = new ListNode();
      result.next = current;
    }

    const v1 = l1.val || 0;
    const v2 = l2.val || 0;

    const sum = v1 + v2;
    carry = Math.floor(sum / 10);
    value = current.val ? sum % 10 + current.val : sum % 10

    current.val = value;

    console.log(current);

    l1 = l1.next
    l2 = l2.next

    if (carry === 1) {
      current.next = new ListNode(1)
    }

    current = current.next


  }

  return result;
}