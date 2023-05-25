//https://leetcode.com/problems/pascals-triangle/

let generate = function(numRows) {
    if(numRows === 1) {
        return [[1]]
    }

    let triangle = [[1],[1,1]];
        for (let i = 1; triangle.length < numRows; i++) {
            let arr = []
            for (let j = 1; j < triangle[i].length; j++) {
                arr.push(triangle[i][j] + triangle[i][j - 1])
            }
            triangle.push([1, ...arr, 1]);
        }
    return triangle;
};

// let generate = function(numRows) {
//     let result = [];
//     for (let i = 0; i < numRows; i++) {
//         result[i] = new Array(i + 1);
//         result[i][0] = 1;
//         result[i][i] = 1;
//         for (let j = 1; j < i; j++) {
//             result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
//         }
//     }
//     return result;  
// };

generate(5) //[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]