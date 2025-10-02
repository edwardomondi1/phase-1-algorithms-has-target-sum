function hasTargetSum(array, target) {
  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    // For each element, check the remaining elements
    for (let j = i + 1; j < array.length; j++) {
      // If the sum of the pair equals the target, return true
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  // If no pair sums to the target, return false
  return false;
}

/*
  Big O time complexity: O(n^2) - due to nested loops iterating over the array
  Big O space complexity: O(1) - no additional space used beyond input
*/

/*
  Pseudocode:
  - Loop through each element in the array with index i from 0 to array.length - 1
    - Loop through each subsequent element with index j from i+1 to array.length - 1
      - If array[i] + array[j] == target, return true
  - If no pair found, return false
*/

/*
  Explanation:
  This function implements a brute force approach to solve the two-sum problem.
  It checks every possible pair of numbers in the array by using nested loops.
  The outer loop selects the first number, and the inner loop checks all numbers after it.
  If the sum of any pair equals the target, it returns true immediately.
  If no such pair is found after checking all combinations, it returns false.
  This approach is simple but not optimal for large arrays due to O(n^2) time complexity.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10)); // empty array

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 10)); // single element

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 2, 3], 1)); // negative numbers

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 0], 0)); // zeros
}

module.exports = hasTargetSum;
