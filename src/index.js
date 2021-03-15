module.exports = function check(str, bracketsConfig) {
  let l = str.length;
  let arr = [];
  function checkIfOpening (bracket) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracket == bracketsConfig[i][0]) {
        return true;
      }
    }
    return false;
  }

  function checkIfPair (lastArrayElement, bracket) 
  {
    for (let i = 0; i < bracketsConfig.length; i++) 
    {
      if ((bracketsConfig[i][0] == lastArrayElement) && (bracketsConfig[i][1] == bracket)) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < l; i++) 
  {
    if (checkIfOpening(str[i]) && (checkIfPair(arr[arr.length - 1], str[i]) == false)) 
    {
      arr.push(str[i]);
    } 
    else 
    {
      if (checkIfPair(arr[arr.length - 1], str[i])) 
      {
        arr.pop();
      }
      else {
        return false;
      }
    }
  }
  return arr.length == 0 ? true : false;
}