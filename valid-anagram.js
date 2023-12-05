//https://leetcode.com/problems/valid-anagram/

let isAnagram = function(s, t) {
    let storageS = new Map();

    for(let el of s) {
        if(storageS.has(el)) {
            storageS.set(el, storageS.get(el) + 1);
        } else {
            storageS.set(el, 1);
        }
    }

    for(let char of t) {
        if(storageS.has(char)) {
            if(storageS.get(char) > 0) {
                storageS.set(char, storageS.get(char) - 1);
                if(storageS.get(char) === 0) {
                    storageS.delete(char);
                }
            }
        } else {
            return false;
        }
    }

    return storageS.size === 0;
}

isAnagram2("anagram", "nagaram");
isAnagram2("rat", "car");