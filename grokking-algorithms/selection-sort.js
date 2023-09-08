const findSmallest = (array) => {
    if (array.length === 0) return -1;

    let minEl = array[0];
    let minIdx = 0;
    
    for(let i = 1; i < array.length; i++) {
        if(minEl > array[i]) {
            minEl = array[i];
            minIdx = i;
        }
    }

    return minIdx;
}

const selectionSort = (array) => {
    const newArray = [];

    while(array.length > 0) {
        const result = findSmallest(array);
        if (result === -1) break;
        newArray.push(array[result]);
        array.splice(result, 1);
    }

    return newArray
}

selectionSort([5, 3, 6, 2, 10]);


const selectionSort2 = (array) => {
    let sortArray = [];
    
    while(array.length) {
        let max = array[0];
        let idx = 0;
        for(let i = 1; i < array.length; i++) {
            if(array[i] > max) {
                max = array[i];
                idx = i;
            }
        }
        sortArray.push(max);
        array.splice(idx, 1);
        idx = 0;
    }

    return sortArray;
}

selectionSort2([3,2,3,4]);

//https://leetcode.com/problems/largest-perimeter-triangle/description/
//js-easy-solution-with-sorting
const largestPerimeter = (array) => {
    let result = 0;
    let sortedArray = selectionSort2(array);
    for(let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i] + sortedArray[i + 1] > sortedArray[i + 2] &&
            sortedArray[i + 1] + sortedArray[i + 2] > sortedArray[i] &&
            sortedArray[i + 2] + sortedArray[i] > sortedArray[i + 1]
            ){
                result = sortedArray[i] + sortedArray[i + 1] + sortedArray[i + 2];
                break;
        }
    }

    return result;
}

largestPerimeter([3,2,3,4]);