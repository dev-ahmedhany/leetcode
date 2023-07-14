function reverseVowels(s: string): string {
  let start = 0;
  let end = s.length - 1;
  const VOWELS = new Set(["a", "i", "u", "e", "o","A", "I", "U", "E", "O"])
  const ans = [...s];
  while(start < end){
    if(!VOWELS.has(ans[start]))
      start++;
    if(!VOWELS.has(ans[end]))
      end--;
    if(VOWELS.has(ans[start]) && VOWELS.has(ans[end])){
      const temp = ans[start];
      ans[start] = ans[end];
      ans[end] = temp;
      start++
      end--;
    }
  }
  return ans.join("");
};