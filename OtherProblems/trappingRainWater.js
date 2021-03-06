
/* Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining. 

 Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
             In this case, 6 units of rain water (blue section) are being trapped.


Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9 

*/

//SOLUTION

function calculateTrapWater (buildingArray) {
    let left = []; 
    let right = [];
    let maxLeft= 0, maxRight = 0;
    let buildingReverseArray = buildingArray.slice().reverse();

    buildingArray.forEach((height, index) => {
        maxLeft = Math.max(maxLeft, height);
        left.push(maxLeft);
    });

    buildingReverseArray.forEach((height, index) => {
        maxRight = Math.max(maxRight, height);
        right.push(maxRight);
    });
    right.reverse()
    let waterTrapped=0;
    buildingArray.forEach((height, index)=>{
        const min = Math.min(left[index], right[index]);
        waterTrapped  += min - height;
    })

    return waterTrapped;
};

console.log(calculateTrapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// console.log(calculateTrapWater([3, 1, 2, 4, 0, 1, 3, 2]));