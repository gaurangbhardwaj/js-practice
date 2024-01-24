function checkForAnagram(originalWord, newWord) {
  if (originalWord?.length !== newWord?.length) return false;

  const originalWordLetterMapping = {};
  for (let i = 0; i < originalWord.length; i++) {
    const letterCnt = originalWordLetterMapping[originalWord.charAt(i)];
    originalWordLetterMapping[originalWord.charAt(i)] = (letterCnt || 0) + 1;
  }
  for (let i = 0; i < newWord.length; i++) {
    const letterCnt = originalWordLetterMapping[newWord.charAt(i)];
    if (!letterCnt) return false;
    originalWordLetterMapping[newWord.charAt(i)] = letterCnt - 1;
  }
  return Object.values(originalWordLetterMapping).every((val) => val === 0);
}

console.log(checkForAnagram("silent please", "listen please"));
