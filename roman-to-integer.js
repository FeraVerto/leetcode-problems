//https://leetcode.com/problems/roman-to-integer/
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

let romanToInt = function(s) {
    let roman = new Map();
    roman.set('I', 1);
    roman.set('V', 5);
    roman.set('X', 10);
    roman.set('L', 50);
    roman.set('C', 100);
    roman.set('D', 500);
    roman.set('M', 1000);

    let arrayOfRoman = s.split('');
    let sum = 0;

    for(let i = 0; i < arrayOfRoman.length; i++) {
        if(roman.get(arrayOfRoman[i]) < roman.get(arrayOfRoman[i + 1]))  {
            sum -= roman.get(arrayOfRoman[i])
        } else {
            sum += roman.get(arrayOfRoman[i])
        }
        console.log('sum', sum);
};
    return sum
};

romanToInt("MCMXCIV");

//Возьмем число IV
//sum = 0
//первое число I
//оно меньше, чем второе число (I < V), поэтому вычитаем => sum = sum - 1 = 0 - 1 = -1
//sum = -1
//второе число V,после него ничего нет, прибавляем => sum = sum + 5 = -1 + 5 = 4
//sum = 4