// Time: O(n)
// Space O(n)
// Doesn't mutate the original array;
// but it will require additional space
const removeDupes = (arr) => {
  const newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++){
    const lastPushed = newArr[newArr.length - 1];
    const arrElem = arr[i];
    if (arrElem !== lastPushed) newArr.push(arrElem);
  }
  return newArr;
};

// Tests

const sampleArr = [1, 2, 2, 3, 3, 4, 4, 4, 5];


// console.log(removeDupes(sampleArr));
// console.log(sampleArr);
// expect this to be [1, 2, 3, 4, 5]

// ** Solution 2 **
// TIme: O(n)
// Space: O(1)


const removeDupes2 = (arr) => {
  let last = 0;
  for (let i = 0; i < arr.length; i++){
    if (!last || arr[i] !== arr[last - 1]){
      arr[last++] = arr[i];
    }
  }
  // we want to pop of those last elems
  // const oldLength = arr.length;
  while (arr.length > last){
    arr.pop();
  }
  return arr;
};


console.log(removeDupes2(sampleArr));
console.log(sampleArr);
