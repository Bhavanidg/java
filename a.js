function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedWords = words.map(word => {
      const reversedCharacters = word.split('').reverse().join('');
      return reversedCharacters;
    });
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
  
  const originalSentence = "Reverse every word in this sentence";
  const reversedSentence = reverseWords(originalSentence);
  console.log(reversedSentence);
  