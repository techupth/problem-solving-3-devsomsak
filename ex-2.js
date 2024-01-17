// Exercise 2: Single Number

const singleNumber = function (number) {
  const arrayCount = new Array(Math.max(...number) + 1).fill(0);
  console.log(arrayCount);

  //[4, 1, 2, 1, 2]
  for (let i = 0; i < number.length; i++) {
    // index 0 ,Value in Array(4) ->index Array[4] to add 1
    arrayCount[number[i]]++;
    console.log(number[i]);
    console.log(arrayCount);
  }

  for (let i = 0; i < arrayCount.length; i++) {
    if (arrayCount[i] === 1) {
      console.log(i);
      return i;
    }
  }

  return 0;
};

const result1 = singleNumber([2, 2, 1]);
const result2 = singleNumber([4, 1, 2, 1, 2]);
const result3 = singleNumber([1]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 1
