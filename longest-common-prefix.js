//https://leetcode.com/problems/longest-common-prefix/

let longestCommonPrefix = function(strs) {
    let firstWord = strs[0];

    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(firstWord) !== 0) {
            firstWord = firstWord.substring(0, firstWord.length - 1)
            if( firstWord.length === 0) return ''
        }
    }

    return firstWord;
};

longestCommonPrefix(["flower", "flowa", "flow"]);

//1. сохраняем 0 элемент из массива в переменную firstWord
//2. начнем цикл с 1 элемента и будем проверять каждое слово
//3. indexOf возвращает индекс первого вхождения строки, пример 'Синий кит'.indexOf('кит'); - вернёт  6
//4. substring возвращает подстроку м/у двумя индексами, пример 'Mozilla'.substring(4, 7); - вернет 'lla'
//5. Итак, проверяем начинается ли текущее слово с firstWord
        //если нет, то уменьшаем firstWord на один символ слева, пока не найдем общий префикс
        //вот так firstWord.substring(0, firstWord.length - 1)
//6. Нашли общий префикс, то переходим к следующему слову. И так далее.
//7. Если firstWord стал пустым, то возвращаем ''