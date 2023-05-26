//https://leetcode.com/problems/pascals-triangle-ii/

let getRow = (rowIndex) => {
    if (rowIndex === 0) {
        return [1];
    }

    if (rowIndex === 1) {
        return [1, 1];
    }

    let result = [1, 1];
    for (let i = 2; i <= rowIndex; i++) {
        let arr = [];
        for (let j = 1; j < result.length; j++) {
            arr.push(result[j - 1] + result[j]);
        }
        result = [1, ...arr, 1];
    }
    return result;
};

//getRow(3);