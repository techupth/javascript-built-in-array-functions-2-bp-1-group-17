function isPalindrome(string) {
  // Start coding here
  const reversestring = string.split("").reverse().join("")
  if (string === reversestring){
    return true
  } else{
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false