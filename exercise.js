// Question 1.
{
  1, 2, 3, 4;
}

// Question 2.
'ref'

// Question 3.
0: Array(3) [ 1, 2, 3 ] => true
1: Array(3) [ 1, 2, 3 ] => false

// hasDuplicate
const hasDuplicate = (arr) => {
  return new Set(arr).size !== arr.length
}

// vowelCount
const checkVowel = (letter)  => {
  return 'aeiou'.includes(letter);
}

const vowelCount = (str) => {
  const vowels = new Map();
  for (let letter of str) {
    let lowerCase = letter.toLowerCase()
    if(checkVowel(lowerCase)){
      if(vowels.has(lowerCase)){
        vowels.set(lowerCase, vowels.get(lowerCase) + 1);
      } else {
        vowels.set(lowerCase, 1);
      }
    }
  }

  return vowels;
}