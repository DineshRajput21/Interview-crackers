// Bubble Sort

// var array = [1, 4, 3, 2, 5];

// function bubbleSort() {
//     var noSwap;
//     for (let i = 0; i < array.length; i++) {
//         noSwap= true;
//         for (let j = 0; j < array.length - i; j++) {
//             console.log(array, i, j)
//             if (array[j] > array[j + 1]) {
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//                 noSwap = false;
//             }
//         }
//       if(noSwap) break;
//     }
// }

// bubbleSort();
// console.log(array)


//++++++++++++++++++++++++ Selection Sort +++++++++++++++++++
var array = [1, 4, 3, 2, 5];

function selectionSort() {
    for (let i = 0; i < array.length; i++) {
        var lower = i;
        for (let j = i; j < array.length; j++) {
            if (array[lower] > array[j]) {
                lower = j;
            }
        }
        [array[lower], array[i]] = [array[i], array[lower]]
    }
    return array;
}
console.log(selectionSort());