document.body.style.backgroundColor = "#000";

// *********** CONTAINER WITH MOST WATER ***********
// Level: Medium

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

const maxArea = function (height) {
  let area = 0,
    i = 0,
    j = height.length - 1;

  while (i < j) {
    const containerArea = Math.min(height[i], height[j]) * (j - i);
    area = Math.max(area, containerArea);
    height[i] <= height[j] ? i++ : j--;
  }

  return area;
};

// console.log('Container with most water: ', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// *********** 3Sum ***********
// Level: Medium

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 1; i++) {
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
      }
      if (k - j === 1) {
        j++;
        k = nums.length - 1;
      } else {
        k--;
      }
    }
  }

  if (result.length < 2) {
    return result;
  }

  // excluding any repeated value from the result array: (not working!)
  let j = 0,
    k = result.length - 1;

  while (j < k) {
    const areArraysEqual = result[j].every(
      (value, idx) => value === result[k][idx]
    );
    console.log(areArraysEqual);

    if (areArraysEqual) {
      console.log("inside if.");
      result.splice(1, j);
    }

    if (k - j === 1) {
      j++;
      k = result.length - 1;
    } else {
      k--;
    }
  }

  return result;
};

console.log("threeSum: ", threeSum([0, 0, 0, 0]));

// *********** COUNT PAIRS WITH GIVEN SUM ***********
// Level: Medium

// Given an array of integers, and a number ‘sum’, find the number of pairs of integers in the array whose sum is equal to ‘sum’.

// Example 1:
// Input:  arr[] = {1, 5, 7, -1}, sum = 6
// Output:  2
// Explanation: Pairs with sum 6 are (1, 5) and (7, -1)

// Example 2:
// Input:  arr[] = {1, 5, 7, -1, 5}, sum = 6
// Output:  3
// Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5)

// Example 3:
// Input:  arr[] = {1, 1, 1, 1}, sum = 2
// Output:  6
// Explanation: There are 3! pairs with sum 2.

// Example 4:
// Input:  arr[] = {10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1}, sum = 11
// Output:  9

const getPairsCount = (arr, sum) => {
  let i = 0,
    j = arr.length - 1,
    pairs = 0;

  while (i < j) {
    if (arr[i] + arr[j] === sum) {
      pairs++;
    }
    if (j - i === 1) {
      i++;
      j = arr.length - 1;
    } else {
      j--;
    }
  }

  return pairs;
};

// console.log(
//   "getPairsCount: ",
//   getPairsCount([10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1], 11)
// );
