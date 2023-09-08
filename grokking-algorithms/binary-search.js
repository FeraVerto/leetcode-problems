const array = [1, 2, 3, 4, 5, 7, 8, 10, 11, 17, 20, 29, 30, 31, 32, 33];

const binarySearchFn = (array, num) => {
    let firstIdx = 0;
    let lastIdx = array.length - 1;

    while(firstIdx <= lastIdx) {
        let midIdx = Math.floor((firstIdx + lastIdx) / 2);
        if(num === array[midIdx]) {
            return midIdx;
        }

        if(num < array[midIdx]) {
            lastIdx = midIdx - 1;
        }

        if(num > array[midIdx]) {
            firstIdx = midIdx + 1;
        }
    }

    return null;
};

binarySearchFn(array, 4); //3