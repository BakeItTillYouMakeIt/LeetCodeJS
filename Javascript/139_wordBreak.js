function wordBreak(word, dict) {
  return wordBreakH(word, new Set(dict));
}

const wordBreakH = (word, set, memo = {}) => {
   if(word.length === 0) return true;
    if(memo[word] !== undefined) return memo[word];

    for(let i = 1; i <= word.length; i++){ //
        let head = word.slice(0,i)

        if(set.has(head)){
           if(wordBreakH(word.slice(i),set, memo)){
               memo[head] = true
               return true
           }
        }
    }

    memo[word] = false
    return false
}
