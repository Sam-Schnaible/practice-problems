/*
Given an array nums containing n distinct numbers in the range [0, n],
return the only number in the range that is missing from the array.
*/

const missingNumber = nums => {
  //calculate what total should be if number wasn't missing
  const expectedTotal = nums.length * (nums.length + 1) / 2;
  //declare variable sum
  let sum;
  //calculate total of nums array with reduce
  const actualTotal = nums.reduce( (sum, num) => {
    sum += num;
    return sum;
  }, 0)
  return expectedTotal - actualTotal;
};