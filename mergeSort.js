
// My explanation of mergeSort.  Set up a recursive function that breaks down the initial array into halves.
// Until there is only 1 element left (this would be the base case).  At the highest level of the recursive stack, we sort arrays of length 1 (technically already sorted)
// with each other and bubble up the call stack and put together each piece of the array after sorting it. 


function mergeSort (arr) {
  if (arr.length < 2) return arr[0];

  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  
  const result = merge(mergeSort(left), mergeSort(right));
  console.log(result);
  return result;
}

function merge(arr1, arr2) {
  var resultMerge = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      resultMerge.push(arr1.shift());
    } else {
      resultMerge.push(arr2.shift());
    }
  }
  return resultMerge.concat(arr1, arr2);
}


