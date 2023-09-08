const data = [
    {
      "login": "DreamLess",
      "leaguePoints": 956
    },
    {
      "login": "cavernous",
      "leaguePoints": 1056
    },
    {
      "login": "SaiyanBroadway",
      "leaguePoints": 1432
    },
    {
      "login": "Mountaintrid",
      "leaguePoints": 1130
    },
    {
      "login": "cathead",
      "leaguePoints": 930
    },
    {
      "login": "Goldenelox",
      "leaguePoints": 932
    },
    {
      "login": "BoostScooby",
      "leaguePoints": 1476
    },
    {
      "login": "JoshChase",
      "leaguePoints": 931
    }
  ];

  class tree {
    constructor(left, right, val) {
      this.rigth = right; 
      this.left = left; 
      this.val = val;
    } 
  }

  // просто для наглядности буду называть ноды по их пути в нашем новом дереве
const leftLeftLeft = new tree(data[4], null, null);
const leftLeft = new tree(data[7], leftLeftLeft, null);
const leftRight = new tree(data[0], null, null);
const left = new tree(data[5], leftLeft, leftRight);

const rightLeft = new tree(data[3], null, null);
const rightRight = new tree(data[6], null, null);
const right = new tree(data[2], rightLeft, rightRight);

// "Корень" нашего дерева, будем обходить начиная с него
const root = new tree(data[1], left, right);
  
  function topThree(data) {
    
  }
  
  topThree(data); // Должен вывести игроков BoostScooby, SaiyanBroadway, Mountaintrid