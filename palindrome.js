//https://leetcode.com/problems/palindrome-number/submissions/927842794/

let isPalindrome = function(x) {
    let arrayNumber = x.toString().split('').reverse().join('');
    return x === Number(arrayNumber);
};

isPalindrome(1221);
isPalindrome(12321);
isPalindrome(122);
isPalindrome(-122);
isPalindrome(-1221);