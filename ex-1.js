// Exercise 1: Length of Last Word
const lengthOfLastWord = function (s) {
  let lengthLastWordCount = 0;
  let foundCharecter = false;
  for (let i = s.length - 1; i >= 0; i--) {
    console.log(s.length);
    if (s[i] !== " ") {
      lengthLastWordCount++;
      foundCharecter = true;
      console.log(lengthLastWordCount);
    } else if (foundCharecter) {
      break;
    }
  }
  return lengthLastWordCount;
};

const result1 = lengthOfLastWord("Hello World");
const result2 = lengthOfLastWord("   fly me   to   the moon  ");
const result3 = lengthOfLastWord("luffy is still joyboy");

console.log(result1); // 5
console.log(result2); // 4
console.log(result3); // 6
