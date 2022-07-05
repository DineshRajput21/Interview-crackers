// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Linear Search - 1
// function searchLinear(input) {
//     for (i = 0; i < array.length; i++) {
//         if (array[i] === input) return true;
//     }
//     return false;
// }

// console.log(searchLinearWhile(0));

//Binary Search
// calcualte array half >> left move >> right move >> found >> not found

// function binarySearch(value) {
//     let mid = 0;
//     while (array.length > 0) {
//         mid = Math.round(array.length / 2);
//         let midValue = array[mid - 1];
//         if (midValue === value) return true;
//         else if (value < midValue) {
//             array.splice(mid, array.length);
//         } else {
//             array.splice(0, mid);
//         }
//     }
//     return false;
// }

// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearch(value) {
//     let min = 0;
//     let max = array.length - 1;
//     while (min <= max) {
//         let mid = Math.round((min + max) / 2);
//         if(array[mid] === value) return true;
//         if(array[mid] > value) {
//             max = mid - 1;
//         }else{
//             min = mid + 1;
//         }
//     }
//     return false;
// }

// console.log(binarySearch(1));

// Naive Search 

function naiveSearch(long, short) {
    let totalCount = 0;
    for (let i = 0; i < long.length; i++) {
        let matchString = '';
        for (let j = 0; j < short.length; j++) {
            const longI = long[i + j];
            if(longI !== short[j]) break;
            if (longI === short[j]) {
                matchString = matchString + longI;
                if (matchString === short) {
                    totalCount++;
                }
            }
        }
    }
    return totalCount;
}
console.log(naiveSearch('yo omg yo omg', 'omg'));