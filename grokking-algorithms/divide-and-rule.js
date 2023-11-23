let sumArray = (array) => {
    if(array.length === 0) return 0;

    let a = array.splice(array.length - 1, 1);
    return Number(a) + sumArray(array);
}

sumArray([1, 2, 3]);

let getElementsCount = (array) => {
    if(array.length === 0) return 0;
    array.splice(array.length - 1, 1);
    return 1 + getElementsCount(array);
}

getElementsCount([]);

let getLargestNumber = (array, num = 0) => {
    if(array.length === 0) return num;

    let aaa = array.splice(array.length - 1, 1);

    for(let i = 0; i < array.length - 1; i++){
        if(array[i] > aaa) {
            aaa = array[i];
        }
    }

    if(num > aaa) {
        return getLargestNumber(array, Number(num));
    } else {
        return getLargestNumber(array, Number(aaa));
    }
}

getLargestNumber([235, 1, 3, 10, 4, 236, -7]);

let binarySearch = (array, num, left = 0, right = array.length - 1) => {
    if(right < left) return false;

    let mid = Math.floor((left + right) / 2);

    if(array[mid] === num) {
        return mid;
    }

    if(array[mid] > num) {
        return binarySearch(array, num, left, mid - 1);
    } else {
        return binarySearch(array, num, mid + 1, right);
    }
}

binarySearch([12, 13, 100, 235], 235);