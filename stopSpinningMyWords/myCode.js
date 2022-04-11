export function spinWords(string){
    var word = string.split(" ").map((x) => {
      if(x.length >= 5) {
        return x.split("").reverse().join("")
      } else {
        return x;
      }
    })
    
    return word.join(" ");
  }