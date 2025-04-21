export function countCharacters(text, excludeSpaces) {
    let charCount;
    if (!excludeSpaces) {
      charCount = text.split('').length;
    } else {
      text = text.trim();
      charCount = text.replace(/\s+/g, '').split('').length;
    }
    return charCount;
}

  export  function countWords(text) {
    text = text.trim();
    if (text.length === 0) {
      return 0;
    }
    const wordCount = text.split(/\s+/).length || 0;
    return wordCount; 
  }

  export  function countSentences(text) {
    const sentenceCount =  text.match(/[^.!?]+[.!?]/g);
    return sentenceCount ? sentenceCount.length : 0; 
  }
  
 export  function estimateReadingTime(text) {
    const AVERAGE_WORDS_PER_MINUTES = 250;
    const wordCount = countWords(text);
    let readingTime = (wordCount / AVERAGE_WORDS_PER_MINUTES).toFixed(1);
    
    return readingTime;
  }
   
 export function calculateLetterDensity(text) {
    const letterMappingObject = {}

    text = text.toLowerCase(); 
    text.split('').forEach(char => {
      if (char.match(/[a-z]/)) {
        letterMappingObject[char] = (letterMappingObject[char] || 0) + 1;
      }  
    })

    const letters = [];
      for (const char in letterMappingObject) {
        letters.push([char, letterMappingObject[char]]);
      }

      const sortedLetters = letters.sort((a, b) => {
        return b[1] - a[1];
      })

     return sortedLetters;
  }
