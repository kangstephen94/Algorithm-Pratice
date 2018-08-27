function bubbleSort (arr) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (arr[i] > arr[i+1]){
        arr[i] = arr[i+1]
        arr[i+1] = current
        sorted = false;
      }
    }
  }
  console.log(arr);
}

