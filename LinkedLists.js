// Write code to remove duplicates from an unsorted linked list

function removeDup (linkedList) {
  const hashMap = new hashMap();
  linkedList.each ( node => {
    if (hashMap[node.value]) {
      node.delete()
    }
    hashMap[node.value] = true
  })
}