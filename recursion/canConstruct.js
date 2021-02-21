const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;
  // if (target.length < 0) return false;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const res = target.slice(word.length)
      if (canConstruct(res, wordBank, memo) === true) {
        memo[target] = true
        return true;
      }
    }
  }
  memo[target] = false
  return false;
};

//length of the target = m
//length of wordBank = n
// bruteforce 
//  time O(n^m*m)
//  space O(m^m)
// memoization
// time O(m)
// space O(m*m)

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));// false
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));

