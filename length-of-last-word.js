//https://leetcode.com/problems/length-of-last-word/

let lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');

    return arr[arr.length - 1].length
};

lengthOfLastWord("   fly me   to   the moon  ");