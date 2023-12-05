//https://leetcode.com/problems/group-anagrams/


let groupAnagrams = function(strs) {
    let anagramStorage = {};

    for(let i = 0; i < strs.length; i++) {

        let sortedStr = strs[i].split('').sort((a, b) => {
            return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
        }).join('');
        
        
        if(!anagramStorage[sortedStr]) {
            anagramStorage[sortedStr] = [strs[i]];
        } else {
            anagramStorage[sortedStr] = [...anagramStorage[sortedStr], strs[i]]
        }
    }
    
    return Object.values(map);
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]); //[["bat"],["nat","tan"],["ate","eat","tea"]]
